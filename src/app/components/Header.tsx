import { FaCheck } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { IoCartOutline, IoAlertCircleOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() { 
  
  
  
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="text-gray-200 flex flex-wrap justify-between items-center px-4 py-2 bg-[#272343]">
        <div className="text-sm flex ml-8 space-x-2">
          <div className="mt-1 text-white">
            <FaCheck size={14} />
          </div>
          <span>Free Shipping On All Orders $50</span>
        </div>
        <div className="flex space-x-6 text-sm mr-8 ml-10">
          <div className="flex space-x-1">
            <span>Eng</span>
            <div className="pt-1">
              <SlArrowDown size={10} />
            </div>
          </div>
          <Link href="/faqs" className="hover:text-[#029FAE]">
            FAQs
          </Link>
          <div className="flex items-center space-x-1">
            <IoAlertCircleOutline size={16} />
            <Link href="/needHelp" className="hover:text-[#029FAE]">
              Need Help
            </Link>
          </div>
        </div>
      </div>

      {/* Logo and Cart Section */}
      <div className="bg-[#F0F2F3] py-4 px-4 sm:px-8 md:px-16 w-full border-y">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-20">
          <div className="flex items-center ml-6">
            <Image
              src="/pic2.png"
              width={700}
              height={700}
              alt="logo"
              className="w-6 h-7"
            />
            <h1 className="text-[18px] sm:text-[20px] font-medium pl-2 font-[Inter]">
              Comforty
            </h1>
          </div>
          
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-md">
              <IoCartOutline className="w-6 h-6 cursor-pointer" />
              <Link href="/cart" className="hover:text-[#029FAE]">
                Cart
              </Link>
              <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#007580] text-white text-sm">
              
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white py-4 sticky top-0 z-10 px-4 sm:px-8 md:px-16 w-full border-b border-gray-300">
        <div className="flex items-center justify-between">
          {/* Links for Desktop */}
          <div className="hidden sm:flex items-center gap-6 lg:gap-10">
            <Link
              href="/"
              className="hover:text-[#029FAE] cursor-pointer text-gray-700"
            >
              Home
            </Link>
            <Link
              href="/cart"
              className="hover:text-[#029FAE] cursor-pointer text-gray-700"
            >
              Shop
            </Link>
            <Link
              href="/products"
              className="hover:text-[#029FAE] cursor-pointer text-gray-700"
            >
              Product
            </Link>
            <Link
              href="/shop"
              className="hover:text-[#029FAE] cursor-pointer text-gray-700"
            >
              Pages
            </Link>
            <Link
              href="/about"
              className="hover:text-[#029FAE] cursor-pointer text-gray-700"
            >
              About
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger>
                <HiMenu className="text-gray-700 w-8 h-8 cursor-pointer" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-lg font-medium">Menu</SheetTitle>
                  <SheetDescription className="flex flex-col gap-4 mt-4">
                    <Link
                      href="/"
                      className="hover:text-[#029FAE] cursor-pointer text-gray-700"
                    >
                      Home
                    </Link>
                    <Link
                      href="/shop"
                      className="hover:text-[#029FAE] cursor-pointer text-gray-700"
                    >
                      Shop
                    </Link>
                    <Link
                      href="/products"
                      className="hover:text-[#029FAE] cursor-pointer text-gray-700"
                    >
                      Product
                    </Link>
                    <Link
                      href="/products"
                      className="hover:text-[#029FAE] cursor-pointer text-gray-700"
                    >
                      Pages
                    </Link>
                    <Link
                      href="/about"
                      className="hover:text-[#029FAE] cursor-pointer text-gray-700"
                    >
                      About
                    </Link>
                    <Link
                      href="/needHelp"
                      className="hover:text-[#029FAE] cursor-pointer text-gray-700"
                    >
                      Contact
                    </Link>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/* Contact Section */}
          <div className="hidden sm:flex items-center gap-1 text-sm sm:text-base whitespace-nowrap">
            <Link
              href="/needHelp"
              className="text-gray-500 hover:text-[#029FAE] cursor-pointer"
            >
              Contact:
            </Link>
            <span className="font-medium text-[#272343]">(808) 555-0111</span>
          </div>
        </div>
      </div>
    </header>
  );
}