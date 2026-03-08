import type { MarginSize } from "../types";

type Props = {
    marginSize: MarginSize;
};

const Divider = ({ marginSize }: Props) => {
    const marginClasses: Record<MarginSize, string> = {
        4: "my-4",
        8: "my-8",
        12: "my-12"
    };

    return (
        <hr
            className={`border-divider-light dark:border-divider-dark ${marginClasses[marginSize]} transition`}
        />
    );
};

export default Divider;
