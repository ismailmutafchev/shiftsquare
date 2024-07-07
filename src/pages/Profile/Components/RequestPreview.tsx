import { useMutation, useQuery } from "@apollo/client";
import { useSession } from "../../../hooks/session";
import {
  UpdateLeaveStatus,
  updateReadStatus,
} from "../../../queries/leave/mutations";
import {
  getApprovedLeave,
  getLeaveAll,
  getLeaveStatus,
  getPendingLeave,
} from "../../../queries/leave/queries";
import { useEffect } from "react";
import { format } from "date-fns";
import { Select } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { Leave, Leave_Status_Enum } from "../../../gql/graphql";

export default function RequestPreview({
  data,
}: {
  data: {
    data: Leave;
    // eslint-disable-next-line
    modalHandler: (status: boolean) => void;
  };
}) {
  const { profile } = useSession();
  const { id, user, start, end, duration, status, type, details } = data.data;
  const { modalHandler } = data;
  const readBy =
    (data &&
      data.data &&
      !data.data.readBy?.includes(profile?.id) &&
      data.data.readBy) ||
    [];

  console.log(data);
  const { setValue, handleSubmit } = useForm({
    defaultValues: {
      status: data.data?.status,
    },
  });

  const { data: leaveStatus } = useQuery(getLeaveStatus);

  const [updateLeaveReadStatus] = useMutation(updateReadStatus, {
    variables: {
      id: id,
      readBy: [...readBy, profile?.id],
    },
    refetchQueries: [
      { query: getPendingLeave },
      { query: getApprovedLeave },
      { query: getPendingLeave },
    ],
  });

  const [updateLeaveStat] = useMutation(UpdateLeaveStatus, {
    variables: {
      id: id,
      status: "approved",
    },
    refetchQueries: [
      { query: getPendingLeave },
      { query: getApprovedLeave },
      { query: getLeaveAll },
    ],
  });

  useEffect(
    () => {
      readBy !== undefined && updateLeaveReadStatus();
    },
    // eslint-disable-next-line
    [data]
  );
  console.log(data);

  function submit(data: any) {
    updateLeaveStat({
      variables: {
        id: id,
        status: data.status,
      },
      onCompleted: () => {
        modalHandler(false);
      },
    });
  }

  return (
    <div className="flex-grow flex-shrink-1 flex items-center">
      <div className="flex-1 min-w-0">
        <div className="p-6">
          <div className="mt-6">
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                {user && user.firstName} {user && user.lastName}
              </p>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-6">
              <div>
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Period
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  {format(new Date(start), "dd MMM yyyy")} -{" "}
                  {format(new Date(end), "dd MMM yyyy")}
                </p>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-6">
              <div className="mt-6 sm:mt-0 sm:col-span-2">
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Duration
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  {duration} {duration > 1 ? "days" : "day"}
                </p>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-6">
              <div className="mt-6 sm:mt-0 sm:col-span-2">
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Status
                </p>
                <p className="text-sm text-gray-500 mb-1">{status}</p>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-6">
              <div className="mt-6 sm:mt-0 sm:col-span-2">
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Type
                </p>
                <p className="text-sm text-gray-500 mb-1">{type}</p>
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Details
              </label>
              <div className="mb-1 flex rounded-md shadow-sm">
                <textarea
                  className="w-full p-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                  value={details}
                  disabled
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-6">
              <div className="mt-6 sm:mt-0 sm:col-span-2">
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Action
                </p>
                <Select
                  onChange={(e) =>
                    setValue("status", e.target.value as Leave_Status_Enum)
                  }
                  name="status"
                  aria-label="Leave status"
                >
                  {leaveStatus?.leave_status.map((status: any) => (
                    <option key={status.name} value={status.name}>
                      {status.status}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-col">
          <button
            onClick={handleSubmit(submit)}
            className="mx-7 items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
