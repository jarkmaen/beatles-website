import About from "./components/About/About";
import BlogList from "./components/Blog/BlogList";
import BlogPost from "./components/Blog/BlogPost";
import Home from "./components/Home/Home";
import MainLayout from "./components/Layouts/MainLayout";
import PageNotFound from "./components/PageNotFound";
import Ratings from "./components/Ratings/Ratings";
import RatingsLayout from "./components/Layouts/RatingsLayout";
import useInitialization from "./hooks/useInitialization";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
    const stateInitializer = useInitialization();

    useEffect(() => {
        stateInitializer();
    }, []);

    return (
        <Routes>
            <Route element={<RatingsLayout />}>
                <Route element={<Ratings />} path="/ratings" />
            </Route>
            <Route element={<MainLayout />}>
                <Route element={<About />} path="/about" />
                <Route element={<BlogList />} path="/blogs" />
                <Route element={<BlogPost />} path="/blogs/:slug" />
                <Route element={<Home />} path="/" />
                <Route element={<PageNotFound />} path="*" />
            </Route>
        </Routes>
    );
};

export default App;
