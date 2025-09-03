import { Instagram, Github, Globe, Figma } from "lucide-react";

import project1 from '../assets/Projects/project1.png'
import project2 from '../assets/Projects/project2.png'
import project3 from '../assets/Projects/project3.png'
import project4 from '../assets/Projects/project4.jpeg'
import project5 from '../assets/Projects/project5.jpg'
import p0 from '../assets/Projects/p0.png'
import p1 from '../assets/Projects/p1.png'
import p2 from '../assets/Projects/p2.png'
import p3 from '../assets/Projects/p3.png'
import p4 from '../assets/Projects/p4.png'
import p5 from '../assets/Projects/p5.png'
import p6 from '../assets/Projects/p6.png'
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
            },
            {
                href: "https://www.instagram.com/fete_kp/",
                label: "@fete_kp"
            }
        ]
    },
    {
        id: "fin-ai",
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
    {
        id: "fin-ai2",
        title: "🍽 Citrus Grove Catering – MBA Capstone",
       subtitle: "Digitizing operations for a campus caterer through product-focused consulting.",
    duration: "January 2025 - March 2025",
    image: project2,
    highlights: [
        "Evaluated manual ordering and communication challenges for campus caterer",
        "Led problem discovery through interviews and customer journey mapping",
        "Scoped MVP for online ordering portal based on real customer behaviors",
        "Developed KPI framework aligned with business goals"
    ],
    links: [
        {
            "href": "https://github.com/bhatia-pooja/campus-catering-digital-transformation",
            "label": "GitHub"
        }
    ],
    overview: "Citrus Grove Catering (CGC), a campus-based catering service, struggled with manual ordering, inconsistent customer communication, and a lack of online infrastructure—creating friction for both users and staff. Our task was to evaluate the problem from a product lens and propose a scalable, user-friendly solution.",
    features: [
        "24/7 online ordering access",
        "Smart filters for event types and dietary needs",
        "Personalized bundles and upselling prompts",
        "Visual UI enhancements for intuitive navigation"
    ],
    role: [
        "Led problem discovery through interviews, operational reviews, and customer journey mapping",
        "Scoped MVP for an online ordering portal based on real customer behaviors",
        "Translated qualitative findings into feature recommendations and a product rollout plan",
        "Developed KPI framework aligned with CGC's business goals (order value, satisfaction, speed)",
        "Co-owned client presentations and aligned stakeholder priorities with technical feasibility"
    ],
    learnings: [
        "Strengthened PM toolkit: from discovery and UX insight to roadmap planning and stakeholder buy-in",
        "Applied McKinsey 7S and PESTLE frameworks to identify root challenges and growth opportunities",
        "Mapped portal features to key friction points in the ordering experience"
    ],
    impact: "Delivered a step-by-step launch roadmap (pilot → feedback → scale) with defined success metrics: % online orders, avg. order value, user NPS, labor hours saved. Enabled CGC to modernize operations, reduce errors, and improve user satisfaction.",
    images: [],
    tags: ["Product Management", "UX Research", "Strategy", "Operations", "Stakeholder Management"]

    },
    {
          id: "fin-ai3",
        title: "⌚ PrimeFit Smartwatch – Strategic Marketing Plan",
           "subtitle": "Crafting a go-to-market strategy for a wellness-focused wearable for seniors.",
    duration: "Winter 2023",
    image: project1,
    highlights: [
        "Developed complete GTM strategy for senior-focused smartwatch concept",
        "Created differentiated positioning around 'Empowerment through Simplicity'",
        "Built detailed buyer personas influencing product features and messaging",
        "Designed dual-track strategy targeting seniors and caregivers"
    ],
    links: [
        {
            "href": "https://github.com/bhatia-pooja/PrimeFit-Smartwatch-Marketing-Plan/tree/main",
            "label": "GitHub"
        }
    ],
    overview: "PrimeFit was a conceptual smartwatch product developed for a graduate-level marketing strategy course. Designed specifically for seniors aged 55 to 80, the device aimed to empower healthy, independent living through features such as fall detection, health tracking, social connectivity, and medication reminders. The project involved developing a complete go-to-market strategy—from customer research and market segmentation to product positioning, pricing, and promotional planning.",
    features: [
        "Fall detection and emergency alerts",
        "Health tracking and medication reminders",
        "Social connectivity features",
        "Intuitive UX with large icons and voice commands",
        "Real-time emergency alerts"
    ],
    role: [
        "Conducted secondary research to analyze market size, behavior trends, and competitor offerings",
        "Segmented the senior population based on tech savviness, health needs, and lifestyle",
        "Developed a differentiated brand narrative centered around 'Empowerment through Simplicity'",
        "Built detailed buyer personas (e.g., 'Independent Irene' and 'Caretaker Carl')",
        "Crafted targeted messaging pillars focusing on independence, peace of mind, and ease of use",
        "Proposed a penetration pricing model to accelerate adoption",
        "Outlined an integrated marketing approach across digital, print, and community-based channels"
    ],
    learnings: [
        "Gained experience in creating positioning frameworks and persona-informed strategies",
        "Strengthened storytelling skills—translating features into benefits for a traditionally underserved tech demographic",
        "Deepened understanding of channel alignment and pricing strategy in niche markets"
    ],
    impact: "Developed an actionable marketing plan that aligned business viability with human-centered product values, positioning PrimeFit as a smart, compassionate tool for aging confidently with multichannel distribution across online retail, healthcare centers, and senior-focused retail.",
    images: [],
    tags: ["Product Marketing", "GTM Strategy", "Market Research", "Positioning", "Persona Development"]

    },
    {
    "id": "speak-easy-grievance",
    "title": "Transforming HR Grievance Management with AI: A Product Manager's Journey",
    "subtitle": "Building an intelligent solution that reduces HR processing time by 70% while empowering employees",
    "duration": "",
    image: project5,
    video: "https://www.loom.com/embed/6319f87795ba42c29b930b47965e283c?sid=091926cf-311c-4fef-a050-e04d57d3960b",
    "highlights": [
        "AI-powered grievance management system reducing HR processing time by 70%",
        "True anonymous reporting increasing submission rates by 40-60%",
        "GPT-4 powered case summarization and intelligent routing",
        "Complete audit trails and SLA compliance automation"
    ],
     links: [
        {
            "href": "https://github.com/bhatia-pooja/ai-grievance-management-system",
            "label": "GitHub"
        }, 
           {
            "href": "https://preview--grievance-management.lovable.app/",
            "label": "Interactive Prototype"
        },
    ],
    "overview": "Speak-easy Grievance Management is an intelligent system designed to transform how organizations handle employee concerns while building trust through transparency and anonymity. The solution addresses the hidden crisis in HR departments where manual processes create bottlenecks, reduce transparency, and erode employee trust, costing organizations significantly in lost productivity and turnover.",
    "features": [
        "Anonymous Reporting System with token-based anonymous access and secure document upload",
        "Intelligent Case Tracking with real-time status visibility and comprehensive audit trails",
        "AI-Powered Backend Automation with GPT-4 case summarization and severity assessment",
        "Real-Time Communication Hub supporting both identified and anonymous reporters",
        "Red-alert keyword detection for immediate escalation of critical cases",
        "Smart categorization system routing cases based on content analysis",
        "SLA calculation engine setting realistic deadlines based on case complexity"
    ],
    "role": [
        "Designed intelligent system to transform employee concern handling",
        "Developed human-centered approach understanding user personas: Concerned Employee, Overwhelmed HR Professional, and Strategic HR Leader",
        "Created core features driving impact including anonymous reporting, intelligent case tracking, and AI-powered automation",
        "Designed 7-step grievance reporting automation workflows",
        "Planned future scope including predictive SLA breach prevention and organizational health intelligence"
    ],
    "learnings": [
        "Reinforced that the best solutions don't just solve problems – they transform how people experience work itself",
        "Combining technical innovation with deep empathy for user needs creates systems that make employees feel heard",
        "Thoughtful product management can tackle complex organizational challenges by understanding real people behind user stories",
        "The future of HR technology is about amplifying human empathy with intelligent automation, not replacing human judgment"
    ],
    "impact": "Reduces HR processing time by 70%, increases anonymous submission rates by 40-60%, ensures zero missed SLA deadlines, provides complete documentation without manual effort, and returns hours to meaningful human interaction and strategic work. The system addresses staggering business impacts including decreased productivity, increased turnover, compliance risks, and damaged workplace culture.",
    "images": [p0,p1,p2,p3,p4,p5,p6],
    "tags": ["AI/ML", "Product Management", "HR Tech", "User Research", "Process Automation", "GPT-4", "SLA Management"],
    "problemContext": {
        "title": "The Hidden Crisis in HR Departments",
        "description": "Sarah, an employee at a mid-sized tech company, experiences workplace harassment but hesitates to report it. She fears retaliation, doesn't trust the lengthy manual process, and worries her complaint will disappear into an HR black hole. Meanwhile, the HR team is drowning in a backlog of grievances, spending hours manually processing each case, often missing critical SLA deadlines.",
        "statistics": [
            "Nearly 30% of employers have seen employee grievances rise over the past two years",
            "Workplace conflict costs US employers $3,216.63 per employee per year in lost productivity",
            "Around 9% of employees experiencing workplace conflict actively seek new jobs",
            "Over 53% of organizations receive grievances about relationships with managers",
            "Almost half manage issues between colleagues"
        ],
        "businessImpact": [
            "Decreased productivity",
            "Increased turnover",
            "Compliance risks",
            "Damaged workplace culture"
        ]
    },
    "solutionOverview": {
        "name": "Speak-easy Grievance Management",
        "description": "An intelligent system designed to transform how organizations handle employee concerns while building trust through transparency and anonymity.",
        "coreInsight": "Employees need psychological safety to report issues, while HR teams need operational efficiency to resolve them effectively. Traditional systems force a trade-off between these needs. This solution eliminates this compromise entirely.",
        "valuePropositions": [
            {
                "icon": "🔒",
                "title": "True Anonymous Reporting",
                "description": "Employees can report sensitive issues without fear of retaliation, increasing submission rates by 40-60%"
            },
            {
                "icon": "⚡",
                "title": "70% Faster Processing",
                "description": "AI-powered case summarization and smart routing eliminate manual triage bottlenecks"
            },
            {
                "icon": "📊",
                "title": "Transparent Tracking",
                "description": "Real-time case status updates build employee confidence in the resolution process"
            },
            {
                "icon": "🎯",
                "title": "SLA Compliance",
                "description": "Automated monitoring prevents missed deadlines and reduces compliance risks"
            }
        ]
    },
    "userPersonas": {
        "primaryPersonas": [
            {
                "name": "The Concerned Employee - 'Sarah'",
                "traits": "Values workplace fairness, seeks psychological safety, wants transparent communication",
                "painPoints": [
                    "Fear of retaliation",
                    "Lack of process visibility",
                    "Lengthy resolution times"
                ],
                "needs": [
                    "Confidential reporting",
                    "Real-time updates",
                    "Clear timelines",
                    "Anonymous communication options"
                ]
            },
            {
                "name": "The Overwhelmed HR Professional - 'Marcus'",
                "traits": "Manages multiple cases simultaneously, focuses on compliance, values efficiency",
                "painPoints": [
                    "Manual case processing",
                    "Unclear prioritization",
                    "Missed SLA deadlines",
                    "Repetitive administrative tasks"
                ],
                "needs": [
                    "Automated workflows",
                    "Clear case context",
                    "Prioritization guidance",
                    "Comprehensive audit trails"
                ]
            },
            {
                "name": "The Strategic HR Leader - 'Diana'",
                "traits": "Data-driven decision maker, focuses on organizational culture, manages compliance risks",
                "painPoints": [
                    "Limited visibility into trends",
                    "Reactive approach to workplace issues",
                    "Difficulty measuring process effectiveness"
                ],
                "needs": [
                    "Analytics dashboards",
                    "Pattern identification",
                    "ROI measurement",
                    "Proactive insights"
                ]
            }
        ]
    },
    "productRequirements": {
        "coreFeatures": [
            {
                "name": "Anonymous Reporting System",
                "coreFunctionality": "Secure, multi-step grievance submission with complete anonymity options",
                "functionalRequirements": [
                    "Token-based anonymous access system preventing identity revelation",
                    "Progressive disclosure form design reducing cognitive load",
                    "Secure document upload supporting evidence attachments",
                    "Category-based routing ensuring cases reach appropriate specialists",
                    "Anonymous communication channel enabling two-way dialogue without compromising identity"
                ],
                "userImpact": "Employees feel safe reporting sensitive issues, leading to earlier problem identification and resolution."
            },
            {
                "name": "Intelligent Case Tracking",
                "coreFunctionality": "Real-time case status visibility with comprehensive audit trails",
                "functionalRequirements": [
                    "Unique case reference system accessible via secure tokens",
                    "Timeline visualization showing all case activities and milestones",
                    "Automated status notifications triggered by HR actions",
                    "Progress indicators showing expected next steps and timeframes",
                    "Mobile-responsive interface enabling access from any device"
                ],
                "userImpact": "Builds trust through transparency while keeping employees informed throughout the resolution process."
            },
            {
                "name": "AI-Powered Backend Automation",
                "coreFunctionality": "Intelligent case preprocessing that frees HR teams from manual administrative work",
                "functionalRequirements": [
                    "GPT-4 powered case summarization extracting who, what, when, where, and recommended next steps",
                    "Intelligent severity assessment categorizing cases as Low, Medium, or High priority",
                    "Red-alert keyword detection for cases requiring immediate escalation (harassment, discrimination, safety threats)",
                    "Smart categorization system routing cases based on content analysis",
                    "Specialist matching algorithm assigning cases to appropriate HR team members",
                    "SLA calculation engine setting realistic deadlines based on case complexity"
                ],
                "userImpact": "HR professionals spend 70% less time on initial case processing, focusing instead on meaningful employee interaction and resolution."
            },
            {
                "name": "Real-Time Communication Hub",
                "coreFunctionality": "Seamless bidirectional communication supporting both identified and anonymous reporters",
                "functionalRequirements": [
                    "Secure messaging system maintaining anonymity when required",
                    "Automated notification system keeping all parties informed",
                    "Message history preservation for audit and reference purposes",
                    "Status update broadcasting ensuring consistent communication",
                    "Integration capabilities with email and collaboration platforms"
                ],
                "userImpact": "Creates a dialogue-driven resolution process that builds trust and ensures no case falls through the cracks."
            }
        ]
    },
    "automationWorkflows": [
        {
            "name": "Intelligent Case Processing",
            "description": "When an employee submits a grievance, the system automatically:",
            "steps": [
                "Analyzes & Summarizes: GPT-4 processes the submission, extracting the 'who, what, when, where' and suggesting next steps",
                "Assesses Severity: AI categorizes cases as Low, Medium, or High priority based on content analysis",
                "Detects Critical Issues: Red-alert keyword detection immediately escalates cases involving harassment, discrimination, or safety threats",
                "Routes Intelligently: Cases are automatically assigned to HR specialists based on expertise matching and current workload",
                "Sets Expectations: SLA deadlines are calculated using internal rules considering case complexity and organizational policies",
                "Initiates Communication: Automated acknowledgments are sent within minutes, setting clear expectations for next steps"
            ],
            "businessImpact": "What previously took 2-4 hours of manual work now happens in under 2 minutes, with higher consistency and accuracy in identifying critical cases."
        },
        {
            "name": "Proactive Status Management",
            "description": "Every HR action triggers automated processes:",
            "steps": [
                "Tracks Progress: All status changes are timestamped and logged for audit purposes",
                "Communicates Updates: Relevant parties receive immediate notifications about case developments",
                "Monitors SLAs: The system continuously checks deadline compliance and provides early warning alerts for approaching deadlines",
                "Escalates Critical Cases: High-severity cases with red-alert indicators bypass normal workflows for immediate leadership attention",
                "Maintains Records: Comprehensive audit trails are automatically generated for compliance and legal requirements"
            ],
            "businessImpact": "Zero missed SLA deadlines, consistent communication, and complete documentation without manual effort."
        }
    ],
    "futureScope": {
        "title": "Building Toward Predictive HR",
        "description": "The current system establishes a strong foundation, but the real opportunity lies in evolving from reactive to predictive grievance management.",
        "initiatives": [
            {
                "name": "Predictive SLA Breach Prevention",
                "description": "By analyzing historical case patterns, AI can predict which cases are likely to exceed SLA deadlines based on factors like:",
                "factors": [
                    "Case complexity indicators from initial submissions",
                    "Historical resolution times for similar case types",
                    "Current HR team workload and availability",
                    "Seasonal patterns in case volume and complexity"
                ]
            },
            {
                "name": "Organizational Health Intelligence",
                "description": "Future iterations will identify systemic workplace issues before they escalate:",
                "capabilities": [
                    "Department-level trend analysis revealing recurring problem areas",
                    "Manager effectiveness scoring based on grievance patterns from their teams",
                    "Culture risk indicators identifying departments with elevated conflict rates",
                    "Preventive intervention recommendations suggesting proactive measures to address emerging issues"
                ]
            },
            {
                "name": "Advanced Resolution Assistance",
                "description": "AI-powered recommendations will guide HR professionals toward more effective resolutions:",
                "capabilities": [
                    "Similar case analysis providing resolution strategies based on successful historical outcomes",
                    "Communication tone optimization ensuring empathetic, professional responses",
                    "Follow-up scheduling automating check-ins to ensure lasting resolution"
                ]
            }
        ]
    },
    "conclusion": {
        "title": "The Bottom Line: Building Human-Centered Technology",
        "keyInsights": [
            "This project reinforced a fundamental product management truth: the best solutions don't just solve problems – they transform how people experience work itself.",
            "By combining technical innovation with deep empathy for user needs, we created a system that simultaneously makes employees feel heard and empowers HR teams to be more effective.",
            "The 70% reduction in processing time isn't just an efficiency metric – it represents hours returned to meaningful human interaction and strategic work.",
            "Most importantly, this solution demonstrates how thoughtful product management can tackle complex organizational challenges by understanding that behind every user story is a real person seeking fairness, transparency, and dignity in their workplace.",
            "The future of HR technology isn't about replacing human judgment – it's about amplifying human empathy with intelligent automation."
        ],
        "callToAction": "Interested in seeing the solution in action? Check out the interactive prototype and track a mock case using ID: GRV-271904563."
    }
}
];








