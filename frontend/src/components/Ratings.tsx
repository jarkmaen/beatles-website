import TableData from "./TableData";
import TableHeader from "./TableHeader";
import type { RootState } from "../store";
import { headerData } from "../constants/headerData";
import { useSelector } from "react-redux";

const Ratings = () => {
    const songs = useSelector((state: RootState) => state.songs.songs);

    return (
        <div className="flex-grow">
            <table className="dark:text-gray-300 min-w-full text-gray-600 text-left text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700/20 dark:text-gray-400 sticky text-gray-700 text-xs top-0 tracking-wider">
                    <tr>
                        {headerData.map((h) => (
                            <TableHeader
                                key={h.title}
                                title={h.title}
                                tooltip={h.tooltip}
                            />
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {songs.map((song) => (
                        <tr
                            className="border-light bg-table-light  dark:bg-table-dark dark:border-dark dark:hover:bg-gray-800/50 hover:bg-gray-50 transition-colors"
                            key={song.id}
                        >
                            <TableData song={song} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Ratings;
