import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const RatingsLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="container mx-auto px-4 sm:px-8">
                <Header />
                <div className="block border-divider-light border-t dark:border-divider-dark ml-[calc(50%_-_50vw)] mr-[calc(50%_-_50vw)] w-screen" />
            </div>
            <main className="flex flex-col min-h-0">
                <Outlet />
            </main>
        </div>
    );
};

export default RatingsLayout;
