import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function GetInvolvedButton() {
    const [t, i18n] = useTranslation("global");
    
    return (
        <div className="hidden md:flex items-center">
            <Link to="get-involved" smooth={true} duration={500} offset={-65}>
                <button className="border-yellow-700 bg-yellow-700 text-white hover:bg-yellow-800 px-6 py-2 rounded-md font-medium transition-colors">{t("navbar.getInvolved")}</button>
            </Link>
        </div>
    );
}