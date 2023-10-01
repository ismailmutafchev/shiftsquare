import {
  ArchiveBoxIcon,
  ArrowsPointingOutIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  PlusIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { getTemplate, getTemplates } from "../queries/templates/queries";
import { deleteTemplateById } from "../queries/templates/mutations";
import { LoadingAnimation } from "../assets/AnimationComponents/AnimationComponents";
import { Menu, Transition } from "@headlessui/react";
import { ResizableBox } from "react-resizable";
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import { useSession } from "../providers/Session";

type Section = {
  position: string;
  start: string;
  end: string;
};

type FormValues = {
  mondayShifts: Section[];
  tuesdayShifts: Section[];
  wednesdayShifts: Section[];
  thursdayShifts: Section[];
  fridayShifts: Section[];
  saturdayShifts: Section[];
  sundayShifts: Section[];
};
// type FormValues = {
//   cart: {
//     name: string;
//     price: number;
//     quantity: number;
//   }[];
// };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Total = ({ control }: { control: Control<FormValues> }) => {
  const formValues = useWatch({
    name: "mondayShifts",
    control,
  });
  const total = 0;
  return <p>Total Amount: {total}</p>;
};

export default function Templates() {
  const [showBuilder, setShowBuilder] = useState(false);
  // const [update, setUpdate] = useState({
  //   isUpdate: false,
  //   data: {}
  // })
  const [size, setSize] = useState({
    width: 200,
    height: 200,
  });

  const { positions } = useSession();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      mondayShifts: [
        { position: positions && positions[0], start: "9:00", end: "17:00" },
      ],
    },
    mode: "onBlur",
  });
  const {
    fields: monday,
    append: appendMonday,
    remove: removeMonday,
  } = useFieldArray({
    name: "mondayShifts",
    control,
  });
  const {
    fields: tuesday,
    append: appendTuesday,
    remove: removeTuesday,
  } = useFieldArray({
    name: "tuesdayShifts",
    control,
  });
  const {
    fields: wednesday,
    append: appendWednesday,
    remove: removeWednesday,
  } = useFieldArray({
    name: "wednesdayShifts",
    control,
  });
  const {
    fields: thursday,
    append: appendThursday,
    remove: removeThursday,
  } = useFieldArray({
    name: "thursdayShifts",
    control,
  });
  const {
    fields: friday,
    append: appendFriday,
    remove: removeFriday,
  } = useFieldArray({
    name: "fridayShifts",
    control,
  });
  const {
    fields: saturday,
    append: appendSaturday,
    remove: removeSaturday,
  } = useFieldArray({
    name: "saturdayShifts",
    control,
  });
  const {
    fields: sunday,
    append: appendSunday,
    remove: removeSunday,
  } = useFieldArray({
    name: "sundayShifts",
    control,
  });

  const onSubmit = (data: FormValues) => console.log(data);

  function onResize({ size }: any) {
    setSize({ width: size.width, height: size.height });
  }

  const { loading, error, data } = useQuery(getTemplates);
  const [deleteTemplate] = useMutation(deleteTemplateById, {
    refetchQueries: [{ query: getTemplate }],
  });

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error :(</p>;

  const templates = data?.template;

  const deleteHandler = (id: string) => {
    deleteTemplate({ variables: { id } });
  };

  const weekDays = [
    { name: "Monday", day: monday, append: appendMonday, remove: removeMonday },
    {
      name: "Tuesday",
      day: tuesday,
      append: appendTuesday,
      remove: removeTuesday,
    },
    {
      name: "Wednesday",
      day: wednesday,
      append: appendWednesday,
      remove: removeWednesday,
    },
    {
      name: "Thursday",
      day: thursday,
      append: appendThursday,
      remove: removeThursday,
    },
    { name: "Friday", day: friday, append: appendFriday, remove: removeFriday },
    {
      name: "Sturday",
      day: saturday,
      append: appendSaturday,
      remove: removeSaturday,
    },
    { name: "Sunday", day: sunday, append: appendSunday, remove: removeSunday },
  ];

  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between p-4">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Templates
        </h3>
        <div className="mt-3 sm:ml-4 sm:mt-0">
          <button
            onClick={() => {
              setShowBuilder(true);
            }}
            type="button"
            className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
          >
            <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
            Build Template
          </button>
        </div>
      </div>
      {showBuilder ? (
        <div>
          <form
            className=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-row border justify-around overflow-x-scroll borde border-blue-500">
              {weekDays.map((day, index) => {
                return (
                  <div className="bg-gray-100 rounded-br-xl backdrop-blur-md mx-1 shadow-sm min-w-[200px]" key={index}>
                    <h2 className="w-full bg-red-300 text-semibold text-xl">{day.name}</h2>
                    {day.day.map((field, index) => {
                      return (
                        <div key={field.id}>
                          <section key={field.id}>
                            <select
                              placeholder="Position"
                              {...register(
                                `mondayShifts.${index}.position` as const,
                                {
                                  required: true,
                                }
                              )}
                            >
                              {positions?.map((position: any) => {
                                return (
                                  <option value={position.id}>
                                    {position.name}
                                  </option>
                                );
                              })}
                            </select>
                            <input
                              placeholder="quantity"
                              type="time"
                              {...register(
                                `mondayShifts.${index}.start` as const,
                                {
                                  valueAsNumber: true,
                                  required: true,
                                }
                              )}
                              className={
                                errors?.mondayShifts?.[index]?.start
                                  ? "error"
                                  : ""
                              }
                            />
                            <input
                              placeholder="value"
                              type="time"
                              {...register(
                                `mondayShifts.${index}.end` as const,
                                {
                                  valueAsNumber: true,
                                  required: true,
                                }
                              )}
                              className={
                                errors?.mondayShifts?.[index]?.end
                                  ? "error"
                                  : ""
                              }
                            />
                            <button
                              type="button"
                              onClick={() => day.remove(index)}
                            >
                              DELETE
                            </button>
                          </section>
                        </div>
                      );
                    })}
                    <button
                      type="button"
                      onClick={() =>
                        day.append({
                          position: "",
                          start: "0",
                          end: "0",
                        })
                      }
                    >
                      APPEND
                    </button>
                  </div>
                );
              })}
            </div>
            <Total control={control} />
            <input type="submit" />
          </form>
        </div>
      ) : (
        <div>
          <ul
            role="list"
            className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
          >
            {templates &&
              templates.map((template: any) => {
                return (
                  <li
                    key={template.name}
                    className="col-span-1 flex rounded-md shadow-sm"
                  >
                    <div
                      className={classNames(
                        "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                      )}
                      style={{
                        backgroundColor: template.bgColor,
                        opacity: 0.8,
                      }}
                    >
                      {/* {template.name.slice(0, 2).toUpperCase()} */}t
                    </div>
                    <div className="flex flex-1 items-center justify-between rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                      <div className="flex-1 truncate px-4 py-2 text-sm">
                        <a
                          href={template.href}
                          className="font-medium text-gray-900 hover:text-gray-600"
                        >
                          {template.name}
                        </a>
                        <p className="text-gray-500">
                          {template.members} Members
                        </p>
                      </div>
                      <div className="flex-shrink-0 pr-2 relative">
                        <Menu as="div" className="relative text-left">
                          <Menu.Button className="flex">
                            <EllipsisVerticalIcon
                              className="h-5 w-5 hover:text-gray-500"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 top-6 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="px-1 py-1 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      onClick={() => {
                                        setShowBuilder(true);
                                      }}
                                      className={`${
                                        active
                                          ? "bg-polar-800/90 text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      <PencilSquareIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      Edit
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-polar-800/90 text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      <Square2StackIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      Duplicate
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="px-1 py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-polar-800/90 text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      <ArchiveBoxIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      Archive
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-polar-800/90 text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      <ArrowsPointingOutIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      Move
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="px-1 py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      onClick={() =>
                                        confirm(
                                          "Are you sure you want to delete this template?"
                                        )
                                          ? deleteHandler(template.id)
                                          : null
                                      }
                                      className={`${
                                        active
                                          ? "bg-polar-800/90 text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      <TrashIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      Delete
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </>
  );
}
