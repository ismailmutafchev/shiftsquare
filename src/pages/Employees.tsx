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
};
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
    <div>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
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

function AddUser({ data }: any) {
  const update = data.isUpdate;
  const id = data?.data?.id || null;
  const { modalHandler } = data;

  const { register, handleSubmit } = useForm<UserProps>({
    defaultValues: {
      firstName: data?.data?.firstName || "",
      lastName: data?.data?.lastName || "",
      email: data?.data?.email || "",
      contractedHours: data?.data?.contractedHours || "",
      payDetails: {
        payRate: data?.data?.payDetails?.payRate || "",
        per: data?.data?.payDetails?.per || "",
      },
    },
  });

  const [addUser] = useMutation(addUserOne);
  const [updateUser] = useMutation(updateUserById);

  function submit(data: any) {
    if (update) {
      updateUser({
        variables: { id: id, object: data },
        refetchQueries: [{ query: getEmployees }],
        onCompleted: () => modalHandler(false),
      });
      return;
    }

    addUser({
      variables: { object: data },
      refetchQueries: [{ query: getEmployees }],
      onCompleted: () => modalHandler(false),
    });
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="space-y-12 sm:space-y-16">
        <div>
          <div className="mt-10 space-y-8 pb-12 sm:space-y-0 sm:divide-y sm:pb-0">
            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label
                htmlFor="first-name"
                className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                First name
              </label>
              <input
                className="w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                {...register("firstName", { required: true })}
              />
            </div>

            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label
                htmlFor="last-name"
                className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Last name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  className="w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                  {...register("lastName", { required: true })}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label
                htmlFor="email"
                className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Email address
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  className="w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                  {...register("email", { required: true })}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label
                htmlFor="contractedHours"
                className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Conracted Hours
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  className="w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                  {...register("contractedHours", { required: true })}
                />
              </div>
            </div>
            {!update && (
              <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
                <label
                  htmlFor="startDate"
                  className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Start Date
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="date"
                    className="w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                    {...register("startDate", { required: true })}
                  />
                </div>
              </div>
            )}
            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label
                htmlFor="payRate"
                className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Pay Rate
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  className="w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                  {...register("payDetails.payRate", { required: true })}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label
                htmlFor="per"
                className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Per
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  className="w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                  {...register("payDetails.per", { required: true })}
                >
                  <option value="hour">Hour</option>
                  <option value="day">Day</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
