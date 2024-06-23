import { useQuery } from "@apollo/client";
import { endOfDay, endOfWeek, startOfDay, startOfWeek } from "date-fns";
import { Fragment, useState } from "react";
import { getContractedHours } from "../../queries/user/queries";
import { LoadingAnimation } from "../../assets/AnimationComponents/AnimationComponents";
import {
  BanknotesIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Datepicker from "../../components/Datepicker";
import { Menu, Transition } from "@headlessui/react";
import {
  Cell,
  Pie,
  PieChart,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { colors } from "../../utils/colors";
import {
  getHoursByDay,
  getHoursByEmployee,
  getHoursByPosition,
  getShifts,
  getWorkingHours,
} from "../../queries/shift/queries";
import { Shift } from "../../gql/graphql";

export default function Dashboard() {
  //state for default date range
  const [startDate, setStartDate] = useState<Date>(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [selectedCell, setSectedCell] = useState<any>(null);

  //query for total hours
  const {
    loading: totalHoursLoading,
    data: totalHours,
    // error: totalHoursError,
  } = useQuery(getWorkingHours, {
    variables: {
      start: startOfDay(startDate),
      end: endOfDay(endDate),
      position_id: "8c91c4d2-581e-4d14-800c-df32d3f1a482",
    },
  });

  //query for hours by position
  const {
    loading: hoursByPositionLoading,
    data: hoursByPosition,
    // error: hoursByPositionError,
  } = useQuery(getHoursByPosition, {
    fetchPolicy: "network-only",
    variables: {
      start: startOfDay(startDate),
      end: endOfDay(endDate),
    },
  });

  //query for hours by employee
  const {
    loading: hoursByEmployeeLoading,
    data: hoursByEmployee,
    // error: hoursByEmployeeError,
  } = useQuery(getHoursByEmployee, {
    fetchPolicy: "network-only",
    variables: {
      start: startOfDay(startDate),
      end: endOfDay(endDate),
    },
  });

  //query for hours per day for this week
  const {
    data: thisWeekHours,
    loading: thisWeekHoursLoading,
    // error: thisWeekHoursError,
  } = useQuery(getHoursByDay, {
    fetchPolicy: "network-only",
    variables: {
      monday: startOfWeek(new Date(), { weekStartsOn: 1 }),
      tuesday: startOfWeek(new Date(), { weekStartsOn: 2 }),
      wednesday: startOfWeek(new Date(), { weekStartsOn: 3 }),
      thursday: startOfWeek(new Date(), { weekStartsOn: 4 }),
      friday: startOfWeek(new Date(), { weekStartsOn: 5 }),
      saturday: startOfWeek(new Date(), { weekStartsOn: 6 }),
      sunday: startOfWeek(new Date(endOfWeek(new Date()))),
      sundayE: endOfWeek(new Date(), { weekStartsOn: 1 }),
    },
  });

  //query for hours per day for last week

  const lastWeekDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const lastWeekDate2 = startOfWeek(new Date(lastWeekDate));

  const {
    data: lastWeekHours,
    loading: lastWeekHoursLoading,
    // error: lastWeekHoursError,
  } = useQuery(getHoursByDay, {
    fetchPolicy: "network-only",
    variables: {
      monday: startOfWeek(new Date(lastWeekDate2), { weekStartsOn: 2 }),
      tuesday: startOfWeek(new Date(lastWeekDate2), { weekStartsOn: 3 }),
      wednesday: startOfWeek(new Date(lastWeekDate2), { weekStartsOn: 4 }),
      thursday: startOfWeek(new Date(lastWeekDate2), { weekStartsOn: 5 }),
      friday: startOfWeek(new Date(lastWeekDate2), { weekStartsOn: 6 }),
      saturday: startOfWeek(new Date(lastWeekDate2), { weekStartsOn: 0 }),
      sunday: startOfWeek(new Date(endOfWeek(new Date(lastWeekDate2)))),
      sundayE: endOfWeek(new Date(lastWeekDate2), { weekStartsOn: 1 }),
    },
  });

  //query for total contracted hours
  const { data: contractedHours } = useQuery(getContractedHours, {
    fetchPolicy: "network-only",
  });

  //query for booked holidays
  // const { data: bookedHolidays } = useQuery(getBookedHolidays, {
  //   fetchPolicy: "network-only",
  // });

  //query for spent money
  const { data: totalShifts } = useQuery(getShifts, {
    fetchPolicy: "network-only",
    variables: {
      start: startOfDay(startDate),
      end: endOfDay(endDate),
    },
  });
  const { data: totalShiftsPrevWeek } = useQuery(getShifts, {
    fetchPolicy: "network-only",
    variables: {
      start: startOfWeek(new Date(), { weekStartsOn: 1 }),
      end: endOfWeek(new Date(), { weekStartsOn: 1 }),
    },
  });

  //get spent for selected range
  const totalSpent =
    totalShifts &&
    totalShifts.shift &&
    totalShifts.shift
      .map((shift: Shift) => {
        return {
          total: Number(shift?.employee?.payDetails?.payRate) * shift?.length,
          name: shift?.employee?.firstName,
        };
      })
      .reduce((a: number, b: { total: number; name: string }) => {
        return a + b.total;
      }, 0);

  //get spent for previous week
  const totalSpentLastWeek =
    totalShiftsPrevWeek &&
    totalShiftsPrevWeek.shift &&
    totalShiftsPrevWeek.shift
      .map((shift: Shift) => {
        return {
          total: shift?.employee?.payDetails?.payRate * shift?.length,
          name: shift?.employee?.firstName,
        };
      })
      .reduce((a: number, b: {total: number, name: string}) => {
        return a + b.total;
      }, 0);

  //loading animation
  if (totalHoursLoading || hoursByPositionLoading || hoursByEmployeeLoading)
    return <LoadingAnimation />;

  //total hours sum
  const totalHoursSum =
    totalHours?.shift_aggregate?.aggregate?.sum?.length || 0;

  //total booked holidays
  // const totalBookedHolidays =
  //   bookedHolidays?.leave_aggregate?.aggregate?.sum?.length || 0;

  //pie chart on hover
  const onPieEnter = (data: any) => {
    setSectedCell(data);
  };

  //pie chart on leave
  const onPieLeave = () => {
    setSectedCell(null);
  };

  const dailyData = [
    {
      name: "Monday",
      uv: lastWeekHours?.monday?.aggregate?.sum?.length || 0,
      pv: thisWeekHours?.monday?.aggregate?.sum?.length || 0,
    },
    {
      name: "Tuesday",
      uv: lastWeekHours?.tuesday?.aggregate?.sum?.length || 0,
      pv: thisWeekHours?.tuesday?.aggregate?.sum?.length || 0,
    },
    {
      name: "Wednesday",
      uv: lastWeekHours?.wednesday?.aggregate?.sum?.length || 0,
      pv: thisWeekHours?.wednesday?.aggregate?.sum?.length || 0,
    },
    {
      name: "Thursday",
      uv: lastWeekHours?.thursday?.aggregate?.sum?.length || 0,
      pv: thisWeekHours?.thursday?.aggregate?.sum?.length || 0,
    },
    {
      name: "Friday",
      uv: lastWeekHours?.friday?.aggregate?.sum?.length || 0,
      pv: thisWeekHours?.friday?.aggregate?.sum?.length || 0,
    },
    {
      name: "Saturday",
      uv: lastWeekHours?.saturday?.aggregate?.sum?.length || 0,
      pv: thisWeekHours?.saturday?.aggregate?.sum?.length || 0,
    },
    {
      name: "Sunday",
      uv: lastWeekHours?.sunday?.aggregate?.sum?.length || 0,
      pv: thisWeekHours?.sunday?.aggregate?.sum?.length || 0,
    },
  ];

  const blocksConfig = [
    {
      id: 1,
      title: "Contracted Hours",
      value: contractedHours?.user_aggregate?.aggregate?.sum.contractedHours,
      color: "bg-red-200",
      iconColor: "bg-red-400",
      additionalInfo: "10% above average",
      icon: <UserGroupIcon className="h-7 w-7 text-white" />,
    },
    {
      id: 2,
      title: "Days Booked Holidays",
      value: "10",
      color: "bg-yellow-200",
      iconColor: "bg-yellow-400",
      additionalInfo: "from 340 ",
      icon: <CalendarDaysIcon className="h-7 w-7 text-white" />,
    },
    {
      id: 3,
      title: "Total Spent",
      value: "£" + (totalSpent ? Number(totalSpent).toFixed(2) : 0),
      color: "bg-blue-200",
      iconColor: "bg-blue-400",
      additionalInfo: "Selected range",
      icon: <BanknotesIcon className="h-7 w-7 text-white" />,
    },
    {
      id: 4,
      title: "Forecasted Spent",
      value:
        "£" + (totalSpentLastWeek ? Number(totalSpentLastWeek).toFixed(2) : 0),
      color: "bg-purple-200",
      iconColor: "bg-purple-400",
      additionalInfo: "This week",
      icon: <BanknotesIcon className="h-7 w-7 text-white" />,
    },
  ];

  //return dashboard
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <header className="flex flex-none items-center space-x-5 justify-between border-b border-gray-200 px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold leading-6 text-polar-900/80">
            Dashboard
          </h1>
        </div>
        <div className="flex space-x-5">
          <div className="top-16 w-auto text-right z-10">
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
                      {startDate.toDateString()}
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
                        <div className="absolute z[999] w-[220%] top-6 -left-32">
                          <Datepicker
                            selectedDay={startDate}
                            setSelectedDay={setStartDate}
                          />
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
          <div className="top-16 w-auto text-right z-10">
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
                              : "bg-polar-800/90 text-gray-100"
                          }`}
                    >
                      {endDate.toDateString()}
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
                        <div className="absolute z[999] w-[220%] top-6 -left-32">
                          <Datepicker
                            selectedDay={endDate}
                            setSelectedDay={setEndDate}
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
      </header>

      {totalHoursLoading ||
      hoursByPositionLoading ||
      hoursByEmployeeLoading ||
      thisWeekHoursLoading ||
      lastWeekHoursLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="grid grid-cols-4 grid-rows-3 items-center justify-center mt-10 gap-x-5 gap-y-5">
          <div className="max-h-60 row-span-1 col-span-4 p-5 rounded-xl h-full bg-gradient-to-r from-purple-heart-50 to-jagged-ice-100">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={dailyData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="0 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  // stackId="1"
                  stroke={colors["purple-heart"][400]}
                  fill={colors["purple-heart"][200]}
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  // stackId="1"
                  stroke={colors["gulf-blue"][400]}
                  fill={colors["gulf-blue"][200]}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {blocksConfig.map((block) => {
            return (
              <div
                key={block.id}
                className={`p-6 max-h-60 min-w-auto h-full flex flex-col items-start col-span-4 no-scrollbar md:col-span-1 justify-between rounded-xl ${block.color}`}
              >
                <div className={`${block.iconColor} p-2 rounded-md`}>
                  {block.icon}
                </div>
                <p className="text-black font-bold text-2xl">{block.value} </p>
                <p className="text-black font-normal text-lg">{block.title}</p>
                <p className="text-blue-500 font-normal text-sm">
                  {block.additionalInfo}
                </p>
              </div>
            );
          })}
          <div className="max-h-60 min-w-auto h-full flex col-span-4 md:col-span-2 items-center justify-between rounded-xl bg-gradient-to-r from-orange-50 to-yellow-100">
            <div className="flex flex-col space-y-4 px-5 pt-3 h-full overflow-x-scroll no-scrollbar">
              <h1 className="text-xl font-semibold text-gray-900">
                Hours by Employee
              </h1>
              <div className="flex items-start no-scrollbar flex-col">
                {hoursByEmployee?.shift.map((shift: any) => {
                  return (
                    <div
                      key={shift?.employee?.id}
                      className="flex justify-between w-full border-b "
                    >
                      <div
                        className={`flex items-center space-x-1 transition duration-100 `}
                      >
                        <div
                          style={{
                            backgroundColor:
                              shift?.employee?.bgColor || "#248a96",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                          }}
                        ></div>
                        <p
                          className={`text-base text-gray-700 transition duration-100`}
                        >
                          {shift?.employee?.firstName}{" "}
                          {shift?.employee?.lastName}
                        </p>
                      </div>
                      <p
                        className={`text-base text-gray-700 transition duration-100`}
                      >
                        {shift?.employee?.shift_aggregate.aggregate.sum.length}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="h-[170px] w-[50%] items-center justify-center flex">
              {hoursByEmployee && hoursByEmployee.shift && (
                <ResponsiveContainer>
                  <PieChart className="w-50%" onMouseEnter={onPieEnter}>
                    <Pie
                      data={hoursByEmployee.shift}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#248a96"
                      paddingAngle={5}
                      dataKey="employee.shift_aggregate.aggregate.sum.length"
                      onMouseEnter={onPieEnter}
                      onMouseLeave={onPieLeave}
                    >
                      {hoursByEmployee.shift.map((shift: any) => {
                        return (
                          <Cell
                            key={shift?.employee?.id}
                            fill={shift.employee?.bgColor || "#248a96"}
                          />
                        );
                      })}
                    </Pie>
                    <Tooltip
                      content={
                        <EmployeeCustomTooltip
                          payload={selectedCell}
                          total={totalHoursSum}
                        />
                      }
                    />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
          <div className="max-h-60 min-w-auto h-full flex col-span-4 md:col-span-2 items-center justify-between rounded-xl bg-gradient-to-r from-pink-50 to-indigo-50 overflow-scroll">
            <div className="flex flex-col space-y-4 px-5 pt-3 h-full overflow-x-scroll no-scrollbar">
              <h1 className="text-xl font-semibold text-gray-900">
                Hours by Position
              </h1>
              {(hoursByPosition && hoursByPosition.shift && (
                <div className="flex items-start flex-col no-scrollbar">
                  {hoursByPosition.shift.map((shift: any) => {
                    return (
                      <div
                        key={shift?.position?.id}
                        className="flex justify-between w-full border-b "
                      >
                        <div
                          className={`flex items-center space-x-1 transition duration-100  ${
                            selectedCell &&
                            selectedCell.payload?.position?.id ===
                              shift?.position?.id &&
                            "text-polar-700 scale-110"
                          }`}
                        >
                          <div
                            style={{
                              backgroundColor: shift?.position?.bgColor,
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                            }}
                          ></div>
                          <p
                            className={` text-gray-700 transition duration-100`}
                          >
                            {shift?.position?.name}
                          </p>
                        </div>
                        <p className={` text-gray-700 transition duration-100`}>
                          {
                            shift?.position?.shift_aggregate?.aggregate?.sum
                              .length
                          }
                        </p>
                      </div>
                    );
                  })}
                </div>
              )) || (
                <div className="flex items-center justify-center h-full">
                  <h1>No shifts found for this date range</h1>
                </div>
              )}
            </div>
            <PieChart
              width={200}
              height={200}
              className=" xl:right-10"
              onMouseEnter={onPieEnter}
            >
              <Pie
                data={hoursByPosition?.shift}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="position.shift_aggregate.aggregate.sum.length"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
              >
                {hoursByPosition &&
                  hoursByPosition.shift &&
                  hoursByPosition.shift.map((shift: any) => {
                    return (
                      <Cell
                        key={shift?.position?.id}
                        fill={shift?.position?.bgColor}
                      />
                    );
                  })}
              </Pie>
              <Tooltip
                content={
                  <PositionCustomTooltip
                    payload={selectedCell}
                    total={totalHoursSum}
                  />
                }
              />
            </PieChart>
          </div>
        </div>
      )}
    </div>
  );
}

//position custom tooltips
const PositionCustomTooltip = ({ active, payload, total }: any) => {
  if (active) {
    return (
      <div className="bg-polar-200/80 p-2 rounded-lg">
        <p className="text-polar-700/80">{payload[0].payload.position.name}</p>
        <p className="text-polar-700/80">{`${payload[0].value} hours (${(
          (payload[0].value / total) *
          100
        ).toFixed(2)}%)`}</p>
      </div>
    );
  }

  return null;
};

//employee custom tooltips
const EmployeeCustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-polar-200/80 p-2 rounded-lg">
        <p className="text-polar-700/80">
          {payload[0].payload.employee.firstName}{" "}
        </p>
        <p className="text-polar-700/80">{`${payload[0].value} hours`}</p>
      </div>
    );
  }

  return null;
};
