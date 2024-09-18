import {
  addPositionOne,
  updatePositionById,
} from "../../../queries/position/mutations";
import { getPositions } from "../../../queries/position/queries";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { SketchPicker } from "react-color";
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";


export function AddPosition({ data }: any) {
  const update = data.isUpdate;
  const id = data?.data?.position?.id || null;
  const { modalHandler, isUpdate } = data;

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      name: isUpdate ? data?.data?.position?.name : "",
      bgColor: isUpdate ? data?.data?.position?.bgColor : "#000000",
    },
  });

  const [addUser] = useMutation(addPositionOne);
  const [updatePosition] = useMutation(updatePositionById);

  function submit(data: any) {
    if (update) {
      updatePosition({
        variables: { id: id, object: data },
        refetchQueries: [{ query: getPositions }],
        onCompleted: () => modalHandler(false),
      });
      return;
    }

    addUser({
      variables: { object: data },
      refetchQueries: [{ query: getPositions }],
      onCompleted: () => modalHandler(false),
    });
  }

  const color = watch("bgColor");

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="space-y-12 sm:space-y-16">
        <div>
          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-rows-3 sm:items-start">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Position Name
              </label>
              <div className="mt-2 sm:row-span-2 sm:mt-0 py-1">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
                  {...register("name", { required: true })}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-rows-10 sm:items-start">
              <label
                htmlFor="bgColor"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Identify Color
              </label>
              <div className="mt-2 sm:row-span-2 sm:mt-0 py-1">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
                  {...register("bgColor", { required: true })}
                />
                <div className="row-span-3">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <DisclosureButton className="py-2 w-full flex justify-between items-center">
                          Show Color Picker
                          <ChevronRightIcon
                            className={`${
                              open ? "rotate-90 transform" : ""
                            } w-4 h-4`}
                          />
                        </DisclosureButton>
                        <Transition
                          enter="transition duration-200 delay-50 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-100 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <DisclosurePanel className="text-gray-500">
                            <div className="w-full flex justify-center">
                              <SketchPicker
                                styles={{
                                  default: {
                                    picker: {
                                      width: "60%",
                                      borderRadius: "10px",
                                    },
                                    saturation: {
                                      width: "100% !important",
                                      borderRadius: "10px",
                                    },
                                    alpha: {
                                      display: "none",
                                    },
                                    activeColor: {
                                      borderRadius: "5px",
                                    },
                                    color: {
                                      borderRadius: "5px",
                                    },
                                  },

                                  // picker: CSSProperties;
                                  // saturation: CSSProperties;
                                  // Saturation: CSSProperties;
                                  // controls: CSSProperties;
                                  // sliders: CSSProperties;
                                  // color: CSSProperties;
                                  // activeColor: CSSProperties;
                                  // hue: CSSProperties;
                                  // Hue: CSSProperties;
                                  // alpha: CSSProperties;
                                  // Alpha: CSSProperties;
                                }}
                                color={color}
                                onChangeComplete={(color: any) => {
                                  setValue("bgColor", color.hex);
                                }}
                              />
                            </div>
                          </DisclosurePanel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
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
