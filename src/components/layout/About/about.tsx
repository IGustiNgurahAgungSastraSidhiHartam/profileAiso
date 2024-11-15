import Image from "next/image";
import React from "react";

const AboutAbout = () => {
  return (
    <div
      data-aos="fade-down"
      className=" ml-60  p-10 flex items-center justify-center mt-10 mb-10"
    >
      <div className="flex flex-row  gap-20 items-center ">
        <div className="mt-16">
          <Image src="/Image/logo2.png" alt="logo" width={950} height={950} />
        </div>
        <div className="flex flex-col mt-10   ">
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

export default AboutAbout;
