import { Fragment, useState, useEffect } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../components/Logo";
import { colors } from "../utils/colors";

const userNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Setting", href: "/setting" },
];

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PublicNavigation() {
  const { pathname } = useLocation();
  const { loginWithRedirect } = useAuth0();
  const [navigation, setNavigation] = useState([
    {
      name: "Home",
      href: "/",
      current: pathname === "/calendar",
      icon: Cog6ToothIcon,
    },
    { name: "About", href: "/about", current: pathname === "/about" },
    { name: "Pricing", href: "/pricing", current: pathname === "/pricing" },
    { name: "Login", href: "/login", current: pathname === "/login" },
  ]);
  const [scaleBottomBorder, setScaleBottomBorder] = useState<string | null>(
    null
  );
  const { isAuthenticated, user } = useAuth0();

  const showDashboard = !navigation.some((item) => item.name === "Calendar");

  useEffect(() => {
    if (isAuthenticated && showDashboard) {
      setNavigation([
        ...navigation,
        {
          name: "Calendar",
          href: "/calendar",
          current: pathname === "/calendar",
        },
      ]);
    } else {
      return;
    }
  }, [isAuthenticated, navigation, pathname, showDashboard]);

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <Disclosure
          as="nav"
          className="lg:fixed lg:w-full lg:left-0 lg:z-50 lg:backdrop-blur-lg "
        >
          {({ open }) => (
            <>
              <div className="mx-auto px-4 sm:px-4 py-3 lg:px-6 flex items-center">
                <div className="relative flex items-center w-full">
                  <div className="flex items-center px-2 lg:px-0 w-full justify-between">
                    <div className="flex items-center space-x-2">
                      <Logo size={30} dark />
                      <p className="font-medium">
                        <span className="text-polar-400">Shift </span>
                        <span className="text-polar-800">Square</span>
                      </p>
                    </div>
                    <div className="hidden lg:ml-10 lg:block justify-self-center">
                      <div className="flex space-x-4">
                        {!isAuthenticated &&
                          navigation.map((item) => {
                            return (
                              <Link
                                key={item.name}
                                to={item.href === "/login" ? "/" : item.href}
                                onMouseOver={() =>
                                  setScaleBottomBorder(item.name)
                                }
                                onMouseLeave={() => setScaleBottomBorder(null)}
                                className={classNames(
                                  "rounded-md py-2 px-3 text-sm font-medium text-center text-steel-blue-900 relative"
                                )}
                                onClick={
                                  item.href === "/login"
                                    ? () => loginWithRedirect()
                                    : () => {}
                                }
                              >
                                <p
                                  className={`${
                                    scaleBottomBorder === item.name
                                      ? "bg-clip-text text-transparent bg-gradient-to-r from-[#ff80b5] to-[#9089fc] relative "
                                      : ""
                                  } duration-500`}
                                >
                                  {item.name}
                                </p>
                                <div
                                  className={`bg-green-400 absolute h-1 left-0 ${
                                    scaleBottomBorder === item.name
                                      ? `w-full bottom-1 rounded-b-md `
                                      : "w-0"
                                  }  duration-300`}
                                ></div>
                              </Link>
                            );
                          })}
                        {/* <LoginButton /> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="inline-flex items-center justify-center rounded-md p-1">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6 text-black"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6 text-black"
                          aria-hidden="true"
                        />
                      )}
                    </DisclosureButton>
                  </div>
                  {isAuthenticated && user && (
                    <div className="hidden lg:ml-4 lg:block">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="flex-shrink-0 rounded-full p-1 text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-polar-600"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                            stroke={colors.polar[800]}
                          />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3 flex-shrink-0">
                          <div>
                            <MenuButton className="flex rounded-full text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-polar-600">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="rounded-full h-8 w-8"
                                src={user.picture}
                                alt=""
                              />
                            </MenuButton>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <MenuItem key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700 "
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </MenuItem>
                              ))}
                              <MenuItem>
                                {() => (
                                  <LogoutButton className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" />
                                )}
                              </MenuItem>
                            </MenuItems>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <DisclosurePanel className="lg:hidden  w-full z-10 ">
                <div className="space-y-1 px-2 py-10 w-full h-screen bg-white z-10 divide-y absolute pointer-events-auto overflow-scroll items-center flex flex-col text-start">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-polar-600"
                          : "text-black hover:text-polar-600",
                        "block rounded-md py-2 px-3 text-sm font-normal font-poppins text-gray-600 w-1/2"
                      )}
                      onClick={
                        item.href === "/login"
                          ? () => loginWithRedirect()
                          : () => {}
                      }
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                  <div>{/* TODO: add icons to the pages     */}</div>
                </div>

                {isAuthenticated && (
                  <div className="hidden lg:block border-t border-blue-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user?.picture}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">
                          {user?.name}
                        </div>
                        <div className="text-sm font-medium text-polar-300">
                          {user?.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full p-1 text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-polar-600"
                      >
                        <span className="sr-only">View notifications</span>
                        ting <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <DisclosureButton
                          key={item.name}
                          className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-polar-300 hover:bg-opacity-75"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                      <DisclosureButton
                        as="a"
                        href="/"
                        className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-polar-300 hover:bg-opacity-75"
                      >
                        <LogoutButton />
                      </DisclosureButton>
                    </div>
                  </div>
                )}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>

      {/* <main className="bg-transparent border">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 bg-transparent"></div>
      </main> */}
    </div>
  );
}
