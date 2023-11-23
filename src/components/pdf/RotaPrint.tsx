import { eachDayOfInterval, endOfDay, endOfWeek, format, startOfDay, startOfWeek } from "date-fns";
import { useSession } from "../../providers/Session";
import { useQuery } from "@apollo/client";
import { getShifts } from "../../queries/shift/queries";
import logo from "./logo.png";

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const RotaPrint = ({ date }: { date: any }) => {

  const { positions, profile } = useSession();

  const thisWeekDays = eachDayOfInterval({
    start: new Date(startOfWeek(date, { weekStartsOn: 1 })),
    end: new Date(endOfWeek(date, { weekStartsOn: 1 })),
  });

  const { data: mondayShifts } = useQuery(getShifts, {
    variables: {
      start: startOfDay(thisWeekDays[0]),
      end: endOfDay(thisWeekDays[0]),
    },
  });

  const { data: tuesdayShifts } = useQuery(getShifts, {
    variables: {
      start: startOfDay(thisWeekDays[1]),
      end: endOfDay(thisWeekDays[1]),
    },
  });

  const { data: wednesdayShifts } = useQuery(getShifts, {
    variables: {
      start: startOfDay(thisWeekDays[2]),
      end: endOfDay(thisWeekDays[2]),
    },
  });

  const { data: thursdayShifts } = useQuery(getShifts, {
    variables: {
      start: startOfDay(thisWeekDays[3]),
      end: endOfDay(thisWeekDays[3]),
    },
  });

  const { data: fridayShifts } = useQuery(getShifts, {
    variables: {
      start: startOfDay(thisWeekDays[4]),
      end: endOfDay(thisWeekDays[4]),
    },
  });

  const { data: saturdayShifts } = useQuery(getShifts, {
    variables: {
      start: startOfDay(thisWeekDays[5]),
      end: endOfDay(thisWeekDays[5]),
    },
  });

  const { data: sundayShifts } = useQuery(getShifts, {
    variables: {
      start: startOfDay(thisWeekDays[6]),
      end: endOfDay(thisWeekDays[6]),
    },
  });

  return (
    <div className="hidden">
      <div className="w-[2480px] h-[3428px] p-10 rota-print">
        <div className="text-start p-2 flex justify-between">
          <div className="flex justify-between w-full items-center m-12">
            <img src={logo} alt="logo" className="w-20 h-20" />
            <div className="flex flex-col">
              <p>
                <span className="font-bold">Printed on:</span>{" "}
                {format(new Date(), "dd MMM yyyy HH:mm")}
              </p>
              <p>
                <span className="font-bold">Printed by:</span>{" "}
                {profile?.firstName}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex border border-black rounded-md flex-col justify-start overflow-hidden bg-gray-50 py-6 sm:py-12 p-10">
          <div className="w-full h-full ">
            <div className="flow-root ">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr className="divide-x divide-gray-200">
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-4 text-center text-md font-semibold text-gray-900 sm:pl-0"
                        >
                          Position
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-center text-md font-semibold text-gray-900"
                        >
                          Monday <br />
                          {format(new Date(thisWeekDays[0]), "dd MMM yyyy")}
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-center text-md font-semibold text-gray-900"
                        >
                          Tuesday <br />
                          {format(new Date(thisWeekDays[1]), "dd MMM yyyy")}
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-4 text-center text-md font-semibold text-gray-900 sm:pr-0"
                        >
                          Wednesday <br />
                          {format(new Date(thisWeekDays[2]), "dd MMM yyyy")}

                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-4 text-center text-md font-semibold text-gray-900 sm:pr-0"
                        >
                          Thursday <br />
                          {format(new Date(thisWeekDays[3]), "dd MMM yyyy")}
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-4 text-center text-md font-semibold text-gray-900 sm:pr-0"
                        >
                          Friday <br />
                          {format(new Date(thisWeekDays[4]), "dd MMM yyyy")}
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-4 text-center text-md font-semibold text-gray-900 sm:pr-0"
                        >
                          Saturday <br />
                          {format(new Date(thisWeekDays[5]), "dd MMM yyyy")}
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-4 text-center text-md font-semibold text-gray-900 sm:pr-0"
                        >
                          Sunday <br />
                          {format(new Date(thisWeekDays[6]), "dd MMM yyyy")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {positions?.map((position: any) => (
                        <tr
                          key={position.id}
                          className="divide-x divide-gray-200"
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-4 text-md font-semibold text-gray-900 sm:pl-0">
                            {position.name}
                          </td>
                          <td
                            className={classNames(
                              "whitespace-nowrap text-md text-gray-500",
                              mondayShifts?.shift?.map((shift: any) => {
                                if (shift.position.id === position.id) {
                                  return "bg-red-500";
                                }
                              })
                            )}
                          >
                            {mondayShifts?.shift?.map((shift: any) => {
                              let start = format(
                                new Date(shift?.start),
                                "hh:mm"
                              );
                              let end = format(new Date(shift?.end), "hh:mm");
                              if (shift.position.id === position.id) {
                                return (
                                  <div
                                    key={shift.id}
                                    className="pb-3 bg-gray-50 rounded-xl m-1 flex items-center justify-center text-center font-semibold"
                                  >
                                    <p>
                                      {shift?.employee?.firstName ||
                                        "Unallocated"}{" "}
                                      {shift?.employee?.lastName} <br />
                                      {start} - {end}
                                    </p>
                                  </div>
                                );
                              }
                            })}
                          </td>
                          <td className="whitespace-nowrap text-md text-gray-500">
                            {tuesdayShifts?.shift?.map((shift: any) => {
                              let start = format(
                                new Date(shift?.start),
                                "hh:mm"
                              );
                              let end = format(new Date(shift?.end), "hh:mm");
                              if (shift.position.id === position.id) {
                                return (
                                  <div
                                    key={shift.id}
                                    className="pb-3 bg-gray-50 rounded-xl m-1 flex items-center justify-center text-center font-semibold"
                                  >
                                    <p>
                                      {shift?.employee?.firstName ||
                                        "Unallocated"}{" "}
                                      {shift?.employee?.lastName} <br />
                                      {start} - {end}
                                    </p>
                                  </div>
                                );
                              }
                            })}
                          </td>
                          <td className="whitespace-nowrap text-md text-gray-500 sm:pr-0">
                            {wednesdayShifts?.shift?.map((shift: any) => {
                              let start = format(
                                new Date(shift?.start),
                                "hh:mm"
                              );
                              let end = format(new Date(shift?.end), "hh:mm");
                              if (shift.position.id === position.id) {
                                return (
                                  <div
                                    key={shift.id}
                                    className="pb-3 bg-gray-50 rounded-xl m-1 flex items-center justify-center text-center font-semibold"
                                  >
                                    <p>
                                      {shift?.employee?.firstName ||
                                        "Unallocated"}{" "}
                                      {shift?.employee?.lastName} <br />
                                      {start} - {end}
                                    </p>
                                  </div>
                                );
                              }
                            })}
                          </td>
                          <td className="whitespace-nowrap text-md text-gray-500 sm:pr-0">
                            {thursdayShifts?.shift?.map((shift: any) => {
                              let start = format(
                                new Date(shift?.start),
                                "hh:mm"
                              );
                              let end = format(new Date(shift?.end), "hh:mm");
                              if (shift.position.id === position.id) {
                                return (
                                  <div
                                    key={shift.id}
                                    className="pb-3 bg-gray-50 rounded-xl m-1 flex items-center justify-center text-center font-semibold"
                                  >
                                    <p>
                                      {shift?.employee?.firstName ||
                                        "Unallocated"}{" "}
                                      {shift?.employee?.lastName} <br />
                                      {start} - {end}
                                    </p>
                                  </div>
                                );
                              }
                            })}
                          </td>
                          <td className="whitespace-nowrap text-md text-gray-500 sm:pr-0">
                            {fridayShifts?.shift?.map((shift: any) => {
                              let start = format(
                                new Date(shift?.start),
                                "hh:mm"
                              );
                              let end = format(new Date(shift?.end), "hh:mm");
                              if (shift.position.id === position.id) {
                                return (
                                  <div
                                    key={shift.id}
                                    className="pb-3 bg-gray-50 rounded-xl m-1 flex items-center justify-center text-center font-semibold"
                                  >
                                    <p>
                                      {shift?.employee?.firstName ||
                                        "Unallocated"}{" "}
                                      {shift?.employee?.lastName} <br />
                                      {start} - {end}
                                    </p>
                                  </div>
                                );
                              }
                            })}
                          </td>
                          <td className="whitespace-nowrap text-md text-gray-500 sm:pr-0">
                            {saturdayShifts?.shift?.map((shift: any) => {
                              let start = format(
                                new Date(shift?.start),
                                "hh:mm"
                              );
                              let end = format(new Date(shift?.end), "hh:mm");
                              if (shift.position.id === position.id) {
                                return (
                                  <div
                                    key={shift.id}
                                    className="pb-3 bg-gray-50 rounded-xl m-1 flex items-center justify-center text-center font-semibold"
                                  >
                                    <p>
                                      {shift?.employee?.firstName ||
                                        "Unallocated"}{" "}
                                      {shift?.employee?.lastName} <br />
                                      {start} - {end}
                                    </p>
                                  </div>
                                );
                              }
                            })}
                          </td>
                          <td className="whitespace-nowrap text-md text-gray-500 sm:pr-0">
                            {sundayShifts?.shift?.map((shift: any) => {
                              let start = format(
                                new Date(shift?.start),
                                "hh:mm"
                              );
                              let end = format(new Date(shift?.end), "hh:mm");
                              if (shift.position.id === position.id) {
                                return (
                                  <div
                                    key={shift.id}
                                    className="pb-3 bg-gray-50 rounded-xl m-1 flex items-center justify-center text-center font-semibold"
                                  >
                                    <p>
                                      {shift?.employee?.firstName ||
                                        "Unallocated"}{" "}
                                      {shift?.employee?.lastName} <br />
                                      {start} - {end}
                                    </p>
                                  </div>
                                );
                              }
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
