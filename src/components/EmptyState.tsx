import { PlusIcon } from "@heroicons/react/20/solid";
import { FolderPlusIcon } from "@heroicons/react/24/outline";

export default function EmptyState({
  title,
  handler,
  showCreate,
}: {
  title: string;
  handler: () => void;
  showCreate: boolean;
}) {
  return (
    <div className="text-center flex flex-col items-center m-10">
      <FolderPlusIcon className="-ml-0.5 mr-1.5 h-10 w-10" aria-hidden="true" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No {title}s</h3>
      {showCreate && (
        <>
          <p className="mt-1 text-sm text-gray-500">
            Get started by creating a new {title.toLowerCase()}.
          </p>
          <div className="mt-6">
            <button
              onClick={handler}
              type="button"
              className="inline-flex items-center rounded-md bg-polar-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-polar-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-600"
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              New {title}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
