import Link from "next/link";

import { useRouter } from "next/router";
/* import { useState, useEffect } from "react"; */

const Navbar = () => {
  const router = useRouter();
  /* const [bgColor, setBgColor] = useState("bg-transparent"); // State untuk warna background

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setBgColor("bg-black"); // Mengubah menjadi hitam pekat jika di-scroll lebih dari 100vh
      } else {
        setBgColor("bg-transparent "); // Tetap transparan jika kurang dari 100vh
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); */

  return (
    /* <
      className={`fixed w-full border-gray-200 dark:bg-gray-900 top-0 z-50 transition-colors duration-300 ${bgColor}`}
    > */
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className=" absolute flex flex-wrap items-center w-full justify-around mx-auto h-20 mt-5 z-50 "
    >
      <p className="text-3xl font-bold text-white opacity-80">AISO</p>
      {/*  <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button> */}
      <div
        className="hidden justify-end w-full md:block md:w-auto"
        id="navbar-default"
      >
        <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
            <Link
              href="/"
              className={`block py-2 px-3 ${
                router.pathname === "/"
                  ? "text-white"
                  : "text-gray-200 hover:text-white"
              } md:p-0`}
              aria-current={router.pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
          </li>
          <Link
            href="/about"
            className={`block py-2 px-3 ${
              router.pathname === "/about"
                ? "text-white"
                : "text-gray-200 hover:text-white"
            } md:p-0`}
          >
            About
          </Link>

          <Link
            href="/service"
            className={`block py-2 px-3 ${
              router.pathname === "/services"
                ? "text-white"
                : "text-gray-200 hover:text-white"
            } md:p-0`}
          >
            Services
          </Link>
          <li>
            <Link
              href="/contact"
              className={`block py-2 px-3 ${
                router.pathname === "/contact"
                  ? "text-white"
                  : "text-gray-200 hover:text-white"
              } md:p-0`}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="/auth"
              className="block px-5 text-gray-200  bg-black  hover:opacity-70 hover:scale-105"
            >
              <h1 className="text-sm p-1">Login</h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    /* </nav> */
  );
};

export default Navbar;
