import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { getEmployees } from "../queries/user/queries.ts";
import Avatar from "../components/Avatar.tsx";
import Modal from "../components/Modal.tsx";
import { useForm } from "react-hook-form";
import {
  addUserOne,
  deleteUserById,
  updateUserById,
} from "../queries/user/mutations.ts";
import {
  PencilSquareIcon,
  PlusIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import {
  ErrorAnimation,
  LoadingAnimation,
} from "../assets/AnimationComponents/AnimationComponents.tsx";
import { useSession } from "../providers/Session.tsx";
import { Switch } from "@headlessui/react";

type UserProps = {
  firstName: string;
  lastName: string;
  email: string;
  contractedHours: number;
  payDetails: {
    payRate: number;
    per: string;
  };
  startDate?: string;
  positions?: { id: string }[];
};
export default function Availability() {
  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState({
    isUpdate: false,
    data: {},
  });

  const { loading, error, data } = useQuery(getEmployees);

  const users = data && data.user;

  function modalHandler(state: boolean) {
    setShowModal(state);
  }

  if (loading) return <LoadingAnimation />;
  if (error) return <ErrorAnimation message={error.message} />;

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (loading) return <LoadingAnimation />;
  if (error) return <ErrorAnimation message={error} />;

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Name
                </th>
                {days.map((day) => (
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    {day}
                  </th>
                ))}
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users?.map((person: UserProps) => (
                <tr key={person.email}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {person?.firstName} {person?.lastName}
                  </td>
                  {days.map((day) => (
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                      <Switch
                        checked={true}
                        onChange={() => console.log("hello")}
                        className={`${
                          true ? "bg-indigo-500" : "bg-gray-200"
                        } relative inline-flex items-center h-6 rounded-full w-11`}
                      >
                        <span className="sr-only">Enable notifications</span>
                        <span
                          className={`${
                            true ? "translate-x-6" : "translate-x-1"
                          } inline-block w-4 h-4 transform bg-white rounded-full`}
                        />
                      </Switch>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
