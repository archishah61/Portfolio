import React from 'react'

const milestones = [
    {
        id: 1,
        title: "Rooted My First HTB Box",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop", // placeholder hacker image
        description: "Breaking into a Linux machine using a misconfigured service."
    },
    {
        id: 2,
        title: "Defcon Watch Party",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop", // placeholder hacker image
        description: "Engaging with the community and learning from top talks."
    },
    {
        id: 3,
        title: "Malware Analysis Lab",
        image: "https://images.unsplash.com/photo-1510511459019-5efa7aece747?q=80&w=1000&auto=format&fit=crop", // placeholder code image
        description: "Dissecting malicious samples safely in a sandboxed environment."
    },
    {
        id: 4,
        title: "Local Hackathon Winner",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop", // placeholder team image
        description: "Built an automated open-source intelligence gathering tool."
    }
]

export default function CyberMilestones() {
    return (
        <section id="milestones" className="py-16 sm:py-20 bg-primary/5 px-4 sm:px-6">
            <div className="container max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        Memorable <span className="text-primary text-glow">Milestones</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Snapshots from the journey, capturing small wins and big moments.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {milestones.map((item) => (
                        <div key={item.id} className="group relative rounded-xl overflow-hidden glass-panel border border-primary/20 hover:border-primary/50 transition-all duration-300">
                            <div className="aspect-square w-full overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 text-center">
                                <h3 className="text-lg font-bold mb-2 text-primary">{item.title}</h3>
                                <p className="text-sm text-foreground/80">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
