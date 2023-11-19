import { Fragment } from "react";
import {
  eachWeekOfInterval,
  endOfDay,
  endOfWeek,
  format,
  getISODay,
  isSunday,
  startOfDay,
  startOfWeek,
  subDays,
  subWeeks,
} from "date-fns";
import { useForm, Controller } from "react-hook-form";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Listbox, Transition } from "@headlessui/react";
import { getShifts } from "../../../queries/shift/queries";
import { useMutation, useQuery } from "@apollo/client";
import { addShiftsMany } from "../../../queries/shift/mutations";

type WeekStartOn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;

export const CopyWeekModal = ({ data }: any) => {
  const pastWeeks = eachWeekOfInterval(
    {
      start: subWeeks(new Date(), 10),
      end: subDays(new Date(), 1),
    },
    { weekStartsOn: 1 }
  );

  const selectedDay = data.selectedDay;

  const { copyModalHandler } = data;

  const { control, watch, handleSubmit, setValue } = useForm({
    defaultValues: {
      week: {
        start: startOfWeek(new Date(pastWeeks[0]), { weekStartsOn: 1 }),
        end: endOfWeek(new Date(pastWeeks[0]), { weekStartsOn: 1 }),
      },
      shifts: [],
    },
  });

  useQuery(getShifts, {
    variables: {
      start: watch("week").start,
      end: watch("week").end,
    },
    onCompleted: (data) => {
      setValue("shifts", data.shift);
    },
  });

  const [addShifts] = useMutation(addShiftsMany);

  const selectedWeek = watch("week");

  const submit = (data: any) => {
    let newShifts = data.shifts.map((shift: any) => {
      const startTime = format(new Date(shift.start), "HH:mm:ss");
      const endTime = format(new Date(shift.end), "HH:mm:ss");
      const isoDay = isSunday(new Date(shift.start))
        ? 0
        : (getISODay(new Date(shift.start)) as WeekStartOn);

      const startDateTime =
        format(
          new Date(
            new Date(
              isSunday(new Date(shift.start))
                ? endOfWeek(new Date(), { weekStartsOn: 1 })
                : startOfWeek(new Date(), { weekStartsOn: isoDay })
            )
          ),
          "yyyy-MM-dd"
        ) +
        " " +
        startTime;
      const endDateTime =
        format(
          new Date(
            new Date(
              isSunday(new Date(shift.start))
                ? endOfWeek(new Date(), { weekStartsOn: 1 })
                : startOfWeek(new Date(), { weekStartsOn: isoDay })
            )
          ),
          "yyyy-MM-dd"
        ) +
        " " +
        endTime;

      return {
        employeeId: shift.employeeId,
        positionId: shift.positionId,
        length: shift.length,
        start: new Date(startDateTime).toISOString(),
        end: new Date(endDateTime).toISOString(),
      };
    });

    addShifts({
      variables: {
        objects: newShifts,
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
        copyModalHandler(false);
      },
    });
  };

  return (
    <div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-3">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Copy Week
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Copy shifts from one week to another.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-3">
            <form onSubmit={handleSubmit(submit)}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-1 gap-6 pb-40">
                    <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2 ">
                      <label
                        htmlFor="week"
                        className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                      >
                        Select Week
                      </label>
                      <Controller
                        name="week"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange } }) => (
                          <Listbox onChange={onChange}>
                            <div className="relative mt-1">
                              <Listbox.Button className=" relative w-full cursor-default rounded-lg bg-white py-4 pl-3 pr-10 text-right shadow-md focus:outline-none focus-visible:border-polar-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="pointer-events-none absolute inset-y-0 flex items-center justify-between w-full pr-2">
                                  {selectedWeek &&
                                    `${format(
                                      selectedWeek.start,
                                      "d MMMM yyyy"
                                    )} - ${format(
                                      selectedWeek.end,
                                      "d MMMM yyyy"
                                    )}`}
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
                                  {pastWeeks &&
                                    pastWeeks.map((week: any) => (
                                      <Listbox.Option
                                        key={week.start}
                                        className={({ active }) =>
                                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                              ? "bg-polar-100 text-polar-900/80"
                                              : "text-polar-900"
                                          }`
                                        }
                                        value={{
                                          start: startOfWeek(week, {
                                            weekStartsOn: 1,
                                          }),
                                          end: endOfWeek(week, {
                                            weekStartsOn: 1,
                                          }),
                                        }}
                                      >
                                        {({ selected }) => (
                                          <>
                                            <span
                                              className={`block truncate ${
                                                selected
                                                  ? "font-medium"
                                                  : "font-normal"
                                              }`}
                                            >
                                              {format(week, "d MMMM yyyy")}
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
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="fixed bottom-0 right-0 bg-polar-500 hover:bg-polar-600 text-white font-bold py-2 px-4 rounded-full m-5"
              >
                Copy Week
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
