import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { updateUserById } from "../../queries/user/mutations";
import { getProfile } from "../../queries/user/queries";
import { useSession } from "../../hooks/session";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { yupResolver } from "@hookform/resolvers/yup";
import { onboardingSchema } from "../../validations/onboarding";
import Logo from "../../components/Logo";

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Onboarding() {
  const { profile } = useSession();

  const user = profile?.data?.user[0];
  const [updateUser] = useMutation(updateUserById, {
    refetchQueries: [
      {
        query: getProfile,
        variables: { authId: user?.authId },
      },
    ],
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(onboardingSchema),
    mode: "onChange",
  });

  function submit(data: any) {
    updateUser({
      variables: {
        id: user?.id,
        object: {
          firstName: data.firstName,
          lastName: data.lastName,
          organization: data.organization,
          onboarded: true,
        },
      },
    });
  }

  const watcher = watch();

  const SwipeNextButton = (props: { text: string; disabled: boolean }) => {
    const swiper = useSwiper();

    return (
      <button
        disabled={props.disabled}
        onClick={() => {
          console.log(errors.organization?.message);
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
        <SwiperSlide className="flex items-center justify-center ">
          <div className="w-3/4 space-y-10 flex flex-col">
            <h1 className="text-4xl font-bold text-polar-800 animate-fadeUp">
              Let's start with your organization
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
                      !watcher.organization ||
                        watcher.organization === "" ||
                        (errors.organization &&
                          "border-red-500 ring-red-500 ring-1 on-focus:border-red-500 focus-visible:ring-red-500 focus-visible:ring-1 focus-visible:ring-offset-red-500 focus-visible:ring-offset-1")
                    )}
                    {...register("organization", {
                      required: true,
                      minLength: 10,
                    })}
                  />
                  <p className="text-xs absolute text-red-500">
                    {errors.organization?.message}
                  </p>
                  {}
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <SwipePrevButton text="Back" />
              <SwipeNextButton
                disabled={
                  !watcher.organization || errors.organization ? true : false
                }
                text="Next"
              />
            </div>
          </div>
        </SwiperSlide>
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
                  Your organization is{" "}
                  <span className="font-bold">{watcher.organization}</span>
                </p>
              </div>
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
