import { RevealOnScroll } from "../Revealonscroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project Card */}
                    <div className="p-6 rounded-xl border border-white/10 bg-gray-900 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-4">CareBeds</h3>
                        <p className="text-gray-400 mb-4">
                        A system for real-time tracking of bed availability, OPD queues, and patient prioritization, integrated with a city-wide healthcare module. Uses AI for predictive analytics and resource management.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Python", "Kotlin", "SpringBoot"].map((tech) => (
                                <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center my-6">
                            <a href="https://github.com/bhumitgoyal/carebedsapp" className="text-blue-400 hover:text-blue-300 transition-colors">View Project →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 bg-gray-900 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-4">SootheAI</h3>
                        <p className="text-gray-400 mb-4">
                        A platform that provides personalized mental health support using AI-driven journal analysis, mood tracking, mentorship matching, and AI-powered conversation simulation.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Firebase", "LangChain", "Python"].map((tech) => (
                                <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center my-6">
                            <a href="https://soothe-ai.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors">View Project →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 bg-gray-900 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-4">ResumeMate</h3>
                        <p className="text-gray-400 mb-4">
                        A tool that analyzes resumes using NLP to extract key skills, match candidates to job descriptions, and provide improvement suggestions.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "LangChain", "OpenAI", "Pyhton"].map((tech) => (
                                <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center my-6">
                            <a href="https://resumeanalyzer-jade.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors">View Project →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 bg-gray-900 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Sirvicy</h3>
                        <p className="text-gray-400 mb-4">
                        Sirvicy is a smart service management app for CAT’s workers and mechanics, optimizing vehicle servicing with real-time tracking, automated job assignments, and maintenance insights for smoother operations
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["SpringBoot", "Kotlin", "JetPack", "AWS"].map((tech) => (
                                <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center my-6">
                            <a href="https://github.com/bhumitgoyal/Sirvicy" className="text-blue-400 hover:text-blue-300 transition-colors">View Project →</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
