import { useState } from "react";
import { useQuery } from "@apollo/client";
import { getLeaveAll } from "../../../queries/leave/queries";
import { LoadingAnimation } from "../../../assets/AnimationComponents/AnimationComponents";
import { LeaveRequest } from "./LeaveModal";
import Modal from "../../../components/Modal";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Absebce() {
  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState({ isUpdate: false, data: {} });

  function modalHandler(state: boolean) {
    setShowModal(state);
  }

  const { loading, error, data } = useQuery(getLeaveAll);

  const leaveData = data?.leave;

  const nextPendingHoliday = leaveData?.filter(
    (holiday: any) => holiday.status === "pending"
  );


  const holidayStats = [
    {
      name: "Time off taken",
      value: "16/28",
      change: "+4",
      changeType: "positive",
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
    {
      name: "Upcoming Time Off",
      value: nextPendingHoliday?.length,
      change: nextPendingHoliday?.length,
      changeType: "positive",
      button: "View",
    },
  ];

  if (loading) return <LoadingAnimation />;

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
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
                  : "text-gray-700",
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
                  setShowModal(true), setUpdate({ isUpdate: false, data: {} });
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
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-polar-100 px-4 py-2 text-left text-sm font-medium text-polar-900 hover:bg-polar-200 focus:outline-none focus-visible:ring focus-visible:ring-polar-500/75">
                  <span>Future Absence</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-polar-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                 {
                    leaveData?.map((leave: any) => (
                      <div key={leave.id} className="flex flex-col gap-y-2">
                        <div className="flex justify-between">
                          <span className="font-semibold">{leave.type}</span>
                          <span className="text-gray-500">{leave.status}</span>
                        </div>
                        
                      </div>
                    ))
                 }
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-polar-100 px-4 py-2 text-left text-sm font-medium text-polar-900 hover:bg-polar-200 focus:outline-none focus-visible:ring focus-visible:ring-polar-500/75">
                  <span>Do you offer technical support?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-polar-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  No.
                </Disclosure.Panel>
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
