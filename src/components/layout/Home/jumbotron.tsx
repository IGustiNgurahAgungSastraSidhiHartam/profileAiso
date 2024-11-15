import Link from "next/link";
const Jumbotron = () => {
  return (
    <div className="bg-[url('/Image/12.jpg')] bg-center bg-cover min-h-screen bg-no-repeat font-poppins">
      <div className="flex flex-col items-center pt-56 ">
        <h1
          data-aos="fade-down"
          data-aos-duration="1500"
          className="text-4xl font-semibold text-gray-300 opacity-90 text-center w-1/2 mx-auto line-clamp-2 leading-relaxed"
        >
          ACOUNTING INFORMATION
          <br /> SYSTEM ONLINE
        </h1>
        <p
          data-aos="fade-down"
          data-aos-duration="2000"
          className="text-sm font-semibold text-gray-300 opacity-90 text-center pt-5 w-1/2 mx-auto line-clamp-2 leading-relaxed"
        >
          “Organization Management Made Easier Than Ever”
        </p>
        <div className=" flex items-center justify-center mt-5 ml-2 ">
          <Link
            href="/contact"
            className="bg-black opacity-80 hover:scale-105  text-white text-sm p-2 px-4 opacity-90"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
