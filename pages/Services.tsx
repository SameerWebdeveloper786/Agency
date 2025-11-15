
import React, { useEffect } from 'react';
import { SERVICES_DATA, SEO_DATA } from '../constants/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CTAButton from '../components/CTAButton';

const ServiceDetailCard: React.FC<{ service: typeof SERVICES_DATA[0], index: number }> = ({ service, index }) => {
    const { ref, className } = useScrollAnimation<HTMLDivElement>();
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className={`${className} flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
            <div className="md:w-1/2 flex justify-center text-teal-300">
                <div className="w-48 h-48 bg-slate-800/50 rounded-full flex items-center justify-center border-2 border-teal-400/30 neon-glow-purple">
                    {React.cloneElement(service.icon, { style: { width: 64, height: 64 } })}
                </div>
            </div>
            <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span className="text-gray-300">{detail}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const Services: React.FC = () => {
    useEffect(() => {
        document.title = SEO_DATA.services.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', SEO_DATA.services.description);
        }
    }, []);

    const ctaSection = useScrollAnimation<HTMLElement>();

    return (
        <div className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <header className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">Our Digital <span className="gradient-text">Solutions</span></h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                        We provide end-to-end services to power your digital growth, from strategy and design to development and support.
                    </p>
                </header>

                <div className="space-y-24 md:space-y-32">
                    {SERVICES_DATA.map((service, index) => (
                        <ServiceDetailCard key={service.title} service={service} index={index} />
                    ))}
                </div>

                <section ref={ctaSection.ref} className={`${ctaSection.className} mt-24 md:mt-32`}>
                    <div className="bg-gradient-to-r from-teal-500/20 to-violet-500/20 rounded-2xl p-10 md:p-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Have a Project in Mind?</h2>
                        <p className="mt-4 text-gray-300 max-w-xl mx-auto">Let's turn your idea into a stunning digital reality. Contact us today for a consultation.</p>
                        <div className="mt-8">
                            <CTAButton to="/contact">Schedule a Call</CTAButton>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;
