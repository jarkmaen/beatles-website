import { albumNames } from "../constants/albumNames";

type Props = {
    album: string;
    hideNaked: boolean;
    search: string;
    setAlbum: React.Dispatch<React.SetStateAction<string>>;
    setHideNaked: React.Dispatch<React.SetStateAction<boolean>>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const RatingsToolbar = ({
    album,
    hideNaked,
    search,
    setAlbum,
    setHideNaked,
    setSearch
}: Props) => {
    return (
        <div className="border-divider-light border-t dark:border-divider-dark ml-[calc(50%_-_50vw)] mr-[calc(50%_-_50vw)] w-screen">
            <div className="container mx-auto px-4 py-4 sm:px-8 sm:py-6">
                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex-grow relative">
                        <input
                            className="bg-surface-light border-0 dark:bg-surface-dark dark:inset-ring-border-dark focus:inset-ring-2 focus:inset-ring-border-focus inset-ring inset-ring-border-light outline-none pl-10 pr-4 py-2 rounded-md w-full"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by song title..."
                            type="text"
                            value={search}
                        />
                        <div className="absolute flex inset-y-0 items-center left-0 pl-3 pointer-events-none">
                            <span className="material-symbols-outlined text-muted-dark">
                                search
                            </span>
                        </div>
                    </div>
                    <div className="relative">
                        <select
                            className="appearance-none bg-surface-light border-0 dark:bg-surface-dark dark:inset-ring-border-dark focus:inset-ring-2 focus:inset-ring-border-focus inset-ring inset-ring-border-light outline-none pl-3 pr-10 py-2 rounded-md w-full"
                            onChange={(e) => setAlbum(e.target.value)}
                            value={album}
                        >
                            <option value="">All albums and singles</option>
                            {albumNames.map((name) => {
                                const label =
                                    name === "Single" ? "Singles" : name;
                                return (
                                    <option key={name} value={name}>
                                        {label}
                                    </option>
                                );
                            })}
                        </select>
                        <div className="absolute flex inset-y-0 items-center pointer-events-none pr-3 right-0">
                            <span className="material-symbols-outlined text-muted-dark">
                                arrow_drop_down
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <input
                            checked={hideNaked}
                            className="accent-accent-light dark:accent-accent-dark"
                            onChange={(e) => setHideNaked(e.target.checked)}
                            type="checkbox"
                        />
                        <label className="ml-2 block text-sm text-primary-light dark:text-primary-dark">
                            Hide "Naked" album
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingsToolbar;
