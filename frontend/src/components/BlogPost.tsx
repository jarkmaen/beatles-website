import BlogContent from "./BlogContent";
import BlogIntro from "./BlogIntro";
import Divider from "./Divider";
import type { RootState } from "../store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogPost = () => {
    const { slug } = useParams();
    const blogs = useSelector((state: RootState) => state.blogs.blogs);

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-4xl mx-auto">
            <BlogIntro blog={blog} isBlogPostPage={true} />
            <Divider />
            <BlogContent content={blog.content} />
        </div>
    );
};

export default BlogPost;
