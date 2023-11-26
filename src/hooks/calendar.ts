import { useContext } from "react";
import { CalendarContext } from "../pages/Calendar/provider/CalendarProvider";

export const useCalendar = () => {
    const context = useContext(CalendarContext);
    if (context === undefined) {
      throw new Error("useCalendar must be used within a CalendarProvider");
    }
    return context.queryData
  };