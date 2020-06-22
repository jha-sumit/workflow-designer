import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import MailIcon from "@material-ui/icons/Mail";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as navigationHandler from "../../../redux/navigation";
import { LeftDrawer } from './drawer';
import { WorkflowIcon } from '../../../common/icons/WorkflowIcon';
import { Button } from '@material-ui/core';

interface HeaderState {
    isOpen: boolean;
}

const initialState: HeaderState = {
    isOpen: false,
};

interface HeaderProps {
    isOpen: boolean;
    style: any;
    theme: any;
    openLeftDrawer: () => void;
    closeLeftDrawer: () => void;
}

class HeaderComponent extends React.Component<HeaderProps, HeaderState> {

    // static propTypes = {
    //     isOpen: PropTypes.bool.isRequired,
    //     openLeftDrawer: PropTypes.func.isRequired,
    //     closeLeftDrawer: PropTypes.func.isRequired
    // }

    constructor(props: HeaderProps) {
        super(props);
        this.state = initialState;
    }

    anchorEl: null | HTMLElement = null;
    mobileMoreAnchorEl: null | HTMLElement = null;
    isMenuOpen = Boolean(this.anchorEl);
    isMobileMenuOpen = Boolean(this.mobileMoreAnchorEl);

    handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        this.anchorEl = event.currentTarget;
    };

    handleMobileMenuClose = () => {
        this.mobileMoreAnchorEl = null;
    };

    handleMenuClose = () => {
        this.anchorEl = null;
        this.handleMobileMenuClose();
    }

    handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        this.mobileMoreAnchorEl = event.currentTarget;
    }

    handleDrawerOpen = () => {
        this.props.openLeftDrawer();
    }

    handleDrawerClose = () => {
        this.props.closeLeftDrawer();
    };

    menuId = 'primary-search-account-menu';
    renderMenu = (
        <Menu
            anchorEl={this.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={this.menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={this.isMenuOpen}
            onClose={this.handleMenuClose}
        >
            <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    mobileMenuId = 'primary-search-account-menu-mobile';
    renderMobileMenu = (
        <Menu
            anchorEl={this.mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={this.mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={this.isMobileMenuOpen}
            onClose={this.handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={this.handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit">
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    render() {
        return (
            <div className={this.props.style.grow}>
                <AppBar position="static" className={clsx(this.props.style.appBar, {
                    [this.props.style.appBarShift]: this.props.isOpen,
                })}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={clsx(this.props.style.menuButton, this.state.isOpen && this.props.style.hide)}
                        >
                            <MenuIcon />
                        </IconButton> 

                        <Button startIcon={<WorkflowIcon size="xs" />}>Workflow Designer</Button>                   
                        {/* <Typography className={this.props.style.title} variant="h5" noWrap>
                            
                            Workflow Designer
          </Typography> */}
                        <div className={this.props.style.search}>
                            <div className={this.props.style.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: this.props.style.inputRoot,
                                    input: this.props.style.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={this.props.style.grow} />
                        <div className={this.props.style.sectionDesktop}>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={this.menuId}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={this.props.style.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={this.mobileMenuId}
                                aria-haspopup="true"
                                onClick={this.handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {this.renderMobileMenu}
                {this.renderMenu}
                <LeftDrawer style={this.props.style} theme={this.props.theme} />
            </div>
        );
    }
}

export const Header = connect(
    (state: any) => {
        return (
            { isOpen: state.isOpen }
        );
    },
    (dispatch) => bindActionCreators(navigationHandler, dispatch)
)(HeaderComponent);
