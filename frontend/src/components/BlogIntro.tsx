import ReactMarkdown from "react-markdown";
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
                <h2 className="dark:text-primary-dark font-bold font-lora sm:text-5xl text-3xl text-center text-primary-light">
                    {blog.title}
                </h2>
            ) : (
                <h2 className="dark:hover:text-secondary-dark dark:text-primary-dark font-bold font-lora hover:text-secondary-light sm:text-5xl text-3xl text-center text-primary-light">
                    <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h2>
            )}
            <div className="dark:text-muted-dark flex items-center justify-center mb-8 mt-8 space-x-4 text-muted-light text-sm">
                <div className="sm:text-right sm:w-full text-center w-30">
                    <span>
                        {new Date(blog.created_at).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        })}
                    </span>
                </div>
                <span className="dark:text-subtle-accent-dark select-none text-subtle-accent-light">
                    |
                </span>
                <div className="sm:text-left sm:w-full text-center w-30">
                    <span>By {blog.author}</span>
                </div>
            </div>
            {isBlogPostPage ? (
                <div className="dark:prose-invert hyphens-auto max-w-none prose sm:prose-lg">
                    <ReactMarkdown>{blog.intro}</ReactMarkdown>
                </div>
            ) : (
                <div className="dark:prose-invert h-40 hyphens-auto max-w-none overflow-hidden prose relative sm:prose-lg">
                    <ReactMarkdown>{blog.intro}</ReactMarkdown>
                    <div className="absolute bg-gradient-to-t bottom-0 dark:from-dark from-light h-12 left-0 to-transparent transition-colors w-full"></div>
                </div>
            )}
        </>
    );
};

export default BlogIntro;
