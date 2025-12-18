type Props = {
    marginSize?: number;
};

const Divider = ({ marginSize = 8 }: Props) => {
    const marginClass = marginSize === 4 ? "my-4" : "my-8";

    return (
        <hr
            className={`border-divider-light dark:border-divider-dark ${marginClass}`}
        />
    );
};

export default Divider;
