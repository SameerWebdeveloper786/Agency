
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, SEO_DATA } from '../constants/data';
import type { PortfolioCategory, PortfolioProject } from '../types';

const categories: PortfolioCategory[] = ['Web', 'App', 'UI/UX'];

const PortfolioCard: React.FC<{ project: PortfolioProject }> = ({ project }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/50 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
            <img src={project.image} alt={project.title} className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-xs font-semibold bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-full">{project.industry}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.problem}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tools.map(tool => (
                        <span key={tool} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">{tool}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<PortfolioCategory | 'All'>('All');
    const [filteredProjects, setFilteredProjects] = useState(PORTFOLIO_DATA);

    useEffect(() => {
        document.title = SEO_DATA.portfolio.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', SEO_DATA.portfolio.description);
        }
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredProjects(PORTFOLIO_DATA);
        } else {
            setFilteredProjects(PORTFOLIO_DATA.filter(p => p.category === filter));
        }
    }, [filter]);

    return (
        <div className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">Our <span className="gradient-text">Work</span></h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                        We create digital experiences that are not only beautiful but also solve real-world business problems.
                    </p>
                </header>

                <div className="flex justify-center gap-2 md:gap-4 mb-12">
                    <button onClick={() => setFilter('All')} className={`px-4 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${filter === 'All' ? 'bg-teal-400 text-slate-900 font-semibold' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}>
                        All
                    </button>
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${filter === cat ? 'bg-teal-400 text-slate-900 font-semibold' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="page-enter" style={{animationDelay: `${(project.id % 3) * 100}ms`}}>
                             <PortfolioCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
