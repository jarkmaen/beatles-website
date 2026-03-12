import { useState } from "react";

type Props = {
    alt: string;
    src: string;
};

const CoverImage = ({ alt, src }: Props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="h-48 lg:h-56 lg:w-56 md:h-52 md:w-52 relative shrink-0 w-48">
            <img
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                src={src}
                style={{ display: "none" }}
            />
            {isLoaded ? (
                <img
                    alt={alt}
                    className="h-48 lg:h-56 lg:w-56 md:h-52 md:w-52 object-cover rounded-lg shadow-2xl w-48"
                    src={src}
                />
            ) : (
                <div className="absolute animate-pulse bg-gray-200 dark:bg-gray-700 h-48 inset-0 lg:h-56 lg:w-56 md:h-52 md:w-52 object-cover rounded-lg shadow-2xl w-48" />
            )}
        </div>
    );
};

export default CoverImage;
