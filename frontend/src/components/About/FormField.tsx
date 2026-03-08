type Props = {
    label: string;
    maxLength: number;
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
    required = false,
    rows,
    setValue,
    textarea = false,
    type,
    value
}: Props) => {
    const Tag = textarea ? "textarea" : "input";

    return (
        <div>
            <label className="block dark:text-secondary-dark text-secondary-light text-sm">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="mt-2">
                <Tag
                    className={
                        "bg-surface-light block border-0 dark:bg-surface-dark dark:inset-ring-border-dark dark:text-primary-dark focus:inset-ring-2 focus:inset-ring-border-focus inset-ring inset-ring-border-light outline-none px-3 py-2 rounded-md shadow-xs text-primary-light w-full"
                    }
                    maxLength={maxLength}
                    onChange={(e) => setValue(e.target.value)}
                    required={required}
                    rows={textarea ? rows : undefined}
                    type={textarea ? undefined : type}
                    value={value}
                />
            </div>
        </div>
    );
};

export default FormField;
