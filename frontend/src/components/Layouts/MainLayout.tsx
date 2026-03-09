import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div className="container lg:px-8 mx-auto px-4">
            <Header key={location.pathname} />
            <div className="block border-divider-light border-t dark:border-divider-dark lg:hidden ml-[calc(50%_-_50vw)] mr-[calc(50%_-_50vw)] w-screen" />
            <main className="lg:py-12 py-8">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
