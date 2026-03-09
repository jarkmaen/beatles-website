import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
    const location = useLocation();

    return (
        <>
            <div className="container lg:px-8 mx-auto px-4">
                <Header key={location.pathname} />
            </div>
            <div className="border-divider-light border-t dark:border-divider-dark transition" />
            <div className="container lg:px-8 mx-auto px-4">
                <main className="lg:py-12 py-8">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default MainLayout;
