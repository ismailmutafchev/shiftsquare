import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "../../components/Modal";
import { LeaveRequest } from "./TimeOffModal";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Timeoff() {
  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState({ isUpdate: false, data: {} });
  const holidayStats = [
    {
      name: "Time off taken",
      value: "16",
      change: "+4",
      changeType: "positive",
    },
    {
      name: "Time off remaining",
      value: "12",
      change: "-2",
      changeType: "negative",
    },
    {
      name: "Time off pending",
      value: "2",
      change: "0",
      changeType: "neutral",
    },
    {
      name: "Next holiday approved",
      value: "12 Jun 2024 - 15 Jun 2024",
      change: "in 3 days",
      changeType: "positive",
    },
  ];

  return (
    <>
      <header className="flex flex-none items-center space-x-5 justify-between border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between w-full">
          <h1 className="text-2xl font-bold leading-6 text-gray-900/80">
            Time Off
          </h1>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              onClick={() => {
                setShowModal(true), setUpdate({ isUpdate: false, data: {} });
              }}
              type="button"
              className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90 ${
              "
            >
              <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Request Time Off
            </button>
          </div>
        </div>
      </header>
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
          </div>
        ))}
      </dl>
      <Modal
        open={showModal}
        setOpen={setShowModal}
        title="Time Off Request"
        children={LeaveRequest}
        data={{...update}}
      />
    </>
  );
}
