import React, { createContext } from "react";
import {
  useForm,
  useFieldArray,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  FieldArrayWithId,
} from "react-hook-form";

type FormValues = {
  mondayShifts: {
    position: string;
    start: string;
    end: string;
  }[];
  tuesdayShifts: {
    position: string;
    start: string;
    end: string;
  }[];
  wednesdayShifts: {
    position: string;
    start: string;
    end: string;
  }[];
  thursdayShifts: {
    position: string;
    start: string;
    end: string;
  }[];
  fridayShifts: {
    position: string;
    start: string;
    end: string;
  }[];
  saturdayShifts: {
    position: string;
    start: string;
    end: string;
  }[];
  sundayShifts: {
    position: string;
    start: string;
    end: string;
  }[];
};

type WeekDay = {
  name:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  day:
    | FieldArrayWithId<FormValues, "mondayShifts", "id">[]
    | FieldArrayWithId<FormValues, "tuesdayShifts", "id">[]
    | FieldArrayWithId<FormValues, "wednesdayShifts", "id">[]
    | FieldArrayWithId<FormValues, "thursdayShifts", "id">[]
    | FieldArrayWithId<FormValues, "fridayShifts", "id">[]
    | FieldArrayWithId<FormValues, "saturdayShifts", "id">[]
    | FieldArrayWithId<FormValues, "sundayShifts", "id">[];
  append:
    | UseFieldArrayAppend<FormValues, "mondayShifts">
    | UseFieldArrayAppend<FormValues, "tuesdayShifts">
    | UseFieldArrayAppend<FormValues, "wednesdayShifts">
    | UseFieldArrayAppend<FormValues, "thursdayShifts">
    | UseFieldArrayAppend<FormValues, "fridayShifts">
    | UseFieldArrayAppend<FormValues, "saturdayShifts">
    | UseFieldArrayAppend<FormValues, "sundayShifts">;
  remove: UseFieldArrayRemove;
};

const TemplateContext = createContext<WeekDay[] | undefined>(undefined);

const TemplateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const formMethods = useForm<FormValues>({
    defaultValues: {
      mondayShifts: [{ position: "", start: "9:00", end: "17:00" }],
      tuesdayShifts: [],
      wednesdayShifts: [],
      thursdayShifts: [],
      fridayShifts: [],
      saturdayShifts: [],
      sundayShifts: [],
    },
    mode: "onBlur",
  });
  const {
    fields: monday,
    append: appendMonday,
    remove: removeMonday,
  } = useFieldArray({
    name: "mondayShifts",
    control: formMethods.control,
  });
  const {
    fields: tuesday,
    append: appendTuesday,
    remove: removeTuesday,
  } = useFieldArray({
    name: "tuesdayShifts",
    control: formMethods.control,
  });
  const {
    fields: wednesday,
    append: appendWednesday,
    remove: removeWednesday,
  } = useFieldArray({
    name: "wednesdayShifts",
    control: formMethods.control,
  });
  const {
    fields: thursday,
    append: appendThursday,
    remove: removeThursday,
  } = useFieldArray({
    name: "thursdayShifts",
    control: formMethods.control,
  });
  const {
    fields: friday,
    append: appendFriday,
    remove: removeFriday,
  } = useFieldArray({
    name: "fridayShifts",
    control: formMethods.control,
  });
  const {
    fields: saturday,
    append: appendSaturday,
    remove: removeSaturday,
  } = useFieldArray({
    name: "saturdayShifts",
    control: formMethods.control,
  });
  const {
    fields: sunday,
    append: appendSunday,
    remove: removeSunday,
  } = useFieldArray({
    name: "sundayShifts",
    control: formMethods.control,
  });

  const weekDays: WeekDay[] = [
    { name: "Monday", day: monday, append: appendMonday, remove: removeMonday },
    {
      name: "Tuesday",
      day: tuesday,
      append: appendTuesday,
      remove: removeTuesday,
    },
    {
      name: "Wednesday",
      day: wednesday,
      append: appendWednesday,
      remove: removeWednesday,
    },
    {
      name: "Thursday",
      day: thursday,
      append: appendThursday,
      remove: removeThursday,
    },
    { name: "Friday", day: friday, append: appendFriday, remove: removeFriday },
    {
      name: "Saturday",
      day: saturday,
      append: appendSaturday,
      remove: removeSaturday,
    },
    { name: "Sunday", day: sunday, append: appendSunday, remove: removeSunday },
  ];

  return (
    <TemplateContext.Provider value={weekDays}>
      {children}
    </TemplateContext.Provider>
  );
};

export { TemplateContext, TemplateProvider };

