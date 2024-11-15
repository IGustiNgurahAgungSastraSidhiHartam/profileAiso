import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutHome = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className=" ml-60  p-10 flex items-center justify-center mt-10 mb-10"
    >
      <div className="flex flex-row  gap-20 items-center ">
        <div className="mt-16 hover:scale-105  transition-transform transition-shadow duration-300">
          <Image src="/Image/logo2.png" alt="logo" width={950} height={950} />
          <div className="-translate-y-16 translate-x-10">
            <Link
              href="/about"
              className="bg-black opacity-80 hover:opacity-90 text-white text-sm p-2 px-4 opacity-90 w-32 mt-5  text-center"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold opacity-90">
            ABOUT US <br />
            LANDING PAGE
          </h1>
          <p className="text-sm  mt-3 w-2/3 ">
            AISO is a modern accounting system designed to help businesses
            manage their finances efficiently and accurately. With features like
            automated transaction recording, real-time financial reports, and
            digital payment integration, AISO enables you to make faster, more
            informed financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
