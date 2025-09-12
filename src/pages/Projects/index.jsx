import React from "react";
import { Instagram, Github, Globe, Figma } from "lucide-react";
import { Link } from "react-router-dom";
import { projectData } from "../../Data/ProjectsData";

const ProjectGrid = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-[70px] font-light font-tenor-sans text-gray-900 leading-tight">
          Product & Strategy Portfolio
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {projectData.map((proj, index) => (
          <div
            key={index}
            className="group border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:bg-gray-50"
          >
            <div className="overflow-hidden rounded-lg mb-5">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-60 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-3">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {proj.title}
                </h2>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{proj.duration}</p>
                <p className="text-base text-gray-600">{proj.subtitle}</p>
              </div>

              <ul className="space-y-2 pl-1">
                {proj.highlights.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 before:content-['•'] before:text-yellow-500 before:font-bold before:inline-block before:w-4"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-2">
                {proj.links?.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    {link.label.includes("@") ? (
                      <>
                        <Instagram className="w-3.5 h-3.5 text-pink-600" />
                        {link.label}
                      </>
                    ) : link.label.includes("Figma") ? (
                      <>
                        <Figma className="w-3.5 h-3.5 text-purple-600" />
                        {link.label}
                      </>
                    ) : link.label.includes("Whiffs") ? (
                      <>
                        <Globe className="w-3.5 h-3.5 text-purple-600" />
                        {link.label}
                      </>
                    ) : link.label.includes("Prototype") ? (
                      <>
                        <Globe className="w-3.5 h-3.5 text-purple-600" />
                        {link.label}
                      </>
                    ) : (
                      <>
                        {/* <Github className="w-3.5 h-3.5 text-gray-800" /> */}
                        {link.label}
                      </>
                    )}
                  </a>
                ))}


                {/* Add View More button */}
                {/* <Link
                  to={`/project/${proj.id}`}
                  className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  View Details
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;