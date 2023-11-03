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
  Popover,
  Transition,
} from "@headlessui/react";
import {
  eachMinuteOfInterval,
  endOfDay,
  format,
  getHours,
  getMinutes,
  startOfDay,
} from "date-fns";
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

  const timeSlots = eachMinuteOfInterval(
    {
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
    },
    { step: 30 }
  );

  const deleteHandler = (id: string) => {
    deleteTemplate({ variables: { id } });
  };

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
                          onClick={() => {
                            console.log(containerOffset);
                          }}
                        >
                          <h2 className="w-full bg-red-300/10 text-bold text-xl sticky top-0 backdrop-blur-sm p-2 z-10 flex justify-between px-10">
                            <p className="font-semibold text-gray-800">
                              {day.name.charAt(0).toUpperCase() +
                                day.name.slice(1)}
                            </p>
                            <button
                              type="button"
                              onClick={() =>
                                day.append({
                                  position: "",
                                  start: "13:00",
                                  end: "17:00",
                                })
                              }
                              className="bg-polar-800/90 text-white rounded-md p-2"
                            >
                              <PlusIcon className="w-5 h-5" />
                            </button>
                          </h2>
                          <div className=" overflow-y-scroll overflow-scroll bg-white">
                            <div
                              ref={container}
                              className="flex flex-auto flex-col overflow-auto"
                            >
                              <div className="flex w-full flex-auto h-[70vh] min-h-96">
                                <div className="grid flex-row grid-cols-3 grid-rows-1">
                                  {/* Vertical lines */}
                                  <div
                                    className="row-start-1 col-start-1 grid divide-x divide-gray-100 h-[80vh]"
                                    style={{
                                      gridTemplateColumns:
                                        "repeat(48, minmax(3.6rem, 1fr) [col-end])",
                                    }}
                                  >
                                    <div
                                      ref={containerOffset}
                                      className="col-end-1 h-7"
                                    ></div>
                                    {timeSlots.map((timeSlot, idx) => (
                                      <div key={timeSlot.toString() + idx}>
                                        <div
                                          onClick={(e) => {
                                            console.log(e);
                                          }}
                                          className="sticky w-10 items-center justify-center bg-white border flex text-xs leading-5 text-gray-400"
                                        >
                                          {format(timeSlot, "H:mm")}
                                        </div>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Events */}
                                  {day.day && day.day.length ? (
                                    <ol
                                      className="col-start-1 col-end-4 row-start-1 grid grid-cols-12 w-full"
                                      style={{
                                        gridTemplateColumns:
                                          "0 repeat(288, minmax(0.6rem, 1fr)) auto",
                                        gridTemplateRows:
                                          "repeat(15, minmax(0, 1fr))",
                                      }}
                                    >
                                      <li
                                        className="relative mt-px  flex"
                                        style={{
                                          gridColumn: `${1} / span ${220}`,
                                        }}
                                      ></li>
                                      {day?.day?.map((shift: any) => {
                                        const startTimeStr = shift.start;
                                        const finishTimeStr = shift.end;

                                        let startHour =
                                          getHours(new Date(startTimeStr)) * 12;
                                        let startMinute =
                                          getMinutes(new Date(startTimeStr)) /
                                          5;

                                        const startNumber =
                                          startHour + startMinute + 2;

                                        let endHour =
                                          getHours(new Date(finishTimeStr)) *
                                          12;
                                        let endMinute =
                                          getMinutes(new Date(finishTimeStr)) /
                                          5;

                                        const endNumber =
                                          endHour + endMinute + 2 - startNumber;
                                        return (
                                          <Popover
                                            key={shift.id}
                                            className="relative mt-px m-0.5 flex"
                                            style={{
                                              gridColumn: `${startNumber} / span ${endNumber}`,
                                            }}
                                          >
                                            {({ open }) => (
                                              <>
                                                <Popover.Button
                                                  style={{
                                                    backgroundColor:
                                                      shift.position.bgColor,
                                                  }}
                                                  className="group no-scrollbar min-h-8 items-center shadow-light justify-center w-full inset-1 flex flex-col overflow-y-auto rounded-lg p-2 text-xs  hover:scale-[1.01] duration-200"
                                                >
                                                  <p className="font-semibold text-gray-800 text-base">{`${shift.start} ${shift.end} `}</p>
                                                </Popover.Button>
                                                <Transition
                                                  show={open}
                                                  as={Fragment}
                                                  enter="transition ease-out duration-200"
                                                  enterFrom="opacity-0 translate-y-1"
                                                  enterTo="opacity-100 translate-y-0"
                                                  leave="transition ease-in duration-150"
                                                  leaveFrom="opacity-100 translate-y-0"
                                                  leaveTo="opacity-0 translate-y-1"
                                                >
                                                  <Popover.Panel
                                                    static
                                                    className="absolute z-10 max-w-sm px-2 -top-8 transform -translate-x-1/2 left-1/2 sm:px-0 "
                                                  >
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                      <div className="relative grid gap-6 bg-white p-1"></div>
                                                    </div>
                                                  </Popover.Panel>
                                                </Transition>
                                              </>
                                            )}
                                          </Popover>
                                        );
                                      })}
                                    </ol>
                                  ) : (
                                    <div className="bg-polar-50 rounded-lg p-10 border shadow-lg m-2 h-1/2 relative flex items-center justify-center top-1/4 overflow-">
                                      <EmptyState
                                        title="Shift"
                                        handler={() =>
                                          day.append({
                                            position: "",
                                            start: "2016-07-27T07:45:00Z",
                                            end: "2016-07-27T11:45:00Z",
                                          })
                                        }
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            {/* <Datepicker selectedDay={selectedDay} setSelectedDay={setSelectedDay} show={showCalendar} /> */}
                          </div>
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
