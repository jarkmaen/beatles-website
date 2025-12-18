import HamburgerMenu from "./HamburgerMenu";
import HeaderNavLink from "./HeaderNavLink";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex justify-between py-6">
            <Link
                className="dark:text-primary-dark font-bold font-lora sm:text-4xl text-3xl text-primary-light tracking-wider"
                to="/"
            >
                fab.two
            </Link>
            <div className="flex space-x-6">
                <div className="font-montserrat hidden items-center sm:flex space-x-6 text-sm tracking-widest">
                    <HeaderNavLink isDesktop label="BLOG" to="/blogs" />
                    <span className="dark:text-subtle-accent-dark select-none text-subtle-accent-light">
                        |
                    </span>
                    <HeaderNavLink isDesktop label="RATINGS" to="/ratings" />
                    <span className="dark:text-subtle-accent-dark select-none text-subtle-accent-light">
                        |
                    </span>
                    <HeaderNavLink isDesktop label="ABOUT" to="/about" />
                </div>
                <HamburgerMenu />
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
