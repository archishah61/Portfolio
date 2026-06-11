import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isCyberPage = location.pathname === '/cyber';

    const currentNavItems = isCyberPage ? [
        { name: "Home", href: "/", isLink: true },
        { name: "Timeline", href: "#timeline" },
        { name: "Milestones", href: "#milestones" },
        { name: "Certificates", href: "#certificates" },
        { name: "Blogs", href: "#blogs" },
    ] : [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div>
            <nav className={cn("fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
            >
                <div className="container flex items-center justify-between">
                    {isCyberPage ? (
                        <Link to="/" className="text-xl font-bold text-primary flex items-center">
                            <span className="relative z-10">
                                <span className="text-glow text-foreground">Archi Shah</span>{" "} Portfolio
                            </span>
                        </Link>
                    ) : (
                        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                            <span className="relative z-10">
                                <span className="text-glow text-foreground">Archi Shah</span>{" "} Portfolio
                            </span>
                        </a>
                    )}

                    {/* desktop nav */}
                    <div className="hidden md:flex space-x-6 lg:space-x-8 mr-16 lg:mr-32">
                        {currentNavItems.map((item, key) => (
                            item.isLink ? (
                                <Link key={key} to={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    {item.name}
                                </Link>
                            ) : (
                                <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    {item.name}
                                </a>
                            )
                        ))}
                    </div>

                    {/* mobile hamburger button */}
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 text-foreground z-50 relative"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu overlay — OUTSIDE nav to avoid backdrop-blur stacking context bug */}
            <div className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center md:hidden",
                "transition-all duration-300",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                {/* Close button inside overlay */}
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-4 right-4 p-2 text-foreground"
                    aria-label="Close Menu"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col space-y-8 text-xl">
                    {currentNavItems.map((item, key) => (
                        item.isLink ? (
                            <Link key={key} to={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </Link>
                        ) : (
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar