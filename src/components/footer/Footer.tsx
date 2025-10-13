import { useLanguage } from "../translations/LanguageContext";

function Footer() {
  const { t } = useLanguage(); // t stands for Translations

  return (
    <footer className="w-full border-t py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            {t.copyright}
          </p>
          <div className="flex items-center space-x-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61574791874658"
              className="transition-colors !mr-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fi fi-brands-facebook text-gray-400 hover:text-yellow-700 text-xl h-8 w-8"></i>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/a_tailofhope?igsh=d2R6bzB3Nms2eWp2"
              className="transition-colors !ml-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fi fi-brands-instagram text-gray-400 hover:text-yellow-700 text-xl h-8 w-8 mx-6"></i>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@atailofhope_official"
              className="transition-colors !ml-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fi fi-brands-tik-tok text-gray-400 hover:text-yellow-700 text-xl h-8 w-8"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
