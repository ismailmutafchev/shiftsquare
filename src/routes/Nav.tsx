import { Fragment, useEffect } from "react";
import React from "react";
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems, Transition, TransitionChild } from "@headlessui/react";
import {
  Bars3Icon,
  Battery50Icon,
  BellIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  Square3Stack3DIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import LogoutButton from "../components/LogoutButton";
import Avatar from "../components/Avatar";
import Logo from "../components/Logo";
import Modal from "../components/Modal";
import { useSession } from "../hooks/session";
import { getApprovedLeave, getPendingLeave } from "../queries/leave/queries";
import { useQuery } from "@apollo/client";
import Slideover from "../components/SlideOver";
import RequestsSlideOver from "./components/SlideOver";
import SearchInput from "./components/SearchInput";

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
          (leave: any) => !leave.readBy?.includes(profile?.id)
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
    permissions.includes("supervisor") ||
    permissions.includes("owner")
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
      // {
      //   name: "Templates",
      //   href: "/templates",
      //   current: pathname === "/templates",
      //   icon: SquaresPlusIcon,
      // },
      // {
      //   name: "Availability",
      //   href: "/availability",
      //   current: pathname === "/availability",
      //   icon: CheckBadgeIcon,
      // },
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
        <Transition show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <TransitionChild
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-polar-800/40 backdrop-blur-sm" />
            </TransitionChild>

            <div className="fixed inset-0 flex">
              <TransitionChild
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <TransitionChild
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
                  </TransitionChild>
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
                        {/* <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                          </div>
                        </li> */}
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
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

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
                  <MenuButton
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
                  </MenuButton>
                </Menu>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
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
                  </MenuButton>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          {({ focus }) => (
                            <Link
                              to={item.href}
                              className={classNames(
                                focus ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </MenuItem>
                      ))}
                      <MenuItem>
                        <div className="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-50 hover:cursor-pointer">
                          <LogoutButton />
                        </div>
                      </MenuItem>
                    </MenuItems>
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
          </div>
            <Slideover
              open={slideOverOpen}
              setOpen={openSlideOverHandler}
              setClose={closeSlideOverHandler}
              children={RequestsSlideOver}
              data={pendingLeaveRequests?.concat(approvedLeaveRequests)}
            />

          <main>
            <div>{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}

