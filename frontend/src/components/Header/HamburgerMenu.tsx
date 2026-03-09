import Divider from "../Divider";
import HeaderNavLink from "./HeaderNavLink";
import { Fragment } from "react";
import { NAV_LINKS } from "../../constants/navLinks";
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
            document.addEventListener("touchstart", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div
            className="flex items-center justify-center relative"
            ref={menuRef}
        >
            <button
                className="dark:hover:text-primary-dark dark:text-secondary-dark flex hover:text-primary-light items-center justify-center lg:hidden text-secondary-light"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className="material-symbols-outlined">dehaze</span>
            </button>
            {isOpen && (
                <div className="absolute bg-surface-light border border-border-light dark:bg-surface-dark dark:border-border-dark mr-0 p-4 -right-12 rounded-lg shadow-xl top-[40px] w-48 z-50">
                    <div className="flex-col font-montserrat text-sm tracking-widest">
                        {NAV_LINKS.map((link, i) => (
                            <Fragment key={link.to}>
                                <HeaderNavLink
                                    label={link.label}
                                    to={link.to}
                                />
                                {i < NAV_LINKS.length - 1 && (
                                    <Divider marginSize={4} />
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
