import {
  CheckBadgeIcon,
  ChevronLeftIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { getTemplates } from "../../queries/templates/queries";
import {
  deleteTemplateById,
  updateTemplateById,
} from "../../queries/templates/mutations";
import { LoadingAnimation } from "../../assets/AnimationComponents/AnimationComponents";
import {
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import {
  TemplateContext,
  TemplateContextType,
} from "../../providers/TemplateContext";
import EmptyState from "../../components/EmptyState";
import Modal from "../../components/Modal";
import Avatar from "../../components/Avatar";
import { Template } from "./components/TemplateModal";

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

type TemplateUpdate = {
  isUpdate: boolean;
  data: {
    id: string;
    name: string;
    hours: number;
    createdAt: string;
    updatedAt: string;
    day: {
      id: string;
      name: string;
      day: Section[];
    }[];
  } | null;
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
  const [update, setUpdate] = useState<TemplateUpdate>({
    isUpdate: false,
    data: null,
  });

  const [showTemplateModal, setShowTemplateModal] = useState(false);

  function modalHandler(state: boolean) {
    setShowTemplateModal(state);
  }
  function builderHandler(state: boolean) {
    setShowBuilder(state);
  }

  
  // const { positions } = useSession();
  
  const { loading, error, data } = useQuery(getTemplates);
  const [deleteTemplate] = useMutation(deleteTemplateById, {
    refetchQueries: [{ query: getTemplates }],
  });
  const [updateTemplateOne] = useMutation(updateTemplateById);

  const onSubmit = (data: FormValues) => {
    updateTemplateOne({
      variables: { id: update?.data?.id, shifts: data },
      refetchQueries: [{ query: getTemplates }],
    });
  }

  if (loading) return <LoadingAnimation />;
  if (error) return <p>Error :(</p>;

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
              modalHandler(true);
              setUpdate({ isUpdate: false, data: null });
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
                          className="bg-jagged-ice-50 self-center rounded-br-xl backdrop-blur-md mx-auto shadow-sm min-w-[200px] h-[80vh] overflow-scroll rounded-xl shadow-sm-xl"
                          key={index}
                        >
                          <h2 className="w-full bg-red-300/10 text-bold text-xl sticky top-0 backdrop-blur-sm p-2 z-10 flex justify-between px-10">
                            <div className="flex space-x-10  items-center">
                              <button
                                onClick={() => setShowBuilder(false)}
                                className="flex  items-center "
                              >
                                <ChevronLeftIcon className="w-5 h-5" />
                                <span className="font-normal text-gray-800">
                                  Back
                                </span>
                              </button>
                              <p className="font-semibold text-gray-800">
                                {day.name.charAt(0).toUpperCase() +
                                  day.name.slice(1)}
                              </p>
                            </div>
                            <button
                              type="submit"
                              onClick={handleSubmit(onSubmit)}
                              // disabled={TODO}
                              className="bg-polar-800/90 text-white rounded-md p-2"
                            >
                              <CheckBadgeIcon className="w-5 h-5" />
                            </button>
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
                              <div className="flex w-full  h-[70vh] min-h-96 justify-center my-2 min-w-[600px]">
                                <div className="grid flex-row grid-cols-1 grid-rows-1 ">
                                  {/* Vertical lines */}
                                  <div
                                    className="row-start-1 col-start-1 grid divide-x divide-gray-100 h-[70vh]"
                                    style={{
                                      gridTemplateColumns:
                                        "repeat(48, minmax(1.8rem, 1fr))",
                                    }}
                                  >
                                    <div
                                      ref={containerOffset}
                                      className="col-end-1 h-7"
                                    ></div>
                                    {timeSlots.map((timeSlot, idx) => (
                                      <div key={timeSlot.toString() + idx}>
                                        <p
                                          className="sticky w-10 items-center justify-center bg-white border flex text-[10px] leading-5 text-gray-400"
                                        >
                                          {format(timeSlot, "H:mm")}
                                        </p>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Events */}
                                  {day.day && day.day.length ? (
                                    <ol
                                      className="col-start-1 col-end-4 row-start-1 grid grid-cols-12 w-full"
                                      style={{
                                        gridTemplateColumns:
                                          "0 repeat(288, minmax(0.3rem, 0.5fr)) auto",
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
                                            className="relative mt-px m-0.5 flex rounded-md"
                                            style={{
                                              gridColumn: `${startNumber} / span ${endNumber}`,
                                              backgroundColor: "red",
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
                                    <div className="bg-polar-50 rounded-lg p-10 border shadow-lg w-1/4 absolute left-[35vw] min-w-[250px] top-1/4 ">
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
          <div>
            {data && data.template && data.template.length !== 0 ? (
              <ul
                role="list"
                className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
              >
                {data.template.map((template: any) => (
                  <li
                    key={template.id}
                    className="overflow-hidden rounded-xl border border-gray-200 m-"
                  >
                    <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                     <Avatar firstName={template.name} className="w-7 bg-purple-300" />
                      <div className="text-sm font-medium leading-6 text-gray-900">
                        {template.name}
                      </div>
                      <Menu as="div" className="relative ml-auto">
                        <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Open options</span>
                          <EllipsisHorizontalIcon
                            className="h-5 w-5"
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
                          <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={() => {
                                    setUpdate({
                                      isUpdate: true,
                                      data: template,
                                    });
                                    builderHandler(true);
                                  }}
                                  className={classNames(
                                    active ? "bg-gray-50" : "",
                                    "block px-3 py-1 text-sm leading-6 text-gray-900"
                                  )}
                                >
                                  View
                                  <span className="sr-only">
                                    , {template.name}
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={() => deleteHandler(template.id)}
                                  className={classNames(
                                    active ? "bg-gray-50" : "",
                                    "block px-3 py-1 text-sm leading-6 text-gray-900"
                                  )}
                                >
                                  Delete
                                  <span className="sr-only">
                                    , {template.name}
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                    <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Created At</dt>
                        <dd className="text-gray-700">
                          <time dateTime={template.createdAt}>
                            {format(new Date(template.createdAt), 'dd MMM yyyy')} at {format(new Date(template.createdAt), 'HH:mm')}
                          </time>
                        </dd>
                      </div>
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Last Updated At</dt>
                        <dd className="text-gray-700">
                          <time dateTime={template.createdAt}>
                            {format(new Date(template.updatedAt), 'dd MMM yyyy')} at {format(new Date(template.updatedAt), 'HH:mm')}
                          </time>
                        </dd>
                      </div>
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Budgeted Hours</dt>
                        <dd className="text-gray-700">
                          <p>
                            {template.hours}
                          </p>
                        </dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState
                title={"Template"}
                handler={() => {
                  setShowTemplateModal(true);
                }}
              />
            )}
          </div>
          <Modal
            data={{ ...weekDays, modalHandler, builderHandler, update }}
            open={showTemplateModal}
            title="New Template"
            setOpen={() => {
              modalHandler(false);
            }}
            children={Template}
          />
        </div>
      )}
    </>
  );
}
