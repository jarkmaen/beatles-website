import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const RatingsLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="container lg:px-8 mx-auto px-4">
                <Header />
            </div>
            <div className="border-divider-light border-t dark:border-divider-dark transition" />
            <main className="flex flex-col min-h-0">
                <Outlet />
            </main>
        </div>
    );
};

export default RatingsLayout;
