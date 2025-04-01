import { useInitialService } from '@zenra/services';
import { setRouteTitle } from '@zenra/store';
import React, { useState } from 'react';

// Interface for props
export interface SideBarProps {
    isAuthenticated: boolean;
}

// Interface for menu items
interface MenuItem {
    name: string;
    iconClass: string;
    requiresAuth?: boolean;
}

// Reusable Menu Item Component
const MenuItemComponent: React.FC<{
    item: MenuItem;
    isSelected: boolean;
    onSelect: (name: string) => void;
}> = ({ item, isSelected, onSelect }) => {
    return (
        <div
            style={{
                padding: '12px 16px',
                fontSize: '14px',
                fontWeight: 500,
                color: isSelected ? 'white' : '#333',
                cursor: 'pointer',
                backgroundColor: isSelected ? '#ff6358' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                transition: 'background-color 0.3s ease',
            }}
            onClick={() => onSelect(item.name)}
        >
            <i
                className={item.iconClass}
                style={{ width: '16px', height: '16px', marginRight: '10px' }}
            />
            {item.name}
        </div>
    );
};

// Sidebar Component
const SideBar: React.FC<SideBarProps> = ({ isAuthenticated }) => {
    const initialService = useInitialService()
    const [selected, setSelected] = useState<string>('Dashboard')
    console.log(isAuthenticated, 'isAuthenticated');
    const handleSelect = (item: string) => {
        initialService.dispatch(setRouteTitle(item));
        setSelected(item);
    };

    const menuItems: MenuItem[] = [
        { name: 'Dashboard', iconClass: 'fas fa-home' },
        { name: 'Overview', iconClass: 'fas fa-info-circle' },
        { name: 'Reports', iconClass: 'fas fa-chart-bar' },
        { name: 'Golf', iconClass: 'fas fa-golf-ball' },
        { name: 'Tennis', iconClass: 'fas fa-table-tennis' },
        { name: 'Swimming', iconClass: 'fas fa-swimmer' },
        { name: 'Profile', iconClass: 'fas fa-user', requiresAuth: true },
        { name: 'Settings', iconClass: 'fas fa-cog', requiresAuth: true },
        { name: 'Logout', iconClass: 'fas fa-sign-out-alt', requiresAuth: true },
        { name: 'Login', iconClass: 'fas fa-sign-in-alt', requiresAuth: false }, // Only shown when not authenticated
    ];

    // Filter items based on authentication status
    const filteredItems = menuItems.filter((item) => {
        if (item.name === 'Login') return !isAuthenticated;
        if (item.requiresAuth) return isAuthenticated;
        return true;
    });

    return (
        <div
            style={{
                height: '100vh',
                width: '250px',
                backgroundColor: '#f8f9fa',
                boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                overflowY: 'auto',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            {filteredItems.map((item) => (
                <MenuItemComponent
                    key={item.name}
                    item={item}
                    isSelected={selected === item.name}
                    onSelect={handleSelect}
                />
            ))}
        </div>
    );
};

export default SideBar;