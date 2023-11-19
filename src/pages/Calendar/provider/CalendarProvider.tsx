import { useQuery } from "@apollo/client";
import { getShifts } from "../../../queries/shift/queries";
import { createContext, useState } from "react";
import { endOfDay, startOfDay } from "date-fns";

export type CalendarContextType = {
  data: any;
  loading: boolean;
  dataError: any;
  //eslint-disable-next-line
  selectedDayHandler: (day: Date) => void;
  selectedDay: Date;
};
const CalendarContext = createContext<CalendarContextType | undefined>(undefined);


const CalendarProvider = ({ children }: { children: any }) => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const selectedDayHandler = (day: Date) => {
    setSelectedDay(day);
  };
  const {
    loading,
    data,
    error: dataError,
  } = useQuery(getShifts, {
    variables: {
      start: startOfDay(selectedDay),
      end: endOfDay(selectedDay),
    },
  });
  return (
    <CalendarContext.Provider
      value={{ data, loading, dataError, selectedDayHandler, selectedDay }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;
