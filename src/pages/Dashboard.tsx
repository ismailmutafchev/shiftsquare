import { useQuery } from "@apollo/client"
import { endOfDay, startOfDay, startOfWeek } from "date-fns"
import { Fragment, useState } from "react"
import { getHoursByEmployee, getHoursByPosition, getWorkingHours } from "../queries/shift/queries"
import { LoadingAnimation } from "../assets/AnimationComponents/AnimationComponents"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import Datepicker from "../components/Datepicker"
import { Menu, Transition } from "@headlessui/react"
import { Cell, Pie, PieChart, Tooltip, } from "recharts"


export default function Dashboard() {
  const [startDate, setStartDate] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 1 }))
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [selectedCell, setSectedCell] = useState<any>(null)

  const { loading: totalHoursLoading, data: totalHours } = useQuery(getWorkingHours, {
    variables: {
      start: startOfDay(startDate),
      end: endOfDay(endDate),
      position_id: '8c91c4d2-581e-4d14-800c-df32d3f1a482'
    },
  })

  const { loading: hoursByPositionLoading, data: hoursByPosition } = useQuery(getHoursByPosition, {
    fetchPolicy: 'network-only',
    variables: {
      start: startOfDay(startDate),
      end: endOfDay(endDate),
    },
  })

  const { data: hoursByEmployee } = useQuery(getHoursByEmployee, {
    variables: {
      start: startOfDay(startDate),
      end: endOfDay(endDate),
    },
  })


  if (totalHoursLoading || hoursByPositionLoading) return <LoadingAnimation />

  const totalHoursSum = totalHours?.shift_aggregate?.aggregate?.sum?.length || 0

  const onPieEnter = (data: any) => {
    setSectedCell(data)
  }

  const onPieLeave = () => {
    setSectedCell(null)
  }

  return (
    <div>
      <header className="flex flex-none items-center space-x-5 justify-between border-b border-gray-200 px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold leading-6 text-polar-900/80">
            Dashboard
          </h1>
        </div>
        <div className="flex space-x-5">
          <div className="top-16 w-auto text-right z-10">
            <Menu as="div" className="relative inline-block text-left">
              {({ open }) =>
                <>
                  <div>
                    <Menu.Button className={`inline-flex items-center rounded-md
                        px-3 py-2 text-sm font-semibold 
                        shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1
                         ring-polar-800/90 focus-visible:outline focus-visible:outline-2
                          focus-visible:outline-offset-2 focus-visible:outline-polar-800/90
                          ${open ? 'bg-gray-200 ring-1 text-polar-800/90' : 'bg-polar-800/90 text-white'}`}>
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
                          <Datepicker selectedDay={startDate} setSelectedDay={setStartDate} />
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              }

            </Menu>
          </div>
          <div className="top-16 w-auto text-right">
            <Menu as="div" className="relative inline-block text-left">
              {
                ({ open }) =>
                  <>
                    <div>
                      <Menu.Button className={`inline-flex items-center rounded-md
                        px-3 py-2 text-sm font-semibold 
                        shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1
                         ring-polar-800/90 focus-visible:outline focus-visible:outline-2
                          focus-visible:outline-offset-2 focus-visible:outline-polar-800/90
                          ${open ? 'bg-gray-200 ring-1 text-polar-800/90' : 'bg-polar-800/90 text-white'}`}>
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
                          <div className="absolute w-[220%] top-6 -left-32">
                            <Datepicker selectedDay={endDate} setSelectedDay={setEndDate} />
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
              }
            </Menu>
          </div>
        </div>

      </header>

      {
        totalHoursLoading || hoursByPositionLoading ? <LoadingAnimation /> :
          <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 items-center justify-center">
            {
              hoursByEmployee && hoursByEmployee.shift &&
              <div className="min-w-[400px] flex items-center justify-between m-3 rounded-2xl bg-polar-200/30">
                <div className="flex flex-col space-y-10 pl-5">
                  <h1 className="text-2xl font-bold text-polar-700/80">Hours by Employee</h1>
                  <div className="flex items-start flex-col">
                    {hoursByEmployee.shift.map((shift: any) => {
                      return (
                        <div key={shift?.employee?.id} className="flex justify-between w-full border-b ">
                          <div className={`flex items-center space-x-1 transition duration-100 `}>
                            <div style={{
                              backgroundColor: shift?.employee?.bgColor || '#248a96',
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                            }}>

                            </div>
                            <p
                              className={`text-lg font-semibold text-polar-700/80 transition duration-100`}
                            >
                              {shift?.employee?.firstName} {shift?.employee?.lastName}
                            </p>
                          </div>
                          <p className={`text-lg font-semibold text-polar-700/80 transition duration-100`}>{shift?.employee?.shift_aggregate.aggregate.sum.length}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <PieChart width={200} height={200} className="xl:right-10"  onMouseEnter={onPieEnter}>
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
                    {
                      hoursByEmployee.shift.map((shift: any) => {
                        return (
                          <Cell key={shift?.employee?.id} fill={shift.employee?.bgColor || '#248a96'} />
                        )
                      })
                    }
                  </Pie>
                  <Tooltip content={<EmployeeCustomTooltip payload={selectedCell} total={totalHoursSum} />} />
                </PieChart>
              </div>
            }
            {
              hoursByPosition && hoursByPosition.shift &&
              <div className="min-w-[400px] flex items-center justify-between m-3 rounded-2xl bg-polar-200/30">
                <div className="flex flex-col space-y-10 pl-5">
                  <h1 className="text-2xl font-bold text-polar-700/80">Hours by Position</h1>
                  <div className="flex items-start flex-col">
                    {hoursByPosition.shift.map((shift: any) => {
                      return (
                        <div key={shift?.position?.id} className="flex justify-between w-full border-b ">
                          <div className={`flex items-center space-x-1 transition duration-100  ${selectedCell && selectedCell.payload?.position?.id === shift?.position?.id && 'text-polar-700 scale-110'}`}>
                            <div style={{
                              backgroundColor: shift?.position?.bgColor,
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                            }}>

                            </div>
                            <p
                              className={`text-lg font-semibold text-polar-700/80 transition duration-100`}
                            >
                              {shift?.position?.name}
                            </p>
                          </div>
                          <p className={`text-lg font-semibold text-polar-700/80 transition duration-100`}>{shift?.position?.shift_aggregate?.aggregate?.sum.length}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <PieChart width={200} height={200} className=" xl:right-10" onMouseEnter={onPieEnter}>
                  <Pie
                    data={hoursByPosition.shift}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="position.shift_aggregate.aggregate.sum.length"
                    onMouseEnter={onPieEnter}
                    onMouseLeave={onPieLeave}
                  >
                    {
                      hoursByPosition && hoursByPosition.shift &&
                      hoursByPosition.shift.map((shift: any) => {
                        return (
                          <Cell key={shift?.position?.id} fill={shift?.position?.bgColor} />
                        )
                      })
                    }
                  </Pie>
                  <Tooltip content={<PositionCustomTooltip payload={selectedCell} total={totalHoursSum} />} />
                </PieChart>
              </div>
            }
          </div >
      }

    </div>
  )
}


const PositionCustomTooltip = ({ active, payload, total }: any) => {

  if (active) {
    return (
      <div className="bg-polar-200/80 p-2 rounded-lg">
        <p className="text-polar-700/80">{payload[0].payload.position.name}</p>
        <p className="text-polar-700/80">{`${payload[0].value} hours (${(payload[0].value / (total) * 100).toFixed(2)}%)`}</p>
      </div>
    );
  }

  return null;
}
const EmployeeCustomTooltip = ({ active, payload }: any) => {

  if (active && payload && payload.length) {
    return (
      <div className="bg-polar-200/80 p-2 rounded-lg">
        <p className="text-polar-700/80">{payload[0].payload.employee.firstName} </p>
        <p className="text-polar-700/80">{`${payload[0].value} hours`}</p>
      </div>
    );
  }

  return null;
}