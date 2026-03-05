import RatingBar from "./RatingBar";
import type { Parameter } from "../../constants/parameters";
import type { SongRating } from "../../types";
import { PARAMETERS } from "../../constants/parameters";

type Props = {
    rating: SongRating;
};

const RatingBreakdown = ({ rating }: Props) => {
    const sortedParameters = (Object.keys(PARAMETERS) as Parameter[])
        .filter(
            (key) =>
                key !== "culturalSignificance" &&
                rating[key as keyof SongRating] !== null
        )
        .sort((keyA, keyB) => {
            const valueA =
                (rating[keyA as keyof SongRating] as number) /
                PARAMETERS[keyA].maxPoints;
            const valueB =
                (rating[keyB as keyof SongRating] as number) /
                PARAMETERS[keyB].maxPoints;

            return valueB - valueA;
        });

    return (
        <div className="space-y-4">
            <h5 className="dark:text-primary-dark font-bold font-lora sm:text-2xl text-primary-light text-xl">
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
                            points={rating[key as keyof SongRating] as number}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default RatingBreakdown;
