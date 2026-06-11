import React from 'react'
import { FileText, ArrowRight } from 'lucide-react'

const blogs = [
    {
        id: 1,
        title: "Breaking Down the OSI Model",
        summary: "A practical guide to understanding the 7 layers of the OSI model and why it matters for both developers and security analysts.",
        date: "Oct 12, 2023",
        readTime: "5 min read",
        link: "#"
    },
    {
        id: 2,
        title: "My First Bug Bounty Walkthrough",
        summary: "Detailed write-up on how I discovered and responsibly disclosed my first XSS vulnerability on a test program.",
        date: "Jan 05, 2024",
        readTime: "8 min read",
        link: "#"
    },
    {
        id: 3,
        title: "Setting up a Home AD Lab",
        summary: "Step-by-step instructions on setting up a virtual Active Directory environment for learning lateral movement and privilege escalation.",
        date: "Mar 22, 2024",
        readTime: "12 min read",
        link: "#"
    }
]

export default function CyberBlogs() {
    return (
        <section id="blogs" className="py-16 sm:py-20 bg-primary/5 px-4 sm:px-6">
            <div className="container max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-primary text-glow">Write-ups</span> & Thoughts
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Documenting what I learn. Because the best way to understand something is to explain it to someone else.
                    </p>
                </div>

                <div className="space-y-6">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="group glass-panel p-6 md:p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                        <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> {blog.date}</span>
                                        <span>•</span>
                                        <span>{blog.readTime}</span>
                                    </div>
                                    <h3 className="text-lg sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{blog.title}</h3>
                                    <p className="text-muted-foreground max-w-3xl">{blog.summary}</p>
                                </div>
                                <div className="md:pl-6 md:border-l border-primary/10 flex items-center">
                                    <a href={blog.link} className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <a href="#" className="cosmic-button inline-flex items-center">
                        View All Posts
                    </a>
                </div>
            </div>
        </section>
    )
}
