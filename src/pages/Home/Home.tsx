import { LandingAnimation } from "../../assets/AnimationComponents/AnimationComponents";

export default function Home() {
  return (
    <div>
      <main className="h-[95vh] w-full overflow-scroll snap-y no-scrollbar snap-mandatory">
        {/* First Section of Home Page */}
        <section className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl md:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden flex justify-center">
            <div className="px-6 mx-auto pb-32 pt-36 sm:pt-60 md:px-8 md:pt-32">
              <div className="flex justify-center md:justify-between ">
                <div className="  max-w-xl  xl:max-w-4xl flex flex-col justify-start">
                  <h1 className="text-4xl text-start font-bold tracking-tight text-steel-blue-900 sm:text-5xl md:mx-2 lg:mx-20">
                    Simplify{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff80b5] to-[#9089fc] relative ">
                      Scheduling{" "}
                      {/* <div className="absolute top-0 right-0  -z-10">
                        <svg
                          id="visual"
                          viewBox="0 0 100 500"
                          width="600"
                          height="200"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                        >
                          <path
                            d="M0 47L10 45.8C20 44.7 40 42.3 60 45.8C80 49.3 100 58.7 120 54C140 49.3 160 30.7 180 31C200 31.3 220 50.7 240 50.3C260 50 280 30 300 19C320 8 340 6 360 7C380 8 400 12 420 20.8C440 29.7 460 43.3 480 46.3C500 49.3 520 41.7 540 39.5C560 37.3 580 40.7 590 42.3L600 44"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="miter"
                            stroke="#00ff0f"
                            stroke-width="15"
                          ></path>
                        </svg>
                      </div> */}
                    </span>{" "}
                    and Optimize Resources for Your Business
                  </h1>
                  <p className="relative text-start mt-6 md:mt-20 text-lg leading-8 text-text-steel-blue-700 sm:max-w-md md:max-w-none font-semibold lg:mx-20">
                    <span
                      className="
                    text-start bg-clip-text text-transparent bg-gradient-to-r from-[#ff80b5] to-[#9089fc] 
                    "
                    >
                      ShiftSquare
                    </span>
                    : Effortless scheduling, efficient resource management -
                    empowering your business to thrive.
                  </p>
                  <div className="mt-6 md:mt-24 flex items-center gap-x-6 mx-20">
                    <a
                      href="#"
                      className="rounded-md shadow-sm bg-polar-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-polar-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Live demo <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="opacity-90 absolute blur-sm -z-10 md:opacity-100 md:blur-0 md:relative md:flex xl:-top-16  justify-start items-start flex">
                  <LandingAnimation />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}