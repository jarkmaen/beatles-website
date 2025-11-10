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
    return (
        <div>
            <label className="block dark:text-secondary-dark text-secondary-light text-sm">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="mt-2">
                {textarea ? (
                    <textarea
                        className="bg-table-cell-light block border-0 dark:bg-table-cell-dark dark:text-primary-dark px-3 py-2 rounded-md shadow-sm text-primary-light w-full"
                        maxLength={maxLength}
                        required={required}
                        rows={rows}
                    />
                ) : (
                    <input
                        className="bg-table-cell-light block border-0 dark:bg-table-cell-dark dark:text-primary-dark px-3 py-2 rounded-md shadow-sm text-primary-light w-full"
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
