import { useState } from "react";
import { useSession } from "../../hooks/session";
import { DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Avatar from "../../components/Avatar";
import { format } from "date-fns";
import Modal from "../../components/Modal";
import RequestPreview from "../../pages/Profile/Components/RequestPreview";
import {
  getApprovedLeave,
  getLeaveAll,
  getPendingLeave,
} from "../../queries/leave/queries";
import { useQuery } from "@apollo/client";
import Badge from "../../components/Badge";

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RequestsSlideOver({ data }: { data: any }) {
  const { setOpen } = data;
  const { profile } = useSession();

  const [tabs, setTabs] = useState([
    { name: "All", current: true },
    { name: "New", current: false },
    { name: "Pending", current: false },
    { name: "Approved", current: false },
  ]);

  const [requestPreview, setRequestPreview] = useState({
    modalOpen: false,
    data: {},
  });

  function setOpenModalHandler(state: boolean) {
    setRequestPreview({ modalOpen: state, data: requestPreview.data });
  }

  const currentTabHandler = (tabName: string) => {
    setTabs(
      tabs.map((tab) => {
        tab.current = tab.name === tabName;
        return tab;
      })
    );
  };
  const { data: pendingRequests } = useQuery(getPendingLeave);
  const { data: approvedRequests } = useQuery(getApprovedLeave);
  const { data: allLeave } = useQuery(getLeaveAll);

  const newRequests = allLeave?.leave.filter(
    (request: any) => !request.readBy.includes(profile?.id)
  );

  const displayRequestsHandler = (tabName: string | undefined) => {
    if (tabName === "New") return newRequests;
    if (tabName === "Pending") return pendingRequests?.leave;
    if (tabName === "Approved") return approvedRequests?.leave;
    if (tabName === "All") return allLeave?.leave;
  };

  const displayRequests = displayRequestsHandler(
    tabs.find((tab) => tab.current)?.name
  );

  return (
    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl top-10">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
            Team
          </DialogTitle>
          <div className="ml-3 flex h-7 items-center">
            <button
              type="button"
              className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-1 focus:ring-polar-500"
              onClick={() => setOpen(false)}
            >
              <span className="absolute -inset-2.5" />
              <span className="sr-only">Close panel</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200">
        <div className="px-6">
          <nav className="-mb-px flex space-x-6">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                className={classNames(
                  tab.current
                    ? "border-polar-500 text-polar-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium cursor-pointer"
                )}
                aria-current={tab.current ? "page" : undefined}
                onClick={() => {
                  currentTabHandler(tab.name);
                }}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <ul
        role="list"
        className="flex-1 divide-y divide-gray-200 overflow-y-auto"
      >
        {displayRequests && displayRequests.length > 0 ? (
          displayRequests.map((request: any) => (
            <li key={request.id}>
              <div className="group relative flex items-center px-5 py-6">
                <button
                  onClick={() =>
                    setRequestPreview({
                      modalOpen: true,
                      data: request,
                    })
                  }
                  className="-m-1 block flex-1 p-1 text-start"
                >
                  <div
                    className="absolute inset-0 group-hover:bg-gray-50"
                    aria-hidden="true"
                  />
                  <div className="relative flex min-w-0 flex-1 items-center">
                    <Avatar
                      size={10}
                      firstName={request.user.firstName}
                      lastName={request.user.lastName}
                      className={request.user.bgColor}
                      imageUrl={request.user.picture}
                    />
                    <div className="ml-4 truncate">
                      <p className="truncate text-sm font-medium text-gray-900">
                        {request.user.firstName} {request.user.lastName}
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        {"Requested " + request.type + " for the period "}
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        {format(new Date(request.start), "dd MMM yyyy") +
                          " - " +
                          format(new Date(request.end), "dd MMM yyyy")}
                      </p>
                    </div>
                  </div>
                  <Badge
                    content={request.status}
                    color={
                      request.status === "Approved"
                        ? "green"
                        : request.status === "Pending"
                        ? "orange"
                        : request.status === "Returned"
                        ? "blue"
                        : "red"
                    }
                  />
                </button>
              </div>
              <Modal
                open={requestPreview.modalOpen}
                children={RequestPreview}
                data={{ ...requestPreview, modalHandler: setOpenModalHandler }}
                setOpen={setOpenModalHandler}
                title="Leave Request"
              />
            </li>
          ))
        ) : (
          <li>
            <div className="group relative flex items-center px-5 py-6">
              <div className="relative flex min-w-0 flex-1 items-center">
                <div className="ml-4 truncate">
                  <p className="truncate text-sm text-gray-500">
                    No leave requests
                  </p>
                </div>
              </div>
            </div>
          </li>
        )}
      </ul>
      <Modal
        open={requestPreview.modalOpen}
        children={RequestPreview}
        data={{ ...requestPreview, modalHandler: setOpenModalHandler }}
        setOpen={setOpenModalHandler}
        title="Leave Request"
      />
    </div>
  );
}
