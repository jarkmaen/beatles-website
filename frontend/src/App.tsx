import BlogPost from "./components/BlogPost";
import Header from "./components/Header";
import Home from "./components/Home";
import Ratings from "./components/Ratings";
import useInitialization from "./hooks/useInitialization";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
    const stateInitializer = useInitialization();

    useEffect(() => {
        stateInitializer();
    }, []);

    const containerClasses = "container mx-auto px-8";
    const isRatingsPage = location.pathname === "/ratings";

    return (
        <>
            <div className={containerClasses}>
                <Header />
            </div>
            <div className={isRatingsPage ? "" : containerClasses}>
                <main className="py-12">
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
