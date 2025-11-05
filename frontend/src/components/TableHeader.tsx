import type { SortDirection } from "../types";

type Props = {
    activeSortKey: string | null;
    columnSortKey: string | null;
    onSort: (key: string | null) => void;
    sortDirection: SortDirection;
    title: string;
    tooltip: string;
};

const TableHeader = ({
    activeSortKey,
    columnSortKey,
    onSort,
    sortDirection,
    title,
    tooltip
}: Props) => {
    const isActive = activeSortKey === columnSortKey;

    const icon = !isActive
        ? "unfold_more"
        : sortDirection === "asc"
        ? "arrow_upward"
        : sortDirection === "desc"
        ? "arrow_downward"
        : "unfold_more";

    return (
        <th className="px-6 py-3" scope="col">
            <div className="flex items-center">
                <span>{title}</span>
                {columnSortKey && (
                    <button
                        onClick={() => onSort(columnSortKey)}
                        className="flex justify-center ml-1"
                    >
                        <span className="!text-[16px] cursor-pointer material-symbols-outlined">
                            {icon}
                        </span>
                    </button>
                )}
                <div className="flex has-tooltip justify-center ml-1 relative">
                    <span className="!text-[20px] cursor-pointer material-symbols-outlined">
                        info
                    </span>
                    <div className="tooltip whitespace-pre-line">{tooltip}</div>
                </div>
            </div>
        </th>
    );
};

export default TableHeader;
