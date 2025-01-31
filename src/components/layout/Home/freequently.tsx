import { useState } from "react";
import Image from "next/image";

const faq = [
  {
    id: 1,
    question: "What Aiso?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vehicula diam, in elementum tellus convallis ac.",
  },
  {
    id: 2,
    question: "How does Aiso improve guest experience?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vehicula diam, in elementum tellus convallis ac.",
  },
  {
    id: 3,
    question: "Can Aiso be customized for my hotel’s specific needs?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vehicula diam, in elementum tellus convallis ac.",
  },
  {
    id: 4,
    question: "Is Aiso secure?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vehicula diam, in elementum tellus convallis ac.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active index
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="flex flex-col gap-5 p-5 sm:px-10 lg:px-32  pt-20 pb-20"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center justify-center mb-5">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        {faq.map((item, index) => (
          <div
            key={item.id}
            className={`group flex flex-col justify-between border-black border w-full sm:w-[90%] lg:w-full cursor-pointer 
                    ${
                      activeIndex === index
                        ? "bg-black text-white"
                        : "bg-white hover:bg-black hover:text-white"
                    }`}
            onClick={() => handleClick(index)}
          >
            <div className="flex flex-row justify-between items-center w-full p-4 sm:p-5">
              <h1
                className={`text-lg sm:text-xl  text-gray-800 group-hover:text-white 
                            ${activeIndex === index ? "text-white" : ""}`}
              >
                {item.question}
              </h1>
              <Image
                src="/Image/down.png"
                alt="down"
                width={20}
                height={20}
                className={`transform transition-transform duration-500 ease-in-out 
                        ${activeIndex === index ? "rotate-180" : ""}`}
              />
            </div>
            {activeIndex === index && (
              <div
                className={`overflow-hidden cursor-default transition-all duration-300 ease-in-out 
                        ${activeIndex === index ? "max-h-[200px]" : "max-h-0"}`}
              >
                <div className="p-4 sm:p-5 text-gray-800 bg-white">
                  <p>{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
