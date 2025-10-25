import { albums } from "../constants/albums";

const RatingsToolbar = () => {
    return (
        <div className="border-divider-light border-t dark:border-divider-dark ml-[calc(50%_-_50vw)] mr-[calc(50%_-_50vw)] w-screen">
            <div className="container mx-auto px-8 py-6">
                <div className="flex gap-4">
                    <div className="flex-grow relative">
                        <input
                            className="bg-table-cell-light border border-divider-light dark:bg-table-cell-dark dark:border-divider-dark focus:ring-2 focus:ring-blue-500 outline-none pl-10 pr-4 py-2 rounded-md w-full"
                            placeholder="Search by song title..."
                            type="text"
                        />
                        <div className="absolute flex inset-y-0 items-center left-0 pl-3 pointer-events-none">
                            <span className="material-symbols-outlined text-muted-dark">
                                search
                            </span>
                        </div>
                    </div>
                    <div className="relative">
                        <select className="appearance-none bg-table-cell-light border border-divider-light dark:bg-table-cell-dark dark:border-divider-dark focus:ring-2 focus:ring-blue-500 outline-none pl-3 pr-10 py-2 rounded-md w-full">
                            <option value="">All songs</option>
                            {albums.map((album) => (
                                <option key={album} value={album}>
                                    {album}
                                </option>
                            ))}
                        </select>
                        <div className="absolute flex inset-y-0 items-center pointer-events-none pr-3 right-0">
                            <span className="material-symbols-outlined text-muted-dark">
                                arrow_drop_down
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" />
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
