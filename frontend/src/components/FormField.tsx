type Props = {
    label: string;
    maxLength?: number;
    required?: boolean;
    rows?: number;
    textarea?: boolean;
    type?: string;
};

const FormField = ({
    label,
    maxLength,
    required,
    rows,
    textarea,
    type
}: Props) => {
    const baseClasses =
        "bg-surface-light block border-0 dark:bg-surface-dark dark:inset-ring-border-dark dark:text-primary-dark focus:inset-ring-2 focus:inset-ring-border-focus inset-ring inset-ring-border-light outline-none px-3 py-2 rounded-md shadow-xs text-primary-light w-full";

    return (
        <div>
            <label className="block dark:text-secondary-dark text-secondary-light text-sm">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="mt-2">
                {textarea ? (
                    <textarea
                        className={baseClasses}
                        maxLength={maxLength}
                        required={required}
                        rows={rows}
                    />
                ) : (
                    <input
                        className={baseClasses}
                        maxLength={maxLength}
                        required={required}
                        type={type}
                    />
                )}
            </div>
        </div>
    );
};

export default FormField;
