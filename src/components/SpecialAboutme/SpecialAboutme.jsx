import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Award, GraduationCap, Club, Star } from "lucide-react";
import image1 from "../../assets/images/IMG_8536.jpeg";
import image2 from "../../assets/images/IMG_3413.jpeg";
import image3 from "../../assets/images/IMG_3738.jpeg";
import image4 from "../../assets/images/IMG_3611.jpeg";


const Special = () => {
  const specialItems = [
    {
      icon: <Award className="icon purple" />,
      title: "Clarity-Driven Problem Solver",
      description:
        "My strength lies in translating complexity into clarity. Whether mapping customer journeys, decoding market signals, or aligning cross-functional teams...",
      tags: ["Clarity", "Analytical Thinking"],
      img: image1
    },
    {
      icon: <GraduationCap className="icon blue" />,
      title: "Values-Led Leader & Community Builder",
      description:
        "Leadership isn’t just a title—it’s a practice. As President of Women in Business at UCR, I led a 35-member executive board...",
      tags: ["Leadership", "Community Building"],
      img: image2
    },
    {
      icon: <Star className="icon amber" />,
      title: "Academic Achiever with Real-World Grit",
      description:
        "Earning a 3.85 GPA and induction into Beta Gamma Sigma, I blended academic excellence with applied success...",
      tags: ["Academic Excellence", "Dedication"],
      img: image3
    },
    {
      icon: <Club className="icon emerald" />,
      title: "Entrepreneurial Hustler with Heart",
      description:
        "As a co-founder of Whiffs of Nature, I built a business from the ground up—wearing every hat...",
      tags: ["Entrepreneurship", "Adaptability"],
      img: image4
    },
  ];

  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % specialItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [specialItems.length]);

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % specialItems.length);
  };

  const prevItem = () => {
    setCurrentItem((prev) => (prev - 1 + specialItems.length) % specialItems.length);
  };

  return (
    <section className="px-4 md:px-5 py-10 flex flex-col lg:flex-row gap-12 items-center">
      {/* Left: Text Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center text-center lg:text-left">
        <h1 className="text-2xl sm:text-2xl md:text-4xl leading-tight text-black">
          I see the<br />
          bigger<br />
          picture—and<br />
          then <span className="bg-[#fff27d] px-2">zoom</span> in<br />
          to connect<br />
          the dots.
        </h1>
      </div>

      {/* Right: Card Section */}
      <div className="w-full lg:w-1/2 max-w-lg">
        <h3 className="text-md uppercase tracking-widest text-gray-600 font-semibold mb-1">WHAT’S</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">SPECIAL ABOUT ME?</h2>

        <div className="relative bg-gray-200 w-full h-[350px] p-2 md:h-[400px] rounded-2xl overflow-hidden border-2 border-black shadow-xl group">
          <img
            src={specialItems[currentItem].img}
            alt="Special"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:brightness-75 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center px-6 text-center">
            <p className="text-white text-lg md:text-xl font-medium">
              {specialItems[currentItem].description}
            </p>
          </div>
        </div>

        {/* Tags and Title */}
        <div className="mt-4">
          <span className="bg-[#fff27d] px-3 py-1 rounded text-sm font-semibold mr-2">
            {specialItems[currentItem].tags[0]}
          </span>
          <span className="text-lg font-semibold text-gray-800">
            {specialItems[currentItem].title}
          </span>
        </div>

        {/* Controls */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={prevItem}
            className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextItem}
            className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Special;
