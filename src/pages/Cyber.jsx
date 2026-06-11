import Footer from "../components/Footer"
import HeroCyber from "../components/HeroCyber"
import Navbar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"

function Cyber() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroCyber/>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Cyber