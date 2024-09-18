import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { getLeaveAll, getLeaveTypes, getPendingLeave, getUserLeaveAll } from "../../../queries/leave/queries";
import {
  deleteLeaveOne,
  insertLeave,
  updateLeaveOne,
} from "../../../queries/leave/mutations";
import { LoadingAnimation } from "../../../assets/AnimationComponents/AnimationComponents";
import { SetStateAction } from "react";
import { Holiday } from "../Pages/Absebce";
import { endOfDay, startOfDay } from "date-fns";

type LeaveProps = {
  start: Date | string;
  end: Date | string;
  details: string;
  type: "holiday" | "sickLeave" | "unpaidLeave" | "maternity" | "paternity";
  status: "pending" | "approved" | "rejected";
  duration: number;
};

export function LeaveRequest({ data }: {
  data: {
    isUpdate: boolean;
    data: Holiday;
    // eslint-disable-next-line no-unused-vars
    modalHandler: (state:boolean) => SetStateAction<boolean>;
  };

}) {

  const update = data.isUpdate;
  const id = data.data.id;
  const { modalHandler } = data;

  const { data: leaveTypesData, loading } = useQuery(getLeaveTypes);

  const leaveTypes = leaveTypesData?.leave_type;

  const { handleSubmit, register } = useForm<LeaveProps>({
    defaultValues: update && {
      start:data && data.data && startOfDay(new Date(data?.data?.start)).toISOString().split("T")[0] || new Date().toISOString().split("T")[0],
      end:data && data.data && endOfDay(new Date(data?.data?.end)).toISOString().split("T")[0] || new Date().toISOString().split("T")[0],
      details: data?.data?.details,
      type: data?.data?.type,
      duration: data?.data?.duration,
    } || undefined,
  });

  const [addLeave] = useMutation(insertLeave);
  const [updateLeave] = useMutation(updateLeaveOne);
  const [removeLeave] = useMutation(deleteLeaveOne);

  function submit(data: LeaveProps) {
    if (update) {
      updateLeave({
        variables: {
          id: id,
          object: {
            ...data,
          },
        },
        refetchQueries: [{ query: getLeaveAll }],
        onCompleted: () => modalHandler(false),
      });
      return;
    }
    addLeave({
      variables: {
        object: {
          ...data,
          userId: id,
          status: "Pending",
        },
      },
      refetchQueries: [{ query: getLeaveAll }, { query: getPendingLeave }, { query: getUserLeaveAll }],
      onCompleted: () => modalHandler(false),
    });
  }

  function removeLeaveOne(id: string) {
    removeLeave({
      variables: {
        id: id,
      },
      refetchQueries: [{ query: getLeaveAll }],
      onCompleted: () => modalHandler(false),
    });
  }

  if (loading)
    return (
      <div>
        <LoadingAnimation />
      </div>
    );

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
                Type
              </label>
              <select
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
                {...register("type", { required: true })}
              >
                {leaveTypes?.map((type: any, index: number) => (
                  <option key={index} value={type.value}>
                    {type.value.charAt(0).toUpperCase() + type.value.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label
                htmlFor="last-name"
                className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                From
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
                  {...register("start", { required: true })}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
                  {...register("end", { required: true })}
                />
              </div>
              <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
                <label
                  htmlFor="email"
                  className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Message
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
                    {...register("details", { required: true })}
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
                <label
                  htmlFor="email"
                  className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Duration
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
                    {...register("duration", { required: true })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={() => removeLeaveOne(id)}
            className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-gray-900 hover:ring-1 ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
          >
            Remove Request
          </button>
        </div>
        <div className="mt-6 flex items-ceßnter justify-end gap-x-6">
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}