import Footer from "../components/Footer"
import HeroCyber from "../components/HeroCyber"
import Navbar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"
import CyberTimeline from "../components/CyberTimeline"
import CyberMilestones from "../components/CyberMilestones"
import CyberCertificates from "../components/CyberCertificates"
import CyberBlogs from "../components/CyberBlogs"

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
                <HeroCyber />
                <CyberTimeline />
                <CyberMilestones />
                <CyberCertificates />
                <CyberBlogs />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Cyber