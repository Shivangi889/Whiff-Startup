import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../../Data/ProjectsData';
import { Instagram, Github, Globe, Figma } from "lucide-react";

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectData.find(proj => proj.id === projectId);

    if (!project) {
        return <div>Project not found</div>;
    }

    // Helper function to render icon based on link label
    const renderLinkIcon = (label) => {
        if (label.toLowerCase().includes('instagram')) return <Instagram size={16} />;
        if (label.toLowerCase().includes('github')) return <Github size={16} />;
        if (label.toLowerCase().includes('figma')) return <Figma size={16} />;
        return <Globe size={16} />;
    };

    return (
        <div className="min-h-screen bg-white py-10 px-4 md:px-8 lg:px-10 xl:px-20">
            <div className="max-w-6xl mx-auto">
                <Link
                    to="/project"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Projects
                </Link>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column - Media */}
                    <div>
                        <div className="overflow-hidden rounded-xl mb-8">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>

                        {project.video && (
                            <div className="overflow-hidden rounded-xl mb-8">
                                <iframe
                                    src={project.video}
                                    title={project.title}
                                    className="w-full h-[400px] rounded-xl"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
{project.images && project.images.length > 0 && (
    <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Images</h2>
        <div className="grid grid-cols-1 gap-6">
            {project.images.map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg shadow-md">
                    <img
                        src={img}
                        alt={`${project.title} ${idx + 1}`}
                        className="w-full h-auto object-contain rounded-lg"
                    />
                </div>
            ))}
        </div>
    </div>
)}
                    </div>

                    {/* Right Column - Content */}
                    <div>
                        <div className="mb-6">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                {project.title}
                            </h1>
                            <p className="text-xl text-gray-600 mb-2">{project.subtitle}</p>
                            {project.duration && (
                                <p className="text-sm text-gray-400 uppercase tracking-wider">{project.duration}</p>
                            )}
                        </div>

                        {/* Tags */}
                        {project.tags && project.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Highlights */}
                        {project.highlights && project.highlights.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">Highlights</h2>
                                <ul className="space-y-2">
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-yellow-500 mr-2">•</span>
                                            <span className="text-gray-700">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Overview */}
                        {project.overview && (
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
                                <p className="text-gray-700">{project.overview}</p>
                            </div>
                        )}

                        {/* Features */}
                        {project.features && project.features.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h2>
                                <ul className="space-y-2">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-yellow-500 mr-2">•</span>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Role */}
                        {project.role && project.role.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">My Role</h2>
                                <ul className="space-y-2">
                                    {project.role.map((role, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-yellow-500 mr-2">•</span>
                                            <span className="text-gray-700">{role}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Learnings */}
                        {project.learnings && project.learnings.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Learnings</h2>
                                <ul className="space-y-2">
                                    {project.learnings.map((learning, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-yellow-500 mr-2">•</span>
                                            <span className="text-gray-700">{learning}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Impact */}
                        {project.impact && (
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">Impact</h2>
                                <p className="text-gray-700">{project.impact}</p>
                            </div>
                        )}

                        {/* Problem Context (for Speak-easy project) */}
                        {project.problemContext && (
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">{project.problemContext.title}</h2>
                                <p className="text-gray-700 mb-4">{project.problemContext.description}</p>
                                
                                {project.problemContext.statistics && (
                                    <div className="mb-4">
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Statistics</h3>
                                        <ul className="space-y-1">
                                            {project.problemContext.statistics.map((stat, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-yellow-500 mr-2">•</span>
                                                    <span className="text-gray-700">{stat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                {project.problemContext.businessImpact && (
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Business Impact</h3>
                                        <ul className="space-y-1">
                                            {project.problemContext.businessImpact.map((impact, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-yellow-500 mr-2">•</span>
                                                    <span className="text-gray-700">{impact}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Solution Overview (for Speak-easy project) */}
                        {project.solutionOverview && (
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">Solution Overview</h2>
                                <p className="text-gray-700 mb-4">{project.solutionOverview.description}</p>
                                
                                {project.solutionOverview.coreInsight && (
                                    <p className="text-gray-700 mb-4 italic">{project.solutionOverview.coreInsight}</p>
                                )}
                                
                                {project.solutionOverview.valuePropositions && (
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {project.solutionOverview.valuePropositions.map((vp, idx) => (
                                            <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                                                <div className="text-2xl mb-2">{vp.icon}</div>
                                                <h3 className="font-medium text-gray-900 mb-1">{vp.title}</h3>
                                                <p className="text-gray-700 text-sm">{vp.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Links */}
                        {project.links && project.links.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">Project Links</h2>
                                <div className="flex flex-wrap gap-3">
                                    {project.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                                        >
                                            {renderLinkIcon(link.label)}
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;