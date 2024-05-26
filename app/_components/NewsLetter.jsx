import React from "react";

function NewsLetter() {
  return (
    <>
      <div class="relative bg-[#5b54e0] mt-20">
        <div class="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            class="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 class="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Subscribe to our QuickStaff
            </h2>
            <p class="mb-6 text-base text-gray-200 md:text-md">
              "Stay ahead in the home service industry with QuickStaff!
              Subscribe to our newsletter for exclusive insights, trends, and
              growth tips. Don't miss out on valuable updates—join us today!"
            </p>

            {/* ================================ */}

            {/*             
            <form action="https://formsubmit.co/your@email.com" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <button type="submit">Send</button>
</form> */}

            {/* ================================ */}

            <form
              action="https://formsubmit.co/vineetvermaa30@gmail.com"
              method="POST"
              class="z-1 flex flex-col items-center w-full mb-4 md:flex-row md:px-16"
            >
              <input
                type="text"
                name="Thank⠀you⠀from⠀Quick⠀Staff⠀team!⠀Stay⠀tuned⠀for⠀more⠀updates⠀very⠀soon."
                class="-z-1 opacity-0 bg- hiddden flex-grow w-0 h-0 px-4 mb-3 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />

              <input
                placeholder="Enter your Email"
                required=""
                type="email"
                name="Email id:"
                class="z-1 flex-grow w-full h-12 px-4 mb-3 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />

              <input
                type="hidden"
                name="_subject"
                value="New submission from QuickStaff!!"
              />
              <input type="hidden" name="_template" value="basic" />
              <input
                type="hidden"
                name="_cc"
                value="2a3v@iiitl.ac.in,lcs2021049@iiitl.ac.in,lcb2021042@iiitl.ac.in,lcb2021051@iiitl.ac.in,lcb2021033@iiitl.ac.in,lcb2021021@iiitl.ac.in"
              />

              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/contact"
              />
              <input type="hidden" name="_captcha" value="false" />

              <button
                type="submit"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>

            <p class="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
              "Discover how QuickStaff revolutionizes the home service industry!
              Explore our platform for seamless experiences, expert solutions,
              and unmatched convenience."
            </p>
            <a
              href="/"
              aria-label="Scroll down"
              class="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default NewsLetter;
