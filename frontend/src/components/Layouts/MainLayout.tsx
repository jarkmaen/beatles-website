import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <Header key={location.pathname} />
            <div className="block border-divider-light border-t dark:border-divider-dark ml-[calc(50%_-_50vw)] mr-[calc(50%_-_50vw)] sm:hidden w-screen" />
            <main className="py-8 sm:py-12">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
