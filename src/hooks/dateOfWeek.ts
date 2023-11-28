import {
  eachDayOfInterval,
  endOfWeek,
  isFriday,
  isMonday,
  isSaturday,
  isSunday,
  isThursday,
  isTuesday,
  isWednesday,
  parseISO,
  startOfWeek,
} from "date-fns";

const useDayOfWeek = (givenDate: any, selectedDate: any) => {
  const weekOfChoice = eachDayOfInterval({
    start: startOfWeek(parseISO(selectedDate)),
    end: endOfWeek(parseISO(selectedDate)),
  });
  switch (givenDate) {
    case isMonday(givenDate):
      return weekOfChoice[0];
    case isTuesday(givenDate):
      return weekOfChoice[1];
    case isWednesday(givenDate):
      return weekOfChoice[2];
    case isThursday(givenDate):
      return weekOfChoice[3];
    case isFriday(givenDate):
      return weekOfChoice[4];
    case isSaturday(givenDate):
      return weekOfChoice[5];
    case isSunday(givenDate):
      return weekOfChoice[6];
  }
};

export default useDayOfWeek;
