import React from 'react';
import { ExternalLink, Download, Calendar, MapPin } from 'lucide-react';

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
    <>
     <div className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Resume</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my professional journey, education,
            and key achievements in business analytics and strategic marketing.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            {/* <button className="flex items-center gap-2 px-4 py-2 bg-[#fff27d] text-black font-semibold rounded-full shadow hover:bg-yellow-300">
              <Download size={18} /> Download PDF
            </button> */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100"
            >
              <ExternalLink size={18} /> LinkedIn Profile
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border-l-4 border-[#fff27d] pl-4">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-500 mt-1 md:mt-0">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{exp.description}</p>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow">
                <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                <p className="text-gray-800 font-medium">{edu.school}</p>
                <p className="text-gray-600 text-sm">{edu.specialization}</p>
                <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {edu.achievements.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200">Certifications & Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Certifications</h3>
              <ul className="list-disc list-inside text-gray-700">
                {certifications.map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
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
                    className="bg-[#fff27d] text-black px-3 py-1 rounded-full text-sm"
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
    
    </>
   
  );
};

export default Resume;