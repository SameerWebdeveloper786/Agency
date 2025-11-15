
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedHeading from '../components/AnimatedHeading';
import CTAButton from '../components/CTAButton';
import { SERVICES_DATA, PORTFOLIO_DATA, TESTIMONIALS_DATA, SEO_DATA } from '../constants/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServiceCard: React.FC<{ service: typeof SERVICES_DATA[0], index: number }> = ({ service, index }) => {
    const { ref, className } = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={ref} className={`${className} bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10`} style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="text-teal-300 mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
        </div>
    );
};

const PortfolioCard: React.FC<{ project: typeof PORTFOLIO_DATA[0], index: number }> = ({ project, index }) => {
    const { ref, className } = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={ref} className={`${className} group relative overflow-hidden rounded-xl border border-slate-800`} style={{ transitionDelay: `${index * 100}ms` }}>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-sm font-semibold bg-teal-500/20 text-teal-300 px-2 py-1 rounded">{project.category}</span>
                <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">{project.industry}</p>
            </div>
        </div>
    );
};

const TestimonialSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const { ref, className } = useScrollAnimation<HTMLDivElement>();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div ref={ref} className={`${className} relative`}>
            <div className="overflow-hidden relative h-48">
                {TESTIMONIALS_DATA.map((testimonial, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-xl italic text-gray-300">"{testimonial.quote}"</p>
                        <p className="mt-4 font-bold text-white">{testimonial.name}, <span className="text-teal-400">{testimonial.company}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};


const Home: React.FC = () => {
    useEffect(() => {
        document.title = SEO_DATA.home.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', SEO_DATA.home.description);
        }
    }, []);

    const servicesSection = useScrollAnimation<HTMLElement>();
    const portfolioSection = useScrollAnimation<HTMLElement>();
    const testimonialsSection = useScrollAnimation<HTMLElement>();
    const ctaSection = useScrollAnimation<HTMLElement>();

    return (
        <div>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-700/[0.05]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/50"></div>
                <div className="container mx-auto px-6 z-10">
                    <AnimatedHeading 
                        prefix="We Build"
                        words={['Websites.', 'Apps.', 'Experiences.']}
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight"
                    />
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                        A world-class digital agency crafting futuristic, high-end web and mobile solutions with smooth animations and premium branding.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <CTAButton to="/portfolio">View Our Work</CTAButton>
                        <CTAButton to="/services" variant="secondary">Explore Services</CTAButton>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section ref={servicesSection.ref} className={`${servicesSection.className} py-20 md:py-32`}>
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white">Our <span className="gradient-text">Expertise</span></h2>
                    <p className="mt-4 max-w-2xl mx-auto text-center text-gray-400">We offer a complete suite of digital services to bring your vision to life.</p>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES_DATA.map((service, index) => <ServiceCard key={service.title} service={service} index={index}/>)}
                    </div>
                </div>
            </section>

            {/* Portfolio Preview */}
            <section ref={portfolioSection.ref} className={`${portfolioSection.className} py-20 md:py-32 bg-slate-900/30`}>
                 <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="mt-4 max-w-2xl mx-auto text-center text-gray-400">A glimpse into our portfolio of successful digital products.</p>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {PORTFOLIO_DATA.slice(0, 3).map((project, index) => <PortfolioCard key={project.id} project={project} index={index} />)}
                    </div>
                    <div className="text-center mt-12">
                        <CTAButton to="/portfolio" variant="secondary">View All Projects</CTAButton>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section ref={testimonialsSection.ref} className={`${testimonialsSection.className} py-20 md:py-32`}>
                <div className="container mx-auto px-6 max-w-4xl text-center">
                     <h2 className="text-3xl md:text-5xl font-bold text-white">What Our <span className="gradient-text">Clients Say</span></h2>
                     <div className="mt-12">
                         <TestimonialSlider />
                     </div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={ctaSection.ref} className={`${ctaSection.className} py-20 md:py-32`}>
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-teal-500/20 to-violet-500/20 rounded-2xl p-10 md:p-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to Start Your Project?</h2>
                        <p className="mt-4 text-gray-300 max-w-xl mx-auto">Let's collaborate to build a digital solution that sets you apart from the competition.</p>
                        <div className="mt-8">
                            <CTAButton to="/contact">Get a Free Quote</CTAButton>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
