/* eslint-disable @typescript-eslint/no-unused-vars */
import { KendoButton, KendoCard, KendoDate, KendoDialog, KendoDropDown, KendoGrid } from '@zenra/widgets';
import React from 'react';
import { KendoGridColumn } from 'src/libs/widgets/kendo-grid/kendo-grid';

interface ProductCategory {
    CategoryID?: number;
    CategoryName?: string;
    Description?: string;
}

interface Product {
    ProductID: number;
    ProductName?: string;
    SupplierID?: number;
    CategoryID?: number;
    QuantityPerUnit?: string;
    UnitPrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    ReorderLevel?: number;
    Discontinued?: boolean;
    Category?: ProductCategory;
    inEdit?: boolean | string;
}

const HomeComponent: React.FC = () => {
    const sports = [
        'Baseball',
        'Basketball',
        'Cricket',
        'Field Hockey',
        'Football',
        'Table Tennis',
        'Tennis',
        'Volleyball'
    ];
    const columns = [
        { field: 'id', header: 'ID', width: '100px' },
        { field: 'name', header: 'Name', width: '300px' },
        { field: 'position', header: 'Position', width: '300px' }
    ];
    const employees = [
        { id: 1, name: 'John Doe', position: 'Manager' },
        { id: 2, name: 'Jane Smith', position: 'Developer' },
        { id: 3, name: 'Sam Johnson', position: 'Designer' }
    ];

    const columns2: KendoGridColumn[] = [
        { field: 'ProductID', title: 'ID', editable: false, filterable: false, width: '75px' },
        { field: 'ProductName', title: 'Name', editor: 'text' },
        { field: 'Category.CategoryName', title: 'Category', editable: false, width: '200px' },
        { field: 'UnitPrice', title: 'Price', editor: 'numeric', width: '150px' },
        { field: 'UnitsInStock', title: 'In stock', editor: 'numeric', width: '150px' },
        { field: 'Discontinued', title: 'Discontinued', editor: 'boolean', width: '150px' }
    ];

    const products = [
        {
            ProductID: 1,
            ProductName: 'Chai',
            SupplierID: 1,
            CategoryID: 1,
            QuantityPerUnit: '10 boxes x 20 bags',
            UnitPrice: 18.0,
            UnitsInStock: 39,
            UnitsOnOrder: 0,
            ReorderLevel: 10,
            Discontinued: false,
            Category: {
                CategoryID: 1,
                CategoryName: 'Beverages',
                Description: 'Soft drinks, coffees, teas, beers, and ales'
            }
        },
        {
            ProductID: 2,
            ProductName: 'Chang',
            SupplierID: 1,
            CategoryID: 1,
            QuantityPerUnit: '24 - 12 oz bottles',
            UnitPrice: 19.0,
            UnitsInStock: 17,
            UnitsOnOrder: 40,
            ReorderLevel: 25,
            Discontinued: false,
            Category: {
                CategoryID: 1,
                CategoryName: 'Beverages',
                Description: 'Soft drinks, coffees, teas, beers, and ales'
            }
        },
        {
            ProductID: 3,
            ProductName: 'Aniseed Syrup',
            SupplierID: 1,
            CategoryID: 2,
            QuantityPerUnit: '12 - 550 ml bottles',
            UnitPrice: 10.0,
            UnitsInStock: 13,
            UnitsOnOrder: 70,
            ReorderLevel: 25,
            Discontinued: false,
            Category: {
                CategoryID: 2,
                CategoryName: 'Condiments',
                Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
            }
        },
    ]

    const [value, setValue] = React.useState<Date>(new Date());

    const handleDateChange = (value: Date | null) => {
        setValue(value || new Date());
    };

    const [visibleDialog, setVisibleDialog] = React.useState(true);
    const toggleDialog = () => {
        setVisibleDialog(!visibleDialog);
    };

    return (
        <div>
            {/* <KendoCard
                title="Card Title"
                content={<div>Card Content</div>}
                actions={<KendoButton
                    label="Click Me"
                    onClick={() => alert('Button Clicked')}
                />}
            />
            <div className="example-wrapper" style={{ minHeight: '400px' }}>
                <div className="col-xs-12 col-sm-7 example-col">
                    <p>AutoComplete</p>
                    <KendoDropDown
                        type="autocomplete"
                        data={sports}
                        placeholder="Your favorite sport"
                    />
                </div>
                <div className="col-xs-12 col-sm-7 example-col">
                    <p>ComboBox</p>
                    <KendoDropDown
                        type="combobox"
                        data={sports}
                        value="Basketball"
                    />
                </div>
                <div className="col-xs-12 col-sm-7 example-col">
                    <p>MultiColumnComboBox</p>
                    <KendoDropDown
                        type="multicolumncombobox"
                        data={employees}
                        columns={columns}
                        textField="name"
                    />
                </div>
                <div className="col-xs-12 col-sm-7 example-col">
                    <p>DropDownList</p>
                    <KendoDropDown
                        type="dropdownlist"
                        data={sports}
                        value="Basketball"
                    />
                </div>
                <div className="col-xs-12 col-sm-7 example-col">
                    <p>MultiSelect</p>
                    <KendoDropDown
                        type="multiselect"
                        data={sports}
                        value={['Basketball', 'Cricket']}
                    />
                </div>
                <div className="col-xs-12 col-sm-7 example-col">
                    <p>DropDownTree</p>
                    <KendoDropDown
                        type="dropdowntree"
                        data={[{
                            text: 'Furniture',
                            id: 1,
                            expanded: true,
                            items: [
                                { text: 'Tables & Chairs', id: 2 },
                                { text: 'Sofas', id: 3 },
                                { text: 'Occasional Furniture', id: 4 }
                            ]
                        }]}
                        value={{ text: 'Sofas', id: 3 }}
                        textField="text"
                        dataItemKey="id"
                    />
                </div>
            </div>
            <div className="row example-wrapper" style={{ minHeight: 450 }}>
                <div className="col-xs-12 col-md-6 example-col">
                    <p>DateInput</p>
                    <KendoDate
                        type="dateinput"
                        value={value}
                        onChange={handleDateChange}
                    />
                    <p>
                        (use <code>←</code> and <code>→</code> to navigate, <code>↑</code> and
                        <code>↓</code> to update)
                    </p>
                    <p>DatePicker</p>
                    <KendoDate
                        type="datepicker"
                        value={value}
                        onChange={handleDateChange}
                    />
                    <p>
                        (use Alt+<code>↓</code> to open the calendar, <code>←</code> and
                        <code>→</code> to navigate, <code>↑</code> to increment and
                        <code>↓</code> to decrement the value)
                    </p>
                    <p>TimePicker</p>
                    <KendoDate
                        type="timepicker"
                        value={value}
                        onChange={handleDateChange}
                    />
                    <p>
                        (use Alt+<code>↓</code> to open the time list, Tab to move to the next time section in the popup,{' '}
                        <code>↑</code> to increment and
                        <code>↓</code> to decrement the value)
                    </p>
                </div>
                <div className="col-xs-12 col-md-6 example-col">
                    <KendoDate
                        type="calendar"
                        value={value}
                        onChange={handleDateChange}
                    />
                </div>
            </div>
            <KendoGrid<Product>
                data={products}
                columns={columns2}
                dataItemKey="ProductID"
            /> */}
            {/* <KendoDialog
                type="dialog"
                title="Please confirm"
                visible={visibleDialog}
                onClose={toggleDialog}
                onConfirm={toggleDialog}
                confirmText="Confirm"
                cancelText="Cancel"
            >
                <p style={{ margin: '25px', textAlign: 'center' }}>
                    Are you sure you want to continue?
                </p>
            </KendoDialog> */}
        </div>
    );
};

export default HomeComponent;
