import { CalendarProvider } from "./provider/CalendarProvider";
import DayView from "./components/DayView";
import { getShifts } from "../../queries/shift/queries";
import { endOfDay, startOfDay } from "date-fns";
import { useState } from "react";

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const selectedDayHandler = (day: Date) => {
    setSelectedDay(day);
  };
  return (
    <CalendarProvider
      query={getShifts}
      fetchPolicy="cache-and-network"
      variables={{
        start: startOfDay(selectedDay),
        end: endOfDay(selectedDay),
      }}
    >
      <DayView selectedDayHandler={selectedDayHandler} selectedDay={selectedDay} />
    </CalendarProvider>
  );
}
