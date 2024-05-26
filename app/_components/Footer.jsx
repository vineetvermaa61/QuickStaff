import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer class="px-3 pt-4 lg:px-9 border-t-2 bg-gray-100 mt-12">
        <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="sm:col-span-2">
            <a href="#" class="inline-flex items-center">
              <img
                src="https://i.ibb.co/FmvP6wS/Logo.png"
                alt="logo"
                class="w-20"
              />
            </a>
            <div class="mt-6 lg:max-w-xl">
              <p class="text-md text-gray-600">
                Quick Staff simplifies household service booking with top-notch,
                vetted professionals. Join us for hassle-free, reliable
                solutions today!
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-2 text-sm">
            <p class="text-base font-bold tracking-wide text-gray-900">Help</p>
            <a href="#">IIIT Lucknow</a>
            <a href="#">B.Tech</a>
            <a href="#">CS & CSB</a>
            <p class="text-base font-bold tracking-wide text-gray-900">
              Popular Services
            </p>
            <Link href="/search/cook">Cook</Link>
            <Link href="/search/electrician">Electrician</Link>
            <Link href="/search/gardener">Gardener</Link>
            <Link href="/search/plumber">Plumber</Link>
            <Link href="/search/painter">Painter</Link>
          </div>

          <div>
            <p class="text-base font-bold tracking-wide text-gray-900">
              COMPANY IS ALSO AVAILABLE ON
            </p>
            <div class="flex items-center gap-1 px-2">
              <a href="#" class="w-full min-w-xl">
                <img
                  src="https://mcqmate.com/public/images/icons/playstore.svg"
                  alt="Playstore Button"
                  class="h-10"
                />
              </a>
              <a
                class="w-full min-w-xl"
                href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
              >
                <img
                  src="https://mcqmate.com/public/images/icons/youtube.svg"
                  alt="Youtube Button"
                  class="h-28"
                />
              </a>
            </div>
            <p class="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div class="flex">
              <p class="mr-1 text-gray-800">Email:</p>
              <a href="#" title="send email">
                quickstaff@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p class="text-sm text-gray-600">
            © Copyright 2024 Company. All rights reserved.
          </p>
          <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="#"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy &amp; Cookies Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
