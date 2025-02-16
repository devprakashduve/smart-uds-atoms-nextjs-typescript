export interface SelectProps {
    options: Array<{
        value: string;
        label: string;
        disabled?: boolean;
    }>;
    defaultValue?: string;
    value?: string;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    name?: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
