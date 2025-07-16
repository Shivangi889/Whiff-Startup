import React from "react";
import { Instagram, Github, Figma } from "lucide-react";

import project1 from '../../assets/Projects/project1.png'
import project2 from '../../assets/Projects/project2.png'
import project3 from '../../assets/Projects/project3.png'
import project4 from '../../assets/Projects/project4.jpg'

const projects = [
  {
    title: "🌿 Whiffs of Nature – Featured",
    subtitle: "Crafting Culture, Gifting Joy – and Building Products with Purpose",
    duration: "June 2020 - September 2025",
    image: project4,
    highlights: [
      "The Spark: A culture-rooted venture born from a gap in traditional gifting post-lockdown.",
      "The Vision: Designed culturally-rooted, delightful candles and experiences.",
      "Role: Product development, market testing, GTM, brand positioning.",
      "Impact: 12,000+ candles, 10 Diwali campaigns, 60% customer retention."
    ],
    links: [
      {
        href: "https://www.instagram.com/whiffsofnature_kp/",
        label: "@whiffsofnature_kp"
      },
      {
        href: "https://www.instagram.com/fete_kp/",
        label: "@fete_kp"
      }
    ]
  },
  {
    title: "📊 FinAI – AI-Powered Financial Insights Tool",
    subtitle: "Helping everyday investors make sense of market noise.",
    duration: "June 2024 - Present",
    image: project3,
    highlights: [
      "Overview: NLP-based tool to digest financial news.",
      "Role: Roadmap, user research, Figma mockups, tech stack design.",
      "Impact: Validated MVP plan for market-fit AI finance assistant."
    ],
    links: [
      {
        href: "https://www.figma.com/proto/i2Ij4my7gPzO3AgIUVT5HE/FIN-Ai-Mockup",
        label: "Figma Prototype"
      },
      {
        href: "https://github.com/bhatia-pooja/pm-roadmap-finAI-financial-news-tool",
        label: "GitHub"
      }
    ]
  },
  {
    title: "🍽 Citrus Grove Catering – MBA Capstone",
    subtitle: "Digitizing operations for a campus caterer.",
    duration: "January 2025 - March 2025",
    image: project2,
    highlights: [
      "Challenge: Fix broken ordering flow with scalable UX.",
      "Role: Led discovery, scoped MVP, created KPI roadmap.",
      "Outcomes: Online ordering system, +NPS, reduced errors."
    ],
    links: [
      {
        href: "https://github.com/bhatia-pooja/campus-catering-digital-transformation",
        label: "GitHub"
      }
    ]
  },
  {
    title: "⌚ PrimeFit Smartwatch – Strategic Marketing Plan",
    subtitle: "Wellness wearable for seniors with human-first design.",
    duration: "Winter 2023",
    image: project1,
    highlights: [
      "Concept: Fall detection, reminders, emergency help.",
      "Role: Led positioning, personas, pricing, messaging framework.",
      "Outcomes: Multi-channel GTM strategy and launch plan."
    ],
    links: [
      {
        href: "https://github.com/bhatia-pooja/PrimeFit-Smartwatch-Marketing-Plan/tree/main",
        label: "GitHub"
      }
    ]
  }
];

const ProjectGrid = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-[70px] font-light font-tenor-sans text-gray-900 leading-tight">
          Product & Strategy Portfolio
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((proj, index) => (
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
                {proj.links.map((link, i) => (
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
                    ) : (
                      <>
                        <Github className="w-3.5 h-3.5 text-gray-800" />
                        {link.label}
                      </>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
