import Lottie, { LottieRefCurrentProps } from "lottie-react";
import shiftsLoading from '../LottieAnimations/shiftLoading.json';
import scheduleButtonCalendarIconTimeSet from '../LottieAnimations/scheduleButtonCalendarIconTimeSet.json';
import easy from '../LottieAnimations/easy.json';
import puzzle from '../LottieAnimations/puzzle.json';
import finance from '../LottieAnimations/finance.json';
import optimization from '../LottieAnimations/optimization.json';
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

export enum AnimationSize {
    small = 'small',
    medium = 'medium',
    large = 'large'
}




export function ShiftBuild({size}:{size:AnimationSize}) {
    const [ref, inView] = useInView();
    const animationRef = useRef<LottieRefCurrentProps>(null);

    let width;
    let height;      

    switch (size) {
        case 'small':
            width = 200;
            height = 200;
            break;
        case 'medium':
            width = 300;
            height = 300;
            break;
        case 'large':
            width = 900;
            height = 900;
            break;
    }

  
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