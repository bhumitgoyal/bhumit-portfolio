import { RevealOnScroll } from "../Revealonscroll";

export const About = () => {
    const frontendSkills = ["React", "HTML", "JavaScript", "TailwindCSS", "WebSockets"];
    const backendSkills = ["Kotlin", "Firebase", "Flask", "Python", "Spring Boot","LangChain","Node.js"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                    A full-stack developer and AI enthusiast passionate about building impactful tech solutions. I specialize in React, Kotlin, Python, and cloud technologies, creating AI-driven apps for mental health, hospital management, and fake news detection. With experience in hackathons and AI research, I love solving real-world problems through tech. Let’s connect and build something amazing! 🚀
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Frontend Skills */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech) => (
                                    <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech) => (
                                    <span key={tech} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education & Work Experience Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                        <ul className="list-disc list-index text-gray-300 space-y-2">
                            <li>
                                <strong>

                                    B.Tech in Computer Science Engineering
                                </strong> - VIT University (2023-2027)
                            </li>
                            <li>
                                Relevant Coursework: Data Structure, Web Development, DevOps.
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">‍💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    Software Developer at Prewery Pvt Ltd. (2023-2024)
                                </h4>
                                <p> Built and integrated RESTful APIs for seamless
                                backend communication using SpringBoot.
                                </p>
                            </div>
                           

                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
