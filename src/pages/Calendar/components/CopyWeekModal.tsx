import { Fragment, useState } from "react";
import {
  eachWeekOfInterval,
  format,
  subDays,
  subWeeks,
  eachDayOfInterval,
  endOfWeek,
  startOfWeek,
  startOfDay,
  endOfDay,
} from "date-fns";
import { useForm, Controller } from "react-hook-form";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Listbox, Switch, Transition } from "@headlessui/react";
import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "../../../hooks/toast";
import { getShifts } from "../../../queries/shift/queries";
import { addShiftsMany } from "../../../queries/shift/mutations";

type FormValues = {
  week: {
    start: Date;
    end: Date;
  };
  shifts: {
    employeeId: string;
    positionId: string;
    length: number;
    start: Date;
    end: Date;
  }[];
};

type Shifts = {
  employeeId: string;
  positionId: string;
  length: number;
  start: Date;
  end: Date;
};

const getDayOfWeek = (givenDate: Date, selectedDate: Date) => {
  const weekOfChoice = eachDayOfInterval({
    start: new Date(startOfWeek(selectedDate, { weekStartsOn: 1 })),
    end: new Date(endOfWeek(selectedDate, { weekStartsOn: 1 })),
  });

  switch (new Date(givenDate).getDay()) {
    case 0:
      return weekOfChoice[6].toISOString();
    case 1:
      return weekOfChoice[0].toISOString();
    case 2:
      return weekOfChoice[1].toISOString();
    case 3:
      return weekOfChoice[2].toISOString();
    case 4:
      return weekOfChoice[3].toISOString();
    case 5:
      return weekOfChoice[4].toISOString();
    case 6:
      return weekOfChoice[5].toISOString();
    default:
      return null;
  }
};

export const CopyWeekModal = ({ data }: {
  data: {
    // eslint-disable-next-line no-unused-vars
    copyModalHandler: (value: boolean) => void;
    selectedDay: Date;
  };

}) => {
  const [copyNames, setCopyNames] = useState(false);
  const { copyModalHandler, selectedDay } = data;

  const pastWeeks = eachWeekOfInterval(
    {
      start: subWeeks(new Date(selectedDay), 10),
      end: subDays(new Date(selectedDay), 1),
    },
    { weekStartsOn: 1 }
  );

  const { control, watch, handleSubmit, setValue } = useForm({
    defaultValues: {
      week: {
        start: startOfWeek(new Date(pastWeeks[0]), { weekStartsOn: 1 }),
        end: endOfWeek(new Date(pastWeeks[0]), { weekStartsOn: 1 }),
      },
      shifts: [],
    },
  });

  const toast = useToast(4000);

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

  const submit = (data: FormValues) => {
    let newShifts = data.shifts.map((shift: Shifts ) => {
      const startDate = getDayOfWeek(shift.start, selectedDay) as
        | string
        | number
        | Date;
      const endDate = getDayOfWeek(shift.end, selectedDay) as
        | string
        | number
        | Date;
      const startTime = format(new Date(shift.start), "HH:mm:ss");
      const endTime = format(new Date(shift.end), "HH:mm:ss");

      const startDateTime =
        format(new Date(startDate), "yyyy-MM-dd") + " " + startTime;
      const endDateTime =
        format(new Date(endDate), "yyyy-MM-dd") + " " + endTime;

      return {
        employeeId: copyNames ? shift.employeeId : null,
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
      onCompleted: ({insert_shift}) => {
        const shiftsAdded = insert_shift.affected_rows;
        const shiftsFailed = newShifts.length - shiftsAdded;
        copyModalHandler(false);
        toast("success", `${shiftsAdded} shifts added, ${shiftsFailed} failed`);
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
                    <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2 divide-y-2">
                      <div className="flex w-full justify-between">
                        <p>Include employee names </p>
                        <Switch
                          checked={copyNames}
                          onChange={setCopyNames}
                          className={`${
                            copyNames ? "bg-polar-600" : "bg-gray-400"
                          } relative inline-flex h-6 w-11 items-center rounded-full duration-500 shadow-xl`}
                        >
                          <span className="sr-only">Enable notifications</span>
                          <span
                            className={`${
                              copyNames ? "translate-x-5" : "translate-x-0"
                            } inline-block h-6 w-6 transform rounded-full bg-gray-200 transition duration-300`}
                          />
                        </Switch>
                      </div>
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
