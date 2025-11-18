import { useState } from "react";

type Props = {
    src: string;
};

export default function CoverImage({ src }: Props) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="h-56 relative w-56">
            {!loaded && (
                <div className="absolute animate-pulse bg-gray-200 dark:bg-gray-700 h-56 inset-0 object-cover rounded-lg shadow-2xl w-56" />
            )}
            <img
                className="h-56 object-cover rounded-lg shadow-2xl w-56"
                onLoad={() => setLoaded(true)}
                src={src}
            />
        </div>
    );
}
