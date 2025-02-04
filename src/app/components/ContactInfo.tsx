import { FaClock, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 gap-10">
      <div className="max-w-md md:max-w-xl lg:max-w-2xl text-center">
        <h2 className="text-2xl font-bold">Get In Touch With Us</h2>
        <p className="text-sm text-[#9F9F9F] mt-2">
          For more information about our products & services, feel free to drop
          us an email. Our staff will always be there to help you out. Do not
          hesitate!
        </p>
      </div>

      <div className="max-w-4xl w-full bg-white rounded-lg p-4 md:p-8 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <div className="flex-1 space-y-8">
          <div className="flex gap-4 items-start">
            <FaLocationDot className="text-xl text-[#029FAE]" />
            <div>
              <p className="font-medium text-lg">Address:</p>
              <p className="text-sm text-gray-700">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <FaPhone className="text-xl text-[#029FAE]" />
            <div>
              <p className="font-medium text-lg">Phone:</p>
              <p className="text-sm text-gray-700">Mobile: (+84) 546-6789</p>
              <p className="text-sm text-gray-700">Hotline: (+84) 456-6789</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <FaClock className="text-xl text-[#029FAE]" />
            <div>
              <p className="font-medium text-lg">Working Time:</p>
              <p className="text-sm text-gray-700">
                Monday-Friday: 9:00 - 22:00
              </p>
              <p className="text-sm text-gray-700">
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                placeholder="Abc"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#029FAE] focus:border-[#029FAE] sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#029FAE] focus:border-[#029FAE] sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="This is optional"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#029FAE] focus:border-[#029FAE] sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Hi! I'd like to ask about ..."
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#029FAE] focus:border-[#029FAE] sm:text-sm"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-8 bg-[#029FAE] w-full md:w-fit text-white py-2 rounded-md outline-none focus:ring-2 focus:ring-[#029FAE] focus:ring-offset-2 transition hover:bg-[#027a8a]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
