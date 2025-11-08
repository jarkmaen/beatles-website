import RatingsToolbar from "./RatingsToolbar";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
import type { RootState } from "../store";
import type { Song, SongRating, SortDirection } from "../types";
import { headerData } from "../constants/headerData";
import { useSelector } from "react-redux";
import { useState } from "react";

const Ratings = () => {
    const [album, setAlbum] = useState("");
    const [hideNaked, setHideNaked] = useState(false);
    const [search, setSearch] = useState("");
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);
    const [sortKey, setSortKey] = useState<string | null>(null);

    const songs = useSelector((state: RootState) => state.songs.songs);

    const filteredSongs = songs.filter((song: Song) => {
        const matchesAlbum = album === "" || song.album === album;
        const matchesSearch = song.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const nakedFilter = !hideNaked || song.album !== "Let It Be... Naked";

        return matchesAlbum && matchesSearch && nakedFilter;
    });

    const sortedSongs = [...filteredSongs];

    const getValue = (key: string, song: Song): number | string => {
        if (key === "rank" || key === "title") {
            return (song as any)[key];
        }

        return song.SongRatings?.[0]?.[key as keyof SongRating] ?? 0;
    };

    if (sortDirection && sortKey) {
        sortedSongs.sort((a, b) => {
            const valueA = getValue(sortKey, a);
            const valueB = getValue(sortKey, b);

            if (typeof valueA === "string" && typeof valueB === "string") {
                const cmp = valueA.localeCompare(valueB);

                if (cmp !== 0) {
                    return sortDirection === "asc" ? cmp : -cmp;
                }
            } else {
                const numberA = Number(valueA);
                const numberB = Number(valueB);

                if (numberA !== numberB) {
                    return sortDirection === "asc"
                        ? numberA - numberB
                        : numberB - numberA;
                }
            }

            return 0;
        });
    }

    const handleSort = (key: string | null) => {
        if (!key) {
            return;
        }

        if (sortKey !== key) {
            setSortDirection("asc");
            setSortKey(key);
        } else if (sortDirection === "asc") {
            setSortDirection("desc");
        } else {
            setSortDirection(null);
            setSortKey(null);
        }
    };

    return (
        <>
            <RatingsToolbar
                album={album}
                hideNaked={hideNaked}
                search={search}
                setAlbum={setAlbum}
                setHideNaked={setHideNaked}
                setSearch={setSearch}
            />
            <div className="dark:text-muted-dark flex overflow-x-auto text-secondary-light">
                <table className="table-fixed text-left text-sm">
                    <thead className="bg-table-header-light dark:bg-table-header-dark sticky text-xs top-0 tracking-wider">
                        <tr>
                            {headerData.map((h) => (
                                <TableHeader
                                    activeSortKey={sortKey}
                                    columnSortKey={h.sortKey}
                                    key={h.title}
                                    onSort={handleSort}
                                    sortDirection={sortDirection}
                                    title={h.title}
                                    tooltip={h.tooltip}
                                />
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {sortedSongs.map((song) => (
                            <tr
                                className="bg-table-cell-light border-divider-light dark:bg-table-cell-dark dark:border-divider-dark dark:hover:bg-table-header-dark hover:bg-table-header-light transition-colors"
                                key={song.id}
                            >
                                <TableData song={song} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Ratings;
