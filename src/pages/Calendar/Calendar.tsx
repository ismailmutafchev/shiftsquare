import { CalendarProvider } from "./provider/CalendarProvider";
import DayView from "./components/DayView";
import { getShifts } from "../../queries/shift/queries";
import { endOfDay, startOfDay } from "date-fns";
import { useState } from "react";
import { ToastProvider } from "../../providers/ToastProvider/ToastContext";
import ToastContainer from "../../providers/ToastProvider/ToastContainer";

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const selectedDayHandler = (day: Date) => {
    setSelectedDay(day);
  };
  return (
    <ToastProvider>
      <ToastContainer />
      <CalendarProvider
        query={getShifts}
        variables={{
          start: startOfDay(selectedDay),
          end: endOfDay(selectedDay),
        }}
      >
        <DayView
          selectedDayHandler={selectedDayHandler}
          selectedDay={selectedDay}
        />
      </CalendarProvider>
    </ToastProvider>
  );
}
