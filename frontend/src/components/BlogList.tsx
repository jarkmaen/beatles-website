import BlogListItem from "./BlogListItem";
import type { RootState } from "../store";
import { useSelector } from "react-redux";

const BlogList = () => {
    const blogs = useSelector((state: RootState) => state.blogs.blogs);

    return (
        <div className="max-w-4xl mx-auto space-y-16">
            {blogs.map((blog, i) => (
                <div key={blog.id}>
                    <BlogListItem blog={blog} bottom={i === blogs.length - 1} />
                </div>
            ))}
        </div>
    );
};

export default BlogList;
