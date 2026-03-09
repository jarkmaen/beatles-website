import CoverImage from "./CoverImage";
import LoadingScreen from "../LoadingScreen";
import OverallScore from "./OverallScore";
import RatingBreakdown from "./RatingBreakdown";
import ShrinkWrapTitle from "./ShrinkWrapTitle";
import type { RootState } from "../../store";
import { ALBUM_COVER_MAP } from "../../constants/albums";
import { renderParagraphs } from "../../utils";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
    const [isLongText, setIsLongText] = useState(false);

    const commentaryRef = useRef<HTMLDivElement>(null);

    const songOfTheDay = useSelector(
        (state: RootState) => state.songs.songOfTheDay
    );

    useEffect(() => {
        if (commentaryRef.current) {
            setIsLongText(commentaryRef.current.offsetHeight >= 620);
        }
    }, [songOfTheDay]);

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
                        <span className="dark:text-secondary-dark font-body md:text-2xl text-secondary-light text-xl">
                            {songOfTheDay.album}
                        </span>
                    </div>
                </div>
            </div>
            <div className="gap-8 grid grid-cols-1 lg:gap-12 lg:grid-cols-2 lg:mt-16 max-w-4xl mt-12 mx-auto">
                <RatingBreakdown isLongText={isLongText} song={songOfTheDay} />
                <div
                    className="dark:prose-invert hyphens-auto max-w-none md:prose-lg prose"
                    ref={commentaryRef}
                >
                    <div className="bg-light dark:bg-dark lg:-mt-4 lg:pt-4 lg:sticky lg:top-0 transition z-10">
                        <h5 className="dark:text-primary-dark font-bold font-lora md:text-2xl text-primary-light text-xl">
                            Commentary
                        </h5>
                        <div className="absolute bg-gradient-to-b dark:from-dark from-light h-8 hidden left-0 lg:block pointer-events-none right-0 to-transparent transition" />
                    </div>
                    {songOfTheDay.commentaryLanding
                        ? renderParagraphs(songOfTheDay.commentaryLanding)
                        : renderParagraphs(songOfTheDay.commentary)}
                </div>
            </div>
            <div
                className={`flex flex-col ${isLongText ? "lg:hidden" : ""} lg:mt-16 mt-12 text-center`}
            >
                <OverallScore song={songOfTheDay} />
            </div>
        </>
    );
};

export default Home;
