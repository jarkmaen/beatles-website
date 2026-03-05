type Props = {
    message: string;
    onClose: () => void;
    variant: "success" | "error";
};

const Alert = ({ message, onClose, variant }: Props) => {
    const styles = {
        success: {
            button: "dark:hover:bg-green-900/50 dark:text-green-400 hover:bg-green-100 text-green-500",
            container: "bg-green-50 dark:bg-green-900/20",
            icon: "dark:text-green-500 text-green-400",
            label: "Success",
            symbol: "check_circle",
            text: "dark:text-green-400 text-green-700",
            title: "dark:text-green-300 text-green-800"
        },
        error: {
            button: "dark:hover:bg-red-900/50 dark:text-red-400 hover:bg-red-100 text-red-500",
            container: "bg-red-50 dark:bg-red-900/20",
            icon: "dark:text-red-500 text-red-400",
            label: "Error",
            symbol: "error",
            text: "dark:text-red-400 text-red-700",
            title: "dark:text-red-300 text-red-800"
        }
    }[variant];

    return (
        <div className="space-y-4">
            <div className={`${styles.container} p-4 rounded-md`}>
                <div className="flex">
                    <span
                        className={`${styles.icon} material-symbols-outlined select-none`}
                    >
                        {styles.symbol}
                    </span>
                    <div className="flex flex-1 justify-between ml-3">
                        <div className="flex flex-col text-sm">
                            <span className={styles.title}>
                                {styles.label}
                            </span>
                            <span className={`${styles.text} mt-2`}>
                                {message}
                            </span>
                        </div>
                        <div className="flex items-center ml-6">
                            <button
                                className={`cursor-pointer ${styles.button} inline-flex p-1.5 rounded-md transition-colors`}
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
