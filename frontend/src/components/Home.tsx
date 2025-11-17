import RatingBar from "./RatingBar";
import type { RootState } from "../store";
import type { SongRating } from "../types";
import { albumCoverMap } from "../constants/albumCovers";
import { ratingCategory } from "../constants/ratingCategories";
import { useSelector } from "react-redux";

const Home = () => {
    const songOfTheDay = useSelector(
        (state: RootState) => state.songs.songOfTheDay
    );

    const albumCover =
        songOfTheDay && albumCoverMap[songOfTheDay.album]
            ? albumCoverMap[songOfTheDay.album]
            : albumCoverMap["Single"];

    return (
        <>
            <div className="flex flex-row gap-8 items-center justify-center">
                <img
                    className="h-56 object-cover rounded-lg shadow-2xl w-56"
                    src={albumCover}
                />
                <div>
                    <h2 className="dark:text-muted-dark font-body mb-2 text-muted-light text-xl tracking-widest">
                        BEATLES SONG OF THE DAY
                    </h2>
                    <h1 className="dark:text-primary-dark font-bold font-lora text-6xl text-primary-light">
                        {songOfTheDay?.title}
                    </h1>
                    <p className="dark:text-secondary-dark font-body text-2xl text-secondary-light">
                        {songOfTheDay?.album}
                    </p>
                </div>
            </div>
            <div className="gap-12 grid grid-cols-2 max-w-4xl mt-16 mx-auto">
                <div className="space-y-4">
                    <h3 className="dark:text-primary-dark font-bold font-lora text-2xl text-primary-light">
                        Rating Breakdown
                    </h3>
                    <div className="space-y-3">
                        {songOfTheDay?.SongRatings?.length &&
                            Object.entries(ratingCategory)
                                .filter(
                                    ([key]) =>
                                        key !== "cultural_significance" &&
                                        songOfTheDay.SongRatings![0][
                                            key as keyof SongRating
                                        ] !== null
                                )
                                .sort(
                                    (
                                        [keyA, { max: maxA }],
                                        [keyB, { max: maxB }]
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
                                .map(([key, { label, max }]) => (
                                    <RatingBar
                                        key={key}
                                        label={label}
                                        max={max}
                                        value={
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
                    {songOfTheDay?.commentary
                        .replace(/\\n\\n/g, "\n\n")
                        .split("\n\n")
                        .map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                </div>
            </div>
            <div className="mt-16 text-center">
                <p className="dark:text-muted-dark text-muted-light">
                    Overall Score
                </p>
                <p className="font-bold font-display text-6xl">
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
