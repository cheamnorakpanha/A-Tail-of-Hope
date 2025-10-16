import { Link } from "react-scroll"
import { useLanguage } from "../translations/LanguageContext";


export default function DesktopNavigation() {
    const { t } = useLanguage();  // t stands for Translations

    return (
        <nav className="hidden md:flex items-center space-x-12">
            <Link to="about" smooth={true} duration={500} offset={-65} className="text-md font-semibold transition-colors hover:text-yellow-700 mr-0 cursor-pointer">
                {t.navbar.about}
            </Link>
            <Link to="team" smooth={true} duration={500} offset={-65} className="text-md font-semibold transition-colors hover:text-yellow-700 cursor-pointer">
                {t.navbar.team}
            </Link>
            <Link to="issue" smooth={true} duration={500} offset={-65} className="text-md font-semibold transition-colors hover:text-yellow-700 cursor-pointer">
                {t.navbar.issue}
            </Link>
            <Link to="mission" smooth={true} duration={500} offset={-65} className="text-md font-semibold transition-colors hover:text-yellow-700 cursor-pointer">
                {t.navbar.mission}
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-65} className="text-md font-semibold transition-colors hover:text-yellow-700 cursor-pointer">
                {t.navbar.contact}
            </Link>
        </nav>
    )
}