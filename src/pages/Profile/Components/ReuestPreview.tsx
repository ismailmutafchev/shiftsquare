import { useMutation } from "@apollo/client";
import { useSession } from "../../../hooks/session";
import { updateReadStatus } from "../../../queries/leave/mutations";
import { getPendingLeave } from "../../../queries/leave/queries";
import { useEffect } from "react";
import { format } from "date-fns";

export default function RequestPreview({ data }: { data: any }) {
  const { profile } = useSession();
  const { id } = data;
  const readBy =
    (data && !data.readBy.includes(profile?.id) && data.readBy) || [];

  const [updateLeave] = useMutation(updateReadStatus, {
    variables: {
      id: id,
      readBy: [...readBy, profile?.id],
    },
    refetchQueries: [{ query: getPendingLeave }],
  });

  useEffect(
    () => {
      readBy !== undefined && updateLeave();
    },
    // eslint-disable-next-line
    [data]
  );

  console.log(data);

  return (
    <div className="flex-grow flex-shrink-0 flex items-center">
      <div className="flex-1 min-w-0">
        <div className="p-6">
          <div className="mt-6">
            <div>
              <p
                className="
                        text-lg
                        font-semibold
                        text-gray-900
                        mb-2
                    "
              >
                {data && data.user && data.user.firstName}{" "}
                {data && data.user && data.user.lastName}
              </p>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  From
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="date"
                    className="w-full p-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                    value={format(new Date(data.start), "yyyy-MM-dd")}
                    disabled
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
                    className="w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                    value={format(new Date(data.end), "yyyy-MM-dd")}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Reason
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <textarea
                  className="w-full p-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                  value={data.message}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
