import React from 'react'
import { Terminal, Shield, Lock, ArrowDown } from 'lucide-react'

export default function HeroCyber() {
    return (
        <section id="hero" className='relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6'>
            <div className='container max-w-5xl mx-auto text-center z-10'>
                <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20 animate-fade-in'>
                    <Terminal className='w-4 h-4' />
                    <span className='text-sm font-mono'>root@portfolio:~# ./cyber-journey.sh</span>
                </div>
                <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6'>
                    <span className='opacity-0 animate-fade-in-delay-1 text-foreground'>My </span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-2 text-glow'>Cybersecurity</span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-3'> Journey</span>
                </h1>
                <p className='text-sm sm:text-base md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-4 px-2'>
                    Exploring the depths of systems, uncovering vulnerabilities, and learning to build robust, secure environments. This is a log of my milestones, certs, and thoughts along the way.
                </p>
                <div className='opacity-0 animate-fade-in-delay-5 mt-10 flex justify-center gap-4'>
                    <a href='#timeline' className='cosmic-button'>
                        Explore the Log
                    </a>
                </div>
            </div>

            {/* Decorative background elements specific to cyber hero */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl' />
                <div className='absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
            </div>

            <div className='absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className='text-sm text-muted-foreground mb-2'>
                    Scroll
                </span>
                <ArrowDown className='h-5 w-5 text-primary' />
            </div>
        </section>
    )
}