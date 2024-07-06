import { useMutation } from "@apollo/client";
import { useSession } from "../../../hooks/session";
import {
  UpdateLeaveStatus,
  updateReadStatus,
} from "../../../queries/leave/mutations";
import { getApprovedLeave, getPendingLeave } from "../../../queries/leave/queries";
import { useEffect } from "react";
import { format } from "date-fns";

export default function RequestPreview({ data }: { data: any }) {
  const { profile } = useSession();
  const { id } = data;
  const readBy =
    (data && !data.readBy?.includes(profile?.id) && data.readBy) || [];

  const [updateLeaveReadStatus] = useMutation(updateReadStatus, {
    variables: {
      id: id,
      readBy: [...readBy, profile?.id],
    },
    refetchQueries: [{ query: getPendingLeave }],
  });

  const [approveLeave] = useMutation(UpdateLeaveStatus, {
    variables: {
      id: id,
      status: "Approved",
    },
    refetchQueries: [{ query: getApprovedLeave }],
  });

  const [rejectLeave] = useMutation(UpdateLeaveStatus, {
    variables: {
      id: id,
      status: "Cancelled",
    },
    refetchQueries: [{ query: getPendingLeave }],
  });

  useEffect(
    () => {
      readBy !== undefined && updateLeaveReadStatus();
    },
    // eslint-disable-next-line
    [data]
  );

  return (
    <div className="flex-grow flex-shrink-1 flex items-center">
      <div className="flex-1 min-w-0">
        <div className="p-6">
          <div className="mt-6">
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                {data && data.user && data.user.firstName}{" "}
                {data && data.user && data.user.lastName}
              </p>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-6">
              <div>
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Period
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  {format(new Date(data?.start), "dd MMM yyyy")} -{" "}
                  {format(new Date(data?.end), "dd MMM yyyy")}
                </p>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-6">
              <div className="mt-6 sm:mt-0 sm:col-span-2">
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Duration
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  {data && data.duration}{" "}
                  {data && data.duration > 1 ? "days" : "day"}
                </p>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-6">
              <div className="mt-6 sm:mt-0 sm:col-span-2">
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Status
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  {data && data.status}
                </p>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-6">
              <div className="mt-6 sm:mt-0 sm:col-span-2">
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Type
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  {data && data.type}
                </p>
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
                  value={data.details}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-col">
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={() => approveLeave()}
              className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
            >
              Approve
            </button>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={() => rejectLeave()}
              className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-gray-900 hover:ring-1 ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
