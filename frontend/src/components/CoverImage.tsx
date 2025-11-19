type Props = {
    src: string | null;
};

export default function CoverImage({ src }: Props) {
    return (
        <div className="h-56 relative w-56">
            {src ? (
                <img
                    className={"h-56 object-cover rounded-lg shadow-2xl w-56"}
                    src={src}
                />
            ) : (
                <div className="absolute animate-pulse bg-gray-200 dark:bg-gray-700 h-56 inset-0 object-cover rounded-lg shadow-2xl w-56" />
            )}
        </div>
    );
}
