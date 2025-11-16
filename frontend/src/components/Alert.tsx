type Props = {
    message: string;
    title: string;
    variant: "success" | "error";
};

const Alert = ({ message, title, variant }: Props) => {
    const isSuccess = variant === "success";

    const color = isSuccess ? "green" : "red";
    const containerClass = `bg-${color}-50 dark:bg-${color}-900/20 p-4 rounded-md`;
    const iconClass = `dark:text-${color}-500 material-symbols-outlined text-${color}-400`;
    const textClass = `dark:text-${color}-400 mt-2 text-${color}-700 text-sm`;
    const titleClass = `dark:text-${color}-300 text-${color}-800 text-sm`;

    return (
        <div className="space-y-4">
            <div className={containerClass}>
                <div className="flex">
                    <span className={iconClass}>
                        {isSuccess ? "check_circle" : "error"}
                    </span>
                    <div className="ml-3">
                        <h3 className={titleClass}>{title}</h3>
                        <div className={textClass}>
                            <p>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;
