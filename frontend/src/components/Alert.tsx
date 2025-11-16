type Props = {
    message: string;
    onClose: () => void;
    variant: "success" | "error";
};

const Alert = ({ message, onClose, variant }: Props) => {
    const isSuccess = variant === "success";

    const color = isSuccess ? "green" : "red";

    const closeAlertClass = `cursor-pointer dark:hover:bg-${color}-900/50 dark:text-${color}-400 hover:bg-${color}-100 inline-flex p-1.5 rounded-md text-${color}-500 transition-colors`;
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
                    <div className="flex flex-1 justify-between ml-3">
                        <div>
                            <h3 className={titleClass}>
                                {isSuccess ? "Success" : "Error"}
                            </h3>
                            <div className={textClass}>
                                <p>{message}</p>
                            </div>
                        </div>
                        <div className="flex items-center ml-6">
                            <button
                                className={closeAlertClass}
                                onClick={onClose}
                                type="button"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    close
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;
