import type { Song } from "../../types";

type Props = {
    song: Song;
};

const OverallScore = ({ song }: Props) => {
    return (
        <>
            <span className="dark:text-muted-dark text-muted-light">
                Overall Score
            </span>
            <span className="font-bold font-lora text-6xl">
                {song.songRatings[0].percentage}%
            </span>
            <span className="dark:text-secondary-dark mt-2 text-lg text-secondary-light">
                Rank #{song.rank}
            </span>
        </>
    );
};

export default OverallScore;
