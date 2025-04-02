/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import {
    DateInput,
    DateInputProps,
    DatePicker,
    DatePickerProps,
    TimePicker,
    TimePickerProps,
    Calendar,
    CalendarProps
} from '@progress/kendo-react-dateinputs';

type DateComponentType = 'dateinput' | 'datepicker' | 'timepicker' | 'calendar';

export interface KendoDateProps {
    type: DateComponentType;
    value?: Date | null;
    onChange?: (value: Date | null) => void;
    disabled?: boolean;
    format?: string;
    min?: Date;
    max?: Date;
    width?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

export const KendoDate: React.FC<KendoDateProps> = ({
    type,
    value,
    onChange,
    disabled = false,
    format,
    min,
    max,
    width,
    className,
    style
}) => {
    const commonProps = {
        value,
        onChange: (event: any) => onChange?.(event.value),
        disabled,
        format,
        min,
        max,
        className,
        style: width ? { width, ...style } : style
    };

    switch (type) {
        case 'dateinput':
            return <DateInput {...commonProps as DateInputProps} />;

        case 'datepicker':
            return <DatePicker {...commonProps as DatePickerProps} />;

        case 'timepicker':
            return <TimePicker {...commonProps as TimePickerProps} />;

        case 'calendar':
            return <Calendar {...commonProps as CalendarProps} />;

        default:
            throw new Error(`Unsupported date component type: ${type}`);
    }
};

export default KendoDate;