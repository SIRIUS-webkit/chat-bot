import React from "react";
import Badage from "../common/Badage";
import Arrow from "../common/Arrow";
import Circle from "../common/Circle";
import Button from "../common/Button";

const Home: React.FC = () => {
  return (
    <>
      <div className="py-20 smmx:py-10 relative z-10">
        <Circle width={200} height={200} />
        <Circle width={300} height={300} />
        <Circle width={450} height={450} cls="block smmx:hidden" />
        <Circle width={550} height={550} cls="block smmx:hidden" />
        <Circle width={650} height={650} cls="block smmx:hidden" />
        <p className="p2 font-bold text-center pb-10 smmx:pb-7">
          Transform Ideas into Reality
        </p>
        <h1 className="text-center font-bold !leading-0 !mdmx:leading-3 text-[90px] mdmx:text-[70px] smmx:text-[50px]">
          Examine the
        </h1>
        <h1 className="text-center font-bold !leading-0 text-[90px] mdmx:text-[70px] smmx:text-[50px]">
          Potential of EBP&apos;s{" "}
        </h1>
        <h1 className="text-center font-bold !leading-0 text-[90px] mdmx:text-[70px] smmx:text-[50px] text-salmon-pink">
          AI Chatting
        </h1>
        <div className="absolute top-28 left-40 lgmx:hidden">
          <Badage text="Social Media" badageColor="bg-salmon-pink" />
        </div>
        <div className="absolute top-36 left-64 lgmx:hidden">
          <Arrow rotationClass="rotate-90" />
        </div>
        <div className="absolute bottom-28 left-60 lgmx:hidden">
          <Badage text="Blog" badageColor="bg-yellow" />
        </div>
        <div className="absolute bottom-32 left-72 lgmx:hidden">
          <Arrow bgColor="bg-yellow" rotationClass="rotate-360" />
        </div>
        <div className="absolute top-48 right-60 lgmx:hidden">
          <Badage text="Chat" badageColor="bg-fuchsia" />
        </div>
        <div className="absolute top-[218px] right-72 lgmx:hidden">
          <Arrow bgColor="bg-fuchsia" rotationClass="rotate-180" />
        </div>
        <div className="absolute bottom-28 right-48 lgmx:hidden">
          <Badage text="Coding" badageColor="bg-sky" />
        </div>
        <div className="absolute bottom-32 right-[256px] lgmx:hidden">
          <Arrow bgColor="bg-sky" rotationClass="-rotate-90" />
        </div>
      </div>
      <p className="p2 text-center max-w-[70%] smmx:max-w-full mx-auto">
        Discover the future of communication with EBP&apos;s AI Chatting.
        Explore how AI is revolutionizing interactions, enhancing customer
        service, and unlocking new possibilities in digital conversations.
      </p>
      <div className="flex xsmmx:flex-col justify-center items-center space-x-5 xsmmx:space-x-0 xsmmx:gap-5 py-8">
        <Button
          text="Get Started"
          cls="primary-gradient-button"
          type="button"
          linkTag
          link="/"
        />
        <Button
          text="Watch Video"
          cls="gradient-border-button"
          type="button"
          linkTag
          link="/"
        />
      </div>
    </>
  );
};

export default Home;
