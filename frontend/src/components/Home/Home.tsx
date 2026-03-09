import CoverImage from "./CoverImage";
import LoadingScreen from "../LoadingScreen";
import RatingBreakdown from "./RatingBreakdown";
import ShrinkWrapTitle from "./ShrinkWrapTitle";
import type { RootState } from "../../store";
import { ALBUM_COVER_MAP } from "../../constants/albums";
import { renderParagraphs } from "../../utils";
import { useSelector } from "react-redux";

const Home = () => {
    const songOfTheDay = useSelector(
        (state: RootState) => state.songs.songOfTheDay
    );

    if (!songOfTheDay) {
        return <LoadingScreen />;
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col gap-8 items-center justify-center lg:flex-row max-w-5xl">
                    <h6 className="dark:text-muted-dark font-body lg:hidden text-muted-light text-lg tracking-widest">
                        BEATLES SONG OF THE DAY
                    </h6>
                    <CoverImage src={ALBUM_COVER_MAP[songOfTheDay.album]} />
                    <div className="lg:text-left text-center">
                        <h6 className="dark:text-muted-dark font-body hidden lg:block mb-2 text-muted-light text-xl tracking-widest">
                            BEATLES SONG OF THE DAY
                        </h6>
                        <ShrinkWrapTitle title={songOfTheDay.title} />
                        <span className="dark:text-secondary-dark font-body lg:text-2xl text-secondary-light text-xl">
                            {songOfTheDay.album}
                        </span>
                    </div>
                </div>
            </div>
            <div className="gap-8 grid grid-cols-1 lg:gap-12 lg:grid-cols-2 lg:mt-16 max-w-4xl mt-12 mx-auto">
                <RatingBreakdown rating={songOfTheDay.songRatings[0]} />
                <div className="dark:prose-invert hyphens-auto lg:prose-lg max-w-none prose">
                    <h5 className="dark:text-primary-dark font-bold font-lora lg:text-2xl text-primary-light text-xl">
                        Commentary
                    </h5>
                    {songOfTheDay.commentaryLanding
                        ? renderParagraphs(songOfTheDay.commentaryLanding)
                        : renderParagraphs(songOfTheDay.commentary)}
                </div>
            </div>
            <div className="flex flex-col lg:mt-16 mt-12 text-center">
                <span className="dark:text-muted-dark text-muted-light">
                    Overall Score
                </span>
                <span className="font-bold font-lora text-6xl">
                    {songOfTheDay.songRatings[0].percentage}%
                </span>
                <span className="dark:text-secondary-dark mt-2 text-lg text-secondary-light">
                    Rank #{songOfTheDay.rank}
                </span>
            </div>
        </>
    );
};

export default Home;
