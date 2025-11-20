import TooltipPortal from "./TooltipPortal";
import type { SortDirection } from "../types";
import { useRef, useState } from "react";

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
    const [tooltipPosition, setTooltipPosition] = useState<{
        left: number;
        top: number;
    } | null>(null);

    const iconRef = useRef<HTMLSpanElement>(null);
    const isActive = activeSortKey === columnSortKey;

    const headerContentClass =
        columnSortKey === "title"
            ? "flex items-center w-[230px]"
            : "flex items-center";

    const icon = !isActive
        ? "unfold_more"
        : sortDirection === "asc"
        ? "arrow_upward"
        : sortDirection === "desc"
        ? "arrow_downward"
        : "unfold_more";

    const hideTooltip = () => setTooltipPosition(null);

    const showTooltip = () => {
        if (!iconRef.current) {
            return;
        }

        const rect = iconRef.current.getBoundingClientRect();

        if (columnSortKey === null) {
            setTooltipPosition({
                left: rect.left - 10,
                top: rect.top + rect.height / 2
            });
        } else {
            setTooltipPosition({
                left: rect.left + rect.width / 2,
                top: rect.top - 8
            });
        }
    };

    return (
        <th className="px-6 py-3" scope="col">
            <div className={headerContentClass}>
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
                <div className="flex justify-center ml-1">
                    <span
                        className="!text-[20px] cursor-pointer material-symbols-outlined"
                        onMouseEnter={showTooltip}
                        onMouseLeave={hideTooltip}
                        ref={iconRef}
                    >
                        info
                    </span>
                </div>
                {tooltipPosition && (
                    <TooltipPortal position={tooltipPosition}>
                        <div
                            className={`font-bold text-xs ${
                                columnSortKey === null
                                    ? "tooltip-left"
                                    : "tooltip-top"
                            }`}
                        >
                            {tooltip}
                        </div>
                    </TooltipPortal>
                )}
            </div>
        </th>
    );
};

export default TableHeader;
