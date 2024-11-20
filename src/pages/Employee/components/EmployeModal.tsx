import { useMutation, useQuery } from "@apollo/client";
import { getEmployees } from "../../../queries/user/queries.ts";

import { useForm } from "react-hook-form";
import { addUserOne, updateUserById } from "../../../queries/user/mutations.ts";
import { Switch } from "@headlessui/react";
import { useSession } from "../../../hooks/session.ts";
import {
  addUserPosition,
  deleteUserPosition,
} from "../../../queries/position/mutations.ts";
import { getUserPositions } from "../../../queries/shift/queries.ts";
import { useState } from "react";

import axios from "axios";
import { User } from "../../../gql/graphql.ts";

type UserPositionType = {
  positions: string[];
};

export function AddUser({ data }: any) {
  const update = data.isUpdate;
  const id = data?.data?.id || null;
  const { modalHandler } = data;
  const { positions: allPositions } = useSession();

  const [userPositions, setUserPositions] = useState<UserPositionType>({
    positions: [],
  });

  const { register, handleSubmit } = useForm<User>({
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

  useQuery(getUserPositions, {
    variables: {
      userId: id,
    },
    onCompleted: (data) => {
      setUserPositions({
        positions: data?.user_position?.map((pos: any) => pos.positionId),
      });
    },
  });

  const [addUser] = useMutation(addUserOne);
  const [updateUser] = useMutation(updateUserById);

  const [addUserPositionOne] = useMutation(addUserPosition, {
    refetchQueries: [{ query: getUserPositions, variables: { userId: id } }],
  });

  const [deleteUserPositionOne] = useMutation(deleteUserPosition, {
    refetchQueries: [{ query: getUserPositions, variables: { userId: id } }],
  });

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://login.auth0.com/api/v2/users",
    headers: {
      Accept: "application/json",
    },
  };

  function submit(data: any) {
    if (update) {
      updateUser({
        variables: {
          id: id,
          object: {
            ...data,
          },
        },
        refetchQueries: [{ query: getEmployees }],
        onCompleted: () => modalHandler(false),
      });
      return;
    }

    addUser({
      variables: {
        object: data,
      },
      refetchQueries: [{ query: getEmployees }],
      onCompleted: () => modalHandler(false),
    });
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
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
            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Assign Roles
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                {allPositions?.map((position: any) => {
                  const checked = userPositions?.positions?.includes(
                    position.id
                  );
                  return (
                    <Switch.Group
                      as="div"
                      className="flex items-center justify-between"
                      key={position.id}
                    >
                      <Switch.Label
                        as="span"
                        className="flex-grow flex flex-col"
                      >
                        <span className="text-sm font-medium text-gray-900">
                          {position.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {position.description}
                        </span>
                      </Switch.Label>
                      <Switch
                        onChange={() => {
                          checked
                            ? deleteUserPositionOne({
                                variables: {
                                  userId: id,
                                  positionId: position.id,
                                },
                                onCompleted: () => {
                                  setUserPositions({
                                    positions: userPositions.positions.filter(
                                      (pos: any) => pos !== position.id
                                    ),
                                  });
                                },
                              })
                            : addUserPositionOne({
                                variables: {
                                  object: {
                                    userId: id,
                                    positionId: position.id,
                                  },
                                },
                                onCompleted: () => {
                                  setUserPositions({
                                    positions: [
                                      ...userPositions.positions,
                                      position.id,
                                    ],
                                  });
                                },
                              });
                          // setValue(
                          //   "positions",
                          //   positions?.includes(position.id)
                          //     ? positions?.filter(
                          //         (pos: any) => pos !== position.id
                          //       )
                          //     : [...(positions ?? []), position.id]
                          // );
                          // setPositions(
                          //   positions?.includes(position.id)
                          //     ? positions?.filter(
                          //         (pos: any) => pos !== position.id
                          //       )
                          //     : [...(positions ?? []), position.id]
                          // );
                        }}
                        checked={checked}
                        className={`${
                          checked ? "bg-polar-600" : "bg-gray-200"
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only">Enable notifications</span>
                        <span
                          aria-hidden="true"
                          className={`${
                            checked ? "translate-x-6" : "translate-x-1"
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                    </Switch.Group>
                  );
                })}
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
