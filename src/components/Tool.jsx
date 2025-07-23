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
            "https://www.r-project.org/logo/Rlogo.svg" // Add this line for R language
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
            "https://cdn.worldvectorlogo.com/logos/surveymonkey.svg", // Updated SurveyMonkey logo
            "https://www.qualtrics.com/m/qualtrics-xm-long.svg", // Qualtrics official logo
            "data:image/png;base64,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", // JotForm logo
            "https://cdn.worldvectorlogo.com/logos/typeform.svg", // Typeform logo
            "https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Forms_2020_Logo.svg" // Google Forms vector logo
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTN9ZqhM67CXGEba_e0lCTv8Bc1_B2pMDSw&s",
            "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAA1VBMVEX/8hL///8jHyD/8QAAACEAAA3/9BL/+BH//RH/9hL/+xH//xAdGSD///wfGyAhHSAZFSD//vH/8jH/+bD/+rf/8if//M///vUVESD//N7/+af/9WT/80T/+J7/9oD//uteWQ7/9nj/+sBCPg7p5xKJhw/U0BEuKSALCw3AwBD/9XD/9olGQR8LBiH27xL/+8elnRB+dw7BuBhhXB7l3BRUTx6MhBw7Nh8oJCA0Lx+Zkxs2Mg1oYg7/9FSxqhnPxRZ2bxsdGw1KSB5RTg4WFA0qJhAuKw19GvEQAAAPaElEQVR4nO2cC3eayhaAqQ4zDBAlbZKSND3NAzH2CAdwxEgsUHNO//9PuntAEQFhTJN7su66u6utD5TPPZv9mhmkD+9QpH8boEn+Z6FOLy/Ozj6BnJ1dXJ6+whf+DtTpxd2n2x9SvyLSj9tPdxe/A/dSqJPLr1+uMx6pJtmr11++Xp78N6Euz773m3n2yfrfzy7/O1AnV1/O23nKZOdfro7X15FQJ3/ddmioQWO3fx3JdRTU6dn1cURbruuzo+z+CKhvX6WXIOVY0tdvbwB1+vXjC4k2XB+/CmtLFOrT7yFl2vr46VWhLl5kS3Ws64tXgzr98zWQcqw/RcZQAOru/JWQMqzzu1eAOvnjtdS0oer/0em1uqDAml4TKcPqtKwOqDPp1ZmASjr7DSgYutdHyrDah7AN6vPtGzEB1e3nl0F9e82rrkZ13hJ2DkN9E/XhmFJCKD6W6uNhqoNQl4ImTlTLToLAttRjqfoHE8BDUJdCY4eJZvtzAyHkTGNlT1mYSzvV+SGqA1DfhPRE3GCMTN3kUDqaU7oFoooiuZblUoW2fLwvHRjBZighe6JKMke6jtA8jOMUDVHqctVgopAkSmfz6Xo+i1gb1iG7aoT6LDJ2Klshw0CzWNIUAsMIulq7lCosWIHmTEMHgYFdMdJCdd7oGZqgTr53M2ElGDsDNE1cNbccZaIP0Mpl4RQ5vZKgsdWmq+9NXrQJSsCPEzdFA7SINVIYs2KjoTNGaNDbF3Puthh8/w8xqDMBJjZDOkqt8shgzUO9KlGmq6TV2hviYB3qohNJUhNkOuNgzweoroeGDUgA5Sut31bPGWpQJ525ClZjU0czVvaWlCSLA0w9c6a1fV3/umZWNajOIIyJB+bkk/KYqFaK9GakTigIzl1Qd916iuDi98qxDpNg4RxC6h4+qV/NkCtQp12eHJMIDYxYKzERNzysJg4Vt3iqDEo6bYX6s4tJGSHdTMpnIWzK1ZRhGQ56rDINx6wrg+j/2QZ10TV4KthTb1IaDqzEAxPOjObGEKE1BJzqQJpph6I41UULVNeVp3hId+zSSSiO+NA5j0GAlqHtEmtmQHDeGz1bAOr6MNSnDibwTwMzKOmJgmPnaloxZe4xjRDiMjsIF8jYMa3ar70N1adDUKcduQGxezoKSu6JsDkMlm5G4B9cRbJYEsRBkDAWzLaufbDstKgM6uPpAaiv7UzUXZhoVPrdhHFPYKBAIZoVhDcQ+DYyT7f2vvcj2qi+NkN1JFEYpw74zDJTD0zcXNiam9wYjmPuAp9ubplGHT6qgCqnViWoq3ZFaREyF6UMl7AlZxpbJFojsznEOKu2DGGf6qoJqiOzI2Dkj2wXW6jFmYyp7ZnOIdc5dNy2BGEfqpTv7aDaMxbsrg0U7+wD0xm/7pberJZAld1B2O0OCqqzOlRHdqD4yFmV7INwXwBUpnGQaDDkdi5MVcoWCqi/2gfPdgbj0uApMTqsn9yc0KOJhvpYxEttqP6qQbXmwPng7RRFkgOWXVgTlDaaloyHx6jqjyrUSaui1BiZ6122gtWp2UAy0PVBxjowUcSLQP6xVLxy7p9UoFr9AXYfB3ophJGwYfAQms7Xi7EDvnORsnzUNLg8hTx6DnVVgfrSBkU8x1ztmKit1wZPR75tuRZjdpLYbFsra6kzsMW9wpd9qMvzloOxO9ZR2coXtcHjfp1m7QMKUugGMh0UCENJ2+aCJOCkSICcUlKk1q+8AWqog3H2ySMsvciLN1Ct5QJZG/ou2cTWouYujaSBiastQcg7Auq2DNV67VH70ViT8pDUBm/VpKfZilAboUgcanv95VCX7WYO31z4KEzr9R1qUBTnCVQOdUQ3bdNHkwQcQmqWzLxBUT3U0FyktuGkmu0cB3VVgmprs2B3aS6KDARb05pFDR6L8+7gsNQz5pTpKNLE+6H97zuo07ZgjF1k3hR5FGkIevoih8IEbLuonLUZWrtsaSwjqCcE3UL/x+cCqrWnQS3k+MVv1Zb1tGAwzKAwDdLZTbR1DjR5XBF3DuU0mkZMEdNW7qkyqNZaHTTlpJuvJMRuyg4QVyTGczReQBq/dUzYdTG112PTMdFjiIWUlXsqSSDwLc11ZlOEJOG0KcvMOGgSJa6iWfG2SYYxKI2oLAh7aIBmQolxbulSp+uUeMHAr3liryHzNRrSOmPG3RgmhFpeGFj8QxD9SPTI4x6FYjB+NFAqUkLk7jOD+tGVnetLRrTYNAdQPd2sUc1TGXmzDhz4zE89sDDMbJWmaJKPGVbs5cBhAgPY/1FAdRXGITIMO4DqeBlbEG/daFyJyMYy71afW3k4hhAOCb0dFUOmQPj0RBxWXxQKUx8Z+niAVpaSZQIKq+YJUBBmVIU7i8cxpWphRpQhR8iLFlCnnY0yxYOc0pkRUIPFXALnWFQMHoV7JoPpvmviiYZQZO6fbqBaI18uamwMloxiNxyb81iT1KDqGlpbY5jcmE0BsgHqcgPV2ZXKck/eRlDXyIE/4AHItHIR6lPr4DWPwSq7Op9bqIsNVGefcxuUYRBSO1kg8EQkqqiqJcOkcPAQYqAQ1N0Gqrubj925AakAScGsVDbuMUwm+5raa8dUkOwlMhfGkAh5z7MNVFevjENNzQV86QwKdwBcWJiyZdlZ6etmh42p5oKSkWcjU6Cjt+meiUMtKVx0METYHqS0msI09hCpqlrJDEqulCnKFPmWANVRUDB8oCluNmBYYOiAWYIyFrlDoIqiEog28FfRIAz6a95Bm/CYA6Y+Fel+ikNJEozBpoCD7FiBampPUxt/QCb+KvTiYBIEXjjPenrrEdP45+hEd0q5YjeUyLRV5KAwN2U6QQGz9mxq2MuAeZW3J3PPtjYzo9hl8Lta57NyqDNxl0CZUbTMcIQWthqU+uW5mVPbWXp2EkdhGI6iOGGKpm4zYYg/xO6h7vBXuAQB5ykpKbi/PJbBlWfRvXYCpC5SpqiRpnBRVW5bpXydMBeYx6Wi6CDUhXiY4amejtJNtxAycavsO80sV1Ig79LD2GYu5OQwXMVHFWsUg6lPDBFNXYoGZC5kggbO3MqWamDizswaFMSSKHpExpJPs89mca4pCinegvclefnYXcIXAbkrdckFkjzddEJb0jR3Mt0LMkbWeIQrIIX3+HqOwGYKPz8mGou5BfJfNTPR4fBYQInmUxshSc8ZoPF6Nlub++lUblPYncEAExWEr33hC2DcYKUjz83fRcYBt98M1Z4OF6KyEYIc1DCqxYO+zlRA3TkyQ9ASP7dlTzzw5uPIyqsrJUJO2O0Rdumw6DopSlk0Hden1IfD3LFSN14C9nIxnS7GEPHGabKtQ6m1GJgCJrUrHDrmGkqCVcVl81qZte33YBUKLX82B0tPo9jGu4pdCaHa6FiRI+2VWALes8SlTGoFqf649UpgSlCEguC9NVVQEQnN05SKUYGlCGVR6r3hcj+7YZUSYePBQBdoyZ5fFFCfBS19IzSpQQ0WbVUdcXWjJ9I9Kzc4WltBTSept6yduXZQD1lFpvcE6vZyK6hr+rEqGNf7w0UMqgrP7I3mbl8dqtw0E4l+eyey634Bza2Gfg9W3JRX+WLzWXvtxfZJkAaBuq/W+TR74LsrBk6sSHey0VVFyoZNr1qkZd1I1bAGaIAgCmskb/KDb1AUO1xmh5lTke5GpWUtknxWRIH4XKXqGY4zg9zFAmF24PeQk42yMxWbIa0091unQZoFcs+mqSyILo/T6XrKp94HW2trW5dXkso0SPuE0QEqtm6eiRwOdH03pTR0/NaFlTupThgdEf52wpcDNSlr/6KEel6wZV2bWjv6+uOCNXbTjuWYI1d8arQ6CSmyZLFBiJRMUYPFZ6I7KLXFXEHGVJuu7ZjYPiiYasyfovqqLgMK0SgvREWh6hPb3QsEDwklVjLiF5tjmibkpaaZTdlGtqUegdS4BOAFrqoQTBVNSuKRn65ms5vUH8U23RWiolANiyXEFgy3gEHFAEEmS+/U49fMH1hW8iKvUEPrWoR+GKpxAY74/oG3kENLlY7Nql4X6sCirs7lb2/JdHD5m1D37I2gDi4U7F5S+WZMLUsqhTpVbwLVtvi0c5nunvAJmKyPUbwCT7ZFKRFqm2+YWpfpdi9oLjORiWfTJAiKVJfa8CRjoVYcC6/H61rQfEwFr0ayLCc3slz054gny3He9/klyzfCCxc7ln43lRCYxw9FgxyEaBrJIx08wCSQ5Sc7h6Kqpik0g1L4oe5KlkdUVSGJgI9gVYPqK3uafU+F6bbKILKdIAoTy3/2gOL5JiAYcoKb+1UgURYEgZtBURY+3/sJBajEXj17Ls6WUY18135+Tqgb3aeM2GHo2ulzVKmURbYT1Lod2H2SPfjhcpzAP7KtzeRMfI0/tziUFucvJQAV8AcRTeEAG579lOUHC57I9y68M3mAR8+VaC2w8aKWw2D3/mH199ODfL/65+eDnGpT+Xl18/eDbNvyQwYVW/LDwwbq+f4nHPTk+jB8tvzTl8G4RvITHJlM4M0H/igu94jFtqhUM2OAAqN1n+GkbASPSDghispZCihPfvjpBRGHgpMH/OUc6m/ZS/gPsf6Boybwusfg+PJ6UdHNPB9O9ow9g4o1GIJUCzieFQIfqCYqoOAyZFnzFYbvSTvfQcm/mAWfDjQY/gigfrkKHHKzg+rfim572s/3MqiAQ/kZFHniFvKzCqVQhbpwxnvNKkE97UM9SWpchjpig9h+alWFSvgD/toOKgYdeIGXGXor1E+mRaXh618fsZUOqHbbtKtQ8PfZu7/5uwTlyg/F1dcKJa+Cp52h9/tHbTosbxnlLmFrU6D7Z/cnNymWaWrrEoLcJdiZTTH+8s6mnjjUzUZTv7hLINuxO3J7ZpnKjXw/0Tzfj9XE9yNs+79WjIR+zFLft+DNgFLbv7/3bRpAJaO4qZ9aMRzOfH/E3JHv2yp8OuA2Za9+RZu5kL509EbWkl1hVVGoBP8QiShKFirgOTyliqLkb0o88sD/8L4iYf4y2b5ffFrhUQlr2qbd96Itv6++OZoC1D9FiHnh5ujX3kaOzxkrOukv3kb+2hvu+bLiLdPLN9x/eJe3JvjwPm/i8D5vd/HhXd4Y5MP7vIXKh3d5sxkunz7+Ltar35bnQ34Do9/A6r/FDYxAvl0J36GrjnR+9Ra3euLy+eU3xWqLKr8H9S5vH5ZzvbsbreXy/m5Jl8v7u3nfRk4v7q5ur6t3OQSzvr36d25zuAd3eXGX3xDy7t+/IeSbyf+hROU/q5e41qABBCwAAAAASUVORK5CYII="
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
            "https://cdn.worldvectorlogo.com/logos/figma-5.svg",
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
            "https://st1.zoom.us/homepage/publish/static-image/zoom-logo.svg"
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
            "https://media.licdn.com/dms/image/v2/D4E0BAQFC9Qd-iYcCSA/company-logo_200_200/B4EZey8_n5HsAM-/0/1751054023635?e=1756339200&v=beta&t=ovMpwey4_rqpcYIm-e3ieCqngRI4RS8hPxcbXpLzw1U",
            "data:image/png;base64,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",
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
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.items.length > 0);

  return (
    <section id="tools" className="relative py-20 bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 shadow-lg animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-serif mb-6">
            Tools and Technologies
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            My toolkit blends analytical rigor with creative execution, enabling me to navigate every phase of product and marketing development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.id}
              className={`rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 overflow-hidden
                ${activeCategoryId === tech.id ? 'shadow-lg border-slate-300' : 'hover:shadow-md'}`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 cursor-pointer focus:outline-none"
                onClick={() => toggleCategory(tech.id)}
                aria-expanded={activeCategoryId === tech.id}
                aria-controls={`category-${tech.id}`}
              >
                <h3 className="text-xl font-semibold flex items-center text-left">
                  <span className="inline-block w-2 h-6 bg-[#fff27d] rounded mr-3"></span>
                  {tech.category}
                </h3>
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-slate-200 transition">
                  {activeCategoryId === tech.id ?
                    <ChevronUp size={20} className="text-slate-700" /> :
                    <ChevronDown size={20} className="text-slate-700" />
                  }
                </div>
              </button>

              {activeCategoryId === tech.id && (
                <div id={`category-${tech.id}`} className="px-6 pb-6 pt-2 animate-fadeIn">
                  {tech.items.map((item, idx) => (
                    <div key={`${tech.id}-${idx}`} className="mb-6 last:mb-0">
                      <h4 className="text-lg font-medium text-slate-700 mb-4">{item.name}</h4>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                        {item.image.map((imgSrc, imgIdx) => (
                          <div
                            key={`${tech.id}-${idx}-${imgIdx}`}
                            className="aspect-square bg-white p-3 rounded-lg border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                          >
                            <img
                              src={imgSrc}
                              alt=""
                              className="w-full h-full object-contain max-h-12 transition-transform duration-300 hover:scale-110"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ToolsSection;
