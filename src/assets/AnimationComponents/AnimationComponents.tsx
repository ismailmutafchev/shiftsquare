import Lottie, { LottieRefCurrentProps } from "lottie-react";
import shiftsLoading from '../LottieAnimations/shiftLoading.json';
import scheduleButtonCalendarIconTimeSet from '../LottieAnimations/scheduleButtonCalendarIconTimeSet.json';
import easy from '../LottieAnimations/easy.json';
import puzzle from '../LottieAnimations/puzzle.json';
import finance from '../LottieAnimations/finance.json';
import optimization from '../LottieAnimations/optimization.json';
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
        <div ref={ref} className=' w-[80vw] md:w-[50vw]  mx-auto' >
            <Lottie lottieRef={animationRef} animationData={shiftsLoading} loop={false} />
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