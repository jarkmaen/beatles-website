import Divider from "./Divider";
import HeaderNavLink from "./HeaderNavLink";
import { useEffect, useRef, useState } from "react";

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="flex items-center justify-center" ref={menuRef}>
            <button
                className="dark:hover:text-primary-dark dark:text-secondary-dark flex hover:text-primary-light items-center justify-center sm:hidden text-secondary-light"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className="material-symbols-outlined">dehaze</span>
            </button>
            {isOpen && (
                <div className="absolute bg-surface-light border border-border-light dark:bg-surface-dark dark:border-border-dark mr-0 p-4 right-4 rounded-lg shadow-xl top-[52px] w-48 z-10">
                    <div className="flex-col font-montserrat text-sm tracking-widest">
                        <HeaderNavLink label="BLOG" to="/blogs" />
                        <Divider marginSize={4} />
                        <HeaderNavLink label="RATINGS" to="/ratings" />
                        <Divider marginSize={4} />
                        <HeaderNavLink label="ABOUT" to="/about" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
