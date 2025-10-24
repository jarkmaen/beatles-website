type Props = {
    title: string;
    tooltip: string;
};

const TableHeader = ({ title, tooltip }: Props) => {
    return (
        <th className="px-6 py-3" scope="col">
            <div className="flex items-center">
                <span>{title}</span>
                <button className="flex justify-center ml-1">
                    <span className="!text-[16px] cursor-pointer material-symbols-outlined">
                        unfold_more
                    </span>
                </button>
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
