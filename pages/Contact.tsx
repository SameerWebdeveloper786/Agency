
import React, { useEffect, useState } from 'react';
import { SEO_DATA } from '../constants/data';
import CTAButton from '../components/CTAButton';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        document.title = SEO_DATA.contact.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', SEO_DATA.contact.description);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission (e.g., send to an API)
        console.log('Form submitted:', formState);
        setIsSubmitted(true);
    };

    return (
        <div className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">Get In <span className="gradient-text">Touch</span></h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                        Have a question or a project in mind? We'd love to hear from you.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                        {isSubmitted ? (
                            <div className="text-center flex flex-col items-center justify-center h-full">
                                <svg className="w-16 h-16 text-teal-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                                <p className="text-gray-300 mt-2">Your message has been sent. We'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <input type="text" name="name" id="name" required onChange={handleChange} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input type="email" name="email" id="email" required onChange={handleChange} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea name="message" id="message" rows={5} required onChange={handleChange} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform bg-gradient-to-r from-teal-400 to-violet-500 text-white hover:from-teal-500 hover:to-violet-600 focus:ring-4 focus:ring-teal-300/50 shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-1">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    <div className="space-y-8">
                        <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                             <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                            <div className="space-y-4 text-gray-300">
                                <p className="flex items-center gap-4"><svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <span>hello@sameercodes.online</span></p>
                                <p className="flex items-center gap-4"><svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <span>Remote / Worldwide</span></p>
                            </div>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 px-6 py-3 font-semibold rounded-lg bg-green-500 text-white transition-all duration-300 hover:bg-green-600 transform hover:scale-105">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l-1.217 4.432 4.515-1.187z"/></svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                        <div className="h-64 rounded-xl overflow-hidden">
                            <img src="https://picsum.photos/seed/map/800/400" alt="Map" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
