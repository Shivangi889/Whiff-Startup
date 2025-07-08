import React from "react";
import { Instagram } from "lucide-react";
import Collage from "../../assets/images/collage.webp";

const Card = ({ title, children }) => (
  <div className="bg-black/60 backdrop-blur-md border-l-4 border-white p-6 md:p-10 text-white shadow-xl animate-fade-in w-full max-w-5xl my-6">
    {title && <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">{title}</h2>}
    {children}
  </div>
);

const WhiffsOfNature = () => {
  return (
    <div className="bg-[#fff] min-h-screen px-4 py-12">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="sm:text-[70px] text-[40px] font-light font-serif text-gray-800">
          Whiffs of Nature
        </h1>
        <p className="text-xl font-semibold text-gray-700">
          Crafting Culture, Gifting Joy – and Building Products with Purpose
        </p>
        <p className="mt-2 font-bold text-sm text-gray-600">
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
          <p className="text-lg leading-relaxed text-white/90 mb-4">
            Whiffs of Nature was born in the summer of 2020, in a slowly reawakening Mumbai. It started as a small, spirited idea between me and my best friend—an attempt to bring color, thoughtfulness, and joy to people’s homes as India emerged from lockdown.
          </p>
          <p className="text-lg text-white/90">
            That year, during the month of Shravan with festivals like Raksha Bandhan and Ganesh Chaturthi, we noticed the demand for personalized, culturally-rooted gifts. Testing our early candle sets in flea markets gave us our first product-market fit.
          </p>
        </Card>

        {/* Vision */}
        <Card title="The Vision">
          <p className="text-white/85">
            We set out to build giftable candles rooted in Indian culture, yet unexpected in form—from “Chai Ki Tapri” candle sets to Diwali-themed packaging. Our goal was to deliver delight, not just products.
          </p>
        </Card>

        {/* My Role */}
        <Card title="My Role: Building Products and Driving Growth">
          <ul className="list-disc list-inside space-y-2 text-white/85">
            <li><strong>Product Strategy:</strong> Ideated new collections, sourced materials, managed timelines.</li>
            <li><strong>Customer Testing:</strong> Validated ideas at flea markets, adapted quickly from live feedback.</li>
            <li><strong>GTM Execution:</strong> Mapped messaging to Indian festivals, launched with cultural relevance.</li>
            <li><strong>Marketing:</strong> Ran Meta & Google ads, built email CRM pipelines to drive retention.</li>
            <li><strong>Brand Growth:</strong> Launched Fête for B2B luxury gifting while scaling Whiffs for retail.</li>
          </ul>
        </Card>

        {/* Milestones */}
        <Card title="Milestones & Impact">
          <ul className="list-disc list-inside space-y-2 text-white/85">
            <li>Delivered 12,000+ candles over 3 years</li>
            <li>10 corporate Diwali campaigns, 3,000+ boxes</li>
            <li>60% customer retention in retail</li>
            <li>Built PR kits for beauty & wellness brands</li>
          </ul>
        </Card>

        {/* Reflection */}
        <Card title="The Reflection">
          <p className="text-white/85 mb-4">
            I learned that every detail—from scent to packaging—shapes perception. Whiffs taught me product empathy, storytelling, iteration, and building fast in uncertain times.
          </p>
          <p className="italic text-white/80">
            A culture-rooted, creativity-led venture that proved thoughtful design and bold ideas can thrive—even in uncertain times.
          </p>
        </Card>

        {/* Instagram */}
        <Card>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://www.instagram.com/whiffsofnature_kp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-pink-400 transition"
            >
              <Instagram className="w-5 h-5" />
              @whiffsofnature_kp
            </a>
            <a
              href="https://www.instagram.com/fete_kp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-pink-400 transition"
            >
              <Instagram className="w-5 h-5" />
              @fete_kp
            </a>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default WhiffsOfNature;
