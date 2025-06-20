"use client";
import React from "react";
import GetStarted from "./GetStarted";
import Link from "next/link";

const Footer = () => {
  const setSubMail = React.useState("")[1];

  const subscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
   
    <div id="footer">
    <div className="w-full flex flex-col justify-center items-center pt-20 pb-8" id="contact">
      <GetStarted />
      <div className="flex flex-col sm:flex-row flex-wrap pt-20 w-full justify-between px-8 sm:px-16 lg:px-24 gap-12">
        
        <div className="w-fit text-[#D29BAE] uppercase text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E7B467] to-[#D29BAE]">
            NEXUS swarm
          </span>
        </div>

        <div className="flex flex-wrap gap-40">
          <div className="sm:w-auto">
            <ul className="flex flex-col gap-4 font-semibold">
              <li className="hover:text-[#D29BAE]">
                <Link href="#home">Home</Link>
              </li>
              <li className="hover:text-[#D29BAE]">
                <Link href="#about">About</Link>
              </li>
              <li className="hover:text-[#D29BAE]">
                <Link href="https://www.linkedin.com/company/nexus-swarm/posts/?feedView=all">Join Us</Link>
              </li>
              <li className="hover:text-[#D29BAE]">
                <Link href="#home">Know More</Link>
              </li>
            </ul>
          </div>
          <div className="sm:w-auto">
            <ul className="flex flex-col gap-4 font-semibold">
              <li className="hover:text-[#D29BAE]">
                <Link href="mailto:">Email</Link>
              </li>
              <li className="hover:text-[#D29BAE]">
                <Link href="https://www.linkedin.com/company/nexus-swarm/posts/?feedView=all">LinkedIn</Link>
              </li>
              <li className="hover:text-[#D29BAE]">
                <Link href="https://www.instagram.com/nexus_swarm/">Instagram</Link>
              </li>
              <li className="hover:text-[#D29BAE]">
                <Link href="">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full sm:w-auto">
          <h1 className="text-xl font-bold uppercase pb-6">Join our newsletter</h1>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={subscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setSubMail(e.target.value)}
              className="text-center font-semibold bg-[#E7B467] outline-none border rounded-full p-3 border-[#E7B467] placeholder:text-white placeholder:font-semibold"
            />
            <button
              type="submit"
              className="border-2 border-[#D29BAE] rounded-full text-white bg-transparent p-3"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
<div className="text-[#D29BAE]/50 text-center pt-8 font-semibold">
All rights reserved &copy; {new Date().getFullYear()} NEXUS Swarm
</div>

    </div>
<div className="w-full h-5 bg-gradient-to-br from-[#E7B467] to-[#D29BAE] rounded-tl-xl rounded-tr-xl"></div>
    </div>
    </>
  );
};

export default Footer;
