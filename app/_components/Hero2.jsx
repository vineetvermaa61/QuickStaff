"use client";

import React, { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

import TypewriterEffect from './TypewriterEffect';



const Hero2 = () => {
  const [service,setService] = useState("Cleaner");
  return (
    <>
      <div className="pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px] -mt-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content mt-10">
                <h1 className="mb-5 min-h-[180px] text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Find Home Service Experts Near You 
                  <span className="text-primary">
                    <TypewriterEffect text="for Expedient Repairs" />
                  </span>
                 
                </h1>

                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                Simplifying home service booking. Find expert cleaners, electricians, 
                plumbers, and more—all at your fingertips. Get things done quickly 
                and efficiently with QuickStaff.
                </p>
                <label
                  className="mx-auto mt-10 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-xl gap-2 shadow-2xl focus-within:border-gray-300"
                  for="search-bar"
                >
                  <input
                    id="search-bar"
                    placeholder="Service you want..."
                    className="px-4 py-2 w-full rounded-md flex-1 outline-none bg-gray-100"
                    value={service}
                    onChange={((e)=>setService(e.target.value))}                    
                  />
                  <Button className="w-full md:w-auto px-6">
                    <Link href ={`/search/${service}`} className="text-sm font-semibold mx-auto">
                      Search
                    </Link>
                  </Button>
                </label>


  


                <div className="clients pt-16">
                  <h6 className="mb-6 -mt-10 flex items-center text-s te text-bold font-normal text-body-color dark:text-dark-6">
                    Some Of Our Promoters
                    {/* <span className="ml-3 inline-block h-px w-8 bg-body-color"></span> */}
                  </h6>

                  <div className="flex items-center space-x-4">
                    <SingleImage
                      className="w-[400px]"
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                    />

                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                    />

                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                    />
                  </div>
                </div>
                
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://img.freepik.com/free-photo/plumber-with-thumb-up_1368-779.jpg?t=st=1714596524~exp=1714600124~hmac=74fda990e3f92d0a2e87ec1fc6f09f828189e66ea86be16121ada3b95957aeb2&w=740"
                    alt="hero"
                    className=" max-w-full w-[90%] lg:ml-auto object-fit"
                  />

                  
                  <span className="absolute -bottom-8 -left-4 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full h-full flex justify-center items-center">
    <h1 id="typewriter" class="text-4xl font-bold"></h1>
</div>


<h1 className="ml-[550px] mt-8 mb-[1rem] mx-auto align-center font-bold text-3xl"
      >On Demand Services</h1><br />


    </>    
  );
};

export { Hero2, Navbar };

const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data } = useSession();
  useEffect(() => {
    console.log(data);
  }, [data]); 

  return (
    <>
      <header className="flex w-full items-center mb-10">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="/" className="block w-full py-5">
                <img
                  src="https://i.ibb.co/FmvP6wS/Logo.png"
                  alt="Quick Staff"
                  className="w-[110px] dark:hidden"
                />
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="w-full hidden dark:block"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={` ${
                    open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                    !open && "hidden"
                  } `}
                >
                  <ul className="block lg:flex">
                    <ListItem NavLink="/">Home</ListItem>
                    <ListItem NavLink="/listService">Add Service</ListItem>
                    <ListItem NavLink="/about">About Us</ListItem>
                    <ListItem NavLink="/contact">Contact </ListItem>
                  </ul>
                </nav>
              </div>
              <div>
                {data?.user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Image
                        src={data?.user?.image}
                        alt="user"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href={"/mybooking"}>My Booking</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/payment"}>Make Payment</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => signOut()}>
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button onClick={() => signIn("descope")}>
                    Login / Sign Up
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="line h-[2px] bg-gray-100 w-[90%] absolute top-[90px] left-1/2 transform -translate-x-1/2"></div>
    </>
  );
};

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};