import { useState } from "react";
import { useSession } from "../../hooks/session";
import Schedule from "./components/Schedule";
import Absence from "./components/Absebce";
import Documents from "./components/Documents";
import Personal from "./components/Personal";
import Reports from "../Reports/Reports";
import Avatar from "../../components/Avatar";

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Profile() {
  const { profile } = useSession();

  const [tabs, setTabs] = useState([
    {
      name: "Schedule",
      href: "#",
      current: true,
      element: <Schedule />,
    },
    { name: "Time Off", href: "#", current: false, element: <Absence /> },
    {
      name: "Documents",
      href: "#",
      current: false,
      element: <Documents />,
    },
    {
      name: "Personal",
      href: "#",
      current: false,
      element: <Personal />,
    },
    { name: "Reports", href: "#", current: false, element: <Reports /> },
  ]);

  const currentTabHandler = (tabName: string) => {
    setTabs(
      tabs.map((tab) => {
        tab.current = tab.name === tabName;
        return tab;
      })
    );
  };

  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:pb-0">
        <div className="flex space-x-10 items-center px-10 py-5">
          <Avatar
            firstName={profile.firstName}
            lastName={profile.lastName}
            imageUrl={profile.picture}
            size={16}
          />
          <div className="flex flex-col text-start">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">
              {profile?.firstName} {profile?.lastName}
            </h3>
            <p className="text-gray-600">{profile?.email}</p>
          </div>
        </div>
        <div className="mt-3 sm:mt-4">
          <div className="sm:hidden">
            <label htmlFor="current-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="current-tab"
              name="current-tab"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => {
                currentTabHandler(e.target.value);
              }}
            >
              {tabs.map((tab) => (
                <option
                  key={tab.name}
                  onClick={() => {
                    currentTabHandler(tab.name);
                  }}
                >
                  {tab.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block px-10 pt-10">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "border-polar-500 text-polar-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
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
      </div>
      <div className="mt-8">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={classNames(tab.current ? "block" : "hidden")}
          >
            {tab.element}
          </div>
        ))}
      </div>
    </>
  );
}
