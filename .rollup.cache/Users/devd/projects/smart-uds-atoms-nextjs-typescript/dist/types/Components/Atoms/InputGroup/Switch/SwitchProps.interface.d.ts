export interface SwitchProps {
    checked: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    textForOn?: string;
    textForOff?: string;
    disableIcons?: boolean;
    noBackground?: boolean;
    size?: 'sm' | 'md' | 'lg';
}
