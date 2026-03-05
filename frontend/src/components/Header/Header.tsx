import HamburgerMenu from "./HamburgerMenu";
import HeaderNavLink from "./HeaderNavLink";
import ThemeToggle from "./ThemeToggle";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constants/navLinks";

const Header = () => {
    return (
        <header className="flex justify-between py-3 sm:py-6">
            <Link
                className="dark:text-primary-dark font-bold font-lora sm:text-4xl text-3xl text-primary-light tracking-wider"
                to="/"
            >
                Fab Two
            </Link>
            <div className="flex space-x-6">
                <div className="font-montserrat hidden items-center sm:flex space-x-6 text-sm tracking-widest">
                    {NAV_LINKS.filter((link) => !link.mobileOnly).map(
                        (link, i, arr) => (
                            <Fragment key={link.to}>
                                <HeaderNavLink
                                    isDesktop
                                    label={link.label}
                                    to={link.to}
                                />
                                {i < arr.length - 1 && (
                                    <span className="dark:text-subtle-accent-dark select-none text-subtle-accent-light">
                                        |
                                    </span>
                                )}
                            </Fragment>
                        )
                    )}
                </div>
                <HamburgerMenu />
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
