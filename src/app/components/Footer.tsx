import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <div className="w-full">
      <footer className="text-gray-600 body-font">
        <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto">
          <div className="flex flex-wrap md:text-left text-center justify-center">
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-4 mb-8 md:mb-0">
              <div className="flex items-center justify-center sm:justify-start">
                <Image
                  src="/pic2.png"
                  width={700}
                  height={700}
                  alt="logo"
                  className="w-6 h-7"
                />
                <h1 className="text-[20px] font-medium pl-2 font-[Inter]">
                  Comforty
                </h1>
              </div>
              <p className="pt-4 text-sm text-gray-600">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis
                interdum. Cras egestas purus.
              </p>
              <div className="flex pt-3 gap-3 justify-center sm:justify-start">
                <Image
                  src="/facebook.png"
                  width={700}
                  height={700}
                  alt="facebook logo"
                  className="w-9 h-9"
                />
                <FaTwitter className="w-6 h-6 text-gray-500" />
                <IoLogoInstagram className="w-6 h-6 text-gray-500" />
                <FaPinterest className="w-6 h-6 text-gray-500" />
                <IoLogoYoutube className="w-6 h-6 text-gray-500" />
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-4 mb-8 md:mb-0">
              <h2 className="title-font font-medium text-gray-700 tracking-widest text-sm mb-4">
                CATEGORIES
              </h2>
              <nav className="list-none space-y-2 text-sm">
                {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map(
                  (category) => (
                    <li key={category}>
                      <Link href="/" className="text-gray-800 hover:text-[#007580]">
                          {category}
                      
                      </Link>
                    </li>
                  )
                )}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-4 mb-8 md:mb-0">
              <h2 className="title-font font-medium text-gray-700 tracking-widest text-sm mb-4">
                SUPPORT
              </h2>
              <nav className="list-none space-y-2 text-sm">
                {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map(
                  (support) => (
                    <li key={support}>
                      <Link href="/"className="text-gray-800 hover:text-[#007580]">
                          {support}
                      
                      </Link>
                    </li>
                  )
                )}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-700 tracking-widest text-sm mb-4">
                NEWSLETTER
              </h2>
              <div className="flex flex-wrap sm:flex-nowrap items-end">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:ring-[#029FAE] focus:border-[#029FAE] text-gray-600 py-2 px-4 mb-2 sm:mb-0 sm:mr-4"
                />
                <button className="text-white bg-[#029FAE] hover:bg-[#02a0aee3] px-6 py-2 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-4 sm:px-6 lg:px-8 py-6 mx-auto flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm text-center sm:text-left">
              @ 2021 - Blogy - Designed & Developed by
              <span className="ml-1 text-gray-800">Zakirsoft</span>
            </p>
            <div className="mt-4 sm:mt-0">
              <Image
                src="/Logos.png"
                width={700}
                height={700}
                alt="footer image"
                className="h-7 w-auto"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
