/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import {
    AutoComplete,
    AutoCompleteProps,
    ComboBox,
    ComboBoxProps,
    MultiColumnComboBox,
    MultiColumnComboBoxProps,
    DropDownList,
    DropDownListProps,
    MultiSelect,
    MultiSelectProps,
    DropDownTree,
    DropDownTreeProps
} from '@progress/kendo-react-dropdowns';

type DropdownType =
    | 'autocomplete'
    | 'combobox'
    | 'multicolumncombobox'
    | 'dropdownlist'
    | 'multiselect'
    | 'dropdowntree';

export interface KendoDropDownProps {
    type: DropdownType;
    data: any[];
    value?: any;
    onChange?: (value: any) => void;
    placeholder?: string;
    textField?: string;
    dataItemKey?: string;
    columns?: MultiColumnComboBoxProps['columns']; // For MultiColumnComboBox
    width?: number | string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export const KendoDropDown: React.FC<KendoDropDownProps> = ({
    type,
    data,
    value,
    onChange,
    placeholder,
    textField,
    dataItemKey,
    columns,
    width = 300,
    disabled = false,
    className,
    style
}) => {
    const commonProps = {
        data,
        value,
        onChange: (event: any) => onChange?.(event.value || event.target.value),
        placeholder,
        textField,
        dataItemKey,
        disabled,
        className,
        style: { width, ...style }
    };

    switch (type) {
        case 'autocomplete':
            return <AutoComplete {...commonProps as AutoCompleteProps} />;

        case 'combobox':
            return <ComboBox {...commonProps as ComboBoxProps} />;

        case 'multicolumncombobox':
            return (
                <MultiColumnComboBox
                    {...commonProps as MultiColumnComboBoxProps}
                    columns={columns || []}
                />
            );

        case 'dropdownlist':
            return <DropDownList {...commonProps as DropDownListProps} />;

        case 'multiselect':
            return <MultiSelect {...commonProps as MultiSelectProps} />;

        case 'dropdowntree':
            return <DropDownTree {...commonProps as DropDownTreeProps} />;

        default:
            throw new Error(`Unsupported dropdown type: ${type}`);
    }
};

export default KendoDropDown;
