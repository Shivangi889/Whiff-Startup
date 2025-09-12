import React from "react";
import { useParams, Link } from "react-router-dom";
import { Instagram, Github, Globe, Figma, ArrowLeft } from "lucide-react";
import { projectData } from "../../Data/ProjectsData";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData.find((p) => String(p.id) === String(projectId));

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <h1 className="text-2xl font-semibold text-slate-900 mb-2">Project not found</h1>
          <p className="text-slate-600 mb-6">We couldn't locate a project for the id: <span className="font-mono">{projectId}</span>.</p>
          <Link
            to="/project"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // safe array helper
  const arr = (v) => (Array.isArray(v) ? v : []);

  const renderLinkIcon = (label = "") => {
    const l = String(label).toLowerCase();
    if (l.includes("instagram")) return <Instagram size={16} />;
    if (l.includes("github")) return <Github size={16} />;
    if (l.includes("figma")) return <Figma size={16} />;
    return <Globe size={16} />;
  };

  const SectionHeader = ({ title }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 mt-12 first:mt-0 border-l-4 border-blue-500 pl-4">
      {title}
    </h2>
  );

  const ListItem = ({ children, color = "blue" }) => {
    const colorMap = {
      blue: "bg-blue-500",
      indigo: "bg-indigo-500",
      slate: "bg-slate-600",
      emerald: "bg-emerald-500",
      amber: "bg-amber-500",
      fuchsia: "bg-fuchsia-500",
    };

    return (
      <li className="flex items-start gap-3 mb-3">
        <span className={`mt-1.5 flex-shrink-0 w-2 h-2 rounded-full ${colorMap[color]}`}></span>
        <span className="text-slate-700">{children}</span>
      </li>
    );
  };

  const ImageWithCaption = ({ src, alt, caption, className = "" }) => (
    <figure className={`my-8 ${className}`}>
      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg">
        <img src={src} alt={alt} className="w-full h-auto object-cover" />
      </div>
      {caption && (
        <figcaption className="text-sm text-slate-500 mt-2 text-center">{caption}</figcaption>
      )}
    </figure>
  );

  const humanize = (s) => String(s).replace(/[_-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  // keys we already render explicitly so we don't duplicate them in fallback
  const knownKeys = new Set([
    "id",
    "title",
    "subtitle",
    "duration",
    "image",
    "links",
    "tags",
    "overview",
    "problemContext",
    "solutionOverview",
    "highlights",
    "features",
    "role",
    "learnings",
    "impact",
    "video",
    "images",
  ]);

  // collect other structured sections to render at the end (flexible fallback)
  const otherSections = Object.entries(project).filter(
    ([k, v]) => !knownKeys.has(k) && v && (typeof v === "object" || Array.isArray(v))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-5 md:px-6 lg:px-8 py-10 md:py-16">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to="/project" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="border-b border-transparent group-hover:border-slate-400 transition-all">Back to Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="mb-12">
          <div className="mb-6">
            {project.duration && <p className="text-sm text-slate-500 mb-2">{project.duration}</p>}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 leading-tight">{project.title}</h1>
            {project.subtitle && <p className="text-xl text-slate-600 mb-6 leading-relaxed">{project.subtitle}</p>}
          </div>

          {/* Tags */}
          {arr(project.tags).length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {arr(project.tags).map((tag, idx) => (
                <span key={idx} className="px-3 py-1.5 text-sm rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm">{tag}</span>
              ))}
            </div>
          )}

          {/* Links (safe) */}
          {arr(project.links).length > 0 && (
            <div className="flex flex-wrap gap-3">
              {arr(project.links).map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
                >
                  {renderLinkIcon(link.label)}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Overview (string or structured object) */}
          {project.overview && (
            <section>
              <SectionHeader title="Overview" />

              {typeof project.overview === "string" ? (
                <p className="text-slate-700 text-lg leading-relaxed mb-6">{project.overview}</p>
              ) : (
                <div className="text-slate-700 text-lg leading-relaxed mb-6 space-y-3">
                  {project.overview.title && <h3 className="text-xl font-semibold">{project.overview.title}</h3>}
                  {project.overview.client && <p><strong>Client:</strong> {project.overview.client}</p>}
                  {project.overview.duration && <p><strong>Duration:</strong> {project.overview.duration}</p>}
                  {project.overview.team && <p><strong>Team:</strong> {project.overview.team}</p>}
                  {project.overview.challenge && <p><strong>Challenge:</strong> {project.overview.challenge}</p>}

                  {project.overview.content && (
                    typeof project.overview.content === "string" ? (
                      <p>{project.overview.content}</p>
                    ) : Array.isArray(project.overview.content) ? (
                      <ul className="list-disc pl-6">
                        {project.overview.content.map((c, i) => (
                          <li key={i} className="mb-2">{c}</li>
                        ))}
                      </ul>
                    ) : null
                  )}
                </div>
              )}

              {/* Place image after overview text if available */}
              {project.image && (
                <ImageWithCaption src={project.image} alt={project.title} caption="Project overview visualization" />
              )}
            </section>
          )}

          {/* Problem Context */}
          {project.problemContext && (
            <section>
              <SectionHeader title={project.problemContext.title || "Problem Context"} />
              {project.problemContext.description && (
                <p className="text-slate-700 text-lg leading-relaxed mb-6">{project.problemContext.description}</p>
              )}

              {/* Place image after problem context if available */}
              {arr(project.images)[0] && (
                <ImageWithCaption src={arr(project.images)[0]} alt="Problem context visualization" caption="Visual representation of the challenges addressed" className="mb-6" />
              )}

              {arr(project.problemContext.statistics).length > 0 && (
                <div className="mb-6">
                  <h3 className="text-md font-semibold text-slate-900 mb-3">Key Challenges</h3>
                  <ul className="space-y-2">
                    {arr(project.problemContext.statistics).map((s, i) => (
                      <ListItem key={i} color="amber">{s}</ListItem>
                    ))}
                  </ul>
                </div>
              )}

              {arr(project.problemContext.businessImpact).length > 0 && (
                <div>
                  <h3 className="text-md font-semibold text-slate-900 mb-3">Business Impact</h3>
                  <ul className="space-y-2">
                    {arr(project.problemContext.businessImpact).map((b, i) => (
                      <ListItem key={i} color="fuchsia">{b}</ListItem>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {/* Solution Overview */}
          {project.solutionOverview && (
            <section>
              <SectionHeader title="Solution Overview" />
              {project.solutionOverview.description && (
                <p className="text-slate-700 text-lg leading-relaxed mb-6">{project.solutionOverview.description}</p>
              )}
              {project.solutionOverview.coreInsight && (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-600 text-lg mb-6">{project.solutionOverview.coreInsight}</blockquote>
              )}

              {/* Place image after solution overview if available */}
              {arr(project.images)[1] && (
                <ImageWithCaption src={arr(project.images)[1]} alt="Solution overview visualization" caption="Visual representation of the solution approach" className="mb-6" />
              )}

              {arr(project.solutionOverview.valuePropositions).length > 0 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {project.solutionOverview.valuePropositions.map((vp, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                      <div className="text-2xl mb-3">{vp.icon}</div>
                      <h4 className="font-semibold text-slate-900 mb-2 text-lg">{vp.title}</h4>
                      <p className="text-slate-700">{vp.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Highlights */}
          {arr(project.highlights).length > 0 && (
            <section>
              <SectionHeader title="Highlights" />
              <ul className="space-y-2">
                {arr(project.highlights).map((h, i) => (
                  <ListItem key={i} color="blue">{h}</ListItem>
                ))}
              </ul>
            </section>
          )}

          {/* Features */}
          {arr(project.features).length > 0 && (
            <section>
              <SectionHeader title="Key Features" />
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {arr(project.features).map((f, i) => (
                  <ListItem key={i} color="indigo">{f}</ListItem>
                ))}
              </ul>

              {/* Place image after features if available */}
              {arr(project.images)[2] && (
                <ImageWithCaption src={arr(project.images)[2]} alt="Key features visualization" caption="Visual representation of key product features" className="mt-6" />
              )}
            </section>
          )}

          {/* Role */}
          {arr(project.role).length > 0 && (
            <section>
              <SectionHeader title="My Role" />
              <ul className="space-y-2">
                {arr(project.role).map((r, i) => (
                  <ListItem key={i} color="slate">{r}</ListItem>
                ))}
              </ul>
            </section>
          )}

          {/* Learnings */}
          {arr(project.learnings).length > 0 && (
            <section>
              <SectionHeader title="Key Learnings" />
              <ul className="space-y-2">
                {arr(project.learnings).map((l, i) => (
                  <ListItem key={i} color="emerald">{l}</ListItem>
                ))}
              </ul>
            </section>
          )}

          {/* Impact (string / array / object) */}
          {project.impact && (
            <section>
              <SectionHeader title="Impact" />
              {typeof project.impact === "string" ? (
                <p className="text-slate-700 text-lg leading-relaxed">{project.impact}</p>
              ) : Array.isArray(project.impact) ? (
                <ul className="space-y-2">
                  {project.impact.map((it, i) => (
                    <ListItem key={i} color="emerald">{it}</ListItem>
                  ))}
                </ul>
              ) : (
                project.impact.title || project.impact.content) && (
                <div>
                  {project.impact.title && <h3 className="font-semibold mb-2">{project.impact.title}</h3>}
                  {project.impact.content && (
                    typeof project.impact.content === "string" ? (
                      <p>{project.impact.content}</p>
                    ) : Array.isArray(project.impact.content) ? (
                      <ul className="list-disc pl-6">
                        {project.impact.content.map((c, i) => (
                          <li key={i} className="mb-2">{c}</li>
                        ))}
                      </ul>
                    ) : null
                  )}
                </div>
              )}

              {/* Place image after impact if available */}
              {project.impact.image  && (
                <ImageWithCaption src={project.impact.image} alt="Impact visualization" caption="Visual representation of project impact and results" className="mt-6" />
              )}
            </section>
          )}

          {/* Video - Placed strategically after main content sections */}
          {project.video && (
            <section>
              <SectionHeader title="Project Demo" />
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                <iframe
                  src={project.video}
                  title={project.title}
                  className="w-full h-[380px] md:h-[440px]"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </section>
          )}

          {/* Gallery */}
          {arr(project.images).length > 0 && (
            <section>
              <SectionHeader title="Gallery" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {arr(project.images).map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg transition-transform hover:scale-[1.02]">
                    <img src={img} alt={`${project.title} ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Flexible fallback for other structured sections (e.g., pestleAnalysis, marketOpportunity, strategicPositioning, projectLinks objects, etc.) */}
          {otherSections.length > 0 && otherSections.map(([key, value]) => (
            <section key={key}>
              <SectionHeader title={humanize(key)} />

              {/* Array -> list */}
              {Array.isArray(value) && (
                <ul className="space-y-2">
                  {value.map((item, i) => (
                    <ListItem key={i}>{typeof item === 'string' ? item : JSON.stringify(item)}</ListItem>
                  ))}
                </ul>
              )}

              {/* Object with title/content */}
              {!Array.isArray(value) && typeof value === 'object' && (
                <div className="space-y-3 text-slate-700">
                  {value.title && <h3 className="text-lg font-semibold">{value.title}</h3>}

                  {value.content && (
                    typeof value.content === 'string' ? (
                      <p>{value.content}</p>
                    ) : Array.isArray(value.content) ? (
                      <ul className="list-disc pl-6">
                        {value.content.map((c, i) => (<li key={i} className="mb-2">{c}</li>))}
                      </ul>
                    ) : null
                  )}

                  {/* render simple key: value pairs inside the object */}
                  {Object.entries(value).map(([subk, subv]) => {
                    if (['title','content'].includes(subk)) return null;
                    if (typeof subv === 'string') return <p key={subk}><strong>{humanize(subk)}:</strong> {subv}</p>;
                    if (Array.isArray(subv)) return (
                      <div key={subk}>
                        <h4 className="font-semibold mt-2 mb-1">{humanize(subk)}</h4>
                        <ul className="list-disc pl-6">
                          {subv.map((it, ii) => <li key={ii}>{it}</li>)}
                        </ul>
                      </div>
                    );
                    return null;
                  })}
                </div>
              )}
            </section>
          ))}

        </div>

        {/* Bottom Links (safe) */}
        {arr(project.links).length > 0 && (
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Project Links</h3>
            <div className="flex flex-wrap gap-3">
              {arr(project.links).map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
                >
                  {renderLinkIcon(link.label)}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Footer Spacer */}
        <div className="h-16" />
      </div>
    </div>
  );
};

export default ProjectDetail;
