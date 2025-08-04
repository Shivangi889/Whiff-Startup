import React from 'react';
import { Calendar, ExternalLink, Github, ChevronRight } from 'lucide-react';

export const ProjectCard = ({
  title,
  subtitle,
  duration,
  overview,
  features,
  role,
  learnings,
  impact,
  githubUrl,
  figmaUrl,
  images,
  tags
}) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#fff27d] to-yellow-400 p-8 text-black">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-gray-800 text-lg font-medium">{subtitle}</p>
          </div>
          <div className="flex gap-3 ml-4">
            {figmaUrl && (
              <a
                href={figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/20 hover:bg-black/30 p-3 rounded-full transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/20 hover:bg-black/30 p-3 rounded-full transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-gray-800">
          <Calendar className="w-4 h-4" />
          <span className="font-medium">{duration}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-black/20 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image Carousel */}
      {images.length > 0 && (
        <div className="relative h-80 bg-gray-900">
          <img
            src={images[currentImageIndex]}
            alt={`${title} screenshot ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#fff27d]/80 hover:bg-[#fff27d] text-black p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#fff27d]/80 hover:bg-[#fff27d] text-black p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-[#fff27d]' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-8">
        {/* Overview */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-white mb-3">Overview</h3>
          <p className="text-gray-300 leading-relaxed">{overview}</p>
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#fff27d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* My Role */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-white mb-3">My Role</h3>
          <ul className="space-y-2">
            {role.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#fff27d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Learnings */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-white mb-3">Key Learnings</h3>
          <ul className="space-y-2">
            {learnings.map((learning, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#fff27d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">{learning}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Impact */}
        <section>
          <h3 className="text-xl font-bold text-white mb-3">Impact</h3>
          <p className="text-gray-300 leading-relaxed">{impact}</p>
        </section>
      </div>
    </div>
  );
};