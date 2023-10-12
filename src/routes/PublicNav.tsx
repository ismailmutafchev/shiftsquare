import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import LoginButton from "../components/LoginButon";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../components/Logo";
import { colors } from "../utils/colors";

const userNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Setting", href: "/setting" },
  { name: "Sign out", href: "/login" },
];

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PublicNavigation() {
  const { pathname } = useLocation();
  const [navigation, setNavigation] = useState([
    {
      name: "Home",
      href: "/",
      current: pathname === "/dashboard",
      icon: Cog6ToothIcon,
    },
    { name: "About", href: "/about", current: pathname === "/about" },
    { name: "Pricing", href: "/pricing", current: pathname === "/pricing" },
  ]);
  const [scaleBottomBorder, setScaleBottomBorder] = useState<string | null>(
    null
  );
  const { isAuthenticated, user } = useAuth0();

  const showDashboard = !navigation.some((item) => item.name === "Dashboard");

  useEffect(() => {
    if (isAuthenticated && showDashboard) {
      setNavigation([
        ...navigation,
        {
          name: "Dashboard",
          href: "/dashboard",
          current: pathname === "/dashboard",
        },
      ]);
    } else {
      return;
    }
  }, [isAuthenticated]);

  return (
    <div className="min-h-full">
      <div>
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="mx-auto px-20 sm:px-4 lg:px-8 flex items-center">
                <div className="relative flex h-20 items-center w-full">
                  <div className="flex items-center px-2 lg:px-0 w-full justify-between">
                    <div>
                      <Logo size={50} dark />
                    </div>
                    <div className="hidden lg:ml-10 lg:block justify-self-center">
                      <div className="flex space-x-16">
                        {navigation.map((item) => {
                          return (
                            <Link
                              key={item.name}
                              to={item.href}
                              onMouseOver={() =>
                                setScaleBottomBorder(item.name)
                              }
                              onMouseLeave={() => setScaleBottomBorder(null)}
                              className={classNames(
                                "rounded-md py-2 px-3 text-sm font-medium text-center text-steel-blue-900 relative"
                              )}
                            >
                              <p className={`${scaleBottomBorder === item.name ? "bg-clip-text text-transparent bg-gradient-to-r from-[#ff80b5] to-[#9089fc] relative " : ""} duration-500 text-base`}>
                                {item.name}
                              </p>
                              <div
                                className={`bg-green-400 absolute h-1 left-0 ${scaleBottomBorder === item.name
                                    ? `w-full bottom-1 rounded-b-md `
                                    : "w-0"
                                  }  duration-300`}
                              ></div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <LoginButton />
                    </div>
                  </div>
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-polar-800 to-polar-300 p-2 text-blue-200 hover:bg-polar-300 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-polar-600">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
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
                            <Menu.Button className="flex rounded-full text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-polar-600">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="rounded-full h-8 w-8"
                                src={user.picture}
                                alt=""
                              />
                            </Menu.Button>
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
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
                                </Menu.Item>
                              ))}
                              <LoginButton />
                              <LogoutButton />
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-blue-700 text-white"
                          : "text-white hover:bg-polar-300 hover:bg-opacity-75",
                        "block rounded-md py-2 px-3 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  <LoginButton />
                  <LogoutButton />
                </div>
                {isAuthenticated && (
                  <div className="border-t border-blue-700 pb-3 pt-4">
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
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-polar-300 hover:bg-opacity-75"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                      <LoginButton />
                      <LogoutButton />
                    </div>
                  </div>
                )}
              </Disclosure.Panel>
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
