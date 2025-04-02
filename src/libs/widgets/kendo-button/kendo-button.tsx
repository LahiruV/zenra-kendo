import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { SVGIcon } from '@progress/kendo-svg-icons';

type ButtonFillMode = 'flat' | 'outline' | 'clear' | 'link' | 'solid';
type ButtonThemeColor = 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse';

interface CustomKendoButtonProps {
    className?: string;
    icon?: SVGIcon;
    label: string;
    fillMode?: ButtonFillMode;
    themeColor?: ButtonThemeColor;
    disabled?: boolean;
    onClick?: () => void;
}

const KendoButton: React.FC<CustomKendoButtonProps> = ({
    className,
    icon,
    label,
    fillMode = 'solid',
    themeColor = 'primary',
    disabled = false,
    onClick,
}) => {
    return (
        <Button
            svgIcon={icon}
            type="button"
            fillMode={fillMode}
            disabled={disabled}
            themeColor={themeColor}
            onClick={onClick}
            className={className}
        >
            {label}
        </Button>
    );
};

export default KendoButton;
