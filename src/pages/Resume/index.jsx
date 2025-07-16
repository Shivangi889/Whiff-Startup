import React from 'react';
import { ExternalLink, Calendar, MapPin, Award } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: "Product Strategy Consultant",
      company: "Independent Consulting",
      location: "Remote",
      period: "2023 - Present",
      description:
        "Providing strategic consulting services to startups and established companies, focusing on product positioning, market analysis, and go-to-market strategies.",
      achievements: [
        "Helped 5+ startups define their product-market fit",
        "Developed comprehensive market entry strategies",
        "Conducted user research and competitive analysis",
      ],
    },
    {
      title: "MBA Student - Business Analytics & Marketing",
      company: "Business School",
      location: "University Campus",
      period: "2021 - 2023",
      description:
        "Focused on advanced analytics, consumer behavior, and strategic marketing with emphasis on data-driven decision making.",
      achievements: [
        "Graduated with distinction in Business Analytics",
        "Led multiple cross-functional project teams",
        "Completed capstone project with real-world business impact",
      ],
    },
    {
      title: "Business Analyst",
      company: "Previous Role",
      location: "City, State",
      period: "2019 - 2021",
      description:
        "Analyzed business processes and market trends to support strategic decision-making and operational improvements.",
      achievements: [
        "Improved operational efficiency by 25%",
        "Led data analysis projects for executive leadership",
        "Developed reporting frameworks and dashboards",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Business School Name",
      specialization: "Business Analytics & Marketing",
      period: "2021 - 2023",
      achievements: [
        "Distinction in Business Analytics",
        "Dean's List",
        "Capstone Project Excellence Award",
      ],
    },
    {
      degree: "Bachelor's Degree",
      school: "University Name",
      specialization: "Business Administration",
      period: "2015 - 2019",
      achievements: ["Magna Cum Laude", "Business Honor Society"],
    },
  ];

  const certifications = [
    "Google Analytics Certified",
    "Tableau Desktop Specialist",
    "Product Management Certificate",
    "Digital Marketing Strategy Certificate",
  ];

  return (
    <div className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light font-tenor-sans text-gray-900 mb-4">
            Resume
          </h1>
          <p className="text-lg text-gray-600 font-tenor-sans max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my professional journey, education,
            and key achievements in business analytics and strategic marketing.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              <ExternalLink size={18} /> LinkedIn Profile
            </a>
          </div>
        </header>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 pb-2 border-b border-gray-100 flex items-center gap-3">
            <span className="w-6 h-6 bg-[#fff27d] rounded-full flex items-center justify-center">
              <Award className="w-3 h-3 text-gray-900" />
            </span>
            Professional Experience
          </h2>
          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-[#fff27d] before:rounded-full"
              >
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-sm transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-gray-700">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="space-y-2 pl-1">
                    {exp.achievements.map((ach, i) => (
                      <li
                        key={i}
                        className="text-gray-700 before:content-['•'] before:text-[#fff27d] before:font-bold before:inline-block before:w-4"
                      >
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 pb-2 border-b border-gray-100 flex items-center gap-3">
            <span className="w-6 h-6 bg-[#fff27d] rounded-full flex items-center justify-center">
              <Award className="w-3 h-3 text-gray-900" />
            </span>
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-sm transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                <p className="text-gray-800 font-medium">{edu.school}</p>
                <p className="text-gray-600 text-sm mb-2">{edu.specialization}</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" /> {edu.period}
                </div>
                <ul className="space-y-2 pl-1">
                  {edu.achievements.map((a, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 before:content-['•'] before:text-[#fff27d] before:font-bold before:inline-block before:w-4"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Skills */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 pb-2 border-b border-gray-100 flex items-center gap-3">
            <span className="w-6 h-6 bg-[#fff27d] rounded-full flex items-center justify-center">
              <Award className="w-3 h-3 text-gray-900" />
            </span>
            Certifications & Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-[#fff27d] rounded-full mt-2 flex-shrink-0"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">Core Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Strategic Planning',
                  'Market Research',
                  'Data Analysis',
                  'Product Management',
                  'Brand Strategy',
                  'Customer Insights',
                  'Financial Modeling',
                  'Project Leadership',
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#fff27d]/80 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#fff27d] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;