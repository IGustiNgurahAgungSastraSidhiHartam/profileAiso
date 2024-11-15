import Image from "next/image";
const ChoseHome = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" className="mt-20">
      <div className="flex flex-col bg-slate-200 p-10 items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold pt-5">Why Choose Us?</h1>
          <p className=" text-gray-500 mt-5">
            Experience our unmatched expertise and dedication to delivering
            <br />
            exceptional results, tailored to meet your needs.
          </p>
        </div>
        <div className="flex flex-row gap-5 p-10 w-3/4">
          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            className="flex flex-col bg-white p-3 text-left hover:shadow-lg hover:scale-105 hover:ring transition-transform transition-shadow duration-300"
          >
            <Image src="/Image/1.png" width={35} height={35} alt="image" />
            <h1 className="font-bold mt-3">Leading Innovation</h1>
            <p className="text-sm mt-1">
              We provide innovative products and services, designed to meet the
              needs of managing deposits and loans in an efficient manner.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            className="flex flex-col bg-white p-3 text-left hover:shadow-lg hover:scale-105 hover:ring transition-transform transition-shadow duration-300"
          >
            <Image src="/Image/1.png" width={35} height={35} alt="image" />
            <h1 className="font-bold mt-3">Leading Innovation</h1>
            <p className="text-sm mt-1">
              We provide innovative products and services, designed to meet the
              needs of managing deposits and loans in an efficient manner.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            className="flex flex-col bg-white p-3 text-left hover:shadow-lg hover:scale-105 hover:ring transition-transform transition-shadow duration-300"
          >
            <Image src="/Image/1.png" width={35} height={35} alt="image" />
            <h1 className="font-bold mt-3">Leading Innovation</h1>
            <p className="text-sm mt-1">
              We provide innovative products and services, designed to meet the
              needs of managing deposits and loans in an efficient manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseHome;
