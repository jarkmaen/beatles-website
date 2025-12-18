import BlogIntro from "./BlogIntro";
import Divider from "./Divider";
import type { Blog } from "../types";
import { Link } from "react-router-dom";

type Props = {
    blog: Blog;
    bottom: boolean;
};

const BlogListItem = ({ blog, bottom }: Props) => {
    return (
        <div>
            <BlogIntro blog={blog} isBlogPostPage={false} />
            <Link
                className="dark:text-accent-dark font-bold hover:underline inline-block mt-4 text-accent-light text-sm tracking-widest"
                to={`/blogs/${blog.slug}`}
            >
                READ MORE
            </Link>
            {!bottom && <Divider />}
        </div>
    );
};

export default BlogListItem;
