import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../../Data/ProjectsData';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectData.find(proj => proj.id === projectId);

    if (!project) {
        return <div>Project not found</div>;
    }

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
                    <div>
                        <div className="overflow-hidden rounded-xl mb-8">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {project.images?.slice(1).map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`${project.title} ${idx + 1}`}
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-6">{project.subtitle}</p>
                        <p className="text-sm text-gray-400 uppercase tracking-wider mb-6">{project.duration}</p>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
                            <p className="text-gray-700">{project.overview}</p>
                        </div>

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

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">Impact</h2>
                            <p className="text-gray-700">{project.impact}</p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {project.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;