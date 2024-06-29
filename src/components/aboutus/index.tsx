import React from "react";
import Image from "next/image";
import Button from "../common/Button";

const AboutUs: React.FC = () => {
  return (
    <div className="py-20 grid grid-cols-12 gap-8">
      <div className="col-span-6">
        <p className="p2 font-bold text-salmon-pink">About Us</p>
        <h3 className="font-bold">
          Innovating the Future <br /> with AI
        </h3>
        <p className="text-white p2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem consequatur quis necessitatibus modi voluptatum libero
          odio harum. Numquam quaerat non consequuntur necessitatibus, eum ab
          molestias iure ullam beatae qui. Est!
        </p>
        <div className="flex space-x-3 mt-8">
          <div className="border border-[#383440] rounded-md p-3 grid grid-cols-12  bg-[#18181b]">
            <div className="col-span-3 w-10 h-10 rounded-full bg-[#27272a] flex justify-center items-center">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#fe7587"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M15.026 21.534A9.994 9.994 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c2.51 0 4.802.924 6.558 2.45l-7.635 7.636L7.707 8.87a1 1 0 0 0-1.414 1.414l3.923 3.923a1 1 0 0 0 1.414 0l8.3-8.3A9.956 9.956 0 0 1 22 12a9.994 9.994 0 0 1-.466 3.026A2.49 2.49 0 0 0 20 14.5h-.5V14a2.5 2.5 0 0 0-5 0v.5H14a2.5 2.5 0 0 0 0 5h.5v.5c0 .578.196 1.11.526 1.534Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="col-span-9">
              <p className="p2 font-bold">Our Mission</p>
              <p className="p3">
                We aim to make advanced chatbot AI technology .
              </p>
            </div>
          </div>
          <div className="border border-[#383440] rounded-md p-3 grid grid-cols-12  bg-[#18181b]">
            <div className="col-span-3 w-10 h-10 rounded-full bg-[#27272a] flex justify-center items-center">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#fe7587"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"
                />
              </svg>
            </div>
            <div className="col-span-9">
              <p className="p2 font-bold">Our Vision</p>
              <p className="p3">
                We aim to make advanced chatbot AI technology .
              </p>
            </div>
          </div>
        </div>
        <Button
          text="View More Details"
          cls="primary-gradient-button mt-8"
          type="button"
        />
      </div>
      <div className="col-span-6 relative">
        <Image
          src="/aboutus.png"
          alt="about us ebp"
          width={550}
          height={450}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default AboutUs;
