import React from "react";
import { Instagram } from "lucide-react";

const projects = [
  {
    title: "🌿 Whiffs of Nature – Featured",
    subtitle: "Crafting Culture, Gifting Joy – and Building Products with Purpose",
    duration: "June 2020 - September 2025",
    image: "/images/whiffs.png",
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
    image: "/images/finai.png",
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
    image: "/images/catering.png",
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
    image: "/images/primefit.png",
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
    <div className="bg-white min-h-screen py-12 px-4 md:px-16">

  <div className="text-center mb-20">
        <h1 className="sm:text-[70px] text-[40px] font-light font-serif text-gray-800">
         Product & Strategy Portfolio
        </h1>
      
      </div>


    
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((proj, index) => (
          <div key={index} className="group border rounded-xl p-5 shadow-md">
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {proj.title}
            </h2>
            <p className="text-sm text-gray-500 mb-2">{proj.duration}</p>
            <p className="text-lg text-gray-700 mb-3">{proj.subtitle}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-3">
              {proj.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              {proj.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                >
                  {link.label.includes("@")} <Instagram className="w-4 h-4" /> : null
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
