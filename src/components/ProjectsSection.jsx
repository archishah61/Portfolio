import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Wanderlust",
        description: "Wanderlust is a full-stack web application showcasing secure login, smooth frontend-backend integration, and real-time features. Includes property listings, search filters, booking system, availability tracking, and user reviews.",
        image: "/projects/project2.png",
        tags: ["JavaScript", "Node.js", "Express.js", "EJS", "MongoDB", "TailwindCSS"],
        demoUrl: "https://wanderlust-w9vw.onrender.com/listings",
        githubUrl: "https://github.com/archishah61/Wanderlust"
    },
    {
        id: 2,
        title: "CloudPix",
        description: "CloudPix is a full-stack web application that offers users a seamless, free cloud storage solution for high-quality images. Built with a modern tech stack, it enables users to securely upload, manage, and share their images from anywhere.",
        image: "/projects/project1.png",
        tags: ["React.js", " TailwindCSS", "Node.js", "Express.js", "MongoDB", "JWT"],
        demoUrl: "https://cloudpix.netlify.app/",
        githubUrl: "https://github.com/archishah61/CloudPix-Backend-"
    },
]

function ProjectsSection() {
    return (
        <div>
            <section id="projects" className="py-24 px-4 relative">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
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
                                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
                            >
                                {/* ── Image ──────────────────────────────────────────────── */}
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
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
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/archishah61">Check My Github <ArrowRight size={16}/></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectsSection