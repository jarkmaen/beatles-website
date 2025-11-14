type Props = {
    label: string;
    maxLength?: number;
    required?: boolean;
    rows?: number;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    textarea?: boolean;
    type?: string;
    value: string;
};

const FormField = ({
    label,
    maxLength,
    required,
    rows,
    setValue,
    textarea,
    type,
    value
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
                        onChange={(e) => setValue(e.target.value)}
                        required={required}
                        rows={rows}
                        value={value}
                    />
                ) : (
                    <input
                        className={baseClasses}
                        maxLength={maxLength}
                        onChange={(e) => setValue(e.target.value)}
                        required={required}
                        type={type}
                        value={value}
                    />
                )}
            </div>
        </div>
    );
};

export default FormField;
