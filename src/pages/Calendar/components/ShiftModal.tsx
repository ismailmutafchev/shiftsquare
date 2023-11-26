import { Fragment } from "react";
import { differenceInMinutes, endOfDay, format, startOfDay } from "date-fns";
import { getShifts } from "../../../queries/shift/queries";
import { useMutation } from "@apollo/client";
import { useForm, Controller } from "react-hook-form";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useSession } from "../../../providers/SessionProvider/Session";
import { addShiftOne, updateShiftById } from "../../../queries/shift/mutations";
import { Listbox, Transition } from "@headlessui/react";
import { shiftSchema } from "../../../validations/shift";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "../../../providers/ToastProvider/ToastHook";

export default function AddShift({ data }: any) {
  const update = data.isUpdate;
  const id = data?.data?.id || null;
  const { modalHandler, selectedDay, shifts } = data;
  const { employees, positions } = useSession();
  const toast = useToast(4000);

  const { register, handleSubmit, watch, control, formState } = useForm({
    defaultValues: {
      position: data?.data?.positionId || (positions && positions[0].id) || "",
      employee: data?.data?.employeeId || (employees && employees[0].id) || "",
      date: data.data.start
        ? format(new Date(data.data.start), "yyyy-MM-dd")
        : "",
      start: data.data.start ? format(new Date(data.data.start), "HH:mm") : "",
      end: data.data.end ? format(new Date(data.data.end), "HH:mm") : "",
      length: data.data.length || 0,
    },
    resolver: yupResolver(shiftSchema),
  });

  const [addShift] = useMutation(addShiftOne);
  const [updateShift] = useMutation(updateShiftById);

  const formErrors = formState.errors;

  function submit(data: any) {
    const employeeBusy = shifts?.some((shift: any) => {
      if (update && shift.id === id) return false;
      return (
        shift.employeeId === data.employee &&
        ((new Date(shift.start) < new Date(data.date + "T" + data.start) &&
          new Date(shift.end) > new Date(data.date + "T" + data.start)) ||
          (new Date(shift.start) < new Date(data.date + "T" + data.end) &&
            new Date(shift.end) > new Date(data.date + "T" + data.end)))
      );
    });

    if (employeeBusy) {
      alert("Employee is busy");
      return;
    }

    const shiftLength = (
      differenceInMinutes(
        new Date(data.date + "T" + data.end),
        new Date(data.date + "T" + data.start)
      ) / 60
    ).toFixed(2);

    if (update) {
      updateShift({
        variables: {
          id: id,
          start: new Date(data.date + "T" + data.start).toISOString(),
          end: new Date(data.date + "T" + data.end).toISOString(),
          employeeId: data.employee,
          positionId: data.position,
          length: shiftLength,
        },
        refetchQueries: [
          {
            query: getShifts,
            variables: {
              start: startOfDay(selectedDay),
              end: endOfDay(selectedDay),
            },
          },
        ],
        onCompleted: () => {
          modalHandler(false);
          toast("success", "Shift updated");
        },
      });
      return;
    }

    addShift({
      variables: {
        object: {
          start: new Date(data.date + "T" + data.start).toISOString(),
          end: new Date(data.date + "T" + data.end).toISOString(),
          employeeId: data.employee,
          positionId: data.position,
          length: shiftLength,
        },
      },
      refetchQueries: [
        {
          query: getShifts,
          variables: {
            start: startOfDay(selectedDay),
            end: endOfDay(selectedDay),
          },
        },
      ],
      onCompleted: () => modalHandler(false),
    });
  }

  const selectedValues = watch();

  const selectedPositionDisplay =
    positions &&
    positions.find((position: any) => position.id === selectedValues.position);
  const selectedEmployeeDisplay =
    employees &&
    employees.find((employee: any) => employee.id === selectedValues.employee);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="space-y-12 sm:space-y-16">
        <div>
          <div className="mt-10 space-y-8 pb-8 sm:space-y-0 sm:divide-y sm:pb-0">
            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label
                htmlFor="first-name"
                className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Position
              </label>
              <Controller
                name="position"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <Listbox onChange={onChange}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-polar-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">
                          {(selectedPositionDisplay &&
                            selectedPositionDisplay.name) ||
                            (positions && positions[0].name)}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                          {positions &&
                            positions.map((position: any) => (
                              <Listbox.Option
                                key={position.id}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-polar-100 text-polar-900/80"
                                      : "text-polar-900"
                                  }`
                                }
                                value={position.id}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {position.name}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-polar-600">
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                )}
              />
            </div>
            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label
                htmlFor="first-name"
                className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Employee
              </label>
              <Controller
                name="employee"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <Listbox onChange={onChange}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">
                          {(selectedEmployeeDisplay &&
                            selectedEmployeeDisplay.firstName +
                              " " +
                              selectedEmployeeDisplay.lastName) ||
                            (employees &&
                              employees[0].firstName +
                                " " +
                                employees[0].lastName)}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                          {employees &&
                            employees.map((employee: any) => (
                              <Listbox.Option
                                key={employee.id}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-polar-100 text-polar-900/80"
                                      : "text-polar-900"
                                  }`
                                }
                                value={employee.id}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {employee.firstName} {employee.lastName}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-polar-600">
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                )}
              />
            </div>

            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label
                htmlFor="email"
                className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Date
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                <input
                  type="date"
                  // style={inputStyles}
                  className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm ${
                    formErrors.date && "shadow-red-300/50"
                  }`}
                  {...register("date", { required: true })}
                />
                {formErrors.date && (
                  <span className="text-red-500 absolute top-10 left-5 bg-red-200/50 py-0.5 px-1 rounded-b-md text-xs">
                    {formErrors.date.message}
                  </span>
                )}
              </div>
            </div>
            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label
                htmlFor="email"
                className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Start
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                <input
                  type="time"
                  step={300}
                  className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm ${
                    formErrors.start && "shadow-red-300/50"
                  }`}
                  {...register("start", { required: true })}
                />
                {formErrors.start && (
                  <span className="text-red-500 absolute top-11 left-5 bg-red-200/50 py-0.5 px-1 rounded-b-md text-xs">
                    {formErrors.start.message}
                  </span>
                )}
              </div>
            </div>
            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label
                htmlFor="email"
                className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                End
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                <input
                  type="time"
                  step={300}
                  className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm ${
                    formErrors.end && "shadow-red-300/50"
                  }`}
                  {...register("end", { required: true })}
                />
                {formErrors.end && (
                  <span className="text-red-500 absolute top-10 left-5 bg-red-200/50 py-0.5 px-1 rounded-b-md text-xs">
                    {formErrors.end.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
