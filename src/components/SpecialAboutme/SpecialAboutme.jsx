// src/components/Special/Special.js

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Award, GraduationCap, Club, Star } from 'lucide-react';
//import AOS from 'aos';
import Sideimage from "../../assets/images/IMG_3611.jpeg"
// import 'aos/dist/aos.css';


const Special = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: false,
  //   });
  // }, []);

const specialItems = [
  {
    icon: <Award className="icon purple" />,
    title: "Clarity-Driven Problem Solver",
    description:
      "My strength lies in translating complexity into clarity. Whether mapping customer journeys, decoding market signals, or aligning cross-functional teams, I lead with curiosity and structured thinking. My background in business analytics arms me with the tools to explore the 'what,' while my marketing lens ensures I never lose sight of the 'why'—why people behave the way they do and how we can design for that behavior.",
    tags: ["Clarity", "Analytical Thinking"]
  },
  {
    icon: <GraduationCap className="icon blue" />,
    title: "Values-Led Leader & Community Builder",
    description:
      "Leadership isn’t just a title—it’s a practice. As President of Women in Business at UCR, I led a 35-member executive board, managed a $20K+ programming budget, and spearheaded 20+ high-impact events. Through mentorship, inclusion, and a clear vision, I helped shape a community where future leaders could thrive.",
    tags: ["Leadership", "Community Building"]
  },
  {
    icon: <Star className="icon amber" />,
    title: "Academic Achiever with Real-World Grit",
    description:
      "Earning a 3.85 GPA and induction into Beta Gamma Sigma, I blended academic excellence with applied success. Beyond theory, I engaged in AI seminars, judging panels, and peer mentorship. This recognition reflects a balance of intellectual discipline and real-world application.",
    tags: ["Academic Excellence", "Dedication"]
  },
  {
    icon: <Club className="icon emerald" />,
    title: "Entrepreneurial Hustler with Heart",
    description:
      "As a co-founder of Whiffs of Nature, I built a business from the ground up—wearing every hat and learning how to hustle with heart. From product creation to customer delight, I developed resilience, adaptability, and a keen sense of what it takes to deliver value despite constraints.",
    tags: ["Entrepreneurship", "Adaptability"]
  },
  {
    icon: <Award className="icon purple" />,
    title: "Critical Problem Solver",
    description:
      "Consistently recognized for resolving complex challenges by fusing structured analytical frameworks with out-of-the-box thinking. I thrive under pressure, turning ambiguity into clarity and delivering high-impact, data-driven solutions.",
    tags: ["Critical Thinking", "Problem-Solving"]
  },
  {
    icon: <GraduationCap className="icon blue" />,
    title: "Programming Club President",
    description:
      "As president of the programming club, I led with vision and enthusiasm—curating expert-led workshops, hackathons, and code sprints. I built a collaborative culture that empowered students to learn, build, and innovate in tech.",
    tags: ["Leadership", "Organization"]
  },
  {
    icon: <Club className="icon emerald" />,
    title: "Workshop Organizer",
    description:
      "Organized and facilitated impactful workshops like 'Build Your Own Portfolio from Scratch' and 'SQL Masterclass: Things Beyond SQL'. These events helped peers launch portfolios, deepen technical knowledge, and communicate with confidence.",
    tags: ["Teaching", "Mentoring"]
  },
  {
    icon: <Star className="icon amber" />,
    title: "Award Recognitions",
    description:
      "Proud recipient of Beta Gamma Sigma honors and Times of India Student of the Year award. These recognitions highlight my academic and leadership journey—reflecting performance, impact, and a commitment to excellence.",
    tags: ["Excellence", "Recognition"]
  },
  {
 icon: <Star className="icon amber" />,
    title: "Academic Achievement",
    description:
      "With a GPA of 3.96, I earned scholarships and was regularly invited to AI seminars and judging panels. I balanced coursework with active participation in peer mentoring and thought leadership within data and AI domains.",
    tags: ["Academic", "Accomplishments"]
  }
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
  <div className="min-h-screen bg-[#f5f6f8] px-6 py-12 flex flex-col lg:flex-row gap-10  ">
    {/* LEFT: Quote Section */}
    <div className="flex-1 flex items-center justify-center ">
    <h1 className=" text-[4.5rem] sm:text-3xl md:text-4xl  font-sans text-black whitespace-pre-line">
        I see the<br />
        bigger<br />
        picture—and<br />
        then <span className="bg-[#fff27d] px-1 font-semibold">zoom</span> in<br />
        to connect<br />
        the dots.
      </h1>
    </div>

    {/* RIGHT: Card Section */}
    <div className="flex-1 flex flex-col justify-center py-3">
      {/* Card */}
          <h3 className=" text-2xl uppercase font-bold tracking-widest mb-4 text-gray-800">
WHAT’S
</h3>
<h1 className="text-[3.5rem] font-bold mb-8 text-[#222222]">
SPECIAL ABOUT ME? 
</h1>

      
      <div className="w-[450px] h-[400px] relative rounded-[20px] overflow-hidden border border-black shadow-md">
        <img
          src={Sideimage} // replace with actual item image if needed
          alt="Special"
          className="w-full h-[100%] object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-base sm:text-lg text-center px-6 font-medium">
          {specialItems[currentItem].description}
        </div>
      </div>

      {/* Tag + Title */}
      <div className="mt-4 text-xl font-semibold">
        <span className="bg-[#fff27d] px-2 py-1 font-medium">{
          specialItems[currentItem].tags[0]
        }</span>{" "}
        {specialItems[currentItem].title}
      </div>

      {/* Navigation */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={prevItem}
          className="bg-white p-3 rounded-md border border-black hover:bg-black hover:text-white transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextItem}
          className="bg-white p-3 rounded-md border border-black hover:bg-black hover:text-white transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  </div>
);


};

export default Special;
