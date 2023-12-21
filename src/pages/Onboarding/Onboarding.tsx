import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { updateUserById } from "../../queries/user/mutations";
import { getOrganizationByName } from "../../queries/organization/quieries";
import { getProfile } from "../../queries/user/queries";
import { useSession } from "../../hooks/session";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { yupResolver } from "@hookform/resolvers/yup";
import { onboardingSchema } from "../../validations/onboarding";

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

  const { register, handleSubmit, watch } = useForm({
    resolver: yupResolver(onboardingSchema),
  });
  const organization = watch("organization");

  const { data: organizationData } = useQuery(getOrganizationByName, {
    variables: { name: organization },
  });
  function submit(data: any) {
    updateUser({
      variables: {
        id: user?.id,
        object: {
          firstName: data.firstName,
          lastName: data.lastName,
          organization_id: organizationData?.organization[0]?.id,
          onboarded: true,
        },
      },
      
    });
  }

  const SwipeNextButton = (props: { text: string }) => {
    const swiper = useSwiper();
    return (
      <button
        onClick={() => swiper.slideNext()}
        className="font-semibold text-center  text-white p-2 rounded-lg bg-polar-400"
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
        <SwiperSlide className="flex items-center justify-center">
          <div className="w-1/2 space-y-10 flex flex-col">
            <h1 className="text-4xl font-bold text-polar-800 animate-fadeUp">
              Welcom e to Shift Square
            </h1>
            <p className="text-xl text-polar-500 animate-fadeUp">
              We are excited to have you on board.{" "}
              <SwipeNextButton text="Let's get started" />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="w-1/2 space-y-10 flex flex-col">
            <h1 className="text-4xl font-bold text-polar-800 animate-fadeUp">
              Let's start with your name
            </h1>
            <p className="text-xl text-polar-500 animate-fadeUp">
              What is your first name?
            </p>
            <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
              <input
                type="text"
                // style={inputStyles}
                className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm `}
                {...register("firstName", { required: true })}
              />
              {}
            </div>
            <p className="text-xl text-polar-500 animate-fadeUp">
              What is your last name?
            </p>
            <div>
              <input
                type="text"
                // style={inputStyles}
                className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm `}
                {...register("lastName", { required: true })}
              />
              {}
            </div>
            <div className="flex w-full justify-between">
              <SwipePrevButton text="Back" />
              <SwipeNextButton text="Next" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="w-1/2 space-y-10 flex flex-col">
            <h1 className="text-4xl font-bold text-polar-800 animate-fadeUp">
              What organization do you work for?
            </h1>
            <p className="text-xl text-polar-500 animate-fadeUp">
              Please enter the name of your organization
            </p>
            <div>
              <input
                type="text"
                // style={inputStyles}
                className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm `}
                {...register("organization", { required: true })}
              />
              {}
            </div>
            <div className="flex w-full justify-between">
              <SwipePrevButton text="Back" />
              <SwipeNextButton text="Next" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="w-1/2 space-y-10 flex flex-col">
            <h1 className="text-4xl font-bold text-polar-800 animate-fadeUp">
              What is your role?
            </h1>
            <p className="text-xl text-polar-500 animate-fadeUp">
              Please enter your role
            </p>
            <div>
              <input
                type="text"
                // style={inputStyles}
                className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm `}
                {...register("role", { required: true })}
              />
              {}
            </div>
            <div className="flex w-full justify-between">
              <SwipePrevButton text="Back" />
              <SwipeNextButton text="Next" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold text-polar-800 animate-fadeUp">
            Please confirm your information
          </h1>
          <div className="w-1/2 space-y-10 flex flex-col">
            <p className="text-xl text-polar-500 animate-fadeUp">
              Names: {watch("firstName")} {watch("lastName")}
            </p>
            <p className="text-xl text-polar-500 animate-fadeUp">
              Organization {watch("organization")}
            </p>
            <p className="text-xl text-polar-500 animate-fadeUp">
              Role in the organization {watch("role")}
            </p>
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
