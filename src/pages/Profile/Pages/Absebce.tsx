import { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  getLeaveAll,
  getUserApprovedLeave,
  getUserLeaveAll,
} from "../../../queries/leave/queries";
import { LoadingAnimation } from "../../../assets/AnimationComponents/AnimationComponents";
import Modal from "../../../components/Modal";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ArrowTopRightOnSquareIcon,
  ChevronUpIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "../../../hooks/session";
import { LeaveRequest } from "../Components/LeaveModal";
import { useOrganization } from "../../../hooks/organization";
import {
  addYears,
  daysInYear,
  differenceInDays,
  format,
  getYear,
  isAfter,
  setYear,
} from "date-fns";
import { GetLeaveAllQuery } from "../../../gql/graphql";
import Badge from "../../../components/Badge";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export type LeaveAll = GetLeaveAllQuery["leaveRequest"];
export type Holiday = LeaveAll[0];

export default function Absebce() {
  const { profile } = useSession();
  const { yearEnd: organizationYearEnd, holidayAllowance } = useOrganization();
  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState({
    isUpdate: false,
    data: { id: profile?.id },
  });

  const { loading, error } = useQuery(getLeaveAll);
  const { data: userApprovedHoliday } = useQuery(getUserApprovedLeave, {
    variables: {
      userId: profile?.id,
    },
  });

  const { data: userHolidayAll } = useQuery(getUserLeaveAll, {
    variables: {
      userId: profile?.id,
    },
  });

  const yearEnd = organizationYearEnd || "2022-12-31";

  function getThisYearsDate(date: Date) {
    const currentYear = getYear(new Date());
    const thisYearsDate = setYear(date, currentYear);

    if (isAfter(new Date(), thisYearsDate)) {
      return addYears(thisYearsDate, 1);
    }

    return thisYearsDate;
  }

  function leaveHandler(data: {
    daysInYear: number;
    holidayAllowance: number;
    yearEnd: string;
    profile: any;
    userApprovedHoliday: any;
  }) {
    const {
      daysInYear,
      holidayAllowance,
      yearEnd,
      profile,
      userApprovedHoliday,
    } = data;

    const daysForOneDayHoliday = daysInYear / holidayAllowance;
    const yearEndDate = new Date(yearEnd);

    // Get the adjusted year-end date
    const finalYearEndDate = getThisYearsDate(yearEndDate);

    // Calculate days till year end
    const daysTillYearEnd = differenceInDays(
      finalYearEndDate,
      new Date(profile?.startDate)
    );

    // Time Off Values
    const userHolidayAllowance = (
      daysTillYearEnd / daysForOneDayHoliday
    ).toFixed(1);
    const userApprovedHolidayDuration =
      userApprovedHoliday?.leave_aggregate?.aggregate?.sum?.duration || 0;

    const holidayValue = `${userApprovedHolidayDuration} / ${userHolidayAllowance}`;
    const timeOffChange =
      Number(userHolidayAllowance) - Number(userApprovedHolidayDuration);
    return { holidayValue, timeOffChange };
  }

  function modalHandler(state: boolean) {
    setShowModal(state);
  }

  // const daysForOneDayHoliday = daysInYear / holidayAllowance;

  const { holidayValue, timeOffChange } = leaveHandler({
    daysInYear,
    holidayAllowance,
    yearEnd,
    profile,
    userApprovedHoliday,
  });

  const holidayStats = [
    {
      name: "Time off taken",
      value: holidayValue,
      change: timeOffChange.toFixed(1),
      changeType: timeOffChange > 0 ? "positive" : "negative",
      button: "Request Time Off",
    },
    {
      name: "Sick Days",
      value: "3",
      change: "-1",
      changeType: "negative",
    },
    {
      name: "Lateness",
      value: "2",
      change: "+1",
      changeType: "positive",
    },
  ];

  if (loading) return <LoadingAnimation />;

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-3">
        {holidayStats.map((stat) => (
          <div
            key={stat.name}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
          >
            <dt className="text-sm font-medium leading-6 text-gray-500">
              {stat.name}
            </dt>
            <dd
              className={classNames(
                stat.changeType === "negative"
                  ? "text-rose-600"
                  : "text-green-700",
                "text-xs font-medium"
              )}
            >
              {stat.change}
            </dd>
            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
              {stat.value}
            </dd>
            {stat.button && (
              <button
                type="button"
                className="w-full mx-7 items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
                onClick={() => {
                  setShowModal(true),
                    setUpdate({ isUpdate: false, data: { id: profile?.id } });
                }}
              >
                {stat.button}
              </button>
            )}
          </div>
        ))}
      </dl>

      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full  rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <DisclosureButton className="flex w-full justify-between rounded-lg bg-polar-100 px-4 py-2 text-left text-sm font-medium text-polar-900 hover:bg-polar-200 focus:outline-none focus-visible:ring focus-visible:ring-polar-500/75">
                  <span>My Absence</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-polar-500`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {userHolidayAll?.leaveRequest.map((leave: Holiday) => {
                      const type =
                        leave.type.charAt(0).toUpperCase() +
                        leave.type
                          .slice(1)
                          .replace(/([A-Z])/g, " $1")
                          .trim();
                      return (
                        <li
                          key={leave.id}
                          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                        >
                          <div className="flex w-full items-center justify-between space-x-6 p-6">
                            <div className="flex-1 truncate">
                              <div className="flex items-center space-x-3">
                                <h3 className="truncate text-sm font-medium text-gray-900">
                                  {leave?.user?.firstName}{" "}
                                  {leave?.user?.lastName}
                                </h3>
                                <Badge
                                  color={leave?.leave_status?.bgColor}
                                  content={leave.status}
                                />
                                <Badge
                                  color={leave.leave_type.bgColor}
                                  content={type}
                                />
                              </div>
                              <p className="mt-1 truncate text-base text-gray-500 text-start">
                                {format(new Date(leave.start), "dd MMM yyyy")} -{" "}
                                {format(new Date(leave.end), "dd MMM yyyy")}
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="-mt-px flex divide-x divide-gray-200">
                              <div className="flex w-0 flex-1">
                                <button
                                  onClick={() => {
                                    setUpdate({ isUpdate: true, data: leave });
                                    setShowModal(true);
                                  }}
                                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                >
                                  <ArrowTopRightOnSquareIcon
                                    aria-hidden="true"
                                    className="h-5 w-5 text-gray-400"
                                  />
                                  View
                                </button>
                              </div>
                              <div className="-ml-px flex w-0 flex-1">
                                <button
                                  onClick={() => {
                                    setUpdate({ isUpdate: true, data: leave });
                                    setShowModal(true);
                                  }}
                                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                >
                                  <PencilSquareIcon
                                    aria-hidden="true"
                                    className="h-5 w-5 text-gray-400"
                                  />
                                  Request Change
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <DisclosureButton className="flex w-full justify-between rounded-lg bg-polar-100 px-4 py-2 text-left text-sm font-medium text-polar-900 hover:bg-polar-200 focus:outline-none focus-visible:ring focus-visible:ring-polar-500/75">
                  <span>Team Future Absence</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-polar-500`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  No.
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      <Modal
        open={showModal}
        setOpen={setShowModal}
        title="Time Off Request"
        children={LeaveRequest}
        data={{ ...update, modalHandler, loading }}
      />
    </>
  );
}
