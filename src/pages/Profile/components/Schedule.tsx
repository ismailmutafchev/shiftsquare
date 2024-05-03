import { useQuery } from "@apollo/client";
import { endOfWeek, format, startOfWeek } from "date-fns";
import { getShiftsByEmployee } from "../../../queries/shift/queries";
import { useSession } from "../../../hooks/session";
import { LoadingAnimation } from "../../../assets/AnimationComponents/AnimationComponents";

export default function Schedule() {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }
  const { profile } = useSession();

  const { data, loading } = useQuery(getShiftsByEmployee, {
    variables: {
      start: startOfWeek(new Date(), { weekStartsOn: 1 }),
      end: endOfWeek(new Date(), { weekStartsOn: 1 }),
      employeeId: profile?.id,
    },
    fetchPolicy: "no-cache",
  });

  if (loading) return <LoadingAnimation />;

  const shifts = data?.shift;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
      >
        {shifts ? (
          shifts.map((shift: any) => (
            <div>
              <p className="text-start py-2 font-semibold text-gray-700">
                {format(new Date(shift.start), "EEEE")}
                <span className="text-gray-500 font-normal"> {format(new Date(shift.start), " MMMM do yyyy")}</span>
              </p>
              <li
                key={shift.id}
                className="col-span-1 flex rounded-md shadow-sm"
              >
                <div
                  className={classNames(
                    "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white p-4"
                  )}
                  style={{ backgroundColor: shift.position.bgColor }}
                >
                  {shift.position.name}
                </div>
                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                  <div className="flex-1 truncate px-4 py-2 text-sm">
                    <a
                      href={shift.href}
                      className="font-medium text-gray-900 hover:text-gray-700"
                    >
                      {shift.name}
                    </a>
                    <p className="text-gray-600">
                      {format(new Date(shift.start), "hh:mm a")} -{" "}
                      {format(new Date(shift.end), "hh:mm a")}
                    </p>
                  </div>
                </div>
              </li>
            </div>
          ))
        ) : (
          <div>
            <h2>No Shifts</h2>
          </div>
        )}
      </ul>
    </div>
  );
}
