import { NavLink } from "react-router-dom";

type Props = {
    isDesktop?: boolean;
    label: string;
    to: string;
};

const HeaderNavLink = ({ isDesktop, label, to }: Props) => {
    return (
        <div className={`text-center ${isDesktop ? "w-[90px]" : ""}`}>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "font-bold" : undefined
                }
                to={to}
            >
                {label}
            </NavLink>
        </div>
    );
};

export default HeaderNavLink;
