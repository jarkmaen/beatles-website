import { useState } from "react";

type Props = {
    alt: string;
    src: string;
};

const CoverImage = ({ alt, src }: Props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div
            className={`${!isLoaded ? "animate-pulse" : ""} bg-gray-200 dark:bg-gray-700 h-48 lg:h-56 lg:w-56 md:h-52 md:w-52 overflow-hidden rounded-lg shadow-2xl shrink-0 w-48`}
        >
            <img
                alt={alt}
                className={`
                    h-full object-cover ${isLoaded ? "opacity-100" : "opacity-0"} w-full
                `}
                fetchPriority="high"
                onLoad={() => setIsLoaded(true)}
                src={src}
            />
        </div>
    );
};

export default CoverImage;
