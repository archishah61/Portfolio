import React from 'react'
import { Award, ExternalLink } from 'lucide-react'

const certificates = [
    {
        id: 1,
        title: "CompTIA Security+",
        issuer: "CompTIA",
        date: "Jan 2024",
        link: "#",
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        id: 2,
        title: "eJPT - Junior Penetration Tester",
        issuer: "eLearnSecurity",
        date: "Mar 2024",
        link: "#",
        color: "from-red-500/20 to-orange-500/20",
    },
    {
        id: 3,
        title: "TryHackMe Jr Penetration Tester",
        issuer: "TryHackMe",
        date: "Nov 2023",
        link: "#",
        color: "from-green-500/20 to-emerald-500/20",
    }
]

export default function CyberCertificates() {
    return (
        <section id="certificates" className="py-16 sm:py-20 px-4 sm:px-6">
            <div className="container max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        Courses & <span className="text-primary text-glow">Certificates</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Formalizing the knowledge. A collection of credentials and training I've completed to validate my skills.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert) => (
                        <div key={cert.id} className="relative group rounded-2xl overflow-hidden glass-panel border border-primary/20 hover:border-primary/50 transition-all duration-300">
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            
                            <div className="relative p-5 sm:p-8 flex flex-col h-full z-10">
                                <Award className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                                <div className="text-muted-foreground font-medium mb-1">{cert.issuer}</div>
                                <div className="text-sm text-foreground/60 mb-6">{cert.date}</div>
                                
                                <div className="mt-auto pt-4 border-t border-primary/10">
                                    <a href={cert.link} className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                                        View Credential <ExternalLink className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
