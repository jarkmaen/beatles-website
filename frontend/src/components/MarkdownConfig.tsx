import { Link } from "react-router-dom";
import { type Components } from "react-markdown";

export const MarkdownA: Components["a"] = ({ children, href, ...props }) => (
    <Link to={href ?? ""} {...props}>
        {children}
    </Link>
);

export const MarkdownH3: Components["h3"] = ({ ...props }) => (
    <h3
        className="dark:text-primary-dark font-bold font-lora lg:text-4xl text-2xl text-primary-light"
        {...props}
    />
);
