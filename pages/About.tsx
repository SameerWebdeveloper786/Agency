
import React, { useEffect } from 'react';
import { SKILLS_DATA, EXPERIENCE_DATA, SEO_DATA } from '../constants/data';
import type { Skill } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
    const { ref, className } = useScrollAnimation<HTMLDivElement>();
    const [width, setWidth] = React.useState(0);
    const isVisible = className.includes('is-visible');

    React.useEffect(() => {
        if (isVisible) {
            setWidth(skill.level);
        }
    }, [isVisible, skill.level]);

    return (
        <div ref={ref} className={className}>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-300">{skill.name}</span>
                <span className="text-sm font-medium text-teal-300">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-teal-400 to-violet-500 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${width}%` }}></div>
            </div>
        </div>
    );
};


const About: React.FC = () => {
    useEffect(() => {
        document.title = SEO_DATA.about.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', SEO_DATA.about.description);
        }
    }, []);

    const aboutSection = useScrollAnimation<HTMLElement>();
    const skillsSection = useScrollAnimation<HTMLElement>();
    const experienceSection = useScrollAnimation<HTMLElement>();
    const whyUsSection = useScrollAnimation<HTMLElement>();

    return (
        <div className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <header className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">About <span className="gradient-text">Us</span></h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                        The creative force behind Sameer Digital Lab, dedicated to pushing the boundaries of digital innovation.
                    </p>
                </header>

                <section ref={aboutSection.ref} className={`${aboutSection.className} flex flex-col md:flex-row items-center gap-12 mb-24`}>
                    <div className="md:w-1/3 flex justify-center">
                        <img src="https://picsum.photos/seed/sameer/400/400" alt="Sameer" className="rounded-full w-64 h-64 object-cover border-4 border-teal-400/50 neon-glow" />
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold text-white">Hi, I'm Sameer</h2>
                        <p className="mt-4 text-gray-300">
                            As a passionate developer and designer, I founded Sameer Digital Lab to create exceptional digital products that are not only visually stunning but also highly functional and user-centric. With a deep love for clean code, elegant design, and cutting-edge technology, I strive to deliver solutions that help businesses thrive in the digital landscape.
                        </p>
                        <p className="mt-4 text-gray-300">
                            My approach is collaborative and transparent. I work closely with clients to understand their unique challenges and goals, ensuring that every project is a true partnership.
                        </p>
                    </div>
                </section>

                <section ref={skillsSection.ref} className={`${skillsSection.className} mb-24`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Technical <span className="gradient-text">Skills</span></h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SKILLS_DATA.map(skill => <SkillBar key={skill.name} skill={skill} />)}
                    </div>
                </section>

                <section ref={experienceSection.ref} className={`${experienceSection.className} mb-24`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Professional <span className="gradient-text">Journey</span></h2>
                    <div className="max-w-3xl mx-auto relative border-l-2 border-slate-700 pl-8">
                        {EXPERIENCE_DATA.map((exp, index) => (
                            <div key={index} className="mb-12 relative">
                                <div className="absolute -left-[42px] top-1 w-4 h-4 bg-teal-400 rounded-full border-4 border-slate-800"></div>
                                <p className="text-sm text-teal-300 font-semibold">{exp.year}</p>
                                <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                                <p className="text-md text-gray-400 font-medium">{exp.company}</p>
                                <p className="mt-2 text-gray-400">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
            </div>
        </div>
    );
};

export default About;
