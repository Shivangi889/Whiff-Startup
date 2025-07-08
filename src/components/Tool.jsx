import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

const ToolsSection = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const technologies = [
    {
      id: 1,
      category: "Product & Project Management",
      items: [
        {
          name: "Management Tools",
          image: [
            "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
            "https://cdn.worldvectorlogo.com/logos/trello.svg",
            "https://cdn.worldvectorlogo.com/logos/monday-1.svg",
            "https://cdn.worldvectorlogo.com/logos/notion-2.svg"
          ]
        }
      ]
    },
    {
      id: 2,
      category: "Agile Practices",
      items: [
        {
          name: "Agile Methods",
          image: [
            "https://cdn-icons-png.flaticon.com/512/11019/11019999.png",
            "https://cdn-icons-png.flaticon.com/512/9672/9672659.png",
            "https://cdn-icons-png.flaticon.com/512/2784/2784461.png"
          ]
        }
      ]
    },
    {
      id: 3,
      category: "Analytics & Data Visualization",
      items: [
        {
          name: "Data Tools",
          image: [
            "https://cdn-icons-png.flaticon.com/512/4299/4299956.png",
            "https://cdn-icons-png.flaticon.com/512/732/732220.png",
            "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
            "https://cdn.worldvectorlogo.com/logos/python-5.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
            "https://cdn.worldvectorlogo.com/logos/r-project.svg"
          ]
        }
      ]
    },
    {
      id: 4,
      category: "User Research & Testing",
      items: [
        {
          name: "Research Tools",
          image: [
            "https://cdn.worldvectorlogo.com/logos/surveymonkey-1.svg",
            "https://companieslogo.com/img/orig/qual.svg?t=1646919793",
            "https://cdn.worldvectorlogo.com/logos/jotform-1.svg",
            "https://cdn.worldvectorlogo.com/logos/typeform-1.svg",
            "https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png"
          ]
        }
      ]
    },
    {
      id: 5,
      category: "Marketing & Engagement",
      items: [
        {
          name: "Marketing Platforms",
          image: [
            "https://cdn.worldvectorlogo.com/logos/google-analytics.svg",
            "https://cdn.worldvectorlogo.com/logos/mixpanel-1.svg",
            "https://cdn.worldvectorlogo.com/logos/meta-1.svg",
            "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie.svg"
          ]
        }
      ]
    },
    {
      id: 6,
      category: "Design & Prototyping",
      items: [
        {
          name: "Design Tools",
          image: [
            "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
            "https://cdn.worldvectorlogo.com/logos/canva-1.svg"
          ]
        }
      ]
    },
    {
      id: 7,
      category: "Collaboration & Communication",
      items: [
        {
          name: "Communication Platforms",
          image: [
            "https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_5.ico",
            "https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico",
            "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico",
            "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
            "https://cdn.worldvectorlogo.com/logos/zoom-icon.svg"
          ]
        }
      ]
    },
    {
      id: 8,
      category: "Other Tools",
      items: [
        {
          name: "Supporting Tools",
          image: [
            "https://cdn.worldvectorlogo.com/logos/alteryx.svg",
            "https://cdn.worldvectorlogo.com/logos/ibm-spss.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          ]
        }
      ]
    }
  ];

  const toggleCategory = (id) => {
    setActiveCategoryId(prevId => prevId === id ? null : id);
  };

  const filteredTechnologies = technologies
    .map(category => ({
      ...category,
      items: category.items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.items.length > 0);

  return (
    <section id="tools" className="relative py-28 bg-slate-50 text-slate-900 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-400/30 shadow-lg animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          {/* <div className="inline-block px-4 py-1 text-white rounded-full bg-gradient-to-r from-black to-gray-800 text-sm font-semibold tracking-wide shadow-md uppercase">
            Tools & Tech
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Tools and Technologies</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">My toolkit blends analytical rigor with creative execution, enabling me to navigate every phase of product and marketing development. I rely on a mix of technical platforms, research tools, and agile practices to drive impact:</p>

          {/* <div className="relative max-w-md mx-auto mt-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black" size={18} />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTechnologies.map((tech) => (
            <div key={tech.id} className={`rounded-xl border border-black/10 shadow-md bg-white transition-all ${activeCategoryId === tech.id ? 'shadow-lg border-black/20' : ''}`}>
              <div className="flex items-center justify-between px-6 py-5 cursor-pointer" onClick={() => toggleCategory(tech.id)}>
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="inline-block w-1.5 h-5 bg-gradient-to-b from-black to-gray-800 rounded mr-3"></span>
                  {tech.category}
                </h3>
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-black/10">
                  {activeCategoryId === tech.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>

              {activeCategoryId === tech.id && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {tech.items.map((item, idx) => (
                      <div key={`${tech.id}-${idx}`} className="bg-slate-100 p-4 rounded-lg shadow-sm transform transition duration-300 hover:scale-[1.02] hover:shadow-md">
                        <div className="grid grid-cols-3 gap-4">
                          {(Array.isArray(item.image) ? item.image : [item.image]).map((imgSrc, imgIdx) => (
                            <div key={`${tech.id}-${idx}-${imgIdx}`} className="aspect-square overflow-hidden rounded-md">
                              <img src={imgSrc} alt={item.name} className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
