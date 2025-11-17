type Props = {
    message: string;
    onClose: () => void;
    variant: "success" | "error";
};

const Alert = ({ message, onClose, variant }: Props) => {
    const isSuccess = variant === "success";

    const closeAlertClass = isSuccess
        ? "cursor-pointer dark:hover:bg-green-900/50 dark:text-green-400 hover:bg-green-100 inline-flex p-1.5 rounded-md text-green-500 transition-colors"
        : "cursor-pointer dark:hover:bg-red-900/50 dark:text-red-400 hover:bg-red-100 inline-flex p-1.5 rounded-md text-red-500 transition-colors";

    const containerClass = isSuccess
        ? "bg-green-50 dark:bg-green-900/20 p-4 rounded-md"
        : "bg-red-50 dark:bg-red-900/20 p-4 rounded-md";

    const iconClass = isSuccess
        ? "dark:text-green-500 material-symbols-outlined text-green-400"
        : "dark:text-red-500 material-symbols-outlined text-red-400";

    const textClass = isSuccess
        ? "dark:text-green-400 mt-2 text-green-700 text-sm"
        : "dark:text-red-400 mt-2 text-red-700 text-sm";

    const titleClass = isSuccess
        ? "dark:text-green-300 text-green-800 text-sm"
        : "dark:text-red-300 text-red-800 text-sm";

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
