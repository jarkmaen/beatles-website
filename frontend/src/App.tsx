import About from "./components/About";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import Header from "./components/Header";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Ratings from "./components/Ratings";
import useInitialization from "./hooks/useInitialization";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
    const location = useLocation();
    const stateInitializer = useInitialization();

    useEffect(() => {
        stateInitializer();
    }, []);

    const isRatingsPage = location.pathname === "/ratings";

    const contentWrapperClasses = isRatingsPage
        ? "container mx-auto px-4 sm:px-8"
        : "";
    const mainClasses = isRatingsPage
        ? "flex flex-col min-h-0"
        : "py-8 sm:py-12";
    const outerClasses = isRatingsPage
        ? "flex flex-col h-screen"
        : "container mx-auto px-4 sm:px-8";

    return (
        <div className={outerClasses}>
            <div className={contentWrapperClasses}>
                <Header key={location.pathname} />
                <div
                    className={`${
                        isRatingsPage ? "block" : "block sm:hidden"
                    } border-divider-light border-t dark:border-divider-dark ml-[calc(50%_-_50vw)] mr-[calc(50%_-_50vw)] w-screen`}
                />
            </div>
            <main className={mainClasses}>
                <Routes>
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blogs" element={<BlogList />} />
                    <Route path="/blogs/:slug" element={<BlogPost />} />
                    <Route path="/ratings" element={<Ratings />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
