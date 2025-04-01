import { KendoButton, KendoCard } from '@zenra/widgets';
import React from 'react';

const HomeComponent: React.FC = () => {

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
        </div>
    );
};

export default HomeComponent;
