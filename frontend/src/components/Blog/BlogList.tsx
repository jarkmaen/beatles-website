import BlogListItem from "./BlogListItem";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";

const BlogList = () => {
    const blogs = useSelector((state: RootState) => state.blogs.blogs);

    return (
        <div className="max-w-4xl mx-auto space-y-16">
            <title>Blog | Fab Two</title>
            <meta
                content="Read the latest blog posts from Fab Two. Join us as we rank music, explore their solo careers and uncover hidden gems from the world of the Beatles."
                name="description"
            ></meta>
            {blogs.map((blog, i) => (
                <BlogListItem
                    blog={blog}
                    bottom={i === blogs.length - 1}
                    key={blog.id}
                />
            ))}
        </div>
    );
};

export default BlogList;
