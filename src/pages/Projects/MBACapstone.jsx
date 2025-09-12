import React from "react";
import { ArrowLeft, Github, Figma } from "lucide-react";
import project2 from '../../assets/Projects/project2.png'
import bar_analysis from '../../assets/Projects/bar_analysis.png'
import Core_Competencies from '../../assets/Projects/Core-Competencies.png'
const MBACapstone = () => {
    return (
        <div className="px-6 py-8 max-w-5xl mx-auto">
            {/* Back link */}
            <a
                href="/project"
                className="flex items-center text-gray-500 hover:text-gray-800 mb-6"
            >
                <ArrowLeft size={18} className="mr-2" />
                Back to Projects
            </a>

            {/* Header */}
            <p className="text-sm text-gray-500 mb-2">June 2024 - Present</p>
            <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2 mb-3">
               
                MBA Capstone – Digital Transformation Consulting Project
            </h1>
            <p className="text-lg text-gray-600 mb-4">
                Digitizing operations for a campus caterer through product-focused consulting.
            </p>

            {/* Card Highlights */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                 <img
                    src={project2}
                    alt="icon"
                    // className="w-10 h-10"
                />
             
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
                {[
                    "Digital Transformation",
                    "Management Consulting",
                    "Strategic Analysis",
                    "McKinsey 7S Framework",
                    "Client-Facing Consulting",
                ].map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm shadow-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
                <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50"
                >
                    <Figma size={18} /> Figma Prototype
                </a>
                <a
                    href="https://github.com/bhatia-pooja/campus-catering-digital-transformation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50"
                >
                    <Github size={18} /> GitHub
                </a>
            </div>

            {/* Divider */}
            <hr className="mb-8" />

            {/* Overview */}
            <h2 className="text-2xl font-semibold mb-4">Project Context</h2>
            <p className="text-gray-700 mb-4">
                <strong>Client:</strong> Citrus Grove Catering (UC Riverside campus catering service) <br />
                <strong>Duration:</strong> 10 weeks | <strong>Team:</strong> 5-person MBA consulting team <br />
                <strong>Challenge:</strong> Manual email-based ordering system limiting efficiency and growth
            </p>

            <h2 className="text-2xl font-semibold mb-4">My Key Contributions</h2>

            <h3 className="text-xl font-semibold mt-6 mb-2">Strategic Framework Leadership</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Applied McKinsey 7S Model to diagnose organizational misalignments across systems, staff, and client relationships</li>
                <li>Conducted PESTLE analysis to assess CGC's market position and lifecycle phase</li>
                <li>Utilized Growth Strategy Matrix to position digital portal as Quadrant 4 solution (new asset, existing customers)</li>
            </ul>
             <img
                    src={bar_analysis}
                    alt="icon"
                  
                />
            {/* PESTLE Analysis Visualization */}
            <div className="my-6">
                <h4 className="text-lg font-semibold mb-3">PESTLE Analysis</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-red-700">Political</h5>
                        <ul className="text-sm mt-2">
                            <li>• Campus funding cuts</li>
                            <li>• Food import tariffs</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-700">Economic</h5>
                        <ul className="text-sm mt-2">
                            <li>• Rising food costs</li>
                            <li>• Changing student spending</li>
                            <li>• Enrollment decline risks</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-700">Social</h5>
                        <ul className="text-sm mt-2">
                            <li>• Diverse menu demand</li>
                            <li>• Experiential dining preference</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-purple-700">Technological</h5>
                        <ul className="text-sm mt-2">
                            <li>• Inefficient online portal</li>
                            <li>• Ordering system upgrades</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-yellow-700">Legal</h5>
                        <ul className="text-sm mt-2">
                            <li>• Labor law compliance</li>
                            <li>• Food safety regulations</li>
                            <li>• Changing employment policies</li>
                        </ul>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-teal-700">Environmental</h5>
                        <ul className="text-sm mt-2">
                            <li>• Food waste management</li>
                            <li>• Climate change risks</li>
                            <li>• Sustainability initiatives</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">Data-Driven Solution Design</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Analyzed client order and sales data to identify most frequently purchased items and customer demand patterns</li>
                <li>Collaborated directly with CGC leadership to determine high-margin products for strategic promotion</li>
                <li>Designed menu architecture with strategic item placement and balanced distribution to encourage diverse ordering</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Business Strategy Development</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Time Shifting Strategy:</strong> Identified single-person bottleneck in order processing and designed automation solution</li>
                <li><strong>Rebranding Approach:</strong> Developed enhanced menu presentation replacing difficult-to-navigate PDF format</li>
                <li><strong>Digital Transformation:</strong> Created comprehensive online portal with 24/7 ordering, upselling features, and user-friendly interface</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Client Communication & Delivery</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Co-delivered client presentations translating technical recommendations into business impact</li>
                <li>Authored sections of 16-page strategic report including implementation roadmap and risk mitigation</li>
                <li>Developed phased rollout timeline aligned with academic calendar to minimize operational disruption</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Competencies Demonstrated</h2>
             <img
                    src={Core_Competencies}
                    alt="icon"
                  
                />
            <h3 className="text-xl font-semibold mt-6 mb-2">Management Consulting</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>End-to-end strategy development from problem diagnosis to implementation planning</li>
                <li>Multi-stakeholder collaboration and cross-functional team leadership</li>
                <li>Executive-level presentation and recommendation delivery</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Digital Transformation</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Technology solution architecture balancing user needs with operational constraints</li>
                <li>Change management planning for organizational adoption of digital systems</li>
                <li>Integration strategy with existing systems (Caterease) to minimize implementation costs</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Strategic Analysis & Frameworks</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Advanced application of McKinsey 7S for organizational alignment assessment</li>
                <li>PESTLE analysis for external environment evaluation</li>
                <li>Growth strategy matrix application for solution positioning</li>
                <li>Risk assessment and mitigation strategy development</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Client-Facing Skills</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Stakeholder interview and requirements gathering</li>
                <li>Complex recommendation simplification for executive audiences</li>
                <li>Iterative feedback integration and solution refinement</li>
                <li>Project timeline management and client expectation setting</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Data Analytics & Business Intelligence</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Customer behavior analysis and demand pattern identification</li>
                <li>KPI framework design for post-implementation success measurement</li>
                <li>Financial impact modeling and ROI projection</li>
                <li>Performance metrics development for operational efficiency tracking</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Business Impact Delivered</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Process Automation:</strong> Eliminated manual order-taking reducing staff workload by an estimated 60%</li>
                <li><strong>Revenue Optimization:</strong> Designed strategic upselling and menu positioning to increase average order value</li>
                <li><strong>Operational Efficiency:</strong> Created 24/7 ordering capability removing time constraint limitations</li>
                <li><strong>Scalability Foundation:</strong> Established data collection framework for future AI integration and personalization</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Project Deliverables</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Strategic Assessment Report (16 pages):</strong> Comprehensive analysis with McKinsey 7S and PESTLE frameworks</li>
                <li><strong>Client Presentation Deck:</strong> Executive recommendations and implementation roadmap</li>
                <li><strong>Portal Design Specifications:</strong> User experience strategy and menu optimization plan</li>
                <li><strong>Phased Implementation Timeline:</strong> Risk-managed rollout strategy with KPI framework</li>
            </ul>

            <div className="mt-8">
                <a
                    href="https://github.com/bhatia-pooja/campus-catering-digital-transformation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    View Complete Project Materials on GitHub →
                </a>
            </div>
        </div>
    );
};

export default MBACapstone;