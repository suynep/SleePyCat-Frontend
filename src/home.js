import React from "react";

function Home() {
  return (
    <>
      <section class="py-24 relative" id="home">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full  lg:items-start items-center gap-10 flex">
              <div class="w-full lg:items-start items-center gap-4 flex-auto">
                <h2 class="text-gray-900 text-7xl font-bold font-manrope leading-normal lg:text-start text-center dark:text-gray-100">
                  <span className="bg-gradient-to-r from-white via-slate-400 to-gray-600 bg-clip-text text-transparent">
                    Your Words and Creativity  
                  </span>
                  <br />
                  <span className="animate-pulse bg-gradient-to-r from-red-800 via-red-400 to-red-200 bg-clip-text text-transparent">
                     beautified.
                  </span>
                </h2>
              </div>
              <img
                class="lg:mx-0 mx-auto h-40  animate-pulse flex-auto"
                src="pencil.svg"
                alt="pencil icon"
              />
            </div>
          </div>
        </div>
      </section>{" "}
      {/* <div className="flex py-24 relative" id="home">
        <div className="text-7xl m-10 flex-auto items-center justify-start">
          <span className="bg-gradient-to-r from-white via-slate-400 to-gray-600 bg-clip-text text-transparent">
            Your Words and Creativity <br />
          </span>
          <span className="animate-pulse bg-gradient-to-r from-red-800 via-red-400 to-red-200 bg-clip-text text-transparent">
            beautified.
          </span>
        </div>
        <img
          className="animate-pulse flex-auto h-40 m-10"
          src="pencil.svg"
          alt="pencil icon"
        ></img>
      </div> */}
      <section class="py-24 relative" id="about">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center dark:text-gray-100">
                  Helping you unleash your creativity to the fullest.
                </h2>
                <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center dark:text-gray-400">
                  Through the collaboration of four friends, we've created
                  <span className="text-sky-500"> SleePyCat</span>. Our app not
                  only gives a distraction-free environment to journal on, but
                  also transcends your writing experience via Adaptive UI
                  design.
                </p>
              </div>
              <button class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span class="px-1.5 text-white text-sm font-medium leading-6">
                  Get Started
                </span>
              </button>
            </div>
            <img
              class="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src="homepageJournal.avif"
              alt="about Us image"
            />
          </div>
        </div>
      </section>{" "}
    </>
  );
}

export default Home;
