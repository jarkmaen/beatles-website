import type { Song, SongRating } from "../types";
import { ratingCategories } from "../constants/ratingCategories";

type Props = {
    song: Song;
};

const TableData = ({ song }: Props) => {
    const categories: (keyof typeof ratingCategories)[] = [
        "full_instrumentation",
        "vocals",
        "lyrics",
        "originality_innovation",
        "bassline",
        "percussion",
        "solo",
        "chord_progression",
        "cultural_significance"
    ];

    const songRating: SongRating = song.SongRatings![0];
    const values = categories.map((i) => songRating[i]);

    const points = values.reduce<number>((sum, value) => {
        return sum + (typeof value === "number" ? value : 0);
    }, 0);

    const totalPoints = categories.reduce<number>((sum, i, j) => {
        const value = values[j];
        return sum + (typeof value === "number" ? ratingCategories[i].maxPoints : 0);
    }, 0);

    return (
        <>
            <td className="dark:text-primary-dark font-bold px-6 py-4 text-primary-light">
                {song.rank}
            </td>
            <th
                className="dark:text-primary-dark font-bold font-lora px-6 py-4 text-base text-primary-light"
                scope="row"
            >
                {song.title}
            </th>
            {values.map((value, i) => (
                <td className="px-6 py-4" key={categories[i]}>
                    {value === null || value === undefined ? "N/A" : value}
                </td>
            ))}
            <td className="px-6 py-4">{`${points}/${totalPoints}`}</td>
        </>
    );
};

export default TableData;
