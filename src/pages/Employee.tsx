import { useParams } from "react-router-dom";
import { getEmployee } from "../queries/user/queries";
import { useQuery } from "@apollo/client";
import Avatar from "../components/Avatar";
import { LoadingAnimation } from "../assets/AnimationComponents/AnimationComponents";
import {
  AtSymbolIcon,
  DocumentCheckIcon,
  UserCircleIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { format } from "date-fns";
import { isDark } from "../utils/inheritColor";

export default function Employee() {
  const { id } = useParams();

  const { data, loading } = useQuery(getEmployee, {
    variables: { id: id },
  });

  const user = data && data.user_by_pk;

  const {
    bgColor,
    contractedHours,
    email,
    firstName,
    lastName,
    role,
    startDate,
  } = user || {};

  

  const colorIsDark = isDark(bgColor);

  if (loading) return <LoadingAnimation />;
  return (
    <div className="overflow-hidden pr-1 z-0 ">
      <div
        className="flex max-h-36 min-h-10 justify-around border rounded-br-full mb-10 shadow-md shadow-purple-heart-100"
        style={{
          backgroundColor: bgColor,
          opacity: 0.8,
        }}
      >
        <div className=" w-full flex flex-row justify-around p-10">
          <div className="text-start">
            <h1
              className={`text-3xl font-semibold ${
                colorIsDark ? "text-white" : "text-gray-800"
              } `}
            >
              {firstName} {lastName}
            </h1>
            <p
              className={`text-md font-semibold ${
                colorIsDark ? "text-white" : "text-gray-800"
              } `}
            >
              {user?.email}
            </p>
          </div>
          <Avatar firstName={firstName} lastName={lastName} size={16} />
        </div>
      </div>
      <div className="flex items-center justify-center h-full overflow-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-[10%] gap-8 w-[70vw]">
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserCircleIcon
                className="h-10 w-10 text-green-300"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">First Name</p>
              <p className="text-lg font-semibold">{firstName}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserCircleIcon
                className="h-10 w-10 text-jagged-ice-300"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Last Name</p>
              <p className="text-lg font-semibold">{lastName}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <AtSymbolIcon
                className="h-10 w-10 text-blue-300"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col overflow-hidden">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-semibold overflow-hidden text-inherit">
                {email}
              </p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <DocumentCheckIcon
                className="h-10 w-10 text-orange-300"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Contracted Hours</p>
              <p className="text-lg font-semibold">{contractedHours}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserPlusIcon
                className="h-10 w-10 text-fuchsia-300"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Start Date</p>
              <p className="text-lg font-semibold">
                {format(new Date(startDate), "dd MMMM yyyy")}
              </p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-start  space-x-10">
            <div className="flex items-center justify-center rounded-full p-5 shadow-lg ">
              <UserGroupIcon
                className="h-10 w-10 text-green-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold">{role.name.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
