
import React, { useState, useEffect } from 'react';
import { BLOG_POSTS_DATA, SEO_DATA } from '../constants/data';
import type { BlogPost, BlogCategory } from '../types';

const categories: BlogCategory[] = ['Technology', 'Design', 'Business', 'SEO'];

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    return (
        <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>{post.date}</span>
                    <span className="font-semibold text-teal-300">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 hover:text-teal-300 transition-colors cursor-pointer">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <a href="#" className="font-semibold text-white group">
                    Read More 
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                </a>
            </div>
        </div>
    );
};

const Blog: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState<BlogCategory | 'All'>('All');
    const [filteredPosts, setFilteredPosts] = useState(BLOG_POSTS_DATA);

    useEffect(() => {
        document.title = SEO_DATA.blog.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', SEO_DATA.blog.description);
        }
    }, []);

    useEffect(() => {
        let posts = BLOG_POSTS_DATA;
        if (searchTerm) {
            posts = posts.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (category !== 'All') {
            posts = posts.filter(p => p.category === category);
        }
        setFilteredPosts(posts);
    }, [searchTerm, category]);
    
    return (
        <div className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">Insights & <span className="gradient-text">Ideas</span></h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                        Stay updated with the latest in technology, design, and digital strategy from our team of experts.
                    </p>
                </header>

                <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full md:w-1/3">
                        <input 
                            type="text" 
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white placeholder-gray-500"
                        />
                         <svg className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <div className="flex-shrink-0 flex flex-wrap justify-center gap-2">
                        <button onClick={() => setCategory('All')} className={`px-4 py-2 text-sm rounded-full transition-colors duration-300 ${category === 'All' ? 'bg-teal-400 text-slate-900 font-semibold' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}>All</button>
                        {categories.map(cat => (
                             <button key={cat} onClick={() => setCategory(cat)} className={`px-4 py-2 text-sm rounded-full transition-colors duration-300 ${category === cat ? 'bg-teal-400 text-slate-900 font-semibold' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}>{cat}</button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map(post => <BlogPostCard key={post.id} post={post} />)
                    ) : (
                        <p className="md:col-span-3 text-center text-gray-400 text-lg">No posts found. Try a different search or category.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
