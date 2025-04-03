import { useInitialService } from '@zenra/services';
import { RootState, setRouteTitle } from '@zenra/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Interface for props
export interface DrawerProps {
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
    showText: boolean;
}> = ({ item, isSelected, onSelect, showText }) => {
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
                minWidth: showText ? 'auto' : '48px', // Ensure icon-only mode has enough width
            }}
            onClick={() => onSelect(item.name)}
            title={item.name} // Tooltip for icon-only mode
        >
            <i
                className={item.iconClass}
                style={{ width: '16px', height: '16px', marginRight: showText ? '10px' : '0' }}
            />
            {showText && item.name}
        </div>
    );
};

// Drawer Component
const Drawer: React.FC<DrawerProps> = ({ isAuthenticated }) => {
    const initialService = useInitialService();
    const [selected, setSelected] = useState<string>('Dashboard');
    const [isOpen, setIsOpen] = useState<boolean>(true); // State to control drawer open/close

    const handleSelect = (item: string) => {
        initialService.dispatch(setRouteTitle(item));
        setSelected(item);
        setIsOpen(false); // Close drawer on item selection
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
        { name: 'Login', iconClass: 'fas fa-sign-in-alt', requiresAuth: false },
    ];

    // Filter items based on authentication status
    const filteredItems = menuItems.filter((item) => {
        if (item.name === 'Login') return !isAuthenticated;
        if (item.requiresAuth) return isAuthenticated;
        return true;
    });

    const { drawerToggel } = useSelector((state: RootState) => state.nav);

    return (
        <>
            <div
                style={{
                    height: '94vh',
                    width: drawerToggel ? '250px' : '48px', // Narrow width for icons only
                    backgroundColor: '#f8f9fa',
                    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                    // position: 'fixed',
                    top: 0,
                    left: 0,
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    transition: 'width 0.3s ease',
                    fontFamily: 'Arial, sans-serif',
                    zIndex: 999,
                }}
            >
                <div>
                    {filteredItems.map((item) => (
                        <MenuItemComponent
                            key={item.name}
                            item={item}
                            isSelected={selected === item.name}
                            onSelect={handleSelect}
                            showText={drawerToggel} // Show text only when open
                        />
                    ))}
                </div>
            </div>

        </>
    );
};

export default Drawer;