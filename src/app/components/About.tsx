import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex justify-center items-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto max-w-screen-lg">
        {/* Text Section */}
        <div className="bg-[#007580] p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              About Us - Comforty
            </h2>
            <p className="text-base md:text-lg mb-6">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
          </div>
          <button
            
            className="bg-[#F9F9F9] bg-opacity-15 text-white py-2 px-4 rounded w-fit hover:bg-white hover:text-[#007580] transition-all duration-300"
          >
            View collection
          </button>
        </div>

        {/* Image Section */}
        <div className="bg-gray-100 flex items-center justify-center">
          <Image
            src="/product2.png"
            alt="Comforty product"
            width={400}
            height={400}
            className="object-cover w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
}
