import ReactMarkdown from "react-markdown";
import type { Blog } from "../../types";
import { Link } from "react-router-dom";
import { MarkdownA } from "../MarkdownConfig";

type Props = {
    blog: Blog;
    isBlogPostPage: boolean;
};

const BlogIntro = ({ blog, isBlogPostPage }: Props) => {
    return (
        <>
            {isBlogPostPage ? (
                <h2 className="dark:text-primary-dark font-bold font-lora lg:text-5xl text-3xl text-center text-primary-light">
                    {blog.title}
                </h2>
            ) : (
                <h2 className="dark:hover:text-secondary-dark dark:text-primary-dark font-bold font-lora hover:text-secondary-light lg:text-5xl text-3xl text-center text-primary-light transition">
                    <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h2>
            )}
            <div className="dark:text-muted-dark flex items-center justify-center mb-8 mt-8 space-x-4 text-muted-light text-sm">
                <div className="lg:text-right lg:w-full text-center w-30">
                    <span>
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        })}
                    </span>
                </div>
                <span className="dark:text-subtle-accent-dark select-none text-subtle-accent-light">
                    |
                </span>
                <div className="lg:text-left lg:w-full text-center w-30">
                    <span>By {blog.author}</span>
                </div>
            </div>
            {isBlogPostPage ? (
                <div className="dark:prose-invert hyphens-auto lg:prose-lg max-w-none prose">
                    <ReactMarkdown components={{ a: MarkdownA }}>
                        {blog.intro}
                    </ReactMarkdown>
                </div>
            ) : (
                <div className="dark:prose-invert h-40 hyphens-auto lg:prose-lg max-w-none overflow-hidden prose relative">
                    <ReactMarkdown components={{ a: MarkdownA }}>
                        {blog.intro}
                    </ReactMarkdown>
                    <div className="absolute bg-gradient-to-t bottom-0 dark:from-dark from-light h-12 left-0 to-transparent transition w-full"></div>
                </div>
            )}
        </>
    );
};

export default BlogIntro;
