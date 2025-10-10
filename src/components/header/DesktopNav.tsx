import { Link } from "react-scroll"

function DesktopNavBar() {
    return (
        <nav className="hidden md:flex items-center space-x-8 cursor-pointer">
            <Link to="about" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700 mr-0">
                About
            </Link>
            <Link to="team" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700">Team
            </Link>
            <Link to="issue" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700">
                Issue
            </Link>
            <Link to="mission" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700">
                Mission
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700">
                Contact
            </Link>
        </nav>
    )
}

export default DesktopNavBar