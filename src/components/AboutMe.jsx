import React from "react";
import Grad from "../assets/images/IMG_6379.jpeg";
import Drives from "../assets/images/UCR Women in Business Leadership 2025-222.jpg"
import Outside from "../assets/images/IMG_7633.jpeg"

const AboutMe = ({ refProp }) => {
  return (
    <div ref={refProp} className="max-w-6xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="flex flex-col py-8 md:flex-row md:items-center md:justify-between">
        <h1 className="sm:text-5xl text-2xl font-tenor-sans text-black font-light mb-6 md:mb-0">About me</h1>
        <p className="md:w-2/3 text-[15px] text-black font-bold leading-snug">
          I’m a creative problem-solver and cross-functional thinker, trained in business analytics and storytelling through data. After earning my MBA from UC Riverside—where I led as President of the AGSM Women in Business—I found my sweet spot at the intersection of customer insights, product development, and go-to-market strategy.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mt-5">
        {/* Card 1 */}
        <div className="relative flex-1 border-2 border-black rounded-[20px] overflow-hidden group p-4">
          <img
            src={Grad}
            alt="Before Grad School"
            className="w-full h-[350px] object-cover rounded-[20px] mb-4 transition duration-300 group-hover:brightness-75 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
            <p className="text-white text-xl font-semibold px-4 text-center">I used to run a small candle business before grad school!</p>
          </div>
          <span className="text-2xl">
            <span className="bg-[#fff27d] font-tenor-sans px-1 font-medium">Before Grad</span> School
          </span>
        </div>

        {/* Card 2 */}
        <div className="relative flex-1 border-2 border-black rounded-[20px] overflow-hidden group p-4">
          <img
            src={Drives}
            alt="What Drives Me"
            className="w-full h-[350px] object-cover rounded-[20px] mb-4 transition duration-300 group-hover:brightness-75 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
            <p className="text-white text-xl font-semibold px-4 text-center">Speaking, leading, and inspiring others drive me every day.</p>
          </div>
          <span className="text-2xl">
            What <span className="bg-[#fff27d] font-tenor-sans px-1 font-medium">Drives me</span>
          </span>
        </div>

        {/* Card 3 */}
        <div className="relative flex-1 border-2 border-black rounded-[20px] overflow-hidden group p-4">
          <img
            src={Outside}
            alt="Outside the Office"
            className="w-full h-[350px] object-cover rounded-[20px] mb-4 transition duration-300 group-hover:brightness-75 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
            <p className="text-white text-xl font-semibold px-4 text-center">Nature is where I recharge and find inspiration.</p>
          </div>
          <span className="text-2xl">
            <span className="bg-[#fff27d] font-tenor-sans px-1 font-medium">Outside</span> the <span className="bg-[#fff27d] px-1 font-medium">Office</span>
          </span>
        </div>
      </div>



      {/* What's Next */}
      <div className="max-w-4xl py-8 mx-auto mt-5 flex flex-col md:flex-row md:items-center">
        <span className="text-2xl font-tenor-sans font-light mr-4">WHAT'S NEXT:</span>
        <span className="text-black font-semibold text-sm md:w-2/3">
          Now, I’m focused on roles that marry product thinking with strategic insight – whether that’s as a product manager, GTM analyst, or marketing strategist.
        </span>
      </div>
    </div>
  );
};

export default AboutMe;
