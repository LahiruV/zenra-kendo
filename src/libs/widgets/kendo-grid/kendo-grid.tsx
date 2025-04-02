/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
    Grid,
    GridColumn as Column,
    // GridProps,
    GridItemChangeEvent,
    GridColumnProps
} from '@progress/kendo-react-grid';

export interface KendoGridColumn extends GridColumnProps {
    field: string;
    title: string;
    width?: string | number;
    editable?: boolean;
    filterable?: boolean;
    editor?: 'text' | 'numeric' | 'boolean' | 'date';
}

export interface KendoGridProps<T> {
    data: T[];
    columns: KendoGridColumn[];
    dataItemKey: string;
    height?: string | number;
    sortable?: boolean;
    pageable?: boolean | object;
    filterable?: boolean;
    editable?: boolean | 'incell' | 'inline' | 'popup';
    take?: number;
    skip?: number;
    onItemChange?: (item: T) => void;
    className?: string;
    style?: React.CSSProperties;
}

export const KendoGrid = <T extends { [key: string]: any }>({
    data: initialData,
    columns,
    dataItemKey,
    height = '475px',
    sortable = true,
    pageable = true,
    filterable = true,
    editable = 'incell',
    take = 10,
    skip = 0,
    onItemChange,
    className,
    style
}: KendoGridProps<T>) => {
    const [data, setData] = useState<T[]>(initialData);

    const handleItemChange = (event: GridItemChangeEvent) => {
        const newData = data.map((item) =>
            item[dataItemKey] === event.dataItem[dataItemKey]
                ? { ...item, [event.field!]: event.value }
                : item
        );
        setData(newData);
        if (onItemChange) {
            const updatedItem = newData.find(item => item[dataItemKey] === event.dataItem[dataItemKey]);
            onItemChange(updatedItem!);
        }
    };

    return (
        <Grid
            style={{ height, ...style }}
            className={className}
            data={data}
            dataItemKey={dataItemKey}
            autoProcessData={true}
            sortable={sortable}
            pageable={pageable}
            filterable={filterable}
            editable={editable === 'incell' || editable === 'inline' ? { mode: editable } : false}
            defaultSkip={skip}
            defaultTake={take}
            onItemChange={handleItemChange}
        >
            {columns.map((column, index) => (
                <Column
                    key={index}
                    field={column.field}
                    title={column.title}
                    width={column.width}
                    editable={column.editable}
                    filterable={column.filterable}
                    editor={column.editor}
                />
            ))}
        </Grid>
    );
};

export default KendoGrid;