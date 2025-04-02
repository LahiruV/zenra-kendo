import React from 'react';
import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { bellIcon, menuIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';
import { company_name } from '@zenra/configs';
import { setDrawerToggel } from '@zenra/store';
import { useInitialService } from '@zenra/services';

const kendokaAvatar = 'https://demos.telerik.com/kendo-react-ui/assets/suite/kendoka-react.png';

export interface NavBarProps {
    isAuthenticated: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isAuthenticated }) => {
    const initialService = useInitialService();
    console.log(isAuthenticated, 'isAuthenticated');

    return (
        <div
            style={
                {
                    marginTop: '-8px',
                    marginLeft: '-8px',
                    marginRight: '-8px',
                    marginBottom: '8px',
                }
            }>
            <AppBar themeColor="dark">
                <AppBarSection>
                    <Button type="button" fillMode="flat" svgIcon={menuIcon} onClick={() =>
                        initialService.dispatch(setDrawerToggel(true))
                    } />
                </AppBarSection>

                <AppBarSpacer style={{ width: 4 }} />

                <AppBarSection>
                    <h1 className="title">{company_name}</h1>
                </AppBarSection>

                <AppBarSpacer style={{ width: 32 }} />

                <AppBarSection>
                    <ul>
                        {/* <li>
                            <span>What's New</span>
                        </li>
                        <li>
                            <span>About</span>
                        </li>
                        <li>
                            <span>Contacts</span>
                        </li> */}
                    </ul>
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection>
                    <Button className='font-12' type="button" themeColor="primary" size={'small'}>
                        LOGOUT
                    </Button>
                </AppBarSection>

                <AppBarSection className="actions">
                    <Button type="button" fillMode="flat" svgIcon={bellIcon}>
                        <BadgeContainer>
                            <Badge rounded="full" themeColor="success" size="small" position="inside" />
                        </BadgeContainer>
                    </Button>
                </AppBarSection>

                <AppBarSection>
                    <span className="k-appbar-separator" />
                </AppBarSection>

                <AppBarSection>
                    <Avatar type="image">
                        <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
                    </Avatar>
                </AppBarSection>
            </AppBar>
            <style>{`
                body {
                    background: #dfdfdf;
                }
                .title {
                    font-size: 18px;
                    margin: 0;
                }
                li {
                    margin: 0 10px;
                }
                li:hover {
                    cursor: pointer;
                    color: #84cef1;
                }
                .k-badge-container {
                    margin-right: 8px;
                }
            `}</style>
        </div>
    );
}


export default NavBar;