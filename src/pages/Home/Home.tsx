import { useLocation } from "react-router-dom";
import Logo from "../../components/Logo";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { search } = useLocation();
  const { loginWithRedirect } = useAuth0();

  if (search.includes("signup")) {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  }

  return (
    <div className="relative ">
      <main className="h-[95vh] w-full snap-y no-scrollbar snap-mandatory flex flex-col place-items-center">
        {/* First Section of Home Page */}
        <section className="isolate -z-10 w-full max-w-7xl lg:pt-14">
          <svg
            className="absolute inset-x-0 top-14 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
            className="absolute left-1/2 right-0 top-14 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-polar-400 to-purple-heart-600 opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div>
            <div className="px-6 mx-auto pb-20 pt-16 lg:px-8 lg:pt-20">
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="max-w-2xl flex flex-col justify-start items-center">
                  <h1 className="text-4xl text-center lg:text-start font-semibold text-steel-blue-900 md:text-5xl lg:text-6xl lg:mx-1 lg:ml-8 leading-4 tracking-normal font-poppins">
                    <span className="bg-clip-text leading-[1.1] text-transparent bg-gradient-to-r from-polar-400 to-purple-heart-600 relative font-bold">
                      Shift Square{" "}
                    </span>{" "}
                    <br />
                    <span className="leading-[1.1] font-bold font-poppins">
                      Schedule your business to success
                    </span>
                  </h1>
                  <p className="relative mt-4 text-lg text-center lg:leading-8 lg:text-2xl lg:text-start text-gray-500 sm:max-w-md lg:max-w-none lg:ml-8 tracking-wider font-poppins">
                    Effortless scheduling, efficient resource management -
                    empowering your business to thrive.
                  </p>
                  <div className="mt-6 lg:mt-8 flex items-center gap-x-8 mx-8 w-full lg:pl-8 justify-center lg:justify-start">
                    <button
                      className="rounded-md hover:cursor-pointer shadow-sm bg-polar-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-polar-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800"
                      onClick={() =>
                        fetch(
                          "https://7vxuwb2bf6ifaow6bypl7hwikm0bcjeu.lambda-url.eu-west-2.on.aws/",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              priceId: "price_1PjPOaE7LxujRcaNb5gXVps3",
                            }),
                          }
                        )
                          .then((res) => {
                            console.log(res);
                            return res.json();
                          })
                          .then((data) => {
                            console.log({ data });
                            return data.clientSecret;
                          })
                          .catch((error) => {
                            console.error("Error:", error);
                          })
                      }
                    >
                      Get Started
                    </button>
                    {/* <a
                      href="#"
                      className="rounded-md shadow-sm bg-polar-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-polar-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800"
                    >
                      Get started
                    </a> */}
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Live demo <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="m-auto py-16 md:py-0 md:pb-10 xl:ml-24 relative">
                  <Logo size={230} />
                  <div className="absolute -z-10 -inset-12 bg-gradient-to-br from-polar-500 to-purple-heart-400 rounded-full blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="isolate -z-10 w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 max-w-7xl mx-16">
            <div className="bg-gray-100 rounded-2xl p-6 text-start ">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-md mb-4 text-2xl">
                🎮
              </div>
              <h3 className="text-base font-semibold mb-2">
                Intuitive Interface
              </h3>
              <p className="text-gray-500 pt-1 leading-6 text-sm">
                Streamline workforce management with an easy-to-use interface
                for businesses of any size.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 text-start ">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-md mb-4 text-2xl">
                🛡️
              </div>
              <h3 className="text-base font-semibold mb-2">Error Prevention</h3>
              <p className="text-gray-500 pt-1 leading-6 text-sm">
                Ensure accuracy, minimize disruptions with automated warnings,
                preventing costly scheduling mistakes.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 text-start ">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-md mb-4 text-2xl">
                📊
              </div>
              <h3 className="text-base font-semibold mb-2">
                Dynamic Dashboard
              </h3>
              <p className="text-gray-500 pt-1 leading-6 text-sm">
                Gain insights into hours, expenses, and sales percentages for
                informed decision-making.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 text-start ">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-md mb-4 text-2xl">
                📆
              </div>
              <h3 className="text-base font-semibold mb-2">
                Copy-Paste Efficiency
              </h3>
              <p className="text-gray-500 pt-1 leading-6 text-sm">
                Save time with seamless shift copying, enhancing scheduling
                efficiency for managers.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 text-start ">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-md mb-4 text-2xl">
                📝
              </div>
              <h3 className="text-base font-semibold mb-2">
                Section Assignment
              </h3>
              <p className="text-gray-500 pt-1 leading-6 text-sm">
                Optimize workforce allocation, prevent misplacement, aligning
                tasks with individual skill sets.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 text-start ">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-md mb-4 text-2xl">
                💡
              </div>
              <h3 className="text-base font-semibold mb-2">
                Departmental Insights
              </h3>
              <p className="text-gray-500 pt-2 leading-6 text-sm">
                Facilitate budget optimization with views of spending patterns
                by department, employee, and hours.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="product">
            <img
              src="https://i.imgur.com/EHyR2nP.png"
              alt="The cover of Stubborn Attachments"
            />
            <div className="description">
              <h3>Stubborn Attachments</h3>
              <h5>$20.00</h5>
            </div>
          </div>
          <form action="https://7vxuwb2bf6ifaow6bypl7hwikm0bcjeu.lambda-url.eu-west-2.on.aws/" method="POST" >
            <button type="submit">Checkout</button>
          </form>
        </section>
      </main>
    </div>
  );
}
