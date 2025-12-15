import Divider from "./Divider";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <button
                className="dark:hover:text-primary-dark dark:text-secondary-dark flex hover:text-primary-light items-center justify-center sm:hidden text-secondary-light"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className="material-symbols-outlined">dehaze</span>
            </button>
            {isOpen && (
                <div className="absolute bg-surface-light border border-border-light dark:bg-surface-dark dark:border-border-dark mr-0 p-4 right-4 rounded-lg shadow-xl top-20 w-48 z-10">
                    <div className="flex-col font-montserrat text-sm tracking-widest">
                        <div className="text-center">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "font-bold" : undefined
                                }
                                onClick={() => setOpen(false)}
                                to="/blogs"
                            >
                                BLOG
                            </NavLink>
                        </div>
                        <Divider marginSize={4} />
                        <div className="text-center">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "font-bold" : undefined
                                }
                                onClick={() => setOpen(false)}
                                to="/ratings"
                            >
                                RATINGS
                            </NavLink>
                        </div>
                        <Divider marginSize={4} />
                        <div className="text-center">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "font-bold" : undefined
                                }
                                onClick={() => setOpen(false)}
                                to="/about"
                            >
                                ABOUT
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HamburgerMenu;
