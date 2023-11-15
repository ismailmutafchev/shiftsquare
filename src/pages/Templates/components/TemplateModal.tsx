  import { useMutation } from "@apollo/client";
  import { getTemplates } from "../../../queries/templates/queries";
  import {
    insertTemplate,
    updateTemplateById,
  } from "../../../queries/templates/mutations";
  import "swiper/css";
  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";
  import { useForm } from "react-hook-form";

export function Template({ data }: any) {
    const { register, handleSubmit } = useForm();
    const { update, modalHandler, builderHandler } = data;
  
    const [addTemplate] = useMutation(insertTemplate);
    const [updateTemplateByOne] = useMutation(updateTemplateById);
  
    function submit(data: any) {
      if (update && update.isUpdate) {
        updateTemplateByOne({
          variables: { id: update.data.id, object: data },
          refetchQueries: [{ query: getTemplates }],
          onCompleted: () => modalHandler(false),
        });
        return;
      }
      addTemplate({
        variables: { object: data },
        refetchQueries: [{ query: getTemplates }],
        onCompleted: () => {
          modalHandler(false);
          builderHandler(true);
        },
      });
    }
  
    return (
      <form onSubmit={handleSubmit(submit)}>
        <div className="space-y-12 sm:space-y-16">
          <div>
            <div className="mt-10 space-y-8 pb-12 sm:space-y-0 sm:divide-y sm:pb-0">
              <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
                <label
                  htmlFor="name"
                  className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Template Name
                </label>
                <input
                  placeholder="School Holiday"
                  className="w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                  {...register("name", { required: true })}
                />
              </div>
  
              <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
                <label
                  htmlFor="hours"
                  className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Hours Budget
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    placeholder="480"
                    className="w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90"
                    {...register("hours", { required: true })}
                  />
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