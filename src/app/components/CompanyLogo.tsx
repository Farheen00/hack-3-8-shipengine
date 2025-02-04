import Image from "next/image";

export default function Companylogo() {
  return (
    <div className="bg-white flex flex-wrap items-center justify-center sm:w-full md:w-[73%] mx-auto">
      <div className="flex flex-wrap items-center justify-center mt-10 sm:mt-8 gap-6 px-4 sm:px-0">
        <Image
          width={700}
          height={700}
          alt="logo1"
          src="/Logo1.png"
          className="h-16 w-16 sm:h-20 sm:w-20"
        />
        <Image
          width={700}
          height={700}
          alt="logo2"
          src="/Logo2.png"
          className="h-16 w-16 sm:h-20 sm:w-20"
        />
        <Image
          width={700}
          height={700}
          alt="logo3"
          src="/Logo3.png"
          className="h-16 w-16 sm:h-20 sm:w-20"
        />
        <Image
          width={700}
          height={700}
          alt="logo4"
          src="/Logo4.png"
          className="h-16 w-16 sm:h-20 sm:w-20"
        />
        <Image
          width={700}
          height={700}
          alt="logo5"
          src="/Logo5.png"
          className="h-16 w-16 sm:h-20 sm:w-20"
        />
        <Image
          width={700}
          height={700}
          alt="logo6"
          src="/Logo6.png"
          className="h-16 w-16 sm:h-20 sm:w-20"
        />
        <Image
          width={700}
          height={700}
          alt="logo7"
          src="/Logo7.png"
          className="h-16 w-16 sm:h-20 sm:w-20"
        />
      </div>
    </div>
  );
}