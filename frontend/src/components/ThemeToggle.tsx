import useDarkMode from "../hooks/useDarkMode";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useDarkMode();

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <button
            className="dark:hover:text-dark dark:text-gray-300 flex hover:text-light items-center justify-center text-gray-700"
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
