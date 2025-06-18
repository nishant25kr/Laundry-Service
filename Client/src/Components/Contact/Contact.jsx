import React from "react";

export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Section */}
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-lg font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              {/* Address */}
              <div className="flex items-center mt-8 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4 text-md font-semibold w-40">
                  Acme Inc, Street, State, Postal Code
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.493a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.516l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.69.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                </svg>
                <div className="ml-4 text-md font-semibold w-40">
                  +44 1234567890
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center mt-2 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4 text-md font-semibold w-40">
                  info@acme.org
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <form className="p-6 flex flex-col justify-center">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="md:w-32 bg-orange-700 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
