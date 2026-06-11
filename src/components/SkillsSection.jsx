import { useState } from "react"
import { cn } from "../lib/utils"
import { Layout, Server, Wrench, Code2 } from "lucide-react"

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 85, category: "frontend" },
    { name: "JavaScript", level: 80, category: "frontend" },
    { name: "React", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },

    // Backend
    { name: "Node.js", level: 70, category: "backend" },
    { name: "Express", level: 70, category: "backend" },
    { name: "MongoDB", level: 60, category: "backend" },
    { name: "PostgreSQL", level: 60, category: "backend" },
    { name: "MySQL", level: 80, category: "backend" },
    { name: "Django", level: 60, category: "backend" },
    { name: "Python", level: 60, category: "backend" },
    { name: "Java", level: 70, category: "backend" },

    // Tools
    { name: "Git/GitHub", level: 80, category: "tools" },
    { name: "VS Code", level: 85, category: "tools" },
    { name: "Render", level: 85, category: "tools" },
]

const categories = ["all", "frontend", "backend", "tools"]

const getCategoryIcon = (category) => {
    switch (category) {
        case "frontend": return <Layout className="w-5 h-5" />;
        case "backend": return <Server className="w-5 h-5" />;
        case "tools": return <Wrench className="w-5 h-5" />;
        default: return <Code2 className="w-5 h-5" />;
    }
}

function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <div>
            <section id="skills" className="py-24 px-4 relative bg-secondary/30">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            My <span className="text-primary">Skills</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A showcase of my technical expertise and the tools I use to build robust and scalable applications.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category, key) => (
                            <button key={key}
                                onClick={() => setActiveCategory(category)}
                                className={cn("px-6 py-2.5 rounded-full transition-all duration-300 capitalize text-sm font-semibold border",
                                    activeCategory === category 
                                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20" 
                                    : "bg-card text-muted-foreground border-border/50 hover:border-primary/50 hover:text-foreground"
                                )}>
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredSkills.map((skill, key) => (
                            <div key={key}
                                className="group bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                            {getCategoryIcon(skill.category)}
                                        </div>
                                        <h3 className="font-semibold text-foreground tracking-tight">{skill.name}</h3>
                                    </div>
                                    <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-secondary/60 h-2 rounded-full overflow-hidden">
                                    <div className="bg-gradient-to-r from-primary/60 to-primary h-full rounded-full origin-left transition-all duration-1000 ease-out opacity-90 group-hover:opacity-100"
                                        style={{ width: skill.level + "%" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SkillsSection