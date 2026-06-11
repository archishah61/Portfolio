import React from 'react'
import { ShieldAlert, BookOpen, Trophy, Target, ServerCrash } from 'lucide-react'

const timelineData = [
    {
        title: "Started Networking Fundamentals",
        date: "Early 2023",
        description: "Dove deep into OSI models, TCP/IP protocols, and subnetting. Understanding the roads data travels on.",
        icon: <BookOpen className="w-5 h-5" />,
    },
    {
        title: "First CTF Challenge",
        date: "Mid 2023",
        description: "Participated in a local Capture The Flag event. Solved my first cryptography and OSINT challenges.",
        icon: <Target className="w-5 h-5" />,
    },
    {
        title: "TryHackMe Top 10%",
        date: "Late 2023",
        description: "Completed multiple offensive and defensive paths. Reached the top 10% on the global leaderboard.",
        icon: <Trophy className="w-5 h-5" />,
    },
    {
        title: "Discovered First Vulnerability",
        date: "Early 2024",
        description: "Found and responsibly disclosed a small XSS vulnerability on a test platform during bug bounty training.",
        icon: <ShieldAlert className="w-5 h-5" />,
    },
    {
        title: "Setting up a Home Lab",
        date: "Mid 2024",
        description: "Built a virtualized environment with Active Directory, vulnerable web apps, and a SIEM for logging and analysis.",
        icon: <ServerCrash className="w-5 h-5" />,
    }
]

export default function CyberTimeline() {
    return (
        <section id="timeline" className="py-20 relative px-4">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        The <span className="text-primary text-glow">Journey</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A chronological map of my dive into the world of InfoSec.
                    </p>
                </div>

                <div className="relative border-l-2 border-primary/20 md:border-l-0 md:flex md:flex-col items-center">
                    {/* Center line for desktop */}
                    <div className="hidden md:block absolute h-full w-0.5 bg-primary/20 left-1/2 transform -translate-x-1/2"></div>

                    {timelineData.map((item, index) => (
                        <div key={index} className={`mb-12 flex w-full md:justify-between items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="hidden md:block w-5/12"></div>
                            
                            <div className="absolute left-[-8px] md:relative md:left-0 z-10 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]">
                                {item.icon}
                            </div>
                            
                            <div className="w-full pl-6 md:pl-0 md:w-5/12">
                                <div className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group">
                                    <span className="text-sm font-mono text-primary/80 mb-2 block">{item.date}</span>
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
