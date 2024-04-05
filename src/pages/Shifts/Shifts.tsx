import { useQuery } from "@apollo/client";
import { useSession } from "../../hooks/session";
import { getShiftsByEmployee } from "../../queries/shift/queries";
import { endOfWeek, startOfWeek } from "date-fns";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

export default function Shifts() {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }
  const { permissions } = useSession();

  const { data } = useQuery(getShiftsByEmployee, {
    variables: {
      start: startOfWeek(new Date(), { weekStartsOn: 1 }),
      end: endOfWeek(new Date(), { weekStartsOn: 1 }),
      employeeId: permissions["x-hasura-user-id"],
    },
  });

  const shifts = data?.shift;

  console.log(shifts, 'xsxs');

  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
      >
        {shifts? (
          shifts.map((shift: any) => (
            <li
              key={shift.id}
              className="col-span-1 flex rounded-md shadow-sm"
            >
              <div
                className={classNames(
                  "bg-[" + shift.position.bgColor + "]",
                  "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                )}
              >
                {shift.position.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                  <a
                    href={shift.href}
                    className="font-medium text-gray-900 hover:text-gray-600"
                  >
                    {shift.name}
                  </a>
                  <p className="text-gray-500">{shift.members} Members</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </li>
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
