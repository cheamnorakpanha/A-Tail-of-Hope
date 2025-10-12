import { Link } from "react-scroll"

export default function DesktopNavigation() {
    return (
        <nav className="hidden md:flex items-center space-x-8">
            <Link to="about" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700 mr-0 cursor-pointer">
                About
            </Link>
            <Link to="team" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700 cursor-pointer">
                Team
            </Link>
            <Link to="issue" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700 cursor-pointer">
                Issue
            </Link>
            <Link to="mission" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700 cursor-pointer">
                Mission
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700 cursor-pointer">
                Contact
            </Link>
        </nav>
    )
}