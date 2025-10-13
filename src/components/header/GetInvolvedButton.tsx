import { Link } from "react-scroll";
import { Globe } from "lucide-react";
import { useLanguage } from "../translations/LanguageContext";

export default function GetInvolvedButton() {
  const { lang, setLang, t } = useLanguage(); // t stands for Translations

  return (
    <div className="hidden md:flex items-center">
      <Link to="get-involved" smooth={true} duration={500} offset={-65}>
        <button className="border-yellow-700 bg-yellow-700 text-white hover:bg-yellow-800 px-6 py-2 rounded-md font-semibold transition-colors">
          {t.navbar.getInvolved}
        </button>
      </Link>
      <button
        onClick={() => setLang(lang === "en" ? "kh" : "en")}
        className="ml-2 border-yellow-700 bg-yellow-700 text-white hover:bg-yellow-800 px-2 py-2 rounded-md font-semibold transition-colors"
      >
        <Globe />
      </button>
    </div>
  );
}
