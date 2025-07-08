import React, { useState } from "react";
import {
  Database,
  Brain,
  Code,
  BarChart,
  Briefcase,
  TrendingUp,
  DollarSign,
} from "lucide-react";
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
      id: "data-science",
      title: "Data Science & Analytics",
      summary: "Transforming raw data into insights",
      description:
        "Transforming complex, unstructured data into actionable insights through data cleaning, exploration, modeling, and visualization. Enables organizations to make informed strategic decisions based on data trends, predictive models, and performance metrics.",
      icon: <Database size={24} />,
      color: "#3b82f6",
       imageUrl:ProfilePic ,
    },
    {
      id: "ai-ml",
      title: "AI & ML Engineering",
      summary: "Building intelligent applications",
      description:
        "Building intelligent applications that learn from data and adapt over time. Includes developing chatbots, recommendation engines, computer vision, and predictive analytics using algorithms that drive automation, efficiency, and innovation in business.",
      icon: <Brain size={24} />,
      color: "#8b5cf6",
         imageUrl:ProfilePic ,
    },
    {
      id: "product-analysis",
      title: "Product / Feature Analysis",
      summary: "Data-driven product insights",
      description:
        "Using data to evaluate product features, user behavior, and market trends. Helps businesses refine offerings, identify areas of improvement, and align development with user needs through A/B testing, funnel analysis, and usage metrics.",
      icon: <Code size={24} />,
      color: "#10b981",
         imageUrl:ProfilePic ,
    },
    {
      id: "statistics",
      title: "Statistics & Decision Science",
      summary: "Evidence-based decisions",
      description:
        "Employing statistical models and probability theory to interpret data patterns and uncertainty. Supports evidence-based decisions through hypothesis testing, regression, and optimization techniques to solve complex business problems.",
      icon: <BarChart size={24} />,
      color: "#f97316",
         imageUrl:ProfilePic ,
    },
    {
      id: "training",
      title: "Training and Mentorship",
      summary: "Upskilling and guidance",
      description:
        "Providing hands-on guidance, structured learning, and practical mentorship in data science and AI. Focused on upskilling individuals and teams, fostering collaboration, and nurturing talent to bridge the gap between theory and real-world applications.",
      icon: <Briefcase size={24} />,
      color: "#ef4444",
         imageUrl:ProfilePic ,
    },
    {
      id: "business-growth",
      title: "Business Growth Analytics",
      summary: "Strategic business growth",
      description:
        "Using KPIs, customer insights, and market trends to identify growth drivers. Empowers leadership with dashboards, cohort analysis, and forecasts that shape marketing, sales, and operational strategies to maximize profitability and scalability.",
      icon: <TrendingUp size={24} />,
      color: "#6366f1",
         imageUrl:ProfilePic ,
    },
    {
      id: "financial-analytics",
      title: "Financial Analytics",
      summary: "Financial performance insights",
      description:
        "Analyzing financial statements, trends, and ratios to assess company health. Supports budgeting, forecasting, and investment decisions by delivering accurate models that optimize cash flow, profitability, and risk management.",
      icon: <DollarSign size={24} />,
      color: "#22c55e",
         imageUrl:ProfilePic ,
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
