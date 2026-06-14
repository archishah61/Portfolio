import { useState } from "react"
import { cn } from "../lib/utils"

const skills = [
    // Frontend
    {
        name: "HTML/CSS", level: 85, category: "frontend",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "JavaScript", level: 80, category: "frontend",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "React", level: 80, category: "frontend",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Tailwind CSS", level: 90, category: "frontend",
        logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },

    // Backend
    {
        name: "Node.js", level: 70, category: "backend",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "Express", level: 70, category: "backend",
        logo: "https://cdn.simpleicons.org/express/61DAFB",
    },
    {
        name: "MongoDB", level: 60, category: "backend",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "PostgreSQL", level: 60, category: "backend",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
        name: "MySQL", level: 80, category: "backend",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
        name: "Django", level: 60, category: "backend",
        logo: "https://cdn.simpleicons.org/django/44B78B",
    },
    {
        name: "Python", level: 60, category: "backend",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        name: "Java", level: 70, category: "backend",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },

    // Tools
    {
        name: "Git", level: 80, category: "tools",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
        name: "GitHub", level: 80, category: "tools",
        logo: "https://cdn.simpleicons.org/github/ffffff",
    },
    {
        name: "VS Code", level: 85, category: "tools",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
        name: "Render", level: 85, category: "tools",
        logo: "https://cdn.simpleicons.org/render/46E3B7",
    },
]

const categories = ["all", "frontend", "backend", "tools"]

const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
}

const categoryColors = {
    frontend: { bg: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.4)", text: "#818cf8" },
    backend:  { bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.4)", text: "#34d399" },
    tools:    { bg: "rgba(245,158,11,0.12)",  border: "rgba(245,158,11,0.4)",  text: "#fbbf24" },
}

// ── Desktop card ──────────────────────────────────────────────────────────────
function SkillCard({ skill }) {
    return (
        <div className="group bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/60 flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform duration-300">
                        <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                            onError={(e) => { e.target.style.display = "none" }}
                        />
                    </div>
                    <h3 className="font-semibold text-foreground tracking-tight">{skill.name}</h3>
                </div>
                <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {skill.level}%
                </span>
            </div>
            <div className="w-full bg-secondary/60 h-2 rounded-full overflow-hidden">
                <div
                    className="bg-gradient-to-r from-primary/60 to-primary h-full rounded-full origin-left transition-all duration-1000 ease-out opacity-90 group-hover:opacity-100"
                    style={{ width: skill.level + "%" }}
                />
            </div>
        </div>
    )
}

// ── Mobile skill row ──────────────────────────────────────────────────────────
function MobileSkillRow({ skill, accentColor }) {
    return (
        <div className="flex items-center gap-3 py-3 px-1 border-b border-border/20 last:border-b-0">
            {/* Logo */}
            <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-secondary/70 flex items-center justify-center p-1.5">
                <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => { e.target.style.display = "none" }}
                />
            </div>

            {/* Name + bar */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-foreground truncate pr-2">{skill.name}</span>
                    <span className="text-xs font-bold flex-shrink-0" style={{ color: accentColor }}>
                        {skill.level}%
                    </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-secondary/60 overflow-hidden">
                    <div
                        className="h-full rounded-full"
                        style={{
                            width: skill.level + "%",
                            background: `linear-gradient(90deg, ${accentColor}80, ${accentColor})`,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    )

    // Group by category for mobile view
    const grouped = categories
        .filter((c) => c !== "all")
        .map((cat) => ({
            cat,
            items: (activeCategory === "all" ? skills : skills.filter((s) => s.category === activeCategory))
                       .filter((s) => s.category === cat),
        }))
        .filter((g) => g.items.length > 0)

    return (
        <div>
            <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-secondary/30">
                <div className="container mx-auto max-w-5xl">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                            My <span className="text-primary">Skills</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A showcase of my technical expertise and the tools I use to build robust and scalable applications.
                        </p>
                    </div>

                    {/* Filter buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category, key) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-6 py-2.5 rounded-full transition-all duration-300 capitalize text-sm font-semibold border",
                                    activeCategory === category
                                        ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                                        : "bg-card text-muted-foreground border-border/50 hover:border-primary/50 hover:text-foreground"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* ── DESKTOP grid (hidden on mobile) ── */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredSkills.map((skill, key) => (
                            <SkillCard key={key} skill={skill} />
                        ))}
                    </div>

                    {/* ── MOBILE grouped list (hidden on sm+) ── */}
                    <div className="sm:hidden space-y-4">
                        {grouped.map(({ cat, items }) => {
                            const colors = categoryColors[cat] || {}
                            return (
                                <div
                                    key={cat}
                                    className="rounded-2xl overflow-hidden"
                                    style={{ border: `1px solid ${colors.border}` }}
                                >
                                    {/* Category header */}
                                    <div
                                        className="px-4 py-3 flex items-center gap-3"
                                        style={{
                                            background: colors.bg,
                                            borderBottom: `1px solid ${colors.border}`,
                                        }}
                                    >
                                        <div
                                            className="w-2 h-2 rounded-full flex-shrink-0"
                                            style={{ background: colors.text }}
                                        />
                                        <span
                                            className="text-sm font-bold uppercase tracking-widest"
                                            style={{ color: colors.text }}
                                        >
                                            {categoryLabels[cat] || cat}
                                        </span>
                                        <span
                                            className="ml-auto text-xs font-bold px-2.5 py-0.5 rounded-full"
                                            style={{ background: colors.text + "22", color: colors.text, border: `1px solid ${colors.border}` }}
                                        >
                                            {items.length} skills
                                        </span>
                                    </div>

                                    {/* Skill rows — single column */}
                                    <div className="bg-card/60 px-4">
                                        {items.map((skill, idx) => (
                                            <MobileSkillRow key={idx} skill={skill} accentColor={colors.text} />
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default SkillsSection