import { useTranslation } from "react-i18next";
import { Link } from "react-scroll"

export default function DesktopNavigation() {
    const [t, i18n] = useTranslation("global");
    
    return (
        <nav className="hidden md:flex items-center space-x-8">
            <Link to="about" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700 mr-0 cursor-pointer">
                {t("navbar.about")}
            </Link>
            <Link to="team" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700 cursor-pointer">
                {t("navbar.team")}
            </Link>
            <Link to="issue" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700 cursor-pointer">
                {t("navbar.issue")}
            </Link>
            <Link to="mission" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700 cursor-pointer">
                {t("navbar.mission")}
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700 cursor-pointer">
                {t("navbar.contact")}
            </Link>
        </nav>
    )
}