import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex justify-between py-6">
            <Link
                className="dark:text-primary-dark font-bold font-lora text-4xl text-primary-light tracking-wider"
                to="/"
            >
                fab.two
            </Link>
            <div className="flex space-x-6">
                <div className="flex font-montserrat items-center space-x-6 text-sm tracking-widest">
                    <Link to="/blogs">BLOG</Link>
                    <span className="dark:text-subtle-accent-dark select-none text-subtle-accent-light">
                        |
                    </span>
                    <Link to="/ratings">RATINGS</Link>
                </div>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
