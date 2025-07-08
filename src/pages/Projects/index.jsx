import React from 'react';
import { Music } from 'lucide-react';
import Collage from "../../assets/images/collage.webp";
const ParallaxGlassCard = () => {
  return (
    <section
      className="relative w-full h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
    style={{ backgroundImage: `url(${Collage})` }}
    >
      {/* Glass Panel */}
      <div className="bg-[#fff27d] backdrop-blur-md border-l-4 border-white max-w-4xl w-full mx-4 md:mx-10 p-8 md:p-12 text-white shadow-xl animate-fade-in">
        <div className="flex items-center gap-4 mb-6">
          <Music className="w-10 h-10 text-white opacity-90 animate-float" />
          <span className="text-5xl text-white/20 font-bold font-serif">01</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
          The Universal Language of Music
        </h2>

        <p className="italic text-white/90 text-lg font-serif mb-4">
          Finding solace and expression in playing the guitar, a universal language that resonates deeply.
        </p>

        <div className="w-1/3 h-px bg-gradient-to-r from-white/70 to-transparent mb-6"></div>

        <p className="text-white/80 text-base leading-relaxed">
          Primarily focusing on rhythm guitar, I enjoy exploring the intricate beats of Jazz and the timeless energy of Classic Rock.
          This practice has been a great teacher of patience and discipline.
        </p>
      </div>
    </section>
  );
};

export default ParallaxGlassCard;
