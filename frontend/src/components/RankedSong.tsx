import Divider from "./Divider";
import { renderParagraphs } from "../utils";

type Props = {
    bottom: boolean;
    commentary: string;
    rank: number;
    title: string;
};

const RankedSong = ({ bottom, commentary, rank, title }: Props) => {
    return (
        <>
            <div className="flex gap-6 items-start">
                <h3 className="dark:text-primary-dark flex-shrink-0 font-bold font-lora sm:dark:text-subtle-accent-dark sm:text-4xl sm:text-right sm:text-subtle-accent-light sm:w-24 text-2xl text-left text-primary-light w-full">
                    <span>#{rank}</span>
                    <span className="dark:text-primary-dark font-bold font-lora sm:hidden text-2xl text-primary-light">
                        . "{title}"
                    </span>
                </h3>
                <div className="flex-grow hidden sm:block">
                    <h4 className="dark:text-primary-dark font-bold font-lora text-3xl text-primary-light">
                        {title}
                    </h4>
                    <div className="dark:prose-invert hyphens-auto max-w-none mt-2 prose prose-lg">
                        {renderParagraphs(commentary)}
                    </div>
                </div>
            </div>
            <div className="block dark:prose-invert hyphens-auto max-w-none mt-2 prose sm:hidden">
                {renderParagraphs(commentary)}
            </div>
            {!bottom && <Divider />}
        </>
    );
};

export default RankedSong;
