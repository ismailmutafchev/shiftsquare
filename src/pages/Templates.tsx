import {
  ArchiveBoxIcon,
  ArrowsPointingOutIcon,
  CheckIcon,
  ChevronUpDownIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  PlusIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useContext, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { getTemplate, getTemplates } from "../queries/templates/queries";
import { deleteTemplateById } from "../queries/templates/mutations";
import { LoadingAnimation } from "../assets/AnimationComponents/AnimationComponents";
import { Listbox, Menu, Transition } from "@headlessui/react";
import { Controller, useForm } from "react-hook-form";
import { useSession } from "../providers/Session";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { TemplateContext } from "../providers/TemplateContext";

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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Templates() {
  const weekDays = useContext(TemplateContext);
  const [showBuilder, setShowBuilder] = useState(false);

  const { positions } = useSession();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      mondayShifts: [
        { position: positions && positions[0], start: "9:00", end: "17:00" },
      ],
    },
    mode: "onBlur",
  });

  const onSubmit = (data: FormValues) => console.log(data);

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

  console.log(weekDays)

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
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper top-2"
          >
            <div>
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row justify-around overflow-x-scroll borde border-blue-500">
                  {weekDays &&
                    weekDays.map((day, index) => {
                      return (
                        <SwiperSlide
                          className="bg-jagged-ice-50 rounded-br-xl backdrop-blur-md mx-auto shadow-sm min-w-[200px] h-96 overflow-scroll rounded-xl shadow-sm-xl"
                          key={index}
                        >
                          <h2 className="w-full bg-red-300/10 text-semibold text-2xl sticky top-0 backdrop-blur-sm p-2">
                            {day.name}
                          </h2>
                          {day.day.map((field, index) => {
                            return (
                              <div key={field.id}>
                                <section key={field.id}>
                                  <Controller
                                    name={`mondayShifts.${index}`}
                                    control={control}
                                    rules={{ required: true }}
                                    render={({
                                      field: {onChange},
                                    }) => (
                                      <Listbox onChange={onChange}>
                                        <div className="relative mt-1">
                                          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            <span className="block truncate">
                                              {/* {value} */}
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                              <ChevronUpDownIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          </Listbox.Button>
                                          <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                          >
                                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                              {positions.map(
                                                (position: any) => (
                                                  <Listbox.Option
                                                    key={position.id}
                                                    className={({ active }) =>
                                                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                        active
                                                          ? "bg-amber-100 text-amber-900"
                                                          : "text-gray-900"
                                                      }`
                                                    }
                                                    value={position.id}
                                                  >
                                                    {({ selected }) => (
                                                      <>
                                                        <span
                                                          className={`block truncate ${
                                                            selected
                                                              ? "font-medium"
                                                              : "font-normal"
                                                          }`}
                                                        >
                                                          {position.name}
                                                        </span>
                                                        {selected ? (
                                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                            <CheckIcon
                                                              className="h-5 w-5"
                                                              aria-hidden="true"
                                                            />
                                                          </span>
                                                        ) : null}
                                                      </>
                                                    )}
                                                  </Listbox.Option>
                                                )
                                              )}
                                            </Listbox.Options>
                                          </Transition>
                                        </div>
                                      </Listbox>
                                    )}
                                  />

                                  {/* <select
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
                                </select> */}
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
                        </SwiperSlide>
                      );
                    })}
                </div>
                <input type="submit" />
              </form>
            </div>
          </Swiper>
        </>
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
                    ></div>
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
