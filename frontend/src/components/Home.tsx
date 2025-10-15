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

    console.log(songOfTheDay);

    return (
        <>
            <div className="flex flex-row gap-8 items-center justify-center">
                <img
                    className="h-56 object-cover rounded-lg shadow-2xl w-56"
                    src={albumCover}
                />
                <div>
                    <h2 className="dark:text-gray-400 font-body mb-2 text-gray-500 text-xl tracking-widest">
                        BEATLES SONG OF THE DAY
                    </h2>
                    <h1 className="dark:text-dark font-bold font-lora text-6xl text-light">
                        {songOfTheDay?.title}
                    </h1>
                    <p className="dark:text-gray-300 font-body text-2xl text-gray-600">
                        {songOfTheDay?.album}
                    </p>
                </div>
            </div>
            <div className="gap-12 grid grid-cols-2 max-w-4xl mt-16 mx-auto">
                <div className="space-y-4">
                    <h3 className="dark:text-dark font-bold font-lora text-2xl text-light">
                        Rating Breakdown
                    </h3>
                    <div className="space-y-3">
                        {songOfTheDay?.SongRatings?.length &&
                            Object.entries(ratingCategory).map(
                                ([key, { label, max }]) => (
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
                                )
                            )}
                    </div>
                </div>
                <div className="dark:prose-invert max-w-none prose prose-lg">
                    <h3 className="dark:text-dark font-bold font-lora text-2xl text-light">
                        Commentary
                    </h3>
                    <p>{songOfTheDay?.commentary}</p>
                </div>
            </div>
            <div className="mt-16 text-center">
                <p className="dark:text-gray-400 text-gray-500">
                    Overall Score
                </p>
                <p className="dark:text-dark font-bold font-display text-6xl text-light">
                    {songOfTheDay?.SongRatings?.[0].percentage}%
                </p>
                <p className="dark:text-gray-300 mt-2 text-gray-600 text-lg">
                    Rank #{songOfTheDay?.rank}
                </p>
            </div>
        </>
    );
};

export default Home;
