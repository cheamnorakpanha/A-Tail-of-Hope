import { Link } from "react-scroll";

import { useState } from "react";
export default function MobileNavigation() {
    const [, setMobileMenuOpen] = useState(true);

    return (
        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
                <Link
                    to="about"
                    smooth={true} duration={500} offset={-360}
                    className="block px-3 py-2 text-base font-medium transition-colors hover:text-yellow-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    About
                </Link>
                <Link
                    to="team"
                    smooth={true} duration={500} offset={-360}
                    className="block px-3 py-2 text-base font-medium transition-colors hover:text-yellow-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Team
                </Link>
                <Link
                    to="issue"
                    smooth={true} duration={500} offset={-360}
                    className="block px-3 py-2 text-base font-medium transition-colors hover:text-yellow-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Issue
                </Link>
                <Link
                    to="mission"
                    smooth={true} duration={500} offset={-360}
                    className="block px-3 py-2 text-base font-medium transition-colors hover:text-yellow-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Mission
                </Link>
                <Link
                    to="contact"
                    smooth={true} duration={500} offset={-360}
                    className="block px-3 py-2 text-base font-medium transition-colors hover:text-yellow-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Contact
                </Link>

                <Link to="get-involved" smooth={true} duration={500} offset={-360}>
                    <div className="px-3 py-2">
                        <button className="w-full border-yellow-700 bg-yellow-700 text-white hover:bg-yellow-800 px-6 py-2 rounded-md font-medium transition-colors">Get Involved</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}   