import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
        };

        try {
            await emailjs.send(
                'your_service_id',    // Replace with your EmailJS service ID
                'your_template_id',   // Replace with your EmailJS template ID
                templateParams,
                'your_public_key'     // Replace with your EmailJS public key
            );

            setFormData({ name: '', email: '' });
            setShowModal(true);
        } catch (error) {
            console.error('Email send error:', error);
            alert("Something went wrong! Try again.");
        }
    };

    return (
        <>
            {/* CTA Section */}
            <div className="bg-[#fff27d] text-black px-6 py-10 flex flex-col md:flex-row items-center justify-between rounded-t-lg">
                <div>
                    <h4 className="text-sm font-semibold uppercase mb-2">Start with Pooja today</h4>
                    <h2 className="text-2xl md:text-3xl font-bold max-w-xl">
                        Save time, money and get the "After" effect for your product strategy today
                    </h2>
                </div>
              <div className="mt-6 md:mt-0 bg-black px-6 py-3 rounded-full hover:bg-yellow-200 transition whitespace-nowrap">
  <a
    href="#contact"
    className="text-white hover:text-black transition"
  >
    Book a discovery call
  </a>
</div>


            </div>

            {/* Footer */}
            <footer className="bg-[#1e2636] text-gray-300 py-12 px-6 relative">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

                    {/* Contact Form */}
                    <div id="contact">
                        <h4 className="text-white text-lg font-semibold mb-4">Contact Me</h4>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full py-2 bg-[#fff27d] hover:bg-yellow-500 text-gray-500 rounded"
                            >
                                Email Me
                            </button>
                        </form>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            <Link to="/about" className="hover:text-white block">About</Link>
                            <Link to="/projects" className="hover:text-white block">Projects</Link>
                            <Link to="/resume" className="hover:text-white block">Resume</Link>
                            <Link to="/contact" className="hover:text-white block">Contact</Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Let's Connect</h4>
                        <div className="flex space-x-4 mb-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:pooja@example.com" className="bg-gray-700 p-2 rounded-full">
                                <Mail size={20} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full">
                                <Github size={20} />
                            </a>
                        </div>
                        <Link to="/contact" className="text-white font-semibold hover:underline">
                            Start a Conversation
                        </Link>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    &copy; 2025 Pooja Bhatia. All rights reserved.
                </div>

                {/* Thank You Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md mx-auto">
                            <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                            <p>Your message has been sent. I'll get back to you soon.</p>
                            <button
                                onClick={() => setShowModal(false)}
                                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </footer>
        </>
    );
};

export default Footer;
