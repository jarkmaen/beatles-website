import RatingsToolbar from "./RatingsToolbar";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
import type { RootState } from "../store";
import { headerData } from "../constants/headerData";
import { useSelector } from "react-redux";
import { useState } from "react";

const Ratings = () => {
    const [album, setAlbum] = useState("");
    const [hideNaked, setHideNaked] = useState(false);
    const [search, setSearch] = useState("");
    const songs = useSelector((state: RootState) => state.songs.songs);

    const filteredSongs = songs.filter((song) => {
        const matchesAlbum = album === "" || song.album === album;
        const matchesSearch = song.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const nakedFilter = !hideNaked || song.album !== "Let It Be... Naked";

        return matchesSearch && matchesAlbum && nakedFilter;
    });

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
            <div className="dark:text-muted-dark flex text-secondary-light">
                <table className="text-left text-sm">
                    <thead className="bg-table-header-light dark:bg-table-header-dark sticky text-xs top-0 tracking-wider">
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
                        {filteredSongs.map((song) => (
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
