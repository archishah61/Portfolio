import { useState } from "react"
import { ArrowRight, ExternalLink, Github, Play, X } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Wanderlust",
        description: "Wanderlust is a full-stack web application showcasing secure login, smooth frontend-backend integration, and real-time features. Includes property listings, search filters, booking system, availability tracking, and user reviews.",
        image: "/projects/project2.png",
        tags: ["JavaScript", "Node.js", "Express.js", "EJS", "MongoDB", "TailwindCSS"],
        demoUrl: "https://wanderlust-w9vw.onrender.com/listings",
        githubUrl: "https://github.com/archishah61/Wanderlust",
        videoUrl: "/projectVideos/wanderlust.mp4"
    },
    {
        id: 2,
        title: "CloudPix",
        description: "CloudPix is a full-stack web application that offers users a seamless, free cloud storage solution for high-quality images. Built with a modern tech stack, it enables users to securely upload, manage, and share their images from anywhere.",
        image: "/projects/project1.png",
        tags: ["React.js", " TailwindCSS", "Node.js", "Express.js", "MongoDB", "JWT"],
        demoUrl: "https://cloudpix.netlify.app/",
        githubUrl: "https://github.com/archishah61/Cloudpix",
        videoUrl: "/projectVideos/cloudpix.mp4"
    },
    {
        id: 3,
        title: "LMS",
        description: "Built a full-stack LMS, featuring AI-powered course generation, interview prep, roadmap builder, and student tools like enrollment, progress tracking, quizzes, and contests. Implemented JWT authentication, Multer file uploads, admin analytics dashboard, and course/student management using React Query.",
        image: "/projects/project3.png",
        tags: ["React.js", " TailwindCSS", "Node.js", "Express.js", "MySQL", "JWT"],
        githubUrl: "https://github.com/archishah61/LMS"
    },
]

function ProjectsSection() {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <div>
            <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
                        {" "}
                        Featured <span className="text-primary">Projects</span>
                    </h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Here are some of my recent projects. Each project was carefully
                        crafted with attention to detail, performance, and user experience.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, key) => (
                            <div
                                key={key}
                                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col relative"
                            >
                                {/* ── Image ──────────────────────────────────────────────── */}
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Video Overlay */}
                                    {project.videoUrl && (
                                        <div 
                                            className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
                                            onClick={() => setActiveVideo(project.videoUrl)}
                                        >
                                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                                                <Play className="w-5 h-5 ml-1" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* ── Text / Tags / Icons ───────────────────────────────── */}
                                <div className="p-6 flex flex-col flex-1">
                                    {/* tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/5 text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* title & description */}
                                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                    {/* icons — pushed down by mt-auto */}
                                    <div className="mt-auto flex justify-between items-center pt-4">
                                        <div className="flex space-x-3">
                                            {project.videoUrl && (
                                                <button
                                                    onClick={() => setActiveVideo(project.videoUrl)}
                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                    title="Watch Video Demo"
                                                >
                                                    <Play size={20} />
                                                </button>
                                            )}
                                            {project.demoUrl && (
                                                <a
                                                    href={project.demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                    title="Live Demo"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                    title="Source Code"
                                                >
                                                    <Github size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/archishah61">Check My Github <ArrowRight size={16} /></a>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in" onClick={() => setActiveVideo(null)}>
                    <div className="relative w-full max-w-4xl bg-card rounded-2xl overflow-hidden shadow-2xl border border-primary/20" onClick={(e) => e.stopPropagation()}>
                        <button 
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-background/50 hover:bg-primary hover:text-primary-foreground rounded-full backdrop-blur-md transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <div className="relative pt-[56.25%] w-full bg-black">
                            <iframe 
                                src={activeVideo}
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay; encrypted-media; fullscreen"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectsSection