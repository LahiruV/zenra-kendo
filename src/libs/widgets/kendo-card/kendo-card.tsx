import * as React from 'react';
import { Card, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';


export interface KendoCardProps {
    title: string;
    width?: number | string;
    content: React.ReactNode;
    actions: React.ReactNode;
}

export function KendoCard({ title, content, actions, width }: KendoCardProps) {

    return (
        <Card style={{ width: width || 250 }}>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                {content}
            </CardBody>
            <CardActions>
                {actions}
            </CardActions>
        </Card>
    );
}

export default KendoCard;
