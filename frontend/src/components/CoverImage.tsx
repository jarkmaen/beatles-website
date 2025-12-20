import { useState } from "react";

type Props = {
    src: string | undefined;
};

export default function CoverImage({ src }: Props) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="h-48 relative shrink-0 sm:h-56 sm:w-56 w-48">
            <img
                onLoad={() => setIsLoaded(true)}
                src={src}
                style={{ display: "none" }}
            />
            {isLoaded ? (
                <img
                    className="h-48 object-cover rounded-lg shadow-2xl sm:h-56 sm:w-56 w-48"
                    src={src}
                />
            ) : (
                <div className="absolute animate-pulse bg-gray-200 dark:bg-gray-700 h-48 inset-0 object-cover rounded-lg shadow-2xl sm:h-56 sm:w-56 w-48" />
            )}
        </div>
    );
}
