import React from "react";
import { Box, Gift, Users, BarChart, Award } from "lucide-react";
import Collage from "../../assets/images/collage.webp";

import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Card = ({ title, children }) => (
  <div className="bg-[#fff27d] backdrop-blur-sm border-l-4 border-black p-6 md:p-10 text-black shadow-xl animate-fade-in w-full max-w-5xl my-6">
    {title && <h2 className="text-3xl md:text-4xl font-bold font-tenor-sans mb-4">{title}</h2>}
    {children}
  </div>
);

const StatCard = ({ icon, number, label }) => (
  <div className="flex flex-col items-center p-6 bg-white/90 rounded-lg shadow-md text-center">
    <div className="p-3 bg-[#fff27d] rounded-full mb-3">
      {React.cloneElement(icon, { className: "w-8 h-8 text-black" })}
    </div>
    <span className="text-4xl font-bold font-tenor-sans text-black ">{number}</span>
    <span className="text-lg text-gray-800 mt-2 font-tenor-sans">{label}</span>
  </div>
);

const WhiffsOfNature = () => {
  return (
    <div className="bg-[#fff] min-h-screen px-4 py-12">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="sm:text-[70px] text-[40px] font-light font-tenor-sans text-black">
          Whiffs of Nature
        </h1>
        <p className="text-xl font-semibold text-gray-700 font-tenor-sans">
          Crafting Culture, Gifting Joy – and Building Products with Purpose
        </p>
        <p className="mt-2 font-bold text-sm text-gray-600 font-tenor-sans">
          My Tenure: June 2020 - September 2025
        </p>
      </div>

      {/* Image background with glass cards */}
      <section
        className="relative w-full bg-fixed bg-cover bg-center flex flex-col items-center justify-center py-10 px-4 md:px-10"
        style={{ backgroundImage: `url(${Collage})` }}
      >
        {/* Spark */}
        <Card title="The Spark">
          <p className="text-lg leading-relaxed text-black/90 mb-4 font-tenor-sans">
            Whiffs of Nature was born in the summer of 2020, in a slowly reawakening Mumbai. It started as a small, spirited idea between me and my best friend—an attempt to bring color, thoughtfulness, and joy to people's homes as India emerged from lockdown.
          </p>
          <p className="text-lg text-black/90 font-tenor-sans">
            That year, during the month of Shravan with festivals like Raksha Bandhan and Ganesh Chaturthi, we noticed the demand for personalized, culturally-rooted gifts. Testing our early candle sets in flea markets gave us our first product-market fit.
          </p>
        </Card>

        {/* Vision */}
        <Card title="The Vision">
          <p className="text-black/85 font-tenor-sans">
            We set out to build giftable candles rooted in Indian culture, yet unexpected in form—from "Chai Ki Tapri" candle sets to Diwali-themed packaging. Our goal was to deliver delight, not just products.
          </p>
        </Card>

        {/* My Role */}
        <Card title="My Role: Building Products and Driving Growth">
          <ul className="list-disc list-inside space-y-2 text-black/85 font-tenor-sans">
            <li><strong>Product Strategy:</strong> Ideated new collections, sourced materials, managed timelines.</li>
            <li><strong>Customer Testing:</strong> Validated ideas at flea markets, adapted quickly from live feedback.</li>
            <li><strong>GTM Execution:</strong> Mapped messaging to Indian festivals, launched with cultural relevance.</li>
            <li><strong>Marketing:</strong> Ran Meta & Google ads, built email CRM pipelines to drive retention.</li>
            <li><strong>Brand Growth:</strong> Launched Fête for B2B luxury gifting while scaling Whiffs for retail.</li>
          </ul>
        </Card>

        {/* Milestones - Graphic Version */}
        <Card title="Milestones & Impact">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <StatCard
              icon={<Box size={24} />}
              number="12,000+"
              label="Candles Delivered"
            />
            <StatCard
              icon={<Gift size={24} />}
              number="10"
              label="Corporate Diwali Campaigns"
            />
            <StatCard
              icon={<Users size={24} />}
              number="60%"
              label="Customer Retention"
            />
            <StatCard
              icon={<BarChart size={24} />}
              number="3,000+"
              label="Gift Boxes"
            />
            <StatCard
              icon={<Award size={24} />}
              number="50+"
              label="PR Kits for Brands"
            />
          </div>
        </Card>

        {/* Reflection - Enhanced Visual */}
        <Card title="The Reflection">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-black/85 mb-4">
                I learned that every detail—from scent to packaging—shapes perception. Whiffs taught me product empathy, storytelling, iteration, and building fast in uncertain times.
              </p>
              <p className="italic text-black/80">
                A culture-rooted, creativity-led venture that proved thoughtful design and bold ideas can thrive—even in uncertain times.
              </p>
            </div>
            <div className="bg-white/80 p-6 rounded-lg shadow-inner flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-tenor-sans font-bold mb-2">5</div>
                <div className="text-lg">Years of Fragrant Innovation</div>
                <div className="h-1 w-16 bg-black mx-auto my-3"></div>
                <div className="text-sm">From flea markets to corporate gifting</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Instagram */}
        <Card>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-serif font-bold mb-6">Follow Our Journey</h3>
            <div className="flex flex-wrap justify-center gap-6 cursor-pointer">
              <IoLogoGithub size={25} className="text-gray-800 hover:text-black hover:scale-110 transition duration-200" />
              <FaLinkedin size={25} className="text-gray-800 hover:text-[#0A66C2] hover:scale-110 transition duration-200" />
              <MdEmail  size={25} className="text-gray-800 hover:text-red-500 hover:scale-110 transition duration-200" />
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default WhiffsOfNature;