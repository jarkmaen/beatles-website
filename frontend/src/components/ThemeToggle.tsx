import useDarkMode from "../hooks/useDarkMode";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useDarkMode();

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <button
            className="dark:hover:text-primary-dark dark:text-secondary-dark flex hover:text-primary-light items-center justify-center text-secondary-light"
            onClick={toggleTheme}
        >
            <span className="dark:!hidden material-symbols-outlined">
                dark_mode
            </span>
            <span className="!hidden dark:!inline material-symbols-outlined">
                light_mode
            </span>
        </button>
    );
};

export default ThemeToggle;
