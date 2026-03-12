import RatingsToolbar from "./RatingsToolbar";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
import type { RootState } from "../../store";
import type { Song, SongRating, SortDirection } from "../../types";
import { tableHeaderData } from "../../constants/tableHeaderData";
import { useSelector } from "react-redux";
import { useState } from "react";

const Ratings = () => {
    const [album, setAlbum] = useState("");
    const [search, setSearch] = useState("");
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);
    const [sortKey, setSortKey] = useState<string | null>(null);

    const songs = useSelector((state: RootState) => state.songs.songs);

    const filteredSongs = songs.filter((song: Song) => {
        const matchesAlbum = album === "" || song.album === album;
        const matchesSearch = song.title
            .toLowerCase()
            .includes(search.toLowerCase());

        return matchesAlbum && matchesSearch;
    });

    const sortedSongs = [...filteredSongs];

    const getValue = (key: string, song: Song): number | string | null => {
        if (key === "rank" || key === "title") {
            return song[key];
        }

        return song.songRatings[0][key as keyof SongRating] ?? null;
    };

    if (sortDirection && sortKey) {
        sortedSongs.sort((a, b) => {
            const valueA = getValue(sortKey, a);
            const valueB = getValue(sortKey, b);

            const isEmptyA = valueA === null;
            const isEmptyB = valueB === null;

            if (isEmptyA && isEmptyB) {
                return 0;
            }

            if (isEmptyA) {
                return 1;
            }

            if (isEmptyB) {
                return -1;
            }

            if (typeof valueA === "string" && typeof valueB === "string") {
                const cmp = valueA.localeCompare(valueB);

                return sortDirection === "asc" ? cmp : -cmp;
            } else {
                const numberA = Number(valueA);
                const numberB = Number(valueB);

                return sortDirection === "asc"
                    ? numberA - numberB
                    : numberB - numberA;
            }
        });
    }

    const handleSort = (key: string | null) => {
        if (!key) {
            return;
        }

        if (sortKey !== key) {
            setSortKey(key);
            setSortDirection("asc");
            return;
        }

        if (sortDirection === "asc") {
            setSortDirection("desc");
        } else if (sortDirection === "desc") {
            setSortDirection(null);
            setSortKey(null);
        } else {
            setSortDirection("asc");
        }
    };

    return (
        <>
            <title>Ratings | Fab Two</title>
            <meta
                content="The complete Beatles song ratings table. View our ratings for every original track. Filter by album or search for any song."
                name="description"
            ></meta>
            <RatingsToolbar
                album={album}
                search={search}
                setAlbum={setAlbum}
                setSearch={setSearch}
            />
            <div className="dark:text-muted-dark overflow-auto text-secondary-light">
                <table className="table-fixed text-left text-sm">
                    <thead className="bg-table-header-light dark:bg-table-header-dark sticky text-xs top-0 tracking-wider transition">
                        <tr>
                            {tableHeaderData.map((header) => (
                                <TableHeader
                                    activeSortKey={sortKey}
                                    columnSortKey={header.sortKey}
                                    key={header.label}
                                    label={header.label}
                                    onSort={handleSort}
                                    sortDirection={sortDirection}
                                    tooltip={header.tooltip}
                                />
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {sortedSongs.map((song) => (
                            <tr
                                className="bg-surface-light border-divider-light dark:bg-surface-dark dark:border-divider-dark dark:hover:bg-table-header-dark hover:bg-table-header-light transition"
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
