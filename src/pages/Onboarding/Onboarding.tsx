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
import { useState } from "react";
import { addOrganizationOne } from "../../queries/organization/mutations";
import { getOrganizationByName } from "../../queries/organization/quieries";
import { format } from "date-fns";
import { getRoles } from "../../queries/role/queries";
import { updateUserRole } from "../../queries/role/mutations";

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Onboarding() {
  const [createNewOrganization, setCreateNewOrganization] = useState(false);
  const { profile } = useSession();

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
    });
  }

  function submitRole(data: any) {
    console.log(profile?.id, "tete");
    updateRole({
      variables: {
        id: profile?.id,
        object: {
          roleId: data.role,
        },
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
    });
  }

  const SwipeNextButton = (props: { text: string; disabled: boolean }) => {
    const swiper = useSwiper();

    return (
      <button
        disabled={props.disabled}
        onClick={() => {
          console.log(errorsOrganization.name?.message);
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

  const { data: roles } = useQuery(getRoles);

  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-screen mx-auto swiper"
      >
        <SwiperSlide className="flex justify-center">
          <div className="w-1/2 space-y-20 flex flex-col items-center justify-center">
            <Logo size={220} />
            <h1 className="text-4xl font-bold text-polar-800 animate-fadeUp">
              Welcome to Shift Square
            </h1>
            <p className="text-xl text-polar-500 animate-fadeUp">
              We are excited to have you on board.{" "}
              <SwipeNextButton disabled={false} text="Let's get started" />
            </p>
          </div>
        </SwiperSlide>
        {/* organization slide */}
        {profile?.organizationId === null && (
          <>
            <SwiperSlide key="11" className="flex items-center justify-center ">
              <div className="w-3/4 space-y-10 flex flex-col">
                <h1 className="text-4xl font-bold text-polar-800 animate-fadeUp">
                  Looks like you don't have an organization yet.
                </h1>
                <div className="shadow-light rounded-xl p-3 md:p-10 text-start space-y-10 ">
                  <p>
                    In order to use Shift Square, you need to be part of an
                    organization. If you don't have one, you can create one in
                    the next step.
                  </p>
                  <p>
                    If you would to create an organization, you have to be an
                    authorized person to do so.
                  </p>
                  <div className="flex items-center space-x-2">
                    Please select your role in the organization:
                    <Controller
                      name="role"
                      control={controlRole}
                      defaultValue=""
                      render={({ field }) => (
                        <select
                          {...field}
                          className={classNames(
                            "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm ",
                            !roleWatcher ||
                              roleWatcher.role === "" ||
                              (errorsRole.role &&
                                "border-red-500 ring-red-500 ring-1 on-focus:border-red-500 focus-visible:ring-red-500 focus-visible:ring-1 focus-visible:ring-offset-red-500 focus-visible:ring-offset-1")
                          )}
                        >
                          <option value="" disabled>
                            Select your role
                          </option>
                          {roles?.role.map((role: any) => (
                            <option key={role.id} value={role.id}>
                              {role?.name.charAt(0).toUpperCase() +
                                role?.name?.slice(1)}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-polar-600 focus:ring-polar-500 border-gray-300 rounded"
                      checked={createNewOrganization}
                      onChange={() =>
                        setCreateNewOrganization(!createNewOrganization)
                      }
                    />
                    <p className="text-polar-500 animate-fadeUp">
                      By clicking Create Organization you agree to our{" "}
                      <span className="text-polar-400 underline">
                        Terms and Conditions
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <SwipePrevButton text="Back" />
                  <button
                    // disabled={!watchRole.name || errorsRole ? true : false || !createNewOrganization}
                    onClick={handleSubmitRole(submitRole)}
                    className="font-semibold text-center  text-white p-2 rounded-lg bg-polar-400"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="12" className="flex items-center justify-center ">
              <div className="w-3/4 space-y-10 flex flex-col">
                <h1 className="text-4xl font-bold text-polar-800 animate-fadeUp">
                  Organization details
                </h1>
                <div className="shadow-light rounded-xl p-3 md:p-10 text-start space-y-10 ">
                  <div>
                    <p className="text-polar-500 animate-fadeUp">
                      What is the name of your organization?
                    </p>
                    <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                      <input
                        type="text"
                        // style={inputStyles}
                        className={classNames(
                          "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm ",
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
                    <p className="text-polar-500 animate-fadeUp">
                      Whats is the name of the location of your organization?
                    </p>
                    <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                      <input
                        type="text"
                        // style={inputStyles}
                        className={classNames(
                          "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm ",
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
                    <p className="text-polar-500 animate-fadeUp">
                      When is the year end of your organization? We will use
                      this to calculate your holiday days.
                    </p>
                    <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                      <input
                        type="date"
                        // style={inputStyles}
                        className={classNames(
                          "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm ",
                          !organizationWatcher.yearEnd ||
                            organizationWatcher.yearEnd === null ||
                            (errorsOrganization.yearEnd &&
                              "border-red-500 ring-red-500 ring-1 on-focus:border-red-500 focus-visible:ring-red-500 focus-visible:ring-1 focus-visible:ring-offset-red-500 focus-visible:ring-offset-1")
                        )}
                        {...registerOrganization("yearEnd", {
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
                    <p className="text-polar-500 animate-fadeUp">
                      How many holiday days do you have for a full year?
                    </p>
                    <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                      <input
                        type="number"
                        // style={inputStyles}
                        className={classNames(
                          "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm ",
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
                      text="Next"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="13" className="flex items-center justify-center ">
              <div className="w-3/4 space-y-10 flex flex-col">
                <h1 className="text-4xl font-bold text-polar-800 animate-fadeUp">
                  Confirm Organization details
                </h1>
                <div className="shadow-light rounded-xl p-3 md:p-10 text-start space-y-10 ">
                  <div>
                    <p className="text-polar-500 animate-fadeUp">
                      Your organization name is{" "}
                      <span className="font-bold">
                        {organizationWatcher.name}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-polar-500 animate-fadeUp">
                      Your organization location is{" "}
                      <span className="font-bold">
                        {organizationWatcher.location}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-polar-500 animate-fadeUp">
                      Your organization year end is{" "}
                      <span className="font-bold">
                        {format(
                          new Date(
                            organizationWatcher.yearEnd
                              ? organizationWatcher.yearEnd
                              : 0
                          ),
                          "dd/MM/yyyy"
                        )}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-polar-500 animate-fadeUp">
                      Your organization holiday allowance is{" "}
                      <span className="font-bold">
                        {organizationWatcher.holidayAllowance}
                      </span>
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <SwipePrevButton text="Back" />
                    <button
                      onClick={handleSubmitOrganization(submitOrganization)}
                      className="font-semibold text-center  text-white p-2 rounded-lg bg-polar-400"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        )}
        {/* names slide */}
        <SwiperSlide className="flex items-center justify-center">
          <div className="w-3/4 space-y-10 flex flex-col">
            <h1 className="text-4xl font-bold text-polar-800 animate-fadeUp">
              Let's start with your name
            </h1>
            <div className="shadow-light rounded-xl p-3 md:p-10 text-start space-y-10 ">
              <div>
                <p className="text-polar-500 animate-fadeUp">
                  What is your first name?
                </p>
                <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                  <input
                    type="text"
                    // style={inputStyles}
                    className={classNames(
                      "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm ",
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
                <p className="text-polar-500 animate-fadeUp">
                  What is your last name?
                </p>
                <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                  <input
                    type="text"
                    // style={inputStyles}
                    className={classNames(
                      "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm ",
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
        {/* role slide */}
        <SwiperSlide className="flex items-center justify-center">
          <div className="w-3/4 space-y-10 flex flex-col">
            <h1 className="text-4xl font-bold text-polar-800 animate-fadeUp">
              What is your role?
            </h1>
            <div className="shadow-light rounded-xl p-3 md:p-10 text-start space-y-10 ">
              <div>
                <p className="text-polar-500 animate-fadeUp">
                  What is your role?
                </p>
                <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                  <input
                    type="text"
                    // style={inputStyles}
                    className={classNames(
                      "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm ",
                      !watcher.role ||
                        watcher.role === "" ||
                        (errors.role &&
                          "border-red-500 ring-red-500 ring-1 on-focus:border-red-500 focus-visible:ring-red-500 focus-visible:ring-1 focus-visible:ring-offset-red-500 focus-visible:ring-offset-1")
                    )}
                    {...register("role", {
                      required: true,
                      minLength: 2,
                    })}
                  />
                  <p className="text-xs absolute text-red-500">
                    {errors.role?.message}
                  </p>
                  {}
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <SwipePrevButton text="Back" />
              <SwipeNextButton
                disabled={!watcher.role || errors.role ? true : false}
                text="Next"
              />
            </div>
          </div>
        </SwiperSlide>
        {/* confirmation slide */}
        <SwiperSlide className="flex items-center justify-center">
          <div className="w-3/4 space-y-10 flex flex-col">
            <h1 className="text-4xl font-bold text-polar-800 animate-fadeUp">
              Confirm your details
            </h1>
            <div className="shadow-light rounded-xl p-3 md:p-10 text-start space-y-10 ">
              <div>
                <p className="text-polar-500 animate-fadeUp">
                  Your name is{" "}
                  <span className="font-bold">
                    {watcher.firstName} {watcher.lastName}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-polar-500 animate-fadeUp">
                  Your role is <span className="font-bold">{watcher.role}</span>
                </p>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <SwipePrevButton text="Back" />
              <button
                onClick={handleSubmit(submit)}
                className="font-semibold text-center  text-white p-2 rounded-lg bg-polar-400"
              >
                Confirm
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
