import Home from "./components/Home/Home";
import LazyRoute from "./components/LazyRoute";
import MainLayout from "./components/Layouts/MainLayout";
import PageNotFound from "./components/PageNotFound";
import RatingsLayout from "./components/Layouts/RatingsLayout";
import useInitialization from "./hooks/useInitialization";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const About = lazy(() => import("./components/About/About"));
const BlogList = lazy(() => import("./components/Blog/BlogList"));
const BlogPost = lazy(() => import("./components/Blog/BlogPost"));
const Ratings = lazy(() => import("./components/Ratings/Ratings"));

const App = () => {
    useInitialization();

    return (
        <Routes>
            <Route element={<RatingsLayout />}>
                <Route
                    element={<LazyRoute component={Ratings} />}
                    path="/ratings"
                />
            </Route>
            <Route element={<MainLayout />}>
                <Route
                    path="/about"
                    element={<LazyRoute component={About} />}
                />
                <Route
                    path="/blogs"
                    element={<LazyRoute component={BlogList} />}
                />
                <Route
                    path="/blogs/:slug"
                    element={<LazyRoute component={BlogPost} />}
                />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
