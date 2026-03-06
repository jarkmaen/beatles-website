import type { Song } from "../../types";
import { PARAMETER_ORDER, PARAMETERS } from "../../constants/parameters";

type Props = {
    song: Song;
};

const TableData = ({ song }: Props) => {
    const rating = song.songRatings[0];

    const values = PARAMETER_ORDER.map(
        (key) => rating[key as keyof typeof rating]
    );

    const maxPoints = values.reduce<number>((sum, value, i) => {
        if (value !== null) {
            return sum + PARAMETERS[PARAMETER_ORDER[i]].maxPoints;
        }

        return sum;
    }, 0);

    const points = values.reduce<number>((sum, value) => sum + (value ?? 0), 0);

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
                <td className="px-6 py-4" key={Object.keys(PARAMETERS)[i]}>
                    {value === null ? "-" : value}
                </td>
            ))}
            <td className="px-6 py-4">{`${points}/${maxPoints}`}</td>
        </>
    );
};

export default TableData;
