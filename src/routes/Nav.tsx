import { Fragment, useEffect } from "react";
import React from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  Battery50Icon,
  BellIcon,
  CalendarDaysIcon,
  CheckBadgeIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  Square3Stack3DIcon,
  SquaresPlusIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import LogoutButton from "../components/LogoutButton";
import Avatar from "../components/Avatar";
import Logo from "../components/Logo";
import Modal from "../components/Modal";
import Fuse from "fuse.js";
import { useSession } from "../hooks/session";
import { getApprovedLeave, getPendingLeave } from "../queries/leave/queries";
import { useMutation, useQuery } from "@apollo/client";
import Slideover from "../components/SlideOver";
import { format } from "date-fns";
import { updateReadStatus } from "../queries/leave/mutations";
const SearchOptions = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 100,
  matchAllTokens: true,
  includeScore: true,
  maxPatternLength: 32,
  minMatchCharLength: 2,
  keys: ["name", "firstName", "lastName", "email"],
};

const userNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Settings", href: "/setting" },
];

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation({
  children,
}: {
  children: React.JSX.Element;
}) {
  const [openSearch, setOpenSearch] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [wideSidebarOpen, setWideSidebarOpen] = useState(false);
  const [notReadRequests, setNotReadRequests] = useState<any>([]);
  const [slideOverOpen, setSlideOverOpen] = useState(false);

  const { pathname } = useLocation();
  const { profile, permissions } = useSession();

  const { data } = useQuery(getPendingLeave);
  const { data: approvedRequests } = useQuery(getApprovedLeave);

  const pendingLeaveRequests = data?.leave;
  const approvedLeaveRequests = approvedRequests?.leave;

  useEffect(
    () => {
      if (pendingLeaveRequests) {
        const notRead = pendingLeaveRequests.filter(
          (leave: any) => !leave.readBy.includes(profile?.id)
        );
        setNotReadRequests(notRead);
      }
    },
    // eslint-disable-next-line
    [pendingLeaveRequests]
  );

  const openSearchHandler = () => {
    setOpenSearch(true);
  };

  const closeSearchHandler = () => {
    setOpenSearch(false);
  };

  const openSlideOverHandler = () => {
    setSlideOverOpen(true);
  };

  const closeSlideOverHandler = () => {
    setSlideOverOpen(false);
  };

  let navigation: {
    name: string;
    href: string;
    current: boolean;
    icon: any;
  }[] = [];

  if (
    (permissions && permissions?.includes("admin")) ||
    permissions.includes("manager") ||
    permissions.includes("supervisor")
  ) {
    navigation = [
      {
        name: "Dashboard",
        href: "/dashboard",
        current: pathname === "/dashboard",
        icon: Cog6ToothIcon,
      },
      {
        name: "Calendar",
        href: "/calendar",
        current: pathname === "/calendar",
        icon: CalendarDaysIcon,
      },
      {
        name: "Employees",
        href: "/employees",
        current: pathname === "/employees",
        icon: UsersIcon,
      },
      {
        name: "Positions",
        href: "/positions",
        current: pathname === "/positions",
        icon: Square3Stack3DIcon,
      },
      {
        name: "Templates",
        href: "/templates",
        current: pathname === "/templates",
        icon: SquaresPlusIcon,
      },
      {
        name: "Availability",
        href: "/availability",
        current: pathname === "/availability",
        icon: CheckBadgeIcon,
      },
    ];
  } else if (permissions && permissions?.includes("employee")) {
    navigation = [
      {
        name: "Calendar",
        href: "/calendar",
        current: pathname === "/calendar",
        icon: CalendarDaysIcon,
      },
      {
        name: "Time Off",
        href: "/time-off",
        current: pathname === "/time-off",
        icon: Battery50Icon,
      },
      {
        name: "Profile",
        href: "/profile",
        current: pathname === "/shifts",
        icon: UsersIcon,
      },
    ];
  }

  const wideUpSidebarHandler = () => {
    setWideSidebarOpen(true);
  };

  const wideDownSidebarHandler = () => {
    setWideSidebarOpen(false);
  };

  const closeSideBarHandler = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-polar-800/40 backdrop-blur-sm" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={closeSideBarHandler}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-20 shrink-0 items-center">
                      <Logo size={50} />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  onClick={closeSideBarHandler}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                          </div>
                        </li>
                        <li className="mt-auto">
                          <Link
                            to="/setting"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Settings
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div
          onMouseOver={wideUpSidebarHandler}
          onMouseLeave={wideDownSidebarHandler}
          className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-24 lg:hover:w-64 lg:duration-300  lg:flex-col"
        >
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
            <div className="flex h-20 shrink-0 items-center">
              <Logo size={50} />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-polar-800 text-white"
                              : "text-gray-400 hover:text-white hover:bg-polar-800/70",
                            "group flex gap-x-6 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0 translate-x-3"
                            aria-hidden="true"
                          />
                          {wideSidebarOpen && item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  {wideSidebarOpen && (
                    <div className="text-xs font-semibold leading-6 text-gray-400">
                      Your teams
                    </div>
                  )}

                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {/* {teams.map((team) => (
                                            <li key={team.name}>
                                                <a
                                                    href={team.href}
                                                    className={classNames(
                                                        team.current
                                                            ? 'bg-gray-800 text-white'
                                                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                        {team.initial}
                                                    </span>
                                                    <span className="truncate">{team.name}</span>
                                                </a>
                                            </li>
                                        ))} */}
                  </ul>
                </li>
                <li className="mt-auto">
                  <Link
                    to="/setting"
                    className="group -mx-2 flex gap-x-6 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-polar-800/80 hover:text-white"
                  >
                    {}
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 translate-x-3"
                      aria-hidden="true"
                    />
                    {wideSidebarOpen && "Settings"}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div
          className={`${
            wideSidebarOpen ? "lg:pl-64" : "lg:pl-24"
          } duration-300`}
        >
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end">
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  onClick={openSearchHandler}
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Notification Dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button
                    className="-m-1.5 flex items-center p-1.5 relative"
                    onClick={() => {
                      setSlideOverOpen(!slideOverOpen);
                    }}
                  >
                    <span className="sr-only">Open user menu</span>
                    {notReadRequests && notReadRequests.length > 0 && (
                      <div className="absolute top-0.5 right-0.5 bg-red-500 rounded-full text-white p-1 w-3.5 h-3.5 flex text-[8px] items-center justify-center">
                        <p>{notReadRequests && notReadRequests.length}</p>
                      </div>
                    )}
                    <BellIcon
                      className="ml-2 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                  {/* <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute w-80 right-0 divide-y origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {pendingLeaveRequests &&
                      pendingLeaveRequests.length > 0 ? (
                        pendingLeaveRequests.map((leave: any) => (
                          <Menu.Item key={leave.id}>
                            {({ active }) => (
                              <Link
                                to={`/time-off/${leave.id}`}
                                className={classNames(
                                  active ? "bg-gray-50" : "",
                                  "block px-3 py-1 text-sm leading-6 text-gray-900",
                                  notReadRequests?.includes(leave) &&
                                    "bg-polar-50"
                                )}
                              >
                                <div className="relative">
                                  <div className="font-semibold text-start w-5/6">
                                    <p>
                                      {leave.user.firstName}{" "}
                                      {leave.user.lastName} requested a{" "}
                                      {leave.type} leave
                                    </p>
                                  </div>
                                  <div className="text-gray-400 bg-green-50 border border-green-200 rounded-full flex items-center justify-center px-1 text-[10px] absolute top-1 right-1">
                                    <p>{leave.status}</p>
                                  </div>
                                </div>
                              </Link>
                            )}
                          </Menu.Item>
                        ))
                      ) : (
                        <Menu.Item>
                          <div className="block px-3 py-1 text-sm leading-6 text-gray-900">
                            No pending leave requests
                          </div>
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition> */}
                </Menu>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <Avatar
                      size={10}
                      firstName={profile?.firstName}
                      lastName={profile?.lastName}
                      className={profile?.bgColor || "bg-gray-400"}
                      imageUrl={profile?.picture}
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        {profile?.firstName} {profile?.lastName}
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
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
                    <Menu.Items className="absolute right-0 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                      <Menu.Item>
                        <div className="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-50 hover:cursor-pointer">
                          <LogoutButton />
                        </div>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <Modal
              open={openSearch}
              children={SearchInput}
              setOpen={() => setOpenSearch(false)}
              data={{ close: closeSearchHandler }}
              search
            />
            <Slideover
              open={slideOverOpen}
              setOpen={openSlideOverHandler}
              setClose={closeSlideOverHandler}
              children={RequestsSlideOver}
              data={pendingLeaveRequests?.concat(approvedLeaveRequests)}
            />
          </div>

          <main>
            <div>{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}

function SearchInput({ data }: { data: any }) {
  const [searchStr, setSearchStr] = useState("");
  const [searchRes, setSearchRes] = useState<any>([]);

  const { positions, employees } = useSession();

  const list = positions.concat(employees);

  const fuse = new Fuse(list, SearchOptions);

  const clearSearch = () => {
    setSearchStr("");
    setSearchRes([]);
  };

  const handleChange = (e: any) => {
    setSearchStr(e.target.value);
    setSearchRes(e.target.value ? fuse.search(searchStr) : []);
  };

  return (
    <div className="flex-grow flex-shrink-0 flex items-center">
      <div className="flex-1 min-w-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full h-full pl-10 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:placeholder-gray-400 sm:text-sm"
            placeholder="Search"
            type="search"
            value={searchStr}
            onAbort={clearSearch}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <ul>
          {searchRes.map((res: any) => {
            const type = res.item.__typename;
            return (
              <li
                key={res.item.id}
                className="flex items-center hover:bg-gray-100 px-4 rounded-lg hover:text-white"
              >
                {type === "position" ? (
                  <div className="rounded-md w-6 h-6 flex justify-center items-center bg-purple-heart-400">
                    <Square3Stack3DIcon
                      className="h-4 w-4 text-white"
                      aria-hidden="true"
                    />
                  </div>
                ) : (
                  <div className="rounded-md w-6 h-6 flex justify-center items-center bg-steel-blue-400">
                    <UsersIcon
                      className="h-4 w-4 text-white"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <Link
                  to={
                    type === "position"
                      ? `/positions/${res.item.id}`
                      : `/employees/${res.item.id}`
                  }
                  className="block px-4 py-2 text-sm text-gray-700 w-full"
                  onClick={data.close}
                >
                  <p className="font-semibold">
                    {res.item.name ||
                      res.item.firstName + " " + res.item.lastName}
                  </p>
                  <p className="text-gray-400">
                    {type === "user" && res.item.email}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function RequestsSlideOver({ data }: { data: any }) {
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
    (request: any) => !request.readBy.includes(profile?.id)
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
              className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
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
                  <Menu.Button className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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

function RequestPreview({ data }: { data: any }) {
  const { profile } = useSession();
  const { id } = data;
  const readBy =
    (data && !data.readBy.includes(profile?.id) && data.readBy) || [];

  const [updateLeave] = useMutation(updateReadStatus, {
    variables: {
      id: id,
      readBy: [...readBy, profile?.id],
    },
    refetchQueries: [{ query: getPendingLeave }],
  });

  useEffect(
    () => {
      readBy !== undefined && updateLeave();
    },
    // eslint-disable-next-line
    [data]
  );

  return (
    <div className="flex-grow flex-shrink-0 flex items-center">
      <div className="flex-1 min-w-0">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
              Leave Request
            </Dialog.Title>
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
              >
                <span className="absolute -inset-2.5" />
                <span className="sr-only">Close panel</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6">
            <div className="sm:grid sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  From
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="date"
                    className="w-full p-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                    value={format(new Date(data.start), "yyyy-MM-dd")}
                    disabled
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
                <label
                  htmlFor="email"
                  className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  To
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="date"
                    className="w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                    value={format(new Date(data.end), "yyyy-MM-dd")}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Reason
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <textarea
                  className="w-full p-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                  value={data.message}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
