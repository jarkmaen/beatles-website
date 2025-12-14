type Props = {
    src: string | null;
};

export default function CoverImage({ src }: Props) {
    return (
        <div className="h-48 relative sm:h-56 sm:w-56 w-48">
            {src ? (
                <img
                    className={"h-48 object-cover rounded-lg shadow-2xl sm:h-56 sm:w-56 w-48"}
                    src={src}
                />
            ) : (
                <div className="absolute animate-pulse bg-gray-200 dark:bg-gray-700 h-48 inset-0 object-cover rounded-lg shadow-2xl sm:h-56 sm:w-56 w-48" />
            )}
        </div>
    );
}
