import React, { createContext } from "react";
import {
  useForm,
  useFieldArray,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  FieldArrayWithId,
  UseFormRegister,
  UseFormHandleSubmit,
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
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";
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

export type TemplateContextType = {
  weekDays: WeekDay[];
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues, undefined>;
  control: any;
};

const TemplateContext = createContext<TemplateContextType | undefined>(
  undefined
);

const TemplateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const formMethods = useForm<FormValues>({
    defaultValues: {
      mondayShifts: [],
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
    { name: "monday", day: monday, append: appendMonday, remove: removeMonday },
    {
      name: "tuesday",
      day: tuesday,
      append: appendTuesday,
      remove: removeTuesday,
    },
    {
      name: "wednesday",
      day: wednesday,
      append: appendWednesday,
      remove: removeWednesday,
    },
    {
      name: "thursday",
      day: thursday,
      append: appendThursday,
      remove: removeThursday,
    },
    { name: "friday", day: friday, append: appendFriday, remove: removeFriday },
    {
      name: "saturday",
      day: saturday,
      append: appendSaturday,
      remove: removeSaturday,
    },
    { name: "sunday", day: sunday, append: appendSunday, remove: removeSunday },
  ];

  return (
    <TemplateContext.Provider value={{ weekDays, register: formMethods.register, handleSubmit: formMethods.handleSubmit, control: formMethods.control }}>
      {children}
    </TemplateContext.Provider>
  );
};

export { TemplateContext, TemplateProvider };
