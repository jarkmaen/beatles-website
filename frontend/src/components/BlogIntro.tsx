import type { Blog } from "../types";
import { Link } from "react-router-dom";

type Props = {
    blog: Blog;
    isBlogPostPage: boolean;
};

const BlogIntro = ({ blog, isBlogPostPage }: Props) => {
    return (
        <>
            {isBlogPostPage ? (
                <h1 className="dark:text-primary-dark font-bold font-lora text-6xl text-center text-primary-light">
                    {blog.title}
                </h1>
            ) : (
                <h1 className="dark:hover:text-secondary-dark dark:text-primary-dark font-bold font-lora hover:text-secondary-light text-6xl text-center text-primary-light transition-colors">
                    <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h1>
            )}
            <div className="dark:text-muted-dark flex items-center justify-center mb-8 mt-8 space-x-4 text-muted-light text-sm">
                <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                <span className="dark:text-subtle-accent-dark select-none text-subtle-accent-light">
                    |
                </span>
                <span>By {blog.author}</span>
            </div>
            {isBlogPostPage ? (
                <div className="dark:prose-invert max-w-none prose prose-lg">
                    <div dangerouslySetInnerHTML={{ __html: blog.intro }} />
                </div>
            ) : (
                <div className="dark:prose-invert h-40 max-w-none overflow-hidden prose prose-lg relative">
                    <div dangerouslySetInnerHTML={{ __html: blog.intro }} />
                    <div className="absolute bg-gradient-to-t bottom-0 dark:from-dark from-light h-12 left-0 to-transparent transition-colors w-full"></div>
                </div>
            )}
        </>
    );
};

export default BlogIntro;
