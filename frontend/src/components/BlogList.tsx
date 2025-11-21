import { Link } from "react-router-dom";

const BlogList = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
                <div>
                    <h1 className="dark:hover:text-secondary-dark dark:text-primary-dark font-bold font-lora hover:text-secondary-light text-6xl text-center text-primary-light transition-colors">
                        <Link to="/blog">The Beatles: Ranked</Link>
                    </h1>
                    <div className="dark:text-muted-dark flex items-center justify-center mb-8 mt-8 space-x-4 text-muted-light text-sm">
                        <span>October 21, 2025</span>
                        <span className="dark:text-subtle-accent-dark select-none text-subtle-accent-light">
                            |
                        </span>
                        <span>By Jonas van Maldeghem</span>
                    </div>
                    <div className="dark:prose-invert h-24 max-w-none overflow-hidden prose prose-lg relative">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <div className="absolute bg-gradient-to-t bottom-0 dark:from-dark from-light h-12 left-0 to-transparent transition-colors w-full"></div>
                    </div>
                    <Link
                        className="dark:text-accent-dark font-bold hover:underline inline-block mt-4 text-accent-light text-sm tracking-widest"
                        to="/blog"
                    >
                        READ MORE
                    </Link>
                    <hr className="border-divider-light dark:border-divider-dark my-8" />
                </div>
                <div>
                    <h1 className="dark:hover:text-secondary-dark dark:text-primary-dark font-bold font-lora hover:text-secondary-light text-6xl text-center text-primary-light transition-colors">
                        <Link to="/blog">The Beatles: Ranked</Link>
                    </h1>
                    <div className="dark:text-muted-dark flex items-center justify-center mb-8 mt-8 space-x-4 text-muted-light text-sm">
                        <span>October 21, 2025</span>
                        <span className="dark:text-subtle-accent-dark select-none text-subtle-accent-light">
                            |
                        </span>
                        <span>By Jonas van Maldeghem</span>
                    </div>
                    <div className="dark:prose-invert h-24 max-w-none overflow-hidden prose prose-lg relative">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <div className="absolute bg-gradient-to-t bottom-0 dark:from-dark from-light h-12 left-0 to-transparent transition-colors w-full"></div>
                    </div>
                    <Link
                        className="dark:text-accent-dark font-bold hover:underline inline-block mt-4 text-accent-light text-sm tracking-widest"
                        to="/blog"
                    >
                        READ MORE
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogList;
