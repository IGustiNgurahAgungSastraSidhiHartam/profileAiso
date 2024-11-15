import Image from "next/image";
import Link from "next/link";
const ServiceHome = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" className="p-10 pb-10">
      <div className="flex flex-col items-center justify-center text-center">
        <hr className="w-9 bg-black h-0.5" />
        <h1 className="font-bold opacity-80">OUR SERVICE</h1>
        <h1 className="text-3xl font-bold text-black opacity-80 mt-5">
          Innovative solutions for every step forward.
        </h1>
        <p className="w-2/3 mt-2 text-gray-500 ">
          We provide advanced accounting solutions for businesses, government,
          and public services. Our expertise lies in seamless financial
          management through automation, digital integration, and modern
          accounting technologies to support your growth and efficiency
        </p>
      </div>
      <div className="flex flex-row gap-5 mt-10 items-center justify-center text-center ">
        <div className="flex flex-col hover:shadow-lg hover:scale-105  transition-transform transition-shadow duration-300">
          <Image
            src="/Image/image 7.png"
            alt="service"
            width={150}
            height={150}
          />
          <p className="font-bold text-sm">Accounting Receivable</p>
        </div>
        <div className="flex flex-col hover:shadow-lg hover:scale-105  transition-transform transition-shadow duration-300">
          <Image
            src="/Image/image 8.png"
            alt="service"
            width={150}
            height={150}
          />
          <p className="font-bold text-sm">Financial Report</p>
        </div>
        <div className="flex flex-col hover:shadow-lg hover:scale-105  transition-transform transition-shadow duration-300">
          <Image
            src="/Image/image 9.png"
            alt="service"
            width={150}
            height={150}
          />
          <p className="font-bold text-sm">General Journal</p>
        </div>
      </div>
      <div className=" flex items-center justify-center mt-5 ml-2 ">
        <Link
          href="/service"
          className="bg-black opacity-80 hover:scale-105  text-white text-sm p-2 px-4 opacity-90"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ServiceHome;
