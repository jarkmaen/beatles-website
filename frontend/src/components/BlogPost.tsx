const BlogPost = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
                <h1 className="dark:text-dark font-bold text-6xl text-light">
                    The Beatles: Ranked
                </h1>
                <p className="dark:text-gray-300 mt-2 text-gray-600 text-xl">
                    Every song, from worst to best.
                </p>
                <div className="dark:text-gray-300 max-w-2xl mt-4 mx-auto text-gray-600">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
                <div className="dark:text-gray-400 flex items-center justify-center mt-6 space-x-4 text-gray-500 text-sm">
                    <span>Date</span>
                    <span className="bg-gray-300 dark:bg-gray-600 h-4 w-px"></span>
                    <span>Author</span>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
