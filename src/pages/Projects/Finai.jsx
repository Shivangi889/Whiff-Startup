import React from "react";
import { ArrowLeft, FileText , ExternalLink } from "lucide-react";
import project3 from "../../assets/Projects/project3.png"; // Make sure to import your image

const FinAIDetail = () => {
  const projectData = {
    id: "fin-ai",
    title: " FinAI – AI-Powered Financial Insights Tool",
    subtitle: "Helping everyday investors make sense of market noise.",
    duration: "June 2024 - Present",
    image: project3,
    highlights: [
      "Overview: NLP-based tool to digest financial news.",
      "Role: Roadmap, user research, Figma mockups, tech stack design.",
      "Impact: Validated MVP plan for market-fit AI finance assistant."
    ],
   
    overview: "FinAI was developed as a product management case study during my MBA, centered around a clear problem: retail investors struggle to process fast-paced financial news. The concept explored how NLP and sentiment analysis could deliver quick, digestible insights to support better decisions.",
    features: [
      "Real-time financial news aggregation",
      "AI-generated article summaries",
      "Predictive stock tracking (future roadmap)",
      "Personalization by sector and risk profile"
    ],
    role: [
      "Defined product roadmap across 4 strategic phases",
      "Designed and structured user research (JotForm survey)",
      "Conducted competitor analysis (AlphaSense, Finance Wizard, Koyfin)",
      "Created Figma mockups focusing on usability and clarity",
      "Outlined tech stack: LLMs (GeminiPro, Falcon180B), web scraping, and sentiment-based stock predictions"
    ],
    learnings: [
      "Building vision grounded in real user needs",
      "Planning MVPs that balance value and feasibility",
      "Communicating AI product features clearly to non-technical stakeholders"
    ],
    impact: "This project demonstrated my ability to translate market gaps into product features, build a validation-driven roadmap, and prototype AI-based solutions with real user value in mind.",
    images: [
      project3,
      // Add more images here
    ],
    tags: ["AI/ML", "Product Management", "FinTech", "UX Design", "Market Research"]
  };

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      {/* Back link */}
      <a
        href="/project"
        className="flex items-center text-gray-500 hover:text-gray-800 mb-6"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Projects
      </a>

      {/* Header */}
      <p className="text-sm text-gray-500 mb-2">AI Product Management Project</p>
      <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2 mb-3">
        {projectData.title}
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        {projectData.subtitle}
      </p>
      <p className="text-sm text-gray-500 mb-4">{projectData.duration}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {projectData.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>

     

  

      {/* Main Image */}
      <img
        src={projectData.image}
        alt="FinAI project"
        className="w-full h-auto rounded-lg mb-6"
      />

      {/* Overview */}
      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <p className="text-gray-700 mb-6">
        {projectData.overview}
      </p>

      {/* Features */}
      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        {projectData.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {/* Role */}
      <h2 className="text-2xl font-semibold mb-4">My Role & Contributions</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        {projectData.role.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Learnings */}
      <h2 className="text-2xl font-semibold mb-4">Key Learnings</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        {projectData.learnings.map((learning, index) => (
          <li key={index}>{learning}</li>
        ))}
      </ul>

      {/* Impact */}
      <h2 className="text-2xl font-semibold mb-4">Impact</h2>
      <p className="text-gray-700 mb-6">
        {projectData.impact}
      </p>
 <a
          href="https://preview--finai-prototype.lovable.app/onboarding"
          className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          <ExternalLink size={18} />
         Interactive Prototype
        </a>
      {/* Additional Images */}
      {projectData.images.length > 1 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Project Visuals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {projectData.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`FinAI visual ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FinAIDetail;