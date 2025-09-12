import React from "react";
import { ArrowLeft, Github, FileText } from "lucide-react";
import primefit from "../../assets/Projects/primefit.png"
import project1 from "../../assets/Projects/project1.png"
import proce from "../../assets/Projects/proce.png"
import PresentationBookWithKeyboard from "./Presentation";


const PrimeFitDetail = () => {
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
      <p className="text-sm text-gray-500 mb-2">Marketing Strategy Project</p>
      <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2 mb-3">
      
        PrimeFit Smartwatch – Strategic Marketing Plan
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        Crafting a go-to-market strategy for a wellness-focused wearable for seniors.
      </p>
 <img
                    src={project1}
                    alt="icon"
                  
                />
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {[
          "Product Marketing",
          "Go-to-Market Strategy",
          "Market Segmentation",
          "Brand Positioning",
          "Integrated Marketing",
        ].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Highlights */}
     

      {/* Sections */}
      <h2 className="text-2xl font-semibold mb-4">
        The Market Others Ignored: Finding Gold in the Senior Tech Space
      </h2>
      <p className="text-gray-700 mb-6">
        When our team first analyzed the wearable fitness market, I saw something competitors
        were missing entirely. While everyone chased millennials with advanced features and
        premium pricing, I discovered that 73% of seniors actually wanted health monitoring
        technology—they just needed someone to speak their language.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Uncovering a $139 Million Opportunity
      </h2>
      <p className="text-gray-700 mb-6">
        My market analysis revealed a massive untapped segment: 50.11 million adults aged 55+
        representing a $139 million annual market potential. But here's what made this insight
        powerful—I didn't just see big numbers, I saw the strategic segmentation opportunity that
        would drive our entire approach.
      </p>
      <p className="text-gray-700 mb-6">
        Rather than treating seniors as one homogeneous group, I developed health-condition-based
        segmentation targeting hypertension, diabetes, hearing loss, and insomnia. This led me to
        identify seniors with hypertension as our primary target segment—a group that prioritizes
        health, shows willingness to invest in health technology, represents a rapidly growing market,
        and offers expansion potential since hypertension links to multiple other conditions.
      </p>
 <img
                    src={primefit}
                    alt="icon"
                   
                />
      <h2 className="text-2xl font-semibold mb-4">
        Building Personas That Drove Every Strategic Decision
      </h2>
      <p className="text-gray-700 mb-6">
        Working within "The 5 Marketeers" team, I developed our ideal customer persona that became
        the foundation for all strategic decisions. Our target wasn't just "seniors aged 55-80"—it was
        college-educated, suburban retirees who value simplicity and healthy lifestyles, seek products
        with large displays, prioritize staying active and independent, but rely on family for tech setup
        and gather information from trusted sources.
      </p>
      <p className="text-gray-700 mb-6">
        This persona development revealed a crucial insight: seniors don't dislike technology, they
        dislike complicated technology that makes them feel helpless. This understanding shaped every
        aspect of our product positioning and marketing strategy.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Strategic Positioning That Challenged Industry Assumptions
      </h2>
      <p className="text-gray-700 mb-6">
        Instead of patronizing "senior-friendly" messaging, I positioned PrimeFit around empowerment
        with our slogan <em>"The Future of Healthy Aging."</em> Our brand resonated as trustworthy,
        reliable, user-friendly, and community-supportive—focusing on what seniors could do, not what
        they couldn't.
      </p>
      <p className="text-gray-700 mb-6">
        My differentiation strategy emphasized PrimeFit's focus on elderly-specific needs and community
        building, distinguishing us from feature-heavy competitors. The messaging framework balanced
        three pillars: empowerment (taking control of health), ease-of-use (showcasing simplified
        interface), and active aging (connecting with healthy lifestyle activities).
      </p>

      <h2 className="text-2xl font-semibold mb-4">Product Features Designed Around Real Needs</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li>Safety-First Design: Fall detection with GPS emergency alerts.</li>
        <li>Health-Centric Monitoring: Vital signs tracking with provider data sharing.</li>
        <li>Simplified Interface: Large icons, voice control, minimal text.</li>
        <li>Social Connection: App integration for video calls & messaging.</li>
        <li>Daily Support: Activity tracking, medication reminders, alarms.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        The Integrated Marketing Strategy That Connected Generations
      </h2>
      <p className="text-gray-700 mb-6">
        My omnichannel approach recognized the complex decision-making dynamics in this market. I
        designed campaigns spanning traditional media (TV, print), digital (Facebook, blogs), and
        trust-building content around empowerment, active life, and peace of mind.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Pricing and Distribution Strategy That Balanced Access with Value
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li>Penetration pricing at $199 for rapid adoption.</li>
        <li>Online Retail: Amazon, Walmart, Best Buy.</li>
        <li>Specialty Retail: Medical stores, pharmacies, senior healthcare.</li>
        <li>B2B Partnerships: Healthcare providers, senior centers.</li>
        <li>Direct-to-Consumer via website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Strategic Framework and Market Analysis</h2>
      <p className="text-gray-700 mb-6">
     I conducted comprehensive PESTLE analysis revealing favorable conditions: government programs supporting senior healthcare, economic alignment with senior disposable income, increasing social acceptance of technology among seniors, continuous technological improvements in sensors and battery life, telehealth regulation compliance opportunities, and environmental consciousness trends supporting preventative healthcare.
      </p>
 <p className="text-gray-700 mb-6">The competitive analysis positioned PrimeFit strategically between high-feature premium devices (Apple Watch at $455) and basic budget options (Amazfit at $149), offering optimal feature-to-price ratio for our target market.
</p>
 <img
                    src={proce}
                    alt="icon"
                   
                />
      <h2 className="text-2xl font-semibold mb-4">Measurable Impact and Strategic Validation</h2>
      <p className="text-gray-700 mb-6">
      My strategy framework validated a significant market opportunity with clear competitive differentiation. The health-based segmentation approach created a replicable model for targeting underserved demographics, while the empowerment-focused positioning established emotional connection beyond functional benefits.
      </p>
       <p className="text-gray-700 mb-6">The integrated marketing approach demonstrated how traditional and digital channels could work synergistically to reach multi-generational decision-makers, proving that successful senior marketing requires understanding family dynamics, not just end-user preferences.
</p>

      <h2 className="text-2xl font-semibold mb-4">
        Competencies Demonstrated Through Strategic Innovation
      </h2>
       <p className="text-gray-700 mb-6">This project showcased my ability to identify overlooked market opportunities through empathetic customer research and demographic analysis. I demonstrated strategic thinking in complex market dynamics, developing comprehensive go-to-market strategies that integrate product positioning, pricing, distribution, and promotion seamlessly.</p>
<p className="text-gray-700 mb-6">My work highlighted expertise in multi-channel marketing strategy, customer segmentation and persona development, competitive analysis and market positioning, integrated campaign development across traditional and digital media, and strategic framework application for comprehensive market assessment.</p>
      <h2 className="text-2xl font-semibold mb-4">Project Deliverables</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li><strong>Comprehensive Marketing Strategy Report (10 pages):</strong>Market analysis, segmentation, positioning, and implementation plan</li>
        <li><strong>Executive Presentation Deck (12 slides):</strong>Visual strategy communication with market potential and go-to-market approach</li>
        <li><strong>Customer Persona Development :</strong>Detailed target market analysis and behavioral insights
</li>
        <li><strong>Competitive Analysis Framework :</strong> Market positioning and pricing strategy recommendations</li>
      </ul>

      <div className="mt-6">
        <a
          href="https://github.com/bhatia-pooja/campus-catering-digital-transformation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <Github size={18} /> View Complete Project Materials on GitHub
        </a>
      </div>

      {/* Presentation Embed */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Final Presentation</h2>
     <PresentationBookWithKeyboard/>
    </div>
  );
};

export default PrimeFitDetail;
