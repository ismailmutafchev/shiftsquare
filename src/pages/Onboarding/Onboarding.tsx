import { Controller, useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { updateUserById } from "../../queries/user/mutations";
import { getProfile } from "../../queries/user/queries";
import { useSession } from "../../hooks/session";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  onboardingSchema,
  organizationSchema,
  roleSchema,
} from "../../validations/onboarding";
import Logo from "../../components/Logo";
import { useRef, useState } from "react";
import { addOrganizationOne } from "../../queries/organization/mutations";
import {
  getOrganizationByName,
  getPlans,
} from "../../queries/organization/quieries";
import { format } from "date-fns";
import { getRoles } from "../../queries/role/queries";
import { updateUserRole } from "../../queries/role/mutations";
import { Link, redirect, useNavigate } from "react-router-dom";
import LogoutButton from "../../components/LogoutButton";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Plans, RolesQuery } from "../../gql/graphql";

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
type Role = RolesQuery["role"][0];
type UserFormValues = {
  firstName: string;
  lastName: string;
};

type RoleFormValues = {
  role: string;
};

type OrganizationFormValues = {
  name: string;
  yearEnd: Date;
  holidayAllowance: number;
  location: string;
};

export default function Onboarding() {
  const [createNewOrganization, setCreateNewOrganization] = useState(false);
  const { profile, setProductId } = useSession();
  const { data: roles } = useQuery(getRoles);
  const { data: plans } = useQuery(getPlans);

  const navigation = useNavigate();

  const swiperRef = useRef(null);

  function swiperHandler(direction?: string) {
    if (swiperRef.current !== null && direction === "prev") {
      // @ts-ignore
      swiperRef.current.swiper.slidePrev();
    } else if (swiperRef.current !== null && direction === "next") {
      // @ts-ignore
      swiperRef.current.swiper.slideNext();
    }
  }

  const createNewOrganizationhandler = () => {
    setCreateNewOrganization(!createNewOrganization);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(onboardingSchema),
    mode: "onChange",
  });

  const {
    handleSubmit: handleSubmitRole,
    watch: watchRole,
    control: controlRole,
    formState: { errors: errorsRole },
  } = useForm({
    resolver: yupResolver(roleSchema),
    mode: "onChange",
  });

  const {
    register: registerOrganization,
    handleSubmit: handleSubmitOrganization,
    watch: watchOrganization,
    formState: { errors: errorsOrganization },
  } = useForm({
    resolver: yupResolver(organizationSchema),
    mode: "onChange",
  });

  const watcher = watch();
  const organizationWatcher = watchOrganization();
  const roleWatcher = watchRole();

  const [updateUser] = useMutation(updateUserById, {
    refetchQueries: [
      {
        query: getProfile,
        variables: { authId: profile?.authId },
      },
    ],
  });

  const [updateRole] = useMutation(updateUserRole, {
    refetchQueries: [
      {
        query: getProfile,
        variables: { authId: profile?.authId },
      },
    ],
  });

  const [insertOrganization] = useMutation(addOrganizationOne, {
    refetchQueries: [
      {
        query: getOrganizationByName,
        variables: {
          name:
            organizationWatcher.name + organizationWatcher?.location?.slice(3),
        },
      },
    ],
  });

  function submit(data: UserFormValues) {
    updateUser({
      variables: {
        id: profile?.id,
        object: {
          firstName: data.firstName,
          lastName: data.lastName,
          onboarded: true,
        },
      },
      onCompleted: () => {
        setTimeout(() => {
          swiperHandler("next");
        });
        navigation("/dashboard");
        location.reload();
      },
    });
  }

  function submitRole(data: RoleFormValues) {
    updateRole({
      variables: {
        id: profile?.id,
        object: {
          roleId: data.role,
        },
      },
      onCompleted: () => {
        setTimeout(() => {
          swiperHandler("next");
        }, 200);
      },
    });
  }

  function submitOrganization(data: OrganizationFormValues) {
    insertOrganization({
      variables: {
        object: {
          name: data.name,
          location: data.location,
          yearEnd: data.yearEnd,
          holidayAllowance: data.holidayAllowance,
        },
      },
      onCompleted: (data) => {
        updateUser({
          variables: {
            id: profile?.id,
            object: {
              organizationId: data.insert_organization_one.id,
            },
          },
        });
        setTimeout(() => {
          swiperHandler("next");
        });
      },
    });
  }

  const SwipeNextButton = (props: { text: string; disabled: boolean }) => {
    const swiper = useSwiper();
    return (
      <button
        disabled={props.disabled}
        onClick={() => {
          swiper.slideNext();
        }}
        className={classNames(
          "font-semibold text-center  text-white p-2 rounded-lg bg-polar-400",
          props.disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        {props.text}
      </button>
    );
  };

  const SwipePrevButton = (props: { text: string }) => {
    const swiper = useSwiper();
    return (
      <button
        onClick={() => swiper.slidePrev()}
        className="font-semibold text-center border border-polar-200 text-polar-400 p-2 rounded-lg"
      >
        {props.text}
      </button>
    );
  };

  return (
    <div className="flex relative">
      <div className="flex items-center space-x-2 absolute top-10 left-10 z-10">
        <Logo size={50} dark />
        <h1 className="font-semibold text-xl text-polar-500">
          Shift <span className="text-[#1b1f57]">Square</span>
        </h1>
      </div>
      <Swiper
        pagination={{
          type: "progressbar",
          renderProgressbar(progressbarFillClass) {
            return `<span class="border-2 border-polar-500  ${progressbarFillClass}"></span>`;
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-screen mx-auto swiper bg-white w-1/2 flex items-center justify-center"
        ref={swiperRef}
        allowSlideNext={true}
        // onPaginationUpdate={(swiper) => {
        //   if (
        //     !profile?.organizationId &&
        //     dontHaveOrganizationPages.includes(swiper.activeIndex)
        //   ) {
        //     setAllowSwipeNext(true);
        //   } else {
        //     setAllowSwipeNext(false);
        //   }
        // }}
      >
        <SwiperSlide className="flex w-full">
          <div className="space-y-20 flex flex-col w-full justify-between">
            <div />
            <div className="px-16 space-y-10 items-start justify-start flex flex-col">
              <h1 className="text-3xl font-semibold text-polar-900 animate-fadeUp text-start">
                Welcome to Shift Square! 👋
              </h1>
              <p className="text-base text-gray-400 animate-fadeUp text-start max-w-xl">
                We are excited to have you on board. Let's get you started with
                a few details.
              </p>
              <button
                onClick={() => {
                  swiperHandler("next");
                }}
                className={classNames(
                  "font-semibold text-center  text-white p-2 rounded-lg bg-polar-400 w-full max-w-xl justify-self-start"
                )}
              >
                Continue
              </button>
            </div>
            <div>
              <LogoutButton className="text-gray-500 font-semibold text-start px-16 pb-5 hover:text-gray-800" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          key="11"
          className="flex flex-col items-start justify-between "
        >
          <div />
          <div className="space-y-10 flex flex-col px-16 w-full max-w-3xl">
            <h1 className="text-3xl font-semibold text-polar-900 animate-fadeUp text-start">
              Please select your role
            </h1>
            {/* <p className="text-base text-gray-500 animate-fadeUp text-start">
                  In order to use Shift Square, you need to be part of an
                  organization. If you don't have one, you can create one in the
                  next step.
                </p> */}
            <p className="text-base text-gray-500 animate-fadeUp text-start pb-10">
              If you would to create an organization, you have to be an
              authorized person to do so.
            </p>
            <div className="flex flex-col space-y-5">
              {/* <p className="text-base text-gray-900 text-start">
                    Please select your role in the organization:
                  </p> */}
              <Controller
                name="role"
                control={controlRole}
                defaultValue=""
                render={({ field }) => (
                  <Listbox
                    as="div"
                    className="space-y-1 pb-10"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    {() => (
                      <>
                        <Label className="block text-base font-medium text-gray-700 text-start pb-4">
                          Please select your role in the organization
                        </Label>
                        <div className="relative">
                          <span className="inline-block w-full rounded-md shadow-sm">
                            <ListboxButton className="cursor-default relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-polar-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm">
                              <span className="block truncate text-gray-500">
                                {roleWatcher.role
                                  ? roles?.role.find(
                                      (role: Role) =>
                                        role.id === roleWatcher.role
                                    )?.name
                                  : "Select your role"}
                              </span>
                            </ListboxButton>
                          </span>
                          <ListboxOptions className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm text-start">
                            {roles?.role.map((role: Role) => (
                              <ListboxOption
                                key={role.id}
                                value={role.id}
                                className={({ focus }) =>
                                  classNames(
                                    focus
                                      ? "text-white bg-polar-600"
                                      : "text-gray-900",
                                    "cursor-default select-none relative py-2 pl-3 pr-9"
                                  )
                                }
                              >
                                {({ selected }) => (
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "block truncate"
                                    )}
                                  >
                                    {role?.name.charAt(0).toUpperCase() +
                                      role?.name?.slice(1)}
                                  </span>
                                )}
                              </ListboxOption>
                            ))}
                          </ListboxOptions>
                        </div>
                      </>
                    )}
                  </Listbox>
                )}
              />
              <div className="flex items-center ">
                <input
                  type="checkbox"
                  className="block rounded-md border-0 mx-10 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none"
                  checked={createNewOrganization}
                  onChange={createNewOrganizationhandler}
                />
                <p className="text-gray-500 animate-fadeUp text-start">
                  By clicking Create Organization you agree to our{" "}
                  <span className="text-gray-500 underline">
                    Terms and Conditions
                  </span>
                </p>
              </div>
            </div>

            <button
              onClick={handleSubmitRole(submitRole)}
              className={classNames(
                "font-semibold text-center  text-white p-2 rounded-lg bg-polar-400",
                !roleWatcher.role || errorsRole.role
                  ? "opacity-50 cursor-not-allowed"
                  : "",
                !createNewOrganization ? "opacity-50 cursor-not-allowed" : ""
              )}
              disabled={
                !roleWatcher.role || errorsRole.role
                  ? true
                  : false || !createNewOrganization
              }
            >
              Create Organization
            </button>
          </div>
          <button
            onClick={() => {
              swiperHandler("prev");
            }}
            className="text-gray-500 font-semibold text-start px-16 pb-5 hover:text-gray-800"
          >
            Back
          </button>
        </SwiperSlide>
        <SwiperSlide key="12" className="flex items-center justify-start ">
          <div className="px-16 space-y-10 flex flex-col">
            <h1 className="text-4xl font-bold text-gray-800 animate-fadeUp text-start">
              Organization details
            </h1>
            <div className="text-start space-y-10 ">
              <div>
                <p className="text-gray-500 animate-fadeUp text-start">
                  What is the name of your organization?
                </p>
                <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                  <input
                    type="text"
                    // style={inputStyles}
                    className={classNames(
                      "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none ",
                      !organizationWatcher.name ||
                        organizationWatcher.name === "" ||
                        (errorsOrganization.name &&
                          "border-red-500 ring-red-500 ring-1 on-focus:border-red-500 focus-visible:ring-red-500 focus-visible:ring-1 focus-visible:ring-offset-red-500 focus-visible:ring-offset-1")
                    )}
                    {...registerOrganization("name", {
                      required: true,
                      minLength: 2,
                    })}
                  />
                  <p className="text-xs absolute text-red-500">
                    {errorsOrganization?.name?.message}
                  </p>
                  {}
                </div>
              </div>
              <div>
                <p className="text-gray-500 animate-fadeUp">
                  Whats is the name of the location of your organization?
                </p>
                <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                  <input
                    type="text"
                    // style={inputStyles}
                    className={classNames(
                      "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none ",
                      !organizationWatcher.location ||
                        organizationWatcher.location === "" ||
                        (errorsOrganization.location &&
                          "border-red-500 ring-red-500 ring-1 on-focus:border-red-500 focus-visible:ring-red-500 focus-visible:ring-1 focus-visible:ring-offset-red-500 focus-visible:ring-offset-1")
                    )}
                    {...registerOrganization("location", {
                      required: true,
                      minLength: 2,
                    })}
                  />
                  <p className="text-xs absolute text-red-500">
                    {errorsOrganization?.location?.message}
                  </p>
                  {}
                </div>
              </div>
              <div>
                <p className="text-gray-500 animate-fadeUp">
                  When is the year end of your organization? We will use this to
                  calculate your holiday days.
                </p>
                <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                  <select
                    className={classNames(
                      "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-20 text-left border-gray-200 border-2 focus:outline-none focus-visible:border-polar-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm ",
                      !organizationWatcher.yearEnd ||
                        organizationWatcher.yearEnd === null ||
                        (errorsOrganization.yearEnd &&
                          "border-red-500 ring-red-500 ring-1 on-focus:border-red-500 focus-visible:ring-red-500 focus-visible:ring-1 focus-visible:ring-offset-red-500 focus-visible:ring-offset-1")
                    )}
                    {...registerOrganization("yearEnd", {
                      required: true,
                    })}
                  >
                    <option value="" disabled>
                      Select your year end
                    </option>
                    <option value="2021-01-31">January</option>
                    <option value="2021-02-31">February</option>
                    <option value="2021-03-31">March</option>
                    <option value="2021-04-31">April</option>
                    <option value="2021-05-31">May</option>
                    <option value="2021-06-31">June</option>
                    <option value="2021-07-31">July</option>
                    <option value="2021-08-31">August</option>
                    <option value="2021-09-31">September</option>
                    <option value="2021-10-31">October</option>
                    <option value="2021-11-31">November</option>
                    <option value="2021-12-31">December</option>
                  </select>
                  <p className="text-xs absolute text-red-500">
                    {errorsOrganization?.yearEnd?.message}
                  </p>
                  <p className="text-xs absolute text-red-500">
                    {errorsOrganization?.name?.message}
                  </p>
                  {}
                </div>
              </div>
              <div>
                <p className="text-gray-500 animate-fadeUp">
                  How many holiday days do employees are entitled to for a year?
                </p>
                <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                  <input
                    type="number"
                    className={classNames(
                      "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none ",
                      !organizationWatcher.holidayAllowance ||
                        organizationWatcher.holidayAllowance === null ||
                        (errorsOrganization.holidayAllowance &&
                          "border-red-500 ring-red-500 ring-1 on-focus:border-red-500 focus-visible:ring-red-500 focus-visible:ring-1 focus-visible:ring-offset-red-500 focus-visible:ring-offset-1")
                    )}
                    {...registerOrganization("holidayAllowance", {
                      required: true,
                      minLength: 2,
                    })}
                  />
                  <p className="text-xs absolute text-red-500">
                    {errorsOrganization?.holidayAllowance?.message}
                  </p>
                  {}
                </div>
              </div>
              <div className="flex w-full justify-between">
                <SwipePrevButton text="Back" />
                <SwipeNextButton
                  text="Next"
                  disabled={
                    !organizationWatcher.name ||
                    !organizationWatcher.yearEnd ||
                    !organizationWatcher.holidayAllowance ||
                    errorsOrganization.name ||
                    errorsOrganization.yearEnd ||
                    errorsOrganization.holidayAllowance
                      ? true
                      : false
                  }
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          key="13"
          className="flex flex-col items-start justify-center "
        >
          <div className="w-3/4 space-y-10 flex flex-col">
            <h1 className="text-4xl font-bold text-gray-800 animate-fadeUp text-start px-16">
              Confirm Organization details
            </h1>
            <div className="mt-6 border-t border-gray-100 mx-16">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 text-start">
                    Organization Name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-start">
                    {organizationWatcher.name}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 text-start">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-start">
                    {organizationWatcher.location}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 text-start">
                    Year End
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-start">
                    {organizationWatcher.yearEnd &&
                      format(
                        new Date(organizationWatcher.yearEnd),
                        "MMMM dd, yyyy"
                      )}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 text-start">
                    Holiday Allowance
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-start">
                    {organizationWatcher.holidayAllowance}
                  </dd>
                </div>
                <div className="flex w-full justify-between pt-10">
                  <SwipePrevButton text="Back" />
                  <button
                    onClick={handleSubmitOrganization(submitOrganization)}
                    className="font-semibold text-center  text-white p-2 rounded-lg bg-polar-400"
                  >
                    Confirm
                  </button>
                </div>
              </dl>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-start">
          <div className="space-y-10 flex flex-col px-16 w-full max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-800 animate-fadeUp text-start">
              Let's start with your name
            </h1>
            <div className="text-start space-y-10 ">
              <div>
                <p className="text-gray-500 animate-fadeUp">
                  What is your first name?
                </p>
                <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                  <input
                    type="text"
                    // style={inputStyles}
                    className={classNames(
                      "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none ",
                      !watcher.firstName ||
                        watcher.firstName === "" ||
                        (errors.firstName &&
                          "border-red-500 ring-red-500 ring-1 on-focus:border-red-500 focus-visible:ring-red-500 focus-visible:ring-1 focus-visible:ring-offset-red-500 focus-visible:ring-offset-1")
                    )}
                    {...register("firstName", {
                      required: true,
                      minLength: 2,
                    })}
                  />
                  <p className="text-xs absolute text-red-500">
                    {errors.firstName?.message}
                  </p>
                  {}
                </div>
              </div>
              <div>
                <p className="text-gray-500 animate-fadeUp text-start">
                  What is your last name?
                </p>
                <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                  <input
                    type="text"
                    // style={inputStyles}
                    className={classNames(
                      "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-polar-600 sm:text-sm sm:leading-6 p-2 focus:outline-none ",
                      !watcher.lastName ||
                        watcher.lastName === "" ||
                        (errors.lastName &&
                          "border-red-500 ring-red-500 ring-1 on-focus:border-red-500 focus-visible:ring-red-500 focus-visible:ring-1 focus-visible:ring-offset-red-500 focus-visible:ring-offset-1")
                    )}
                    {...register("lastName", {
                      required: true,
                      minLength: 2,
                    })}
                  />
                  <p className="text-xs absolute text-red-500">
                    {errors.lastName?.message}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <SwipePrevButton text="Back" />
              <SwipeNextButton
                disabled={
                  !watcher.firstName ||
                  !watcher.lastName ||
                  errors.firstName ||
                  errors.lastName
                    ? true
                    : false
                }
                text="Next"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-start justify-center ">
          <div className="w-3/4 space-y-10 flex flex-col">
            <h1 className="text-4xl font-bold text-gray-800 animate-fadeUp text-start px-16">
              Confirm Name details
            </h1>
            <div className="mt-6 border-t border-gray-100 mx-16">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 text-start">
                    First Name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-start">
                    {watcher.firstName}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 text-start">
                    Last Name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-start">
                    {watcher.lastName}
                  </dd>
                </div>
                <div className="flex w-full justify-between pt-10">
                  <SwipePrevButton text="Back" />
                  <button
                    onClick={handleSubmit(submit)}
                    className="font-semibold text-center  text-white p-2 rounded-lg bg-polar-400"
                  >
                    Confirm
                  </button>
                </div>
              </dl>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center overflow-scroll ">
          <div className="w-3/4 space-y-10 flex flex-col">
            <div className="bg-white py-2 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mt-16 flex justify-center">
                  <fieldset aria-label="Payment frequency">
                    {/* <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
            >
              {frequencies.map((option) => (
                <Radio
                  key={option.value}
                  value={option}
                  className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-indigo-600 data-[checked]:text-white"
                >
                  {option.label}
                </Radio>
              ))}
            </RadioGroup> */}
                  </fieldset>
                </div>
                <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-2 lg:mx-0 lg:max-w-none overflow-scroll">
                  {plans?.plans?.map((tier: Plans) => (
                    <div
                      key={tier.id}
                      className={classNames(
                        tier.featured
                          ? "bg-gray-900 ring-gray-900"
                          : "ring-gray-200",
                        "rounded-3xl p-2 ring-1 xl:p-4"
                      )}
                    >
                      <h3
                        id={tier.id}
                        className={classNames(
                          tier.featured ? "text-white" : "text-gray-900",
                          "text-base font-semibold leading-8"
                        )}
                      >
                        {tier.name}
                      </h3>
                      <p
                        className={classNames(
                          tier.featured ? "text-gray-300" : "text-gray-600",
                          "mt-1 text-sm leading-6"
                        )}
                      >
                        {tier.description}
                      </p>
                      <p className="mt-1 flex items-baseline gap-x-1">
                        <span
                          className={classNames(
                            tier.featured ? "text-white" : "text-gray-900",
                            "text-xl font-semibold tracking-tight"
                          )}
                        >
                          £ {tier.price / 100}
                        </span>
                        {/* {typeof tier.price !== 'string' ? (
                  <span
                    className={classNames(
                      tier.featured ? 'text-gray-300' : 'text-gray-600',
                      'text-sm font-semibold leading-6',
                    )}
                  >
                    {frequency.priceSuffix}
                  </span>
                ) : null} */}
                      </p>
                      <Link
                        to={ tier.name === "Enterprise" ? "../contact" : "../checkout"}
                        type="button"
                        className={classNames(
                          tier.featured
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-900 text-white",
                          "mt-2 inline-block px-6 py-1 text-sm font-semibold leading-6 rounded-full"
                        )}
                        onClick={() => {
                          tier.name === "Enterprise"
                            ? redirect("/contact")
                            : setProductId(tier?.priceId as string);
                        }}
                      >
                        {tier.name === "Enterprise" ? "Contact us" : "Buy now"}
                      </Link>
                      <ul
                        role="list"
                        className={classNames(
                          tier.featured ? "text-gray-300" : "text-gray-600",
                          "mt-2 space-y-3 text-sm leading-6 xl:mt-4"
                        )}
                      >
                        {/* {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(tier.featured ? 'text-white' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                    />
                    {feature}
                  </li>
                ))} */}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-1/2 bg-third-pattern"></div>
    </div>
  );
}
