import {
  ArchiveBoxIcon,
  ArrowsPointingOutIcon,
  // CheckIcon,
  // ChevronUpDownIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  PlusIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { getTemplate, getTemplates } from "../queries/templates/queries";
import { deleteTemplateById } from "../queries/templates/mutations";
import { LoadingAnimation } from "../assets/AnimationComponents/AnimationComponents";
import {
  // Listbox,
  Menu,
  Transition,
} from "@headlessui/react";
// import { Controller } from "react-hook-form";
// import { useSession } from "../providers/Session";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import {
  TemplateContext,
  TemplateContextType,
} from "../providers/TemplateContext";
import EmptyState from "../components/EmptyState";
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Templates() {
  const container = useRef(null);
  const containerNav = useRef(null);
  const containerOffset = useRef(null);

  const { positions } = useSession();

  useEffect(() => {
    // Set the container scroll position based on the current time.
    if (container.current && containerNav.current && containerOffset.current) {
      const currentMinute = new Date().getHours() * 60;
      // @ts-ignore
      container.current.scrollTop =
      // @ts-ignore
        ((container.current.scrollHeight -
          // @ts-ignore
          containerNav.current.offsetHeight -
          // @ts-ignore
          containerOffset.current.offsetHeight) *
          currentMinute) /
        1440;
    }
  }, []);
  const {
    weekDays,
    //  register,
    handleSubmit,
    // control
  } = useContext(TemplateContext) || ({} as TemplateContextType);
  const [showBuilder, setShowBuilder] = useState(false);

  // const { positions } = useSession();

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

  const hours = [
    "12AM",
    "1AM",
    "2AM",
    "3AM",
    "4AM",
    "5AM",
    "6AM",
    "7AM",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
    "10PM",
    "11PM",
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
                          className="bg-jagged-ice-50 rounded-br-xl backdrop-blur-md mx-auto shadow-sm min-w-[200px] h-[38rem] overflow-scroll rounded-xl shadow-sm-xl"
                          key={index}
                        >
                          <h2 className="w-full bg-red-300/10 text-bold text-xl sticky top-0 backdrop-blur-sm p-2">
                            {day.name.charAt(0).toUpperCase() +
                              day.name.slice(1)}
                          </h2>
                          {/* <div className="flex flex-col">
                            {day.day.map((shift, index) => {
                              return (
                                <div
                                  key={shift.id}
                                  className="flex flex-row justify-between items-center p-1 mx-auto space-x-10"
                                >
                                  <div className="flex flex-col items-start px-1 min-w-24">
                                    <label
                                      htmlFor="position"
                                      className="text-sm font-semibold text-gray-700"
                                    >
                                      Position
                                    </label>
                                    <Controller
                                      name={`${day.name}Shifts.${index}.position`}
                                      control={control}
                                      rules={{ required: true }}
                                      render={({ field: { onChange } }) => (
                                        <Listbox onChange={onChange}>
                                          <div className="relative mt-1 w-full">
                                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white p-1 text-left shadow-md focus:outline-none focus-visible:border-polar-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-900 sm:text-sm ">
                                              {({ value }) => {
                                                return (
                                                  <span className="flex w-full">
                                                    <span
                                                      className="ml-3 block truncate w-48
                                                  "
                                                    >
                                                      {positions &&
                                                        positions.find(
                                                          (position: any) =>
                                                            position.id ===
                                                            value
                                                        )?.name}
                                                    </span>
                                                    <ChevronUpDownIcon
                                                      className="ml-3 h-5 w-5 text-gray-400"
                                                      aria-hidden="true"
                                                    />
                                                  </span>
                                                );
                                              }}
                                            </Listbox.Button>
                                            <Transition
                                              as={Fragment}
                                              enter="transition ease-out duration-300"
                                              enterFrom="opacity-0"
                                              enterTo="opacity-100"
                                              leave="transition ease-in duration-300"
                                              leaveFrom="opacity-100"
                                              leaveTo="opacity-0"
                                            >
                                              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                                                {positions &&
                                                  positions.map(
                                                    (position: any) => (
                                                      <Listbox.Option
                                                        key={position.id}
                                                        className={({
                                                          active,
                                                        }) =>
                                                          `relative cursor-default select-none px-auto py-2 ${
                                                            active
                                                              ? "bg-polar-100 text-polar-900/80"
                                                              : "text-polar-900"
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
                                                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-polar-600">
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
                                  </div>
                                  <div className="flex flex-col items-start px-1 min-w-24">
                                    <label
                                      htmlFor="start"
                                      className="text-sm font-semibold text-gray-700"
                                    >
                                      Start
                                    </label>
                                    <input
                                      {...register(
                                        `${day.name}Shifts.${index}.start`
                                      )}
                                      type="time"
                                      className="relative w-full cursor-default rounded-lg bg-white p-1 text-left shadow-md focus:outline-none focus-visible:border-polar-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-900 sm:text-sm "
                                    />
                                  </div>
                                  <div className="flex flex-col items-start px-1 min-w-24">
                                    <label
                                      htmlFor="end"
                                      className="text-sm font-semibold text-gray-700"
                                    >
                                      End
                                    </label>
                                    <input
                                      {...register(
                                        `${day.name}Shifts.${index}.end`
                                      )}
                                      type="time"
                                      className="relative w-full cursor-default rounded-lg bg-white p-1 text-left shadow-md focus:outline-none focus-visible:border-polar-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-900 sm:text-sm "
                                    />
                                  </div>
                                  <button
                                    className="flex items-center justify-center p-2 bg-red-200 hover:bg-red-400 transition duration-400 rounded-lg"
                                    onClick={() => day.remove(index)}
                                  >
                                    <TrashIcon className="w-6 h-6 text-white" />
                                  </button>
                                </div>
                              );
                            })}
                          </div> */}
                          <div
                            ref={container}
                            className="isolate flex flex-auto flex-col overflow-auto bg-white"
                          >
                            <div
                              style={{ width: "165%" }}
                              className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
                            >
                              <div
                                ref={containerNav}
                                className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8"
                              >
                                <div className="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
                                  <button
                                    type="button"
                                    className="flex flex-col items-center pb-3 pt-2"
                                  >
                                    M{" "}
                                    <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                                      10
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="flex flex-col items-center pb-3 pt-2"
                                  >
                                    T{" "}
                                    <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                                      11
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="flex flex-col items-center pb-3 pt-2"
                                  >
                                    W{" "}
                                    <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                                      12
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="flex flex-col items-center pb-3 pt-2"
                                  >
                                    T{" "}
                                    <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                                      13
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="flex flex-col items-center pb-3 pt-2"
                                  >
                                    F{" "}
                                    <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                                      14
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="flex flex-col items-center pb-3 pt-2"
                                  >
                                    S{" "}
                                    <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                                      15
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="flex flex-col items-center pb-3 pt-2"
                                  >
                                    S{" "}
                                    <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                                      16
                                    </span>
                                  </button>
                                </div>

                                <div
                                  className="-mr-px hidden divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid"
                                  style={{
                                    gridTemplateColumns:
                                      "repeat(48, minmax(3.5rem, 1fr))",
                                  }}
                                >
                                  <div
                                    ref={containerOffset}
                                    className="row-end-10 h-7"
                                  ></div>

                                  {hours.map((hour) => {
                                    return (
                                      <div>
                                        <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                          {hour}
                                        </div>
                                      </div>
                                    );
                                  })}
                                  <div />

                                  {/* <div className="col-end-1 w-14" />
                                  <div className="flex items-center justify-center py-3">
                                    <span>
                                      Mon{" "}
                                      <span className="items-center justify-center font-semibold text-gray-900">
                                        10
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-center py-3">
                                    <span>
                                      Tue{" "}
                                      <span className="items-center justify-center font-semibold text-gray-900">
                                        11
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-center py-3">
                                    <span className="flex items-baseline">
                                      Wed{" "}
                                      <span className="ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                                        12
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-center py-3">
                                    <span>
                                      Thu{" "}
                                      <span className="items-center justify-center font-semibold text-gray-900">
                                        13
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-center py-3">
                                    <span>
                                      Fri{" "}
                                      <span className="items-center justify-center font-semibold text-gray-900">
                                        14
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-center py-3">
                                    <span>
                                      Sat{" "}
                                      <span className="items-center justify-center font-semibold text-gray-900">
                                        15
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-center py-3">
                                    <span>
                                      Sun{" "}
                                      <span className="items-center justify-center font-semibold text-gray-900">
                                        16
                                      </span>
                                    </span>
                                  </div> */}
                                </div>
                              </div>
                              <div className="flex flex-auto">
                                <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
                                <div className="grid flex-auto grid-rows-1 grid-cols-1">
                                  {/* Horizontal lines */}
                                  <div
                                    className="row-start-1 row-end-2 col-start-1 grid divide-y divide-gray-100"
                                    style={{
                                      gridTemplateRows:
                                        "repeat(7, minmax(3.5rem, 1fr))",
                                    }}
                                  >
                                    <div
                                      ref={containerOffset}
                                      className="row-end-1 h-7"
                                    ></div>
                                    {positions.map((position: any) => {
                                      return (
                                        <div>
                                          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                            {position.name}
                                          </div>
                                        </div>
                                      );
                                    })}

                                    {/* Vertical lines */}
                                    <div className="row-start-1 row-end-2 col-start-1 hidden grid-row-7 grid-cols-1 divide-y divide-gray-100 sm:grid sm:grid-rows-7">
                                      <div className="row-start-1 col-span-full" />
                                      <div className="row-start-2 col-span-full" />
                                      <div className="row-start-3 col-span-full" />
                                      <div className="row-start-4 col-span-full" />
                                      <div className="row-start-5 col-span-full" />
                                      <div className="row-start-6 col-span-full" />
                                      <div className="row-start-7 col-span-full" />
                                      <div className="row-start-8 col-span-full w-8" />
                                    </div>

                                    {/* Events */}
                                    <ol
                                      className="row-start-1 row-end-2 col-start-1 grid grid-rows-1 sm:grid-rows-7 sm:pr-8"
                                      style={{
                                        gridTemplateRows:
                                          "1.75rem repeat(288, minmax(0, 1fr)) auto",
                                      }}
                                    >
                                      <li
                                        className="relative mt-px flex sm:col-start-3"
                                        style={{ gridRow: "74 / span 12" }}
                                      >
                                        <a
                                          href="#"
                                          className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
                                        >
                                          <p className="order-1 font-semibold text-blue-700">
                                            Breakfast
                                          </p>
                                          <p className="text-blue-500 group-hover:text-blue-700">
                                            <time dateTime="2022-01-12T06:00">
                                              6:00 AM
                                            </time>
                                          </p>
                                        </a>
                                      </li>
                                      <li
                                        className="relative mt-px flex sm:col-start-3"
                                        style={{ gridRow: "92 / span 30" }}
                                      >
                                        <a
                                          href="#"
                                          className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                                        >
                                          <p className="order-1 font-semibold text-pink-700">
                                            Flight to Paris
                                          </p>
                                          <p className="text-pink-500 group-hover:text-pink-700">
                                            <time dateTime="2022-01-12T07:30">
                                              7:30 AM
                                            </time>
                                          </p>
                                        </a>
                                      </li>
                                      <li
                                        className="relative mt-px hidden sm:col-start-6 sm:flex"
                                        style={{ gridRow: "122 / span 24" }}
                                      >
                                        <a
                                          href="#"
                                          className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-gray-100 p-2 text-xs leading-5 hover:bg-gray-200"
                                        >
                                          <p className="order-1 font-semibold text-gray-700">
                                            Meeting with design team at Disney
                                          </p>
                                          <p className="text-gray-500 group-hover:text-gray-700">
                                            <time dateTime="2022-01-15T10:00">
                                              10:00 AM
                                            </time>
                                          </p>
                                        </a>
                                      </li>
                                    </ol>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              day.append({
                                position: "",
                                start: "",
                                end: "",
                              })
                            }
                            className="bg-polar-800/90 text-white rounded-md p-2"
                          >
                            <PlusIcon className="w-5 h-5" />
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
          {data && data.templates && data.templates.length === 0 ? (
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
          ) : (
            <EmptyState
              title={"Template"}
              handler={() => {
                setShowBuilder(true);
              }}
            />
          )}
        </div>
      )}
    </>
  );
}
