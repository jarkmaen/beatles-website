const getBarColor = (percentage: number) => {
    if (percentage <= 20) {
        return "from-poor-start to-poor-end";
    } else if (percentage <= 40) {
        return "from-average-start to-average-end";
    } else if (percentage <= 60) {
        return "from-good-start to-good-end";
    } else if (percentage <= 80) {
        return "from-great-start to-great-end";
    } else {
        return "from-excellent-start to-excellent-end";
    }
};

type Props = {
    label: string;
    maxPoints: number;
    points: number;
};

const RatingBar = ({ label, maxPoints, points }: Props) => {
    const percentage = Math.round((points / maxPoints) * 100);
    const barColor = getBarColor(percentage);

    return (
        <div className="relative">
            <div className="dark:text-primary-dark flex justify-between text-primary-light">
                <span>{label}</span>
                <span className="font-bold">{percentage}%</span>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 h-2.5 mt-1 rounded-full w-full">
                <div
                    className={`bg-gradient-to-r h-2.5 rounded-full ${barColor}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default RatingBar;
