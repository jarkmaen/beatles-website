type Props = {
    marginSize?: number;
};

const Divider = ({ marginSize = 8 }: Props) => {
    return (
        <hr
            className={`border-divider-light dark:border-divider-dark my-${marginSize}`}
        />
    );
};

export default Divider;
