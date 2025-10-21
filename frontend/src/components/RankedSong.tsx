type Props = {
    bottom?: boolean;
    commentary: string;
    rank: number;
    title: string;
    top?: boolean;
};

const RankedSong = ({
    bottom = false,
    commentary,
    rank,
    title,
    top = false
}: Props) => {
    const wrapper = top
        ? "border-light/10 border-t dark:border-dark/10 pt-8"
        : "";

    return (
        <>
            <div className={wrapper}>
                <div className="flex gap-6 items-start">
                    <div className="dark:text-gray-500 flex-shrink-0 font-bold font-lora text-4xl text-gray-400 text-right w-24">
                        #{rank}
                    </div>
                    <div className="flex-grow">
                        <h2 className="dark:text-dark font-bold font-lora text-3xl text-light">
                            {title}
                        </h2>
                        <div className="dark:text-gray-300 max-w-none mt-2 prose text-gray-600">
                            <p>{commentary}</p>
                        </div>
                    </div>
                </div>
            </div>
            {!bottom && (
                <hr className="border-light/10 dark:border-dark/10 my-8" />
            )}
        </>
    );
};

export default RankedSong;
