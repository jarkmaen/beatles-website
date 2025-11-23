import BlogContent from "./BlogContent";
import type { RootState } from "../store";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogPost = () => {
    const { slug } = useParams();
    const blogs = useSelector((state: RootState) => state.blogs.blogs);

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return;
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-12">
                <h1 className="dark:text-primary-dark font-bold font-lora text-6xl text-center text-primary-light">
                    {blog.title}
                </h1>
                <div className="dark:text-muted-dark flex items-center justify-center mb-8 mt-8 space-x-4 text-muted-light text-sm">
                    <span>
                        {new Date(blog.created_at).toLocaleDateString()}
                    </span>
                    <span className="dark:text-subtle-accent-dark select-none text-subtle-accent-light">
                        |
                    </span>
                    <span>By {blog.author}</span>
                </div>
                <div className="dark:prose-invert max-w-none prose prose-lg">
                    <div dangerouslySetInnerHTML={{ __html: blog.intro }} />
                </div>
            </div>
            <BlogContent block={blog.content} />
        </div>
    );
};

export default BlogPost;
