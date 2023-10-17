import Lottie, { LottieRefCurrentProps } from "lottie-react";
import shiftsLoading from '../LottieAnimations/shiftLoading.json';
import scheduleButtonCalendarIconTimeSet from '../LottieAnimations/scheduleButtonCalendarIconTimeSet.json';
import easy from '../LottieAnimations/easy.json';
import puzzle from '../LottieAnimations/puzzle.json';
import finance from '../LottieAnimations/finance.json';
import optimization from '../LottieAnimations/optimization.json';
import loading from '../LottieAnimations/loading-squares.json';
import error from '../LottieAnimations/error.json';
import landing from '../LottieAnimations/landing.json'
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";


export function ShiftBuild() {
  const [ref, inView] = useInView();
  const animationRef = useRef<LottieRefCurrentProps>(null);


  useEffect(() => {
    if (inView) {
      animationRef.current?.play();
    } else {
      animationRef.current?.pause();
    }
  }, [inView]);

  return (
    <div ref={ref} className='mx-auto ' >
      <Lottie lottieRef={animationRef} animationData={shiftsLoading} loop={false} width={100} height={500} />
    </div>
  );
}

export function ScheduleClock() {
  const [ref, inView] = useInView();
  const animationRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (inView) {
      animationRef.current?.play();
    } else {
      animationRef.current?.pause();
    }
  }, [inView]);

  return (
    <div ref={ref} className=' w-[80vw] md:w-[50vw]  mx-auto' >
      <Lottie lottieRef={animationRef} animationData={scheduleButtonCalendarIconTimeSet} loop={false} />
    </div>
  );
}
export function EasyAnimation() {
  const [ref, inView] = useInView();
  const animationRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (inView) {
      animationRef.current?.play();
    } else {
      animationRef.current?.pause();
    }
  }, [inView]);

  return (
    <div ref={ref} className=' w-[80vw] md:w-[50vw]  mx-auto' >
      <Lottie lottieRef={animationRef} animationData={easy} loop={false} />
    </div>
  );
}
export function PuzzleAnimation() {
  const [ref, inView] = useInView();
  const animationRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (inView) {
      animationRef.current?.play();
    } else {
      animationRef.current?.pause();
    }
  }, [inView]);

  return (
    <div ref={ref} className=' w-[80vw] md:w-[50vw]  mx-auto' >
      <Lottie lottieRef={animationRef} animationData={puzzle} loop={false} />
    </div>
  );
}
export function FinanceAnimation() {
  const [ref, inView] = useInView();
  const animationRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (inView) {
      animationRef.current?.play();
    } else {
      animationRef.current?.pause();
    }
  }, [inView]);

  return (
    <div ref={ref} className=' w-[80vw] md:w-[50vw]  mx-auto' >
      <Lottie lottieRef={animationRef} animationData={finance} loop={false} />
    </div>
  );
}
export function OptimiseAnimation() {
  const [ref, inView] = useInView();
  const animationRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (inView) {
      animationRef.current?.play();
    } else {
      animationRef.current?.pause();
    }
  }, [inView]);

  return (
    <div ref={ref} className=' w-[80vw] md:w-[50vw]  mx-auto' >
      <Lottie lottieRef={animationRef} animationData={optimization} loop={false} />
    </div>
  );
}

export function LoadingAnimation() {
  return (
    <div className=' w-[80vw] h-[80vh] md:w-[50vw]  mx-auto flex items-center justify-center'>
      <div className=' mx-auto' >
        <Lottie animationData={loading} loop={true} />
      </div>
    </div>
  );
}
export function ErrorAnimation({message}: {message: string}) {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className=' w-64' >
        <Lottie animationData={error} loop={false} />
        <p className="text-red-500 text-lg">{message}</p>
      </div>
    </div>
  );
}

export function LandingAnimation() {
  return(
    <div className=' w-[80vw] md:w-[40vw]  mx-auto flex items-center justify-center'>
      <div className=' mx-auto' >
        <Lottie animationData={landing} loop={true} />
      </div>
    </div>
  )
}
