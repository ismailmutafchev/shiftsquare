import { Fragment, useState } from "react";
import { useSession } from "../../hooks/session";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Avatar from "../../components/Avatar";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import RequestPreview from "../../pages/Profile/Components/RequestPreview";

//@ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function RequestsSlideOver({ data }: { data: any }) {
    const { setOpen } = data;
    const { profile } = useSession();
  
    const [tabs, setTabs] = useState([
      { name: "New", current: true },
      { name: "Pending", current: false },
      { name: "Aproved", current: false },
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
    const newRequests = data?.data.filter(
      (request: any) => !request.readBy?.includes(profile?.id)
    );
  
    const pendingRequests = data?.data;
  
    const approvedRequests = data?.data.filter(
      (request: any) => request.status === "approved"
    );
  
    const displayRequestsHandler = (tabName: string | undefined) => {
      if (tabName === "New") return newRequests;
      if (tabName === "Pending") return pendingRequests;
      if (tabName === "Approved") return approvedRequests;
    };
  
    const displayRequests = displayRequestsHandler(
      tabs.find((tab) => tab.current)?.name
    );
  
    return (
      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
              Team
            </Dialog.Title>
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-polar-500"
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
          {displayRequests ? (
            displayRequests.map((request: any) => (
              <li key={request.id}>
                <div className="group relative flex items-center px-5 py-6">
                  <a href={request.href} className="-m-1 block flex-1 p-1">
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
                  </a>
                  <Menu
                    as="div"
                    className="relative ml-2 inline-block flex-shrink-0 text-left"
                  >
                    <Menu.Button className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-polar-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open options menu</span>
                      <span className="flex h-full w-full items-center justify-center rounded-full">
                        <EllipsisVerticalIcon
                          className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </span>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-9 top-0 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={`/employees/${request.user.id}`}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                View Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => {
                                  setRequestPreview({
                                    modalOpen: true,
                                    data: request,
                                  });
                                }}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                View Request
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <Modal
                  open={requestPreview.modalOpen}
                  children={RequestPreview}
                  data={requestPreview.data}
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
          data={requestPreview.data}
          setOpen={setOpenModalHandler}
          title="Leave Request"
        />
      </div>
    );
  }