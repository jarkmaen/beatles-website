import CoverImage from "./CoverImage";
import RatingBar from "./RatingBar";
import ShrinkWrapTitle from "./ShrinkWrapTitle";
import type { RootState } from "../store";
import type { SongRating } from "../types";
import { albumNameCoverMap } from "../constants/albumNameCoverMap";
import { ratingCategories } from "../constants/ratingCategories";
import { renderParagraphs } from "../utils";
import { useSelector } from "react-redux";

const Home = () => {
    const songOfTheDay = useSelector(
        (state: RootState) => state.songs.songOfTheDay
    );

    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col gap-8 items-center justify-center max-w-5xl sm:flex-row">
                    <h6 className="dark:text-muted-dark font-body sm:hidden text-muted-light text-lg tracking-widest">
                        BEATLES SONG OF THE DAY
                    </h6>
                    <CoverImage
                        src={
                            songOfTheDay
                                ? albumNameCoverMap[songOfTheDay.album]
                                : undefined
                        }
                    />
                    <div className="sm:text-left text-center">
                        <h6 className="dark:text-muted-dark font-body hidden mb-2 sm:block text-muted-light text-xl tracking-widest">
                            BEATLES SONG OF THE DAY
                        </h6>
                        <ShrinkWrapTitle title={songOfTheDay?.title} />
                        <span className="dark:text-secondary-dark font-body sm:text-2xl text-secondary-light text-xl">
                            {songOfTheDay?.album}
                        </span>
                    </div>
                </div>
            </div>
            <div className="gap-8 grid grid-cols-1 max-w-4xl mt-12 mx-auto sm:gap-12 sm:grid-cols-2 sm:mt-16">
                <div className="space-y-4">
                    <h5 className="dark:text-primary-dark font-bold font-lora sm:text-2xl text-primary-light text-xl">
                        Rating Breakdown
                    </h5>
                    <div className="space-y-3">
                        {songOfTheDay?.SongRatings?.length &&
                            Object.entries(ratingCategories)
                                .filter(
                                    ([key]) =>
                                        key !== "cultural_significance" &&
                                        songOfTheDay.SongRatings![0][
                                            key as keyof SongRating
                                        ] !== null
                                )
                                .sort(
                                    (
                                        [keyA, { maxPoints: maxA }],
                                        [keyB, { maxPoints: maxB }]
                                    ) => {
                                        const valueA =
                                            songOfTheDay.SongRatings![0][
                                                keyA as keyof SongRating
                                            ] as number;
                                        const valueB =
                                            songOfTheDay.SongRatings![0][
                                                keyB as keyof SongRating
                                            ] as number;

                                        const percentageA =
                                            (valueA / maxA) * 100;
                                        const percentageB =
                                            (valueB / maxB) * 100;

                                        return percentageB - percentageA;
                                    }
                                )
                                .map(([key, { label, maxPoints }]) => (
                                    <RatingBar
                                        key={key}
                                        label={label}
                                        maxPoints={maxPoints}
                                        points={
                                            songOfTheDay.SongRatings![0][
                                                key as keyof SongRating
                                            ] as number
                                        }
                                    />
                                ))}
                    </div>
                </div>
                <div className="dark:prose-invert hyphens-auto max-w-none prose sm:prose-lg">
                    <h5 className="dark:text-primary-dark font-bold font-lora sm:text-2xl text-primary-light text-xl">
                        Commentary
                    </h5>
                    {renderParagraphs(songOfTheDay?.commentary)}
                </div>
            </div>
            <div className="flex flex-col mt-12 sm:mt-16 text-center">
                <span className="dark:text-muted-dark text-muted-light">
                    Overall Score
                </span>
                <span className="font-bold font-lora text-6xl">
                    {songOfTheDay?.SongRatings?.[0].percentage}%
                </span>
                <span className="dark:text-secondary-dark mt-2 text-lg text-secondary-light">
                    Rank #{songOfTheDay?.rank}
                </span>
            </div>
        </>
    );
};

export default Home;
