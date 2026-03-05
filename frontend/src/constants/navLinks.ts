type NavLink = {
    label: string;
    mobileOnly?: boolean;
    to: string;
};

export const NAV_LINKS: NavLink[] = [
    { label: "HOME", mobileOnly: true, to: "/" },
    { label: "RANKINGS", to: "/blogs/ranking-every-original-beatles-song" },
    { label: "RATINGS", to: "/ratings" },
    { label: "ABOUT", to: "/about" }
] as const;
