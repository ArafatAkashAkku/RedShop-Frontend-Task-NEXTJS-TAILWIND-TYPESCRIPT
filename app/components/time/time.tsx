import Image from "next/image";
import React from "react";
import Timeline from "../../../public/images/random/time-1.png";
import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";

const Time = () => {
  return (
    <>
      <section className="my-10">
        <div className="relative">
          <Image src={Timeline} alt="Timeline" />
          <div className="absolute bottom-5 flex gap-2 items-center flex-col md:flex-row justify-between w-full px-5">
            <div>
              <h1 className=" text-sm md:text-3xl font-black capitalize text-white">
                Simple & Decidedly Modern
              </h1>
              <Link
                href={"/"}
                className="text-sm md:text-2xl font-black capitalize text-white flex gap-2"
              >
                Shop Now <FaArrowTrendUp />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <p className="px-2 py-3 md:px-4 md:py-5 bg-slate-400 border-black rounded-md text-sm md:text-5xl font-black text-white flex flex-col items-center justify-center">00<span className="text-sm">&nbsp;&nbsp;days&nbsp;</span></p>
              <p className="px-2 py-3 md:px-4 md:py-5 bg-slate-400 border-black rounded-md text-sm md:text-5xl font-black text-white flex flex-col items-center justify-center">00<span className="text-sm">&nbsp;hours&nbsp;</span></p>
              <p className="px-2 py-3 md:px-4 md:py-5 bg-slate-400 border-black rounded-md text-sm md:text-5xl font-black text-white flex flex-col items-center justify-center">00<span className="text-sm">minutes</span></p>
              <p className="px-2 py-3 md:px-4 md:py-5 bg-slate-400 border-black rounded-md text-sm md:text-5xl font-black text-white flex flex-col items-center justify-center">00<span className="text-sm">seconds</span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Time;
