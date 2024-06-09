import { Fragment, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  addDays,
  addHours,
  addMonths,
  eachDayOfInterval,
  eachMinuteOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  getHours,
  getMinutes,
  isSameDay,
  isSameMonth,
  isToday,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
} from "date-fns";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoadingAnimation } from "../../../assets/AnimationComponents/AnimationComponents";
import { getShifts } from "../../../queries/shift/queries";
import { useMutation } from "@apollo/client";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "../../../components/Modal";
import {
  ChevronDownIcon,
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  PlusIcon,
  PrinterIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  commitShiftsMany,
  deleteShiftById,
} from "../../../queries/shift/mutations";
import { Menu, Popover, Transition } from "@headlessui/react";
import Datepicker from "../../../components/Datepicker";
import jsPDF from "jspdf";
import { RotaPrint } from "../../../components/pdf/RotaPrint";
// import EmptyState from "../../../components/EmptyState";
import AddShift from "../components/ShiftModal";
import { CopyWeekModal } from "../components/CopyWeekModal";
import { useCalendar } from "../../../hooks/calendar";
import { useToast } from "../../../hooks/toast";
import { useSession } from "../../../hooks/session";

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DayViewDraggable({
  selectedDayHandler,
  selectedDay,
}: {
  //eslint-disable-next-line
  selectedDayHandler: (day: Date) => void;
  selectedDay: Date;
}) {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const container = useRef(null);
  const containerNav = useRef(null);
  const containerOffset = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [update, setUpdate] = useState({
    isUpdate: false,
    data: {},
  });
  const [plusIconView, setPlusIconView] = useState<string | null>(null);

  const toast = useToast(4000);

  const { data, loading, error: dataError } = useCalendar();
  const { permissions, profile } = useSession();
  const { isLoading, error } = useAuth0();

  const allowedToEdit =
    permissions.includes("admin") || permissions.includes("manager");

  const days = eachDayOfInterval({
    start: new Date(
      startOfWeek(startOfMonth(selectedMonth), { weekStartsOn: 1 })
    ),
    end: new Date(endOfWeek(endOfMonth(selectedMonth), { weekStartsOn: 1 })),
  });

  // const prevWeek = eachDayOfInterval({
  //   start: startOfWeek(subDays(selectedDay, 7), { weekStartsOn: 1 }),
  //   end: endOfWeek(subDays(selectedDay, 7), { weekStartsOn: 1 }),
  // });

  const weekDays = eachDayOfInterval({
    start: startOfWeek(selectedDay, { weekStartsOn: 1 }),
    end: endOfWeek(selectedDay, { weekStartsOn: 1 }),
  });

  // const prevWeek = eachDayOfInterval({
  //   start: startOfWeek(subDays(selectedDay, 7), { weekStartsOn: 1 }),
  //   end: endOfWeek(subDays(selectedDay, 7), { weekStartsOn: 1 }),
  // });

  const nextWeek = eachDayOfInterval({
    start: startOfWeek(addDays(selectedDay, 7), { weekStartsOn: 1 }),
    end: endOfWeek(addDays(selectedDay, 7), { weekStartsOn: 1 }),
  });

  const [deleteShift] = useMutation(deleteShiftById, {
    refetchQueries: [
      {
        query: getShifts,
        variables: {
          start: startOfDay(selectedDay),
          end: endOfDay(selectedDay),
        },
        fetchPolicy: "network-only",
      },
    ],
    onCompleted: () => {
      toast("success", "Shift deleted successfully");
    },
  });

  const [commitShfts] = useMutation(commitShiftsMany, {
    variables: {
      start: startOfDay(selectedDay),
      end: endOfDay(selectedDay),
      organizationId: "1",
    },
    onCompleted: () => {
      toast("success", "Rota committed successfully");
    },
  });

  function submit() {
    commitShfts({
      variables: {
        start: startOfWeek(selectedDay, { weekStartsOn: 1 }),
        end: endOfWeek(selectedDay, { weekStartsOn: 1 }),
        organizationId: profile?.organizationId,
      },
    });
  }

  if (error || dataError) {
    return <div>Oops... {dataError?.message}</div>;
  }

  const timeSlots = eachMinuteOfInterval(
    {
      start: startOfDay(selectedDay),
      end: endOfDay(selectedDay),
    },
    { step: 30 }
  );

  function modalHandler(state: boolean) {
    setShowModal(state);
  }

  function copyModalHandler(state: boolean) {
    setShowCopyModal(state);
  }

  const openPdf = () => {
    const capture = document.querySelector(".rota-print");
    const doc = new jsPDF("portrait", "px", [2480, 3510], true);
    doc.html(capture as HTMLElement, {
      callback: function (doc) {
        // doc.save(`Rota ${format(selectedDay, "d MMMM yyyy")}.pdf`);
        // Get the blob URL of the PDF content
        const blob = doc.output("bloburl");

        // Open the blob URL in a new tab
        window.open(blob, "_blank");
      },
    });
  };

  return (
    <div className="flex flex-col">
      {allowedToEdit && <RotaPrint date={selectedDay} />}
      <header className="sm:flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
        <div className="flex text-center justify-center items-baseline space-x-2 md:flex-col">
          <h1 className="text-xs md:text-base font-poppins font-semibold leading-6 text-gray-900">
            {format(new Date(selectedDay), "d MMMM yyyy")}
          </h1>
          <p className="mt-1 text-xs md:text-sm text-gray-500">
            {format(selectedDay, "iiii")}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className={`inline-flex items-center rounded-md bg-white-600 px-1 md:px-3 py-1 md:py-2  text-xs md:text-sm font-semibold text-black shadow-sm hover:bg-gray-50 ring-1 ring-inset ring-gray-300 ${
              allowedToEdit ? "" : "hidden"
            }`}
            onClick={submit}
          >
            <p>Commit Rota</p>
            <PaperAirplaneIcon className="ml-2 h-4 w-4" aria-hidden="true" />
          </button>
          <button
            className={`inline-flex items-center rounded-md bg-white-600 px-1 md:px-3 py-1 md:py-2  text-xs md:text-sm font-semibold text-black shadow-sm hover:bg-gray-50 ring-1 ring-inset ring-gray-300 ${
              allowedToEdit ? "" : "hidden"
            }`}
            onClick={openPdf}
          >
            <p>
              Print <span className="text-red-500 text-xs">PDF</span>
            </p>
            <PrinterIcon className="ml-2 h-4 w-4" aria-hidden="true" />
          </button>
          <button
            className={`inline-flex items-center rounded-md bg-white-600 px-1 md:px-3 py-1 md:py-2  text-xs md:text-sm font-semibold text-black shadow-sm hover:bg-gray-50 ring-1 ring-inset ring-gray-300 ${
              allowedToEdit ? "" : "hidden"
            }`}
            onClick={() => {
              setShowCopyModal(true);
            }}
          >
            <p>Copy Week</p>
            <DocumentDuplicateIcon
              className="ml-2 h-4 w-4"
              aria-hidden="true"
            />
          </button>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              onClick={() => {
                setShowModal(true), setUpdate({ isUpdate: false, data: {} });
              }}
              type="button"
              className={`inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90 ${
                allowedToEdit ? "" : "hidden"
              }`}
            >
              <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Add Shift
            </button>
          </div>
          <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <div
              className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300"
              aria-hidden="true"
            />
            <button
              type="button"
              className="flex items-center justify-center rounded-l-md py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
              onClick={() => {
                setSelectedMonth(selectedDay);
                selectedDayHandler(subDays(selectedDay, 1));
                if (!isSameMonth(selectedDay, subDays(selectedDay, 1))) {
                  setSelectedMonth(subMonths(selectedDay, 1));
                }
              }}
            >
              <span className="sr-only">Previous day</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            >
              {isToday(selectedDay) ? "Today" : format(selectedDay, "d MMM")}
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              type="button"
              onClick={() => {
                setSelectedMonth(selectedDay);
                selectedDayHandler(addDays(selectedDay, 1));
                if (!isSameMonth(selectedDay, addDays(selectedDay, 1))) {
                  setSelectedMonth(addMonths(selectedDay, 1));
                }
              }}
              className="flex items-center justify-center rounded-r-md py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next day</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              type="button"
              onClick={() => {
                setSelectedMonth(selectedDay);
                selectedDayHandler(new Date());
                if (!isSameMonth(selectedDay, new Date())) {
                  setSelectedMonth(new Date());
                }
              }}
              className="ml-6 rounded-md bg-white-600 px-3 py-2 text-sm font-semibold text-black shadow-sm border border-gray-300 hover:bg-gray-50 "
            >
              See Today
            </button>
          </div>

          <div className="hidden md:ml-4 md:flex md:items-center ">
            <div className="top-16 w-56 text-right z-10">
              <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button
                        className={`inline-flex items-center rounded-md
                        px-3 py-2 text-sm font-semibold 
                        shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1
                         ring-polar-800/90 focus-visible:outline focus-visible:outline-2
                          focus-visible:outline-offset-2 focus-visible:outline-polar-800/90
                          ${
                            open
                              ? "bg-gray-200 ring-1 text-polar-800/90"
                              : "bg-polar-800/90 text-white"
                          }`}
                      >
                        {selectedDay.toDateString()}
                        <ChevronDownIcon
                          className="ml-2 -mr-1 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items static>
                        <div className="relative">
                          <div className="absolute w-[220%] top-6 right-0">
                            <Datepicker
                              selectedDay={selectedDay}
                              setSelectedDay={selectedDayHandler}
                            />
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>
      </header>
      {isLoading || loading ? (
        <div>
          <LoadingAnimation />
        </div>
      ) : (
        <div className="overflow-y-scroll overflow-scroll bg-white flex items-center justify-center ">
          <div
            ref={container}
            className="flex flex-auto flex-col overflow-clip"
          >
            <Swiper
              ref={containerNav}
              // initialSlide={1}
              // onSlideNextTransitionEnd={() => {
              //   selectedDayHandler(addDays(selectedDay, 7));
              // }}
              onTransitionStart={({ touches }) => {
                console.log(touches.diff);
                if (touches) {
                  if (touches.diff > 20) {
                    selectedDayHandler(subDays(selectedDay, 7));
                  } else if (touches.diff < -20) {
                    selectedDayHandler(addDays(selectedDay, 7));
                  } else {
                    return;
                  }
                }
              }}
              className="sticky relatice top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow ring-1 ring-black ring-opacity-5 md:hidden"
            >

              {/* Swiper slides */}
              {/* <SwiperSlide defaultChecked className="grid grid-cols-7">
                {prevWeek.map((day, idx) => {
                  const isSelected = selectedDay && isSameDay(selectedDay, day);
                  return (
                    <button
                      key={day.toDateString() + idx}
                      onClick={() => {
                        selectedDayHandler(day);
                        setSelectedMonth(day);
                        if (!isSameMonth(day, selectedMonth)) {
                          setSelectedMonth(day);
                        }
                      }}
                      type="button"
                      className={classNames(
                        "py-1.5 hover:bg-gray-100 focus:z-10 flex flex-col items-center",
                        isSameMonth(day, selectedMonth)
                          ? "bg-white"
                          : "bg-gray-50",
                        (isToday(day) || isSelected) && "font-semibold",
                        isSelected &&
                          "font-semibold text-polar-600 border border-gray-200 rounded-lg bg-gray-900",
                        !isSelected &&
                          isSameMonth(day, selectedMonth) &&
                          !isToday(day) &&
                          "text-gray-900",
                        !isSelected &&
                          !isSameMonth(day, selectedMonth) &&
                          !isToday(day) &&
                          "text-gray-400",
                        isToday(day) && !isSelected && "text-polar-600",
                        idx === 0 && "rounded-tl-lg",
                        idx === 6 && "rounded-tr-lg",
                        idx === days.length - 7 && "rounded-bl-lg",
                        idx === days.length - 1 && "rounded-br-lg"
                      )}
                    >
                      <span>{format(day, "E")}</span>
                      <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold">
                        {format(day, "dd")}
                      </span>
                    </button>
                  );
                })}
              </SwiperSlide> */}
              <SwiperSlide
                defaultChecked
                className="grid grid-cols-7"
              >
                {weekDays.map((day, idx) => {
                  const isSelected = selectedDay && isSameDay(selectedDay, day);
                  return (
                    <button
                      key={day.toDateString() + idx}
                      onClick={() => {
                        selectedDayHandler(day);
                        setSelectedMonth(day);
                        if (!isSameMonth(day, selectedMonth)) {
                          setSelectedMonth(day);
                        }
                      }}
                      type="button"
                      className={classNames(
                        "py-1.5 hover:bg-gray-100 focus:z-10 flex flex-col items-center col-span-1 row-span-1",
                        isSameMonth(day, selectedMonth)
                          ? "bg-white"
                          : "bg-gray-50",
                        (isToday(day) || isSelected) && "font-semibold",
                        isSelected &&
                          "font-semibold text-polar-600 border border-gray-200 rounded-lg bg-white",
                        !isSelected &&
                          isSameMonth(day, selectedMonth) &&
                          !isToday(day) &&
                          "text-gray-900",
                        !isSelected &&
                          !isSameMonth(day, selectedMonth) &&
                          !isToday(day) &&
                          "text-gray-400",
                        isToday(day) && !isSelected && "text-polar-600",
                        idx === 0 && "rounded-tl-lg",
                        idx === 6 && "rounded-tr-lg",
                        idx === days.length - 7 && "rounded-bl-lg",
                        idx === days.length - 1 && "rounded-br-lg"
                      )}
                    >
                      <span>{format(day, "E")}</span>
                      <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold">
                        {format(day, "dd")}
                      </span>
                    </button>
                  );
                })}
              </SwiperSlide>
              <SwiperSlide className="grid grid-cols-7">
                {nextWeek.map((day, idx) => {
                  const isSelected = selectedDay && isSameDay(selectedDay, day);
                  return (
                    <button
                      key={day.toDateString() + idx}
                      onClick={() => {
                        selectedDayHandler(day);
                        setSelectedMonth(day);
                        if (!isSameMonth(day, selectedMonth)) {
                          setSelectedMonth(day);
                        }
                      }}
                      type="button"
                      className={classNames(
                        "py-1.5 hover:bg-gray-100 focus:z-10 flex flex-col items-center",
                        isSameMonth(day, selectedMonth)
                          ? "bg-white"
                          : "bg-gray-50",
                        (isToday(day) || isSelected) && "font-semibold",
                        isSelected &&
                          "font-semibold text-polar-600 border border-gray-200 rounded-lg bg-white-900",
                        !isSelected &&
                          isSameMonth(day, selectedMonth) &&
                          !isToday(day) &&
                          "text-gray-900",
                        !isSelected &&
                          !isSameMonth(day, selectedMonth) &&
                          !isToday(day) &&
                          "text-gray-400",
                        isToday(day) && !isSelected && "text-polar-600",
                        idx === 0 && "rounded-tl-lg",
                        idx === 6 && "rounded-tr-lg",
                        idx === days.length - 7 && "rounded-bl-lg",
                        idx === days.length - 1 && "rounded-br-lg"
                      )}
                    >
                      <span>{format(day, "E")}</span>
                      <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold">
                        {format(day, "dd")}
                      </span>
                    </button>
                  );
                })}
              </SwiperSlide>
            </Swiper>
            <div className="flex w-full flex-auto h-full items-center justify-center overflow-scroll">
              <div className="grid flex-row grid-cols-1 grid-rows-1">
                {/* Vertical lines */}
                <div
                  className={classNames(
                    "row-start-1 col-start-1 grid divide-x divide-gray-100 h-full"
                  )}
                  style={{
                    gridTemplateColumns: "repeat(48, minmax(1.8rem, 1fr))",
                  }}
                >
                  <div ref={containerOffset} className="col-end-1 h-7"></div>
                  {timeSlots.map((timeSlot, idx) => (
                    <div
                      key={timeSlot.toString() + idx}
                      className="min-h-[80vh]"
                      onClick={() => (
                        setShowModal(true),
                        setUpdate({
                          isUpdate: false,
                          data: { start: timeSlot, end: addHours(timeSlot, 8) },
                        })
                      )}
                    >
                      <div
                        onMouseEnter={() =>
                          setPlusIconView(timeSlot.toString())
                        }
                        onMouseLeave={() => setPlusIconView(null)}
                        className="sticky w-10 items-center pl-0.5 bg-white border flex text-[10px] leading-5 text-gray-400"
                      >
                        {plusIconView === timeSlot.toString() ? (
                          <PlusIcon className="h-5 w-6 bg-polar-500 text-white rounded-sm cursor-pointer" />
                        ) : (
                          format(timeSlot, "H:mm")
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Events */}
                {data && data.shift.length !== 0 ? (
                  <ol
                    className="col-start-1 col-end-4 row-start-1 grid grid-cols-12 w-full pt-12"
                    style={{
                      gridTemplateColumns:
                        "0 repeat(288, minmax(0.3rem, 1fr)) auto",
                      gridTemplateRows: "repeat(15, minmax(0, 1fr))",
                    }}
                  >
                    <li
                      className="relative mt-px  flex"
                      style={{ gridColumn: `${1} / span ${220}` }}
                    ></li>
                    {data?.shift.map((shift: any) => {
                      const startTimeStr = shift.start;
                      const finishTimeStr = shift.end;
                      const shiftStartToday =
                        new Date(startTimeStr) > startOfDay(selectedDay);
                      const shiftEndToday =
                        new Date(finishTimeStr) < endOfDay(selectedDay);

                      let startHour = getHours(new Date(startTimeStr)) * 12;
                      let startMinute = getMinutes(new Date(startTimeStr)) / 5;

                      const startNumber = shiftStartToday
                        ? startHour + startMinute + 2
                        : 2;

                      let endHour = getHours(new Date(finishTimeStr)) * 12;
                      let endMinute = getMinutes(new Date(finishTimeStr)) / 5;

                      const endNumber = shiftEndToday
                        ? endHour + endMinute + 2 - startNumber
                        : 288 - startNumber;
                      return (
                        <Popover
                          key={shift.id}
                          className="relative mt-px ml-0.5 flex"
                          style={{
                            gridColumn: `${startNumber} / span ${endNumber}`,
                          }}
                        >
                          {({ open }) => (
                            <>
                              <Popover.Button
                                style={{
                                  backgroundColor:
                                    shift.position.bgColor + "50",
                                  border:
                                    `1px solid ${shift.position.bgColor}` +
                                    "50",
                                  borderRadius:
                                    shiftEndToday && shiftStartToday
                                      ? "0.5rem"
                                      : shiftStartToday
                                      ? "0.5rem 0 0 0.5rem"
                                      : "0 0.5rem 0.5rem 0",
                                }}
                                className="group no-scrollbar min-h-8 justify-center w-full inset-1 flex flex-col rounded-lg p-1 text-xs max-h-16 overflow-scroll"
                              >
                                {shift.employee ? (
                                  <div className="overflow-scroll text-start no-scrollbar">
                                    <p className="font-semibold text-gray-800 text-xs">{`${shift.employee.firstName} (${shift?.position?.name}) `}</p>
                                    <span>
                                      {`${format(
                                        new Date(shift.start),
                                        "H:mm"
                                      )} - ${format(
                                        new Date(shift.end),
                                        "H:mm"
                                      )}`}
                                    </span>
                                    <br />
                                    <span>
                                      Duration {`${shift.length} hours`}
                                    </span>
                                  </div>
                                ) : (
                                  <div className="overflow-scroll text-start">
                                    <p className="font-semibold text-red-500 text-xs truncate">{`${shift?.position?.name} Unallocated`}</p>
                                    <span>
                                      {`${format(
                                        new Date(shift.start),
                                        "H:mm"
                                      )} - ${format(
                                        new Date(shift.end),
                                        "H:mm"
                                      )}`}
                                    </span>
                                    <br />
                                    <span>
                                      Duration {`${shift.length} hours`}
                                    </span>
                                    <ExclamationTriangleIcon
                                      className="h-4 w-4 text-orange-500 absolute top-1 right-1"
                                      aria-hidden="true"
                                    />
                                  </div>
                                )}
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
                                    <div className="relative grid gap-6 bg-white p-1">
                                      <div className="flex space-x-6 justify-evenly">
                                        <div className="flex items-center col-span-1">
                                          <button
                                            type="button"
                                            onClick={() => {
                                              setShowModal(true),
                                                setUpdate({
                                                  isUpdate: true,
                                                  data: shift,
                                                });
                                            }}
                                            className="inline-flex items-center rounded-md bg-polar-900/90 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-900/90 hover:ring-1 ring-polar-900/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-900/90"
                                          >
                                            <PencilSquareIcon
                                              className="-ml-0.5 mr-2 h-4 w-4"
                                              aria-hidden="true"
                                            />
                                            Edit
                                          </button>
                                        </div>
                                        <div className="flex items-center col-span-1">
                                          <button
                                            type="button"
                                            onClick={() =>
                                              confirm(
                                                "Are you sure you want to delete this shift?"
                                              )
                                                ? deleteShift({
                                                    variables: { id: shift.id },
                                                  })
                                                : null
                                            }
                                            className="inline-flex items-center rounded-md bg-red-600/90 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-red-600/90 hover:ring-1 ring-red-600/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600/90"
                                          >
                                            <TrashIcon
                                              className="-ml-0.5 mr-2 h-4 w-4"
                                              aria-hidden="true"
                                            />
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
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
                  <></>
                  //   <div className="bg-polar-50 rounded-lg p-10 border shadow-lg m-2 h-1/2 absolute flex items-center justify-center top-1/3 left-1/2 -translate-x-1/2">
                  //     <EmptyState
                  //       showCreate={allowedToEdit}
                  //       title="Shift"
                  //       handler={() => setShowModal(true)}
                  //     />
                  //   </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal
        data={{ ...update, modalHandler, selectedDay, shifts: data?.shift }}
        open={showModal}
        setOpen={() => {
          setShowModal(false);
        }}
        {...(update.isUpdate
          ? { title: "Edit Shift" }
          : { title: "Add Shift" })}
        children={AddShift}
      />
      <Modal
        data={{ copyModalHandler, selectedDay }}
        open={showCopyModal}
        setOpen={() => {
          setShowCopyModal(false);
        }}
        title="Copy Week"
        children={CopyWeekModal}
      />
    </div>
  );
}
