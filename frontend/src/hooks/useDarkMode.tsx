import { useEffect, useState } from "react";

const useDarkMode = (): [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
] => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("isDark") === "true";
    });

    useEffect(() => {
        const root = document.documentElement;

        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("isDark", "true");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("isDark", "false");
        }
    }, [isDark]);

    return [isDark, setIsDark];
};

export default useDarkMode;
