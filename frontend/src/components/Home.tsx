import CoverImage from "./CoverImage";
import RatingBar from "./RatingBar";
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
            <div className="flex flex-col gap-8 items-center justify-center sm:flex-row">
                <CoverImage
                    src={songOfTheDay && albumNameCoverMap[songOfTheDay.album]}
                />
                <div className="sm:text-left text-center">
                    <h2 className="dark:text-muted-dark font-body mb-2 sm:text-xl text-muted-light text-lg tracking-widest">
                        BEATLES SONG OF THE DAY
                    </h2>
                    <h1 className="dark:text-primary-dark font-bold font-lora sm:text-6xl text-4xl text-primary-light">
                        {songOfTheDay?.title}
                    </h1>
                    <p className="dark:text-secondary-dark font-body sm:text-2xl text-secondary-light text-xl">
                        {songOfTheDay?.album}
                    </p>
                </div>
            </div>
            <div className="gap-8 grid grid-cols-1 max-w-4xl mt-12 mx-auto sm:gap-12 sm:grid-cols-2 sm:mt-16">
                <div className="space-y-4">
                    <h3 className="dark:text-primary-dark font-bold font-lora text-2xl text-primary-light">
                        Rating Breakdown
                    </h3>
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
                <div className="dark:prose-invert max-w-none prose prose-lg">
                    <h3 className="font-bold font-lora text-2xl">Commentary</h3>
                    {renderParagraphs(songOfTheDay?.commentary)}
                </div>
            </div>
            <div className="mt-16 text-center">
                <p className="dark:text-muted-dark text-muted-light">
                    Overall Score
                </p>
                <p className="font-bold font-lora text-6xl">
                    {songOfTheDay?.SongRatings?.[0].percentage}%
                </p>
                <p className="dark:text-secondary-dark mt-2 text-lg text-secondary-light">
                    Rank #{songOfTheDay?.rank}
                </p>
            </div>
        </>
    );
};

export default Home;
