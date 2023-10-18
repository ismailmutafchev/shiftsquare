import { Fragment, JSX } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type ModalProps = {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (open: boolean) => void;
  title?: string;
  // eslint-disable-next-line no-unused-vars
  children: (props: any) => JSX.Element;
  data?: any;
  type?: string;
};

export default function Modal({
  open,
  setOpen,
  title,
  children,
  data,
}: ModalProps) {
  const Children = children;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 border" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 bg-blend-saturation backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="">
                  {title && (
                    <>
                      <XMarkIcon
                        onClick={() => setOpen(false)}
                        className="absolute top-5 right-5 h-6 w-6 text-polar-800 cursor-pointer"
                      />
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="py-1 mx-[25%] text-lg border-b-4 bg-polar-400/20 border-r-4 border-t border-l rounded-md border-polar-800/90 border-opacity-50  font-semibold leading-6 text-polar-800"
                        >
                          {title}
                        </Dialog.Title>
                      </div>
                    </>
                  )}
                  <Children data={data} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
