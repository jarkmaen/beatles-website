const LoadingScreen = () => {
    return (
        <div className="-mt-[30px] flex flex-col items-center justify-center max-w-xl min-h-[calc(100vh-125px)] mx-auto sm:-mt-[44px] sm:min-h-[calc(100vh-184px)]">
            <div className="h-20 mb-10 relative w-20">
                <div className="absolute border-4 border-gray-200 dark:border-gray-800 inset-0 rounded-full" />
                <div className="absolute animate-spin border-4 border-t-primary-light border-transparent dark:border-t-primary-dark inset-0 rounded-full" />
            </div>
            <h4 className="dark:text-primary-dark font-bold font-lora mb-4 text-3xl text-primary-light tracking-wide">
                Loading...
            </h4>
            <span className="dark:text-muted-dark font-lora italic text-lg text-muted-light">
                "It won't be long yeah..."
            </span>
        </div>
    );
};

export default LoadingScreen;
