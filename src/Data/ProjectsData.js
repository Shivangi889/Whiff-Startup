import { Instagram, Github, Globe, Figma } from "lucide-react";
import MBACapstone from "../pages/Projects/MBACapstone";
import project1 from '../assets/Projects/project1.png'
import project2 from '../assets/Projects/project2.png'
import project3 from '../assets/Projects/project3.png'
import project4 from '../assets/Projects/project4.jpeg'

import xbox from "../assets/Projects/xbox.jpg"
import Hr from "../assets/Projects/card.png"


export const projectData = [
  {
    id: "fin-ai1",
    title: "🌿 Whiffs of Nature – Featured",
    subtitle: "Crafting Culture, Gifting Joy – and Building Products with Purpose",
    duration: "June 2020 - September 2023",
    image: project4,
    highlights: [
      "The Spark: A culture-rooted venture born from a gap in traditional gifting post-lockdown.",
      "The Vision: Designed culturally-rooted, delightful candles and experiences.",
      "Role: Product development, market testing, GTM, brand positioning.",
      "Impact: 12,000+ candles, 10 Diwali campaigns, 60% customer retention."
    ],
    links: [
      {
        href: "/myfounderera",
        label: "Whiffs of Nature"
      }
    ]
  },

  {
    id: "mba-capstone",
    title: "MBA Capstone Digital Transformation Consulting Project",
    subtitle: "Digitizing operations for a campus caterer through product-focused consulting.",
    image: project2,
    highlights: [
      "Led strategic analysis using McKinsey 7S and PESTLE frameworks to identify system misalignments and operational bottlenecks in campus catering operations",
      "Designed comprehensive digital ordering portal with data-driven menu optimization, upselling features, and phased implementation roadmap",
      "Delivered actionable recommendations through client presentations and 16-page strategic report addressing manual process inefficiencies"
    ],
    links: [

      {
        href: "https://github.com/bhatia-pooja/campus-catering-digital-transformation",
        label: "GitHub"
      },
      {
        href: "/project/mba",
        label: "View Detail"
      }

    ],
    "tags": ["Digital Transformation", "Management Consulting", "Strategic Analysis", "McKinsey 7S Framework", "Client-Facing Consulting"],
    "overview": {
      "client": "Citrus Grove Catering (UC Riverside campus catering service)",
      "duration": "10 weeks",
      "team": "5-person MBA consulting team",
      "challenge": "Manual email-based ordering system limiting efficiency and growth"
    },
    "contributions": {
      "strategicFramework": {
        "title": "Strategic Framework Leadership",
        "content": [
          "Applied McKinsey 7S Model to diagnose organizational misalignments across systems, staff, and client relationships",
          "Conducted PESTLE analysis to assess CGC's market position and lifecycle phase",
          "Utilized Growth Strategy Matrix to position digital portal as Quadrant 4 solution (new asset, existing customers)"
        ],
        "image": "mckinsey-7s-framework.png"
      },
      "pestleAnalysis": {
        "title": "PESTLE Analysis",
        "content": [
          "Political: Campus funding cuts, Food import tariffs, Labor law compliance",
          "Economic: Rising food costs, Changing student spending, Enrollment decline risks",
          "Social: Diverse menu demand, Experiential dining preference",
          "Technological: Inefficient online portal, Ordering system upgrades",
          "Legal: Labor law compliance, Food safety regulations, Changing employment policies",
          "Environmental: Food waste management, Climate change risks, Sustainability initiatives"
        ],
        "image": "pestle-analysis-chart.png"
      },
      "dataDrivenSolution": {
        "title": "Data-Driven Solution Design",
        "content": [
          "Analyzed client order and sales data to identify most frequently purchased items and customer demand patterns",
          "Collaborated directly with CGC leadership to determine high-margin products for strategic promotion",
          "Designed menu architecture with strategic item placement and balanced distribution to encourage diverse ordering"
        ],
        "image": "data-analysis-dashboard.png"
      },
      "businessStrategy": {
        "title": "Business Strategy Development",
        "content": [
          "Time Shifting Strategy: Identified single-person bottleneck in order processing and designed automation solution",
          "Rebranding Approach: Developed enhanced menu presentation replacing difficult-to-navigate PDF format",
          "Digital Transformation: Created comprehensive online portal with 24/7 ordering, upselling features, and user-friendly interface"
        ],
        "image": "business-strategy-framework.png"
      },
      "clientCommunication": {
        "title": "Client Communication & Delivery",
        "content": [
          "Co-delivered client presentations translating technical recommendations into business impact",
          "Authored sections of 16-page strategic report including implementation roadmap and risk mitigation",
          "Developed phased rollout timeline aligned with academic calendar to minimize operational disruption"
        ],
        "image": "client-presentation-slide.png"
      }
    },
    "competencies": [
      "Management Consulting",
      "Digital Transformation",
      "Strategic Analysis",
      "Client-Facing Skills",
      "Data Analytics & BI"
    ],
    "businessImpact": [
      "Process Automation: Eliminated manual order-taking reducing staff workload by an estimated 60%",
      "Revenue Optimization: Designed strategic upselling and menu positioning to increase average order value",
      "Operational Efficiency: Created 24/7 ordering capability removing time constraint limitations",
      "Scalability Foundation: Established data collection framework for future AI integration and personalization"
    ],
    "deliverables": [
      "Strategic Assessment Report (16 pages)",
      "Client Presentation Deck",
      "Portal Design Specifications",
      "Phased Implementation Timeline"
    ],
    "materialsLink": "GitHub Repository - Access the full consulting report, presentation materials, and detailed strategic analysis"
  },
  {
    id: "primefit-smartwatch",
    "title": "PrimeFit Smartwatch – Strategic Marketing Plan",
    "subtitle": "Crafting a go-to-market strategy for a wellness-focused wearable for seniors.",
    image: project1,
    highlights: [
      "Led comprehensive go-to-market strategy for $139M addressable market, developing health-based segmentation targeting seniors with hypertension",
      "Created \"The Future of Healthy Aging\" brand positioning with integrated campaigns across TV, Facebook, print media, and content marketing",
      "Designed penetration pricing at $199 with multichannel distribution strategy spanning online retail, specialty stores, and B2B partnerships"
    ],
    links: [

      {
        href: "https://github.com/bhatia-pooja/PrimeFit-Smartwatch-Marketing-Plan/tree/main",
        label: "GitHub"
      }, {
        href: "/project/prime",
        label: "View Detail"
      },
    ],
    "tags": ["Product Marketing", "Go-to-Market Strategy", "Market Segmentation", "Brand Positioning", "Integrated Marketing"],
    "marketOpportunity": {
      "title": "Uncovering a $139 Million Opportunity",
      "content": "My market analysis revealed a massive untapped segment: 50.11 million adults aged 55+ representing a $139 million annual market potential. Rather than treating seniors as one homogeneous group, I developed health-condition-based segmentation targeting hypertension, diabetes, hearing loss, and insomnia.",
      "image": "market-size-chart.png"
    },
    "userPersona": {
      "title": "Building Personas That Drove Every Strategic Decision",
      "content": "Our target wasn't just \"seniors aged 55-80\"—it was college-educated, suburban retirees who value simplicity and healthy lifestyles, seek products with large displays, prioritize staying active and independent, but rely on family for tech setup and gather information from trusted sources.",
      "image": "user-persona-profile.png"
    },
    "strategicPositioning": {
      "title": "Strategic Positioning That Challenged Industry Assumptions",
      "content": "Instead of patronizing \"senior-friendly\" messaging, I positioned PrimeFit around empowerment with our slogan \"The Future of Healthy Aging.\" Our brand resonated as trustworthy, reliable, user-friendly, and community-supportive—focusing on what seniors could do, not what they couldn't.",
      "image": "brand-positioning-framework.png"
    },
    "productFeatures": {
      "title": "Product Features Designed Around Real Needs",
      "features": [
        "Safety-First Design: Fall detection with GPS emergency alerts providing peace of mind for both users and caregivers",
        "Health-Centric Monitoring: Vital signs tracking (heart rate, blood pressure, sleep patterns) with healthcare provider data sharing",
        "Simplified Interface: Large, clear icons with voice control options and minimal text for easy navigation",
        "Social Connection: Smartphone app integration enabling video calls and messaging to combat isolation",
        "Daily Support: Activity tracking, medication reminders, and customizable alarms for appointments"
      ],
      "image": "product-features-diagram.png"
    },
    "marketingStrategy": {
      "title": "The Integrated Marketing Strategy That Connected Generations",
      "channels": [
        "Traditional Media: TV commercials during daytime shows and news programs, print ads in senior-focused magazines and newspapers",
        "Digital Channels: Targeted Facebook advertising, content marketing through educational blogs about senior fitness and health management",
        "Trust-Building Content: \"Empowering Your Active Life\" articles, health monitoring guides, and \"Peace of Mind and Security\" messaging"
      ],
      "image": "marketing-channel-matrix.png"
    },
    "pricingDistribution": {
      "title": "Pricing and Distribution Strategy That Balanced Access with Value",
      "pricing": "Penetration pricing strategy at $199 addressed price sensitivity, gained rapid market share, positioned as accessible yet quality solution, and enabled broad adoption.",
      "distribution": [
        "Online Retail Platforms: Amazon, Walmart, Best Buy for convenience and reach",
        "Specialty Retailers: Medical supply stores, pharmacies, geriatric healthcare facilities for credibility",
        "B2B Partnerships: Healthcare providers and senior centers for trusted recommendations",
        "Direct-to-Consumer: Company website for controlled customer experience"
      ],
      "image": "pricing-strategy-chart.png"
    },
    "strategicFramework": {
      "title": "Strategic Framework and Market Analysis",
      "content": "I conducted comprehensive PESTLE analysis revealing favorable conditions: government programs supporting senior healthcare, economic alignment with senior disposable income, increasing social acceptance of technology among seniors, continuous technological improvements in sensors and battery life, telehealth regulation compliance opportunities, and environmental consciousness trends supporting preventative healthcare.",
      "image": "competitive-analysis-grid.png"
    },
    "impact": {
      "title": "Measurable Impact and Strategic Validation",
      "content": "My strategy framework validated a significant market opportunity with clear competitive differentiation. The health-based segmentation approach created a replicable model for targeting underserved demographics, while the empowerment-focused positioning established emotional connection beyond functional benefits.",
      "image": project1
    },
    "deliverables": [
      "Comprehensive Marketing Strategy Report (10 pages)",
      "Executive Presentation Deck (12 slides)",
      "Customer Persona Development",
      "Competitive Analysis Framework"
    ],
    "materialsLink": "GitHub Repository - Access the full marketing report, presentation materials, and strategic analysis documentation."
  },
  {
    id: "xbox-marcom",
    "title": "Xbox \"This Is An Xbox\" – Marcom Strategy & Audit",
    "subtitle": "Deconstructing a Gaming Giant's Bold Repositioning Strategy",
    image: xbox,
    highlights: [
      "Developed comprehensive IMC strategy for Xbox's ecosystem expansion with strategic budget recommendations and 4-segment targeting framework for 2025 growth",
      "Created integrated brand positioning around \"Play without limits—anywhere, anytime\" with cross-platform messaging architecture and crisis management protocols",
      "Designed strategic implementation roadmap including esports partnerships, mobile gaming expansion, and community engagement initiatives"
    ],
    links: [

      {
        href: "https://drive.google.com/drive/folders/1OmSSW0m7yq0oItrUWuVNBK5kGtYrDnO_?usp=sharing",
        label: "See Drive",
        label2: 'See '
      },
      {
        href: "/project/xbox",
        label: "View Detail"
      },
    ],
    "tags": ["Marketing Communications", "Campaign Audit", "Strategic Analysis", "Brand Positioning", "Budget Optimization", "Gaming Industry Strategy"],
    "strategicContext": {
      "title": "Deconstructing a Gaming Giant's Bold Repositioning Strategy",
      "content": "Microsoft's \"This Is An Xbox\" campaign represented more than marketing—it signaled a fundamental business transformation. Working alongside teammates, I developed a comprehensive Integrated Marketing Communications strategy to support Xbox's evolution from console manufacturer to platform-agnostic gaming ecosystem.",
      "image": "xbox-campaign-creative.png"
    },
    "brandPositioning": {
      "title": "Strategic Brand Positioning Framework",
      "brandPromise": "For gamers of all kinds, Xbox is a great gaming platform and ecosystem brand offering seamless and flexible gaming experiences across consoles, PCs, cloud, and smart devices.",
      "pillars": [
        "Accessibility: Removing traditional hardware barriers for universal gaming",
        "Diversity & Inclusion: Supporting diverse player bases through representation and community initiatives",
        "Innovation: Leveraging cloud gaming, AI-driven personalization, and cross-platform integration",
        "Community & Engagement: Building connections through multiplayer experiences and content sharing",
        "Value Proposition: Delivering Game Pass affordability with extensive content libraries"
      ],
      "image": "brand-positioning-wheel.png"
    },
    "targetSegmentation": {
      "title": "Target Audience Segmentation Strategy",
      "segments": [
        {
          "name": "Primary Segment: Core Young Adults (20-39)",
          "description": "Competitive gamers engaged in multiplayer, esports, and high-energy action games across Xbox, PC, and cloud gaming platforms."
        },
        {
          "name": "Secondary Growth Segment: Female Gamers",
          "description": "Players preferring co-op, story-driven, and simulation games with focus on inclusive narratives and diverse representation."
        },
        {
          "name": "Budget-Conscious Gamers",
          "description": "Cost-sensitive Gen Z & Millennials seeking affordable Game Pass access without console investment"
        },
        {
          "name": "High-Income Gamers",
          "description": "Tech-savvy professionals prioritizing premium 4K gaming experiences and cutting-edge hardware"
        }
      ],
      "image": "audience-segmentation-matrix.png"
    },
    "marketingTools": {
      "title": "Comprehensive Marketing Communications Tools for 2025",
      "tools": [
        "Digital & Social Media Marketing: Strategic deployment across YouTube, TikTok, Instagram, Twitter (X), Reddit, Discord, Facebook, and LinkedIn",
        "Esports & Competitive Gaming Sponsorships: Integration with Call of Duty League, Halo Championship Series, Twitch, and YouTube Gaming",
        "Subscription-Based Marketing Focus: Leveraging personalized emails, app notifications, limited-time offers, and referral programs",
        "AI-Powered & Personalized Marketing: Implementation of AI-driven recommendations, chatbots, and data-driven retargeting ads"
      ],
      "image": "marketing-tools-overview.png"
    },
    "budgetRecommendations": {
      "title": "Strategic Budget Enhancement Recommendations",
      "currentState": {
        "title": "Current State Analysis",
        "allocations": [
          "Desktop Video: $26M (maintained)",
          "Digital Ads + OLV + TV: $106M (maintained)",
          "Mobile Display: $3.6M (significantly underinvested)",
          "Twitter (X): $2.9M (maintained)",
          "Instagram: $76M (maintained)",
          "Twitch + Esports: $408K (vastly insufficient)"
        ]
      },
      "strategicPlan": {
        "title": "Strategic Investment Plan",
        "recommendations": [
          "Twitch & Esports Enhancement: Increase to $10.4M for streaming sponsorships, live Game Pass previews, and tournament investments",
          "Mobile Display Expansion: Increase to $8.6M for TikTok, YouTube Shorts, and mobile gaming platform advertising",
          "Community Engagement Initiative: New $2M investment for official Xbox Discord, subreddit activations, and player-driven events",
          "Limited-Edition Collaborations: New $5M for entertainment brand partnerships and themed Xbox console releases"
        ]
      },
      "image": "budget-allocation-chart.png"
    },
    "crisisManagement": {
      "title": "Crisis Management & Communication Framework",
      "protocols": [
        "Cloud Gaming Service Issues: Social media acknowledgment with real-time updates and free compensation trials",
        "Competitive Comparisons: Reinforcement of unique multi-platform ecosystem positioning emphasizing cloud gaming and Game Pass value",
        "Game Pass Subscription Complaints: Direct customer concern addressing with limited-time discounts or trial extensions",
        "Community Backlash: Q&A sessions with developers, open Reddit & Discord dialogue, and transparent Xbox leadership statements"
      ],
      "image": "crisis-response-framework.png"
    },
    "implementationStrategy": {
      "title": "Implementation Strategy & Timeline",
      "phases": [
        {
          "name": "Phase 1: Foundation & Platform Development",
          "description": "Focus on establishing robust platform foundation with enhanced menu presentation, intuitive categories, strategic upselling, and curated menu designs for different event types and budgets."
        },
        {
          "name": "Phase 2: Market Expansion & Partnership Development",
          "description": "Expansion of streaming sponsorships, mobile gaming promotions targeting casual gamers, and community engagement strengthening via Discord & Reddit platforms."
        },
        {
          "name": "Phase 3: Innovation & Market Leadership",
          "description": "Advanced AI feature integration, exclusive hardware collaborations for collector-driven demand, and expansion of cross-platform integration capabilities."
        }
      ],
      "image": "implementation-timeline.png"
    },
    "communicationObjectives": {
      "title": "Communication Objective & Desired Outcomes",
      "primaryObjective": "Shift consumer mindset from \"Xbox is a console\" to \"Xbox is wherever I play\"",
      "targetChanges": [
        "Recognition that Xbox is available on multiple devices beyond consoles",
        "Consideration of Xbox Game Pass subscription for accessing games without console purchase",
        "Engagement with Xbox Cloud Gaming on existing devices",
        "Adoption of cross-platform gaming experiences"
      ],
      "messagingFramework": {
        "currentBelief": "\"Xbox is only for console players\" / \"I need expensive hardware for Xbox games\"",
        "desiredBelief": "\"I don't need an Xbox console to enjoy Xbox games\" / \"Xbox lets me play the way I want—on my PC, phone, or TV\"",
        "reasonToBelieve": "Cloud Gaming & Game Pass instant play capabilities, Smart TV & Mobile Gaming Support, Cross-Platform Play continuity, Official Messaging & Partnerships validation"
      },
      "image": "messaging-framework.png"
    },
    "performanceMeasurement": {
      "title": "Performance Measurement & Optimization",
      "kpis": [
        "Brand awareness growth among mobile and PC gamers",
        "Increased engagement on Xbox's non-console platforms",
        "Higher Game Pass subscription conversion rates",
        "Growth in active cloud gaming users and Smart TV adoption",
        "Increased active users engaging with Xbox's online multiplayer and social features"
      ],
      "metricsFramework": "Quarterly tracking of brand perception shifts, cross-platform engagement metrics, subscription growth rates across target segments, and community participation indicators.",
      "image": "kpi-dashboard.png"
    },
    "deliverables": [
      "Comprehensive IMC Strategy Report (17 pages)",
      "Marketing Communications Audit (9 pages)",
      "Target Segment Analysis Report",
      "Crisis Management Framework",
      "Budget Optimization Plan"
    ],
    "materialsLink": "Google Drive - Access the marcom audit report, target segment analysis and the final project report."
  },
  {
    id: "hr-grievance-system",
    "title": "AI-Powered HR Grievance Management System",
    "subtitle": "Transforming workplace conflict resolution through intelligent automation and anonymous reporting",
    image: Hr,
    highlights: [
      "Addressed $8.79B market opportunity through end-to-end product management from research to live prototype with 3 intelligent automation agents",
      "Transformed workplace conflict resolution for 25% of employees experiencing annual workplace issues, delivering <2 minute case processing vs 2-4 hour manual baseline"
    ],
    links: [
      {
        href: "https://preview--grievance-management.lovable.app/",
        label: "View Deliverables"
      },
      {
        href: "https://github.com/yourusername/ai-grievance-management-system",
        label: "GitHub"
      }, {
        href: "https://medium.com/@pbhat033/transforming-hr-grievance-management-with-ai-a-product-managers-journey-aa2418a5883b",
        label: "View Case Study"
      },
      {
        href: "/project/hr-grievance",
        label: "View Details"
      }

    ],
    "tags": ["Workflow Automations", "Prototyping", "HR Technology", "API Integrations", "User Experience Design", "Vibe Coding", "Product Research"],
    "keyFeatures": [
      "Anonymous reporting",
      "Case pre-processing < 2 mins",
      "Transparency in case tracking",
      "100% decrease in SLA breaches",
      "Real-time communication with HR rep"
    ],
    "technologies": ["React.js", "Supabase", "n8n", "OpenAI GPT-4"],
    "overview": {
      "title": "Project Overview",
      "content": "Built an end-to-end AI-powered grievance management platform that reduces HR processing time by 70% while ensuring complete employee anonymity and real-time transparency. The system addresses a $8.79B market opportunity in workplace conflict resolution, demonstrating how thoughtful product management can tackle complex organizational challenges.",
      "image": "system-overview-diagram.png"
    },
    "challenge": {
      "title": "The Challenge",
      "content": "The numbers tell a stark story: 25% of UK employees experience workplace conflict annually, costing organizations $359 billion in lost productivity. Yet most companies still rely on outdated, manual grievance processes that create more problems than they solve.",
      "image": "problem-statement.png"
    },
    "researchInsights": {
      "title": "Research Insights",
      "findings": [
        "Manual case processing takes 2-4 hours per submission, creating bottlenecks",
        "Lack of anonymous reporting options leads to systematic underreporting",
        "Poor visibility into case status creates a black hole effect",
        "While 76% of HR managers believe their organization will fall behind without AI integration, only 38% have actually implemented AI solutions"
      ],
      "image": "research-data-visualization.png"
    },
    "solution": {
      "title": "The Solution",
      "components": [
        {
          "name": "Anonymous Reporting System",
          "description": "Uses secure token-based tracking that allows employees to engage in two-way communication without ever revealing their identity through a 6-step guided process."
        },
        {
          "name": "AI-Powered Case Analysis",
          "description": "Uses GPT-4 with custom prompt engineering to extract structured information while protecting personally identifiable information through three specialized agents."
        },
        {
          "name": "Smart HR Assignment",
          "description": "Goes beyond simple routing by considering specialist expertise, current workload, and case severity while maintaining reporter privacy."
        },
        {
          "name": "Real-time Communication",
          "description": "Creates a dialogue-driven resolution process with proactive updates, timeline management, and secure channels for ongoing conversation."
        }
      ],
      "image": "solution-architecture.png"
    },
    "technicalImplementation": {
      "title": "Technical Implementation",
      "components": [
        "Frontend: React.js with progressive web app capabilities",
        "Backend: Supabase with PostgreSQL and Row-Level Security",
        "AI Integration: OpenAI GPT-4 through carefully engineered prompts",
        "Automation: n8n workflows that process cases in under 2 minutes while maintaining 99.3% success rates"
      ],
      "image": "tech-stack-diagram.png"
    },
    "productManagement": {
      "title": "Product Management Approach",
      "content": "The project began with comprehensive market research that went beyond surface-level statistics to understand the human impact of workplace conflict. This research informed a user-centered design process that prioritized building trust over demonstrating technical capability.",
      "image": "user-journey-map.png"
    },
    "keyResults": {
      "title": "Key Results",
      "metrics": [
        {
          "metric": "Processing Time",
          "achievement": "<2 minutes",
          "impact": "92% reduction from manual baseline"
        },
        {
          "metric": "Consistency",
          "achievement": "100% standardized analysis",
          "impact": "Eliminated human error in routing"
        },
        {
          "metric": "Employee Trust",
          "achievement": "Anonymous submission capability",
          "impact": "Addresses primary barrier to reporting"
        },
        {
          "metric": "HR Efficiency",
          "achievement": "70% admin work reduction",
          "impact": "Frees time for meaningful intervention"
        }
      ],
      "image": "results-dashboard.png"
    },
    "businessImpact": {
      "title": "Business Impact and Scalability",
      "content": "The system addresses a validated market need in the $8.79B workplace conflict resolution market, which is growing at 7.6% annually. Beyond immediate operational benefits, the platform creates strategic advantages through data and insights that were previously impossible to capture.",
      "image": "business-impact-analysis.png"
    },
    "futureVision": {
      "title": "Future Vision",
      "phases": [
        {
          "phase": "Phase 2",
          "description": "Introduces advanced analytics that identify patterns across cases, departments, and time periods, enabling proactive intervention before conflicts escalate."
        },
        {
          "phase": "Phase 3",
          "description": "Focuses on enterprise integration, connecting the platform with existing HRIS systems and expanding customization options for different organizational cultures and requirements."
        }
      ],
      "image": "future-roadmap.png"
    },
    "projectLinks": [
      {
        "name": "Live Demo",
        "url": "Interactive Prototype",
        "credentials": "Username: admin@test.com | Password: 123456789"
      },
      {
        "name": "Case Tracking",
        "url": "Status Demo",
        "credentials": "Test Case ID: GRV-271904563"
      },
      {
        "name": "GitHub Repository",
        "url": "Complete Documentation"
      },
      {
        "name": "Technical Deep Dive Case Study",
        "url": "Medium Article"
      }
    ]
  },
  {
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
    links: [
      {
        href: "https://preview--finai-prototype.lovable.app/onboarding",
        label: "View Deliverables"
      },
      {
        href: "https://github.com/bhatia-pooja/pm-roadmap-finAI-financial-news-tool",
        label: "GitHub"
      },
      {
        href: "/project/fin-ai",
        label: "View Detail"
      }

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
  },
];










