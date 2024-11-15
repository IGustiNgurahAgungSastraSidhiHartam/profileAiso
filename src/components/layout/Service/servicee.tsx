import Image from "next/image";
const ServiceService = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="p-10 pb-10 mt-5"
    >
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
      <div className="bg-white p-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Image/image 7.png"
                alt="service"
                width={600}
                height={300}
                className="object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Image/image 7.png"
                alt="service"
                width={600}
                height={300}
                className="object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
                <p className="text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Image/image 7.png"
                alt="service"
                width={600}
                height={300}
                className="object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Internet of Things</h3>
                <p className="text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/Image/image 7.png"
                alt="service"
                width={600}
                height={300}
                className="object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Artificial Intelligence
                </h3>
                <p className="text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceService;
