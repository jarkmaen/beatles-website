import { NavLink } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto sm:-mt-[44px] sm:min-h-[calc(100vh-184px)]">
            <h1 className="dark:text-backdrop-dark font-bold font-lora select-none sm:text-[11rem] text-9xl text-backdrop-light">
                404
            </h1>
            <div className="-mt-10 sm:-mt-16 space-y-6 text-center z-10">
                <h2 className="dark:text-primary-dark font-bold font-lora sm:text-5xl text-3xl text-primary-light">
                    Page Not Found
                </h2>
                <p className="dark:prose-invert max-w-lg prose sm:prose-lg">
                    It seems this page has gone on a magical mystery tour
                    without us. We couldn't find the content you were looking
                    for, but don't let it bring you down.
                </p>
                <div className="flex flex-col justify-center sm:flex-row sm:space-x-6 sm:space-y-0 space-y-4">
                    <button className="bg-primary-light cursor-pointer dark:bg-primary-dark dark:hover:bg-primary-dark/90 dark:text-black flex font-bold hover:bg-primary-light/90 justify-center px-6 py-3 rounded-md shadow-sm text-sm text-white transition-colors">
                        <NavLink to="/">RETURN HOME</NavLink>
                    </button>
                    <button className="cursor-pointer dark:hover:bg-surface-dark dark:ring-border-dark dark:text-white flex font-bold hover:bg-gray-100 justify-center px-6 py-3 ring ring-border-light ring-inset rounded-md text-black text-sm transition-colors">
                        <NavLink to="/blogs">READ OUR BLOG</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
