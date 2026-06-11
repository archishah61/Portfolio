import { ArrowUp } from "lucide-react"

function Footer() {
    return (
        <div>
            <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
                {" "}
                <p className="text-sm text-muted-foreground ml-25">&copy; {new Date().getFullYear()} Archi Shah, All rights reserved.</p>
                <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/30 text-primary transition-colors mr-5">
                    <ArrowUp size={20} />
                </a>
            </footer>
        </div>
    )
}

export default Footer