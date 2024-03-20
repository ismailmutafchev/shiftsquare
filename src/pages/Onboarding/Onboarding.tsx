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
import { getOrganizationByName } from "../../queries/organization/quieries";
import { format } from "date-fns";
import { getRoles } from "../../queries/role/queries";
import { updateUserRole } from "../../queries/role/mutations";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/LogoutButton";
import { Listbox } from "@headlessui/react";

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Onboarding() {
  const [createNewOrganization, setCreateNewOrganization] = useState(false);
  const [allowSwipeNext, setAllowSwipeNext] = useState(true);
  const { profile } = useSession();
  const { data: roles } = useQuery(getRoles);

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

  function submit(data: any) {
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
        setAllowSwipeNext(true);
        setTimeout(() => {
          swiperHandler("next");
        });
        navigation("/dashboard");
        location.reload();
      },
    });
  }

  function submitRole(data: any) {
    updateRole({
      variables: {
        id: profile?.id,
        object: {
          roleId: data.role,
        },
      },
      onCompleted: () => {
        setAllowSwipeNext(true);
        setTimeout(() => {
          swiperHandler("next");
        }, 200);
      },
    });
  }

  function submitOrganization(data: any) {
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
        setAllowSwipeNext(true);
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

  const dontHaveOrganizationPages = [0, 2, 4];
  const haveOrganizationPages = [0, 1];

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
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-screen mx-auto swiper bg-white w-1/2"
        ref={swiperRef}
        allowSlideNext={allowSwipeNext}
        onPaginationUpdate={(swiper) => {
          if (
            profile &&
            profile.organizationId &&
            haveOrganizationPages.includes(swiper.activeIndex)
          ) {
            setAllowSwipeNext(true);
          } else if (
            !profile.organizationId &&
            dontHaveOrganizationPages.includes(swiper.activeIndex)
          ) {
            setAllowSwipeNext(true);
          } else {
            setAllowSwipeNext(false);
          }
        }}
      >
        <SwiperSlide className="flex w-full">
          <div className="space-y-20 flex flex-col w-full justify-between">
            <div />
            <div className="px-16 space-y-10 items-start justify-start flex flex-col">
              <h1 className="text-3xl font-semibold text-polar-900 animate-fadeUp text-start">
                Welcome to Shift Square! 🎉
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
                Let's get started
              </button>
            </div>
            <div>
              <LogoutButton className="text-gray-500 font-semibold text-start px-16 pb-5 hover:text-gray-800" />
            </div>
          </div>
        </SwiperSlide>
        {/* organization slide */}
        {!profile.organizationId && (
          <>
            <SwiperSlide
              key="11"
              className="flex flex-col items-start justify-between "
            >
              <div />
              <div className="space-y-10 flex flex-col px-16 w-full max-w-3xl">
                <h1 className="text-3xl font-semibold text-polar-900 animate-fadeUp text-start">
                  Looks like you don't have an organization yet.
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
                            <Listbox.Label className="block text-base font-medium text-gray-700 text-start pb-4">
                              Please select your role in the organization
                            </Listbox.Label>
                            <div className="relative">
                              <span className="inline-block w-full rounded-md shadow-sm">
                                <Listbox.Button className="cursor-default relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-polar-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm">
                                  <span className="block truncate text-gray-500">
                                    {roleWatcher.role
                                      ? roles?.role.find(
                                          (role: any) =>
                                            role.id === roleWatcher.role
                                        )?.name
                                      : "Select your role"}
                                  </span>
                                </Listbox.Button>
                              </span>
                              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm text-start">
                                {roles?.role.map((role: any) => (
                                  <Listbox.Option
                                    key={role.id}
                                    value={role.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
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
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </div>
                          </>
                        )}
                      </Listbox>
                    )}
                  />
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-polar-600 focus:ring-gray-500 border-gray-300 rounded"
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
                    !createNewOrganization
                      ? "opacity-50 cursor-not-allowed"
                      : ""
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
                          "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border-gray-200 border-2 focus:outline-none focus-visible:border-polar-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm ",
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
                          "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border-gray-200 border-2 focus:outline-none focus-visible:border-polar-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm ",
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
                      When is the year end of your organization? We will use
                      this to calculate your holiday days.
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
                        {...registerOrganization("yearEnd")}
                      >
                        <option value="" disabled>
                          Select your year end
                        </option>
                        <option value="2021-12-31">January</option>
                        <option value="2021-12-31">February</option>
                        <option value="2021-12-31">March</option>
                        <option value="2021-12-31">April</option>
                        <option value="2021-12-31">May</option>
                        <option value="2021-12-31">June</option>
                        <option value="2021-12-31">July</option>
                        <option value="2021-12-31">August</option>
                        <option value="2021-12-31">September</option>
                        <option value="2021-12-31">October</option>
                        <option value="2021-12-31">November</option>
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
                      How many holiday days do employees are entitled to for a
                      year?
                    </p>
                    <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                      <input
                        type="number"
                        className={classNames(
                          "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border-gray-200 border-2 focus:outline-none focus-visible:border-polar-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm ",
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
          </>
        )}
        {/* names slide */}
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
                      "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border-gray-200 border-2 focus:outline-none focus-visible:border-polar-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm ",
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
                      "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border-gray-200 border-2 focus:outline-none focus-visible:border-polar-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm ",
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
        {/* confirmation slide */}
        <SwiperSlide className="flex flex-col items-start justify-center ">
          <div className="w-3/4 space-y-10 flex flex-col">
            <h1 className="text-4xl font-bold text-gray-800 animate-fadeUp text-start px-16">
              Confirm Organization details
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
      </Swiper>
      <div className="w-1/2 bg-third-pattern"></div>
    </div>
  );
}
