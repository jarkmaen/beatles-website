import BlogPost from "./components/BlogPost";
import Header from "./components/Header";
import Home from "./components/Home";
import Ratings from "./components/Ratings";
import useInitialization from "./hooks/useInitialization";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
    const stateInitializer = useInitialization();
    const location = useLocation();

    useEffect(() => {
        stateInitializer();
    }, []);

    const isRatingsPage = location.pathname === "/ratings";

    const containerClasses = "container mx-auto px-8";
    const mainClasses = isRatingsPage ? "" : "py-12";

    return (
        <>
            <div className={containerClasses}>
                <Header />
            </div>
            <div className={isRatingsPage ? "" : containerClasses}>
                <main className={mainClasses}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blogs" element={<BlogPost />} />
                        <Route path="/ratings" element={<Ratings />} />
                    </Routes>
                </main>
            </div>
        </>
    );
};

export default App;
