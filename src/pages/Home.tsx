import { EasyAnimation, FinanceAnimation, OptimiseAnimation, PuzzleAnimation, ScheduleClock, ShiftBuild } from "../assets/AnimationComponents/AnimationComponents";
import HomeSlide from "../components/HomeSlide";

const slides = [
  {
    title: 'ShiftSquare: Simplify Scheduling and Optimize Resources for Your Business',
    description: 'Effortless scheduling, efficient resource management - empowering your business to thrive.',
    animation: ShiftBuild
  },
  {
    title: 'Effortless scheduling made accurate, every time!',
    description: 'ShiftSquare simplifies roster creation, ensuring error-free schedules that save you time and reduce headaches.',
    animation: EasyAnimation
  },
  {
    title: 'No more scheduling mishaps - only the right people for the right roles! ',
    description: ' ShiftSquare intelligently manages availability and role assignments, preventing conflicts and ensuring optimal workforce allocation.',
    animation: PuzzleAnimation
  },
  {
    title: 'Save time and effort with customizable scheduling templates!',
    description: "ShiftSquare's template feature allows you to create pre-defined schedules, making recurring shifts a breeze and streamlining your scheduling process.",
    animation: ScheduleClock
  },
  {
    title: 'Stay ahead of the game with powerful forecasting insights!',
    description: "ShiftSquare's forecasting feature leverages historical data and predictive algorithms, empowering you to make informed decisions, optimize staffing levels, and plan for future demand.",
    animation: FinanceAnimation
  },
  {
    title: 'Unlock savings potential by tracking and optimizing your resource allocation! ',
    description: "ShiftSquare's spending tracking capability helps you monitor labor costs, identify inefficiencies, and allocate your resources more effectively, ultimately maximizing your operational efficiency",
    animation: OptimiseAnimation
  },
]



export default function Home() {
  return (
    <div>
      <main className="h-[95vh] overflow-scroll snap-y no-scrollbar snap-mandatory">
        {
          slides.map((slide, index) => (
            <section className="h-[95vh] w-full flex flex-col items-center justify-center" key={index}>
              <HomeSlide index={index} key={index} animation={slide.animation} title={slide.title} description={slide.description} />
            </section>
          ))
        }
      </main>
    </div>
  )
}






