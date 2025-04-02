/* eslint-disable @typescript-eslint/no-unused-vars */
import { KendoButton, KendoCard, KendoDate, KendoDropDown } from '@zenra/widgets';
import React from 'react';

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

    const [value, setValue] = React.useState<Date>(new Date());

    const handleDateChange = (value: Date | null) => {
        setValue(value || new Date());
    };

    return (
        <div>
            <KendoCard
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
        </div>
    );
};

export default HomeComponent;
