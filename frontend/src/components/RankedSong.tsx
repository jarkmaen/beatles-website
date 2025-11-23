import Divider from "./Divider";

type Props = {
    bottom: boolean;
    commentary: string;
    rank: number;
    title: string;
};

const RankedSong = ({ bottom = false, commentary, rank, title }: Props) => {
    return (
        <>
            <div className="flex gap-6 items-start">
                <div className="dark:text-subtle-accent-dark flex-shrink-0 font-bold font-lora text-4xl text-subtle-accent-light text-right w-24">
                    #{rank}
                </div>
                <div className="flex-grow">
                    <h2 className="dark:text-primary-dark font-bold font-lora text-3xl text-primary-light">
                        {title}
                    </h2>
                    <div className="dark:prose-invert max-w-none mt-2 prose prose-lg">
                        {commentary
                            .replace(/\\n\\n/g, "\n\n")
                            .split("\n\n")
                            .map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                    </div>
                </div>
            </div>
            {!bottom && <Divider />}
        </>
    );
};

export default RankedSong;
