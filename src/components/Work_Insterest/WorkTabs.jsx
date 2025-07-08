import React, { useState } from "react";
import {
  Users,
  Target,
  BarChart2,
  BookOpen,
  Layers,
} from "lucide-react"; // Replace with desired icons
import Market from "../../assets/Works/market.png";
import Strategy from "../../assets/Works/Project.png";
import Analytics from "../../assets/Works/marketing-analytics.png";
import Brand from "../../assets/Works/Brand.png";
import Leadership from "../../assets/Works/Leadership.png";
import ProfilePic from "../../assets/images/Profile pic.jpeg"
const WorkCard = ({ title,  description, icon, image }) => {
  return (
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-white rounded-xl shadow-lg p-6 md:p-10 animate-fade-in">
      
      {/* Left Image */}
      <div className="w-full h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Content */}
      <div>
        {/* Icon + Title */}
        <div className="flex items-center mb-4">
          <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
            {/* <Icon size={24} /> */}
          </div>
          <h2 className="text-2xl font-bold text-black ml-4">{title}</h2>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-base mb-6">{description}</p>

        {/* Tags */}
        <div className="flex gap-3 flex-wrap">
          {["Analysis", "Research", "Innovation"].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkTabs = () => {
  const [activeTab, setActiveTab] = useState("data-science");
  const [isTransitioning, setIsTransitioning] = useState(false);



const areasOfExpertise = [
  {
    id: "customer-insights",
    title: "Customer & Market Insights",
    description:
      "I’m deeply curious about people—what they need, how they think, and why they buy. I enjoy diving into qualitative interviews, surveys, and data analysis to explore everything from audience segmentation to sentiment trends.",
    icon: <Users size={24} />,
    color: "#3b82f6", // Blue
    imageUrl: Market,
  },
  {
    id: "product-strategy",
    title: "Product Strategy & Go-to-Market",
    description:
      "I'm drawn to the process of building thoughtful, user-centered products. Defining MVPs, mapping roadmaps, and planning go-to-market strategies are areas where I love to contribute.",
    icon: <Target size={24} />,
    color: "#8b5cf6", // Purple
    imageUrl: Strategy,
  },
  {
    id: "marketing-analytics",
    title: "Marketing Analytics & Experimentation",
    description:
      "Turning data into direction excites me. I enjoy analyzing campaign performance, running A/B tests, and using tools like SQL and Tableau to refine what works—and what doesn’t.",
    icon: <BarChart2 size={24} />,
    color: "#10b981", // Green
    imageUrl: Analytics,
  },
  {
    id: "brand-strategy",
    title: "Brand & Content Strategy",
    description:
      "I’m passionate about roles that involve messaging, storytelling, and brand positioning. Whether crafting decks, building narratives, or launching campaigns, I aim to make every word purposeful.",
    icon: <BookOpen size={24} />,
    color: "#f97316", // Orange
    imageUrl: Brand,
  },
  {
    id: "leadership-management",
    title: "Leadership & Program Management",
    description:
      "I find joy in leading teams and programs that bring people together. From managing $20K+ event budgets to growing a 35-member board, I thrive in environments where impact is shared and momentum is built collectively.",
    icon: <Layers size={24} />,
    color: "#ef4444", // Red
    imageUrl: Leadership,
  },
];




  const handleTabChange = (tabId) => {
    if (tabId !== activeTab && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(tabId);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const activeArea =
    areasOfExpertise.find((area) => area.id === activeTab) ||
    areasOfExpertise[0];

  return (
    <div>
      <div className="flex overflow-x-auto border-b border-gray-300 mb-6">
        {areasOfExpertise.map((area) => (
          <button
            key={area.id}
            onClick={() => handleTabChange(area.id)}
            className={`flex items-center gap-2 whitespace-nowrap px-6 py-4 font-medium text-sm transition-colors duration-300  max-w-4xl mx-auto animate-fade-in bg-white p-10 ${
              activeTab === area.id
                ? 'text-black border-b-2 border-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            {area.icon}
            {area.title.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <WorkCard
          title={activeArea.title}
          summary={activeArea.summary}
          description={activeArea.description}
          icon={activeArea.icon}
          image={activeArea.imageUrl}
        />
      </div>
    </div>
  );
};

export default WorkTabs;
