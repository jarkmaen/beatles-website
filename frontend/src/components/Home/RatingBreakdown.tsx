import OverallScore from "./OverallScore";
import RatingBar from "./RatingBar";
import type { Parameter } from "../../constants/parameters";
import type { Song, SongRating } from "../../types";
import { PARAMETERS } from "../../constants/parameters";

type Props = {
    isLongText: boolean;
    song: Song;
};

const RatingBreakdown = ({ isLongText, song }: Props) => {
    const rating = song.songRatings[0];

    const sortedParameters = (Object.keys(PARAMETERS) as Parameter[])
        .filter(
            (key) =>
                key !== "culturalSignificance" &&
                rating[key as keyof SongRating] !== null
        )
        .sort((a, b) => {
            const valueA =
                (rating[a as keyof SongRating] as number) /
                PARAMETERS[a].maxPoints;
            const valueB =
                (rating[b as keyof SongRating] as number) /
                PARAMETERS[b].maxPoints;

            return valueB - valueA;
        });

    return (
        <div className="lg:self-start lg:space-y-16 lg:sticky lg:top-4">
            <div className="space-y-4">
                <h5 className="dark:text-primary-dark font-bold font-lora md:text-2xl text-primary-light text-xl">
                    Rating Breakdown
                </h5>
                <div className="space-y-3">
                    {sortedParameters.map((key) => {
                        const { label, maxPoints } = PARAMETERS[key];

                        return (
                            <RatingBar
                                key={key}
                                label={label}
                                maxPoints={maxPoints}
                                points={
                                    rating[key as keyof SongRating] as number
                                }
                            />
                        );
                    })}
                </div>
            </div>
            <div className="flex-col hidden lg:flex text-center">
                {isLongText && <OverallScore song={song} />}
            </div>
        </div>
    );
};

export default RatingBreakdown;
