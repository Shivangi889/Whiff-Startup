import { Instagram, Github, Globe, Figma } from "lucide-react";

import project1 from '../assets/Projects/project1.png'
import project2 from '../assets/Projects/project2.png'
import project3 from '../assets/Projects/project3.png'
import project4 from '../assets/Projects/project4.jpeg'

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