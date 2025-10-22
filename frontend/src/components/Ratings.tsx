const Ratings = () => {
    return (
        <div className="flex-grow">
            <table className="dark:text-gray-300 min-w-full text-gray-600 text-left text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700/20 dark:text-gray-400 sticky text-gray-700 text-xs top-0 tracking-wider">
                    <tr>
                        <th className="px-6 py-3" scope="col">
                            <div className="flex items-center">
                                SONG
                                <button className="ml-1">
                                    <span className="material-symbols-outlined text-[16px]">
                                        unfold_more
                                    </span>
                                </button>
                            </div>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default Ratings;
