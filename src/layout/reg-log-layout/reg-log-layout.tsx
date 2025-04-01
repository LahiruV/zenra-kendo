import React from 'react';
import './reg-log-layout.css';

interface RegLogLayoutProps {
    children: React.ReactNode;
}

const RegLogLayout: React.FC<RegLogLayoutProps> = ({ children }) => {
    return (
        <div id='reg-log-base-layout' className='reg-log-base-layout'>
            <div id='reg-log-left' className='reg-log-left'>
                {/* <LeftLogRegComponent /> */}
                left
            </div>
            <div id='reg-log-right' className='reg-log-right'>
                {children}
            </div>
        </div>
    );
};

export default RegLogLayout;
