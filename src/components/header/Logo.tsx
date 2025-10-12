import { useTranslation } from "react-i18next";
import { Link } from "react-scroll"

export default function Logo() {
    const [t, i18n] = useTranslation("global");

    return (
        <div className="flex items-center">
            <Link
                smooth={true}
                duration={500}
                className="flex items-center space-x-2"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <img
                    alt='A Tail of Hope Logo'
                    src={require('../../img/logo/atoh_logo_removebg.png')}
                    className='h-12 w-12 cursor-pointer'
                />
                <span className="text-lg font-bold transition-colors hover:text-yellow-700 md:hidden lg:inline cursor-pointer">{t("navbar.title")}</span>
            </Link>
        </div>
    )
}