import BlogContent from "./BlogContent";
import BlogIntro from "./BlogIntro";
import Divider from "./Divider";
import LoadingScreen from "./LoadingScreen";
import PageNotFound from "./PageNotFound";
import type { RootState } from "../store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogPost = () => {
    const { blogs, loading } = useSelector((state: RootState) => state.blogs);
    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blog = blogs.find((b) => b.slug === slug);

    if (loading) {
        return <LoadingScreen />;
    } else if (!blog) {
        return <PageNotFound />;
    }

    return (
        <div className="max-w-4xl mx-auto">
            <BlogIntro blog={blog} isBlogPostPage={true} />
            <Divider />
            <BlogContent content={blog.content} />
        </div>
    );
};

export default BlogPost;
