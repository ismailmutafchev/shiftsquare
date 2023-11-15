import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { getEmployees } from "../../queries/user/queries.ts";
import Avatar from "../../components/Avatar.tsx";
import Modal from "../../components/Modal.tsx";
import {
  deleteUserById,
} from "../../queries/user/mutations.ts";
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
} from "../../assets/AnimationComponents/AnimationComponents.tsx";
import { AddUser } from "./components/EmployeModal.tsx";

export default function Employees() {
  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState({
    isUpdate: false,
    data: {},
  });
  const [deleteUser] = useMutation(deleteUserById);

  const { loading, error, data } = useQuery(getEmployees);

  function modalHandler(state: boolean) {
    setShowModal(state);
  }




  if (loading) return <LoadingAnimation />;
  if (error) return <ErrorAnimation message={error.message} />;

  const users = data?.user;
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between py-10">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Employees
        </h3>
        <div className="mt-3 sm:ml-4 sm:mt-0">
          <button
            onClick={() => {
              setShowModal(true), setUpdate({ isUpdate: false, data: {} });
            }}
            type="button"
            className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
          >
            <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
            Add Employee
          </button>
        </div>
      </div>
      <ul
        role="list"
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {users.map((person: any) => (
          <li
            key={person.id}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col items-start">
                    <h3 className="truncate text-sm font-medium text-gray-900">
                      {person.firstName} {person.lastName}
                    </h3>
                    <p className="truncate text-sm font-medium text-gray-300">
                      {person.email}
                    </p>
                  </div>
                  <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {person ? person.role?.name.toUpperCase() : "No Role"}
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  {person.title}
                </p>
              </div>
              <Avatar
                size={10}
                firstName={person.firstName}
                lastName={person.lastName}
                className={person.bgColor}
              />
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1 overflow-clip truncate ">
                  <Link
                    to={`/employees/${person.id}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <Square2StackIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    View
                  </Link>
                </div>
                <div className="flex w-0 flex-1 overflow-clip truncate ">
                  <button
                    onClick={() => {
                      setShowModal(true),
                        setUpdate({ isUpdate: true, data: person });
                    }}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <PencilSquareIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Update
                  </button>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <button
                    onClick={() =>
                      confirm("Are you sure you want to delete this user?")
                        ? deleteUser({
                          variables: { id: person.id },
                          refetchQueries: [{ query: getEmployees }],
                        })
                        : null
                    }
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <TrashIcon
                      className="h-5 w-5 text-red-400"
                      aria-hidden="true"
                    />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Modal
        data={{ ...update, modalHandler }}
        open={showModal}
        setOpen={() => {
          setShowModal(false);
        }}
        {...(update.isUpdate
          ? { title: "Update User" }
          : { title: "Add User" })}
        children={AddUser}
      />
    </div>
  );
}
