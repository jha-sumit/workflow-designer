import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigationHandler from "../../../redux/navigation";
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import IconButton from '@material-ui/core/IconButton';
import { Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { RouteResource } from '../../../resources/navigation';


interface DrawerState {
    isOpen: boolean;
}
const initialState: DrawerState = {
    isOpen: false
}
interface DrawerProps {
    isOpen: boolean;
    style: any;
    theme: any;
    closeLeftDrawer: () => void;
    openLeftDrawer: () => void;
}

class DrawerComponent extends React.Component<DrawerProps, DrawerState> {
    // static propTypes = {
    //     isOpen: PropTypes.bool.isRequired,
    //     openLeftDrawer: PropTypes.func.isRequired,
    //     closeLeftDrawer: PropTypes.func.isRequired
    // }

    constructor(props: DrawerProps) {
        super(props);
        this.state = initialState;
    }

    handleDrawerClose = () => {
        this.props.closeLeftDrawer();
    }

    handleDrawerOpen = () => {
        this.props.openLeftDrawer();
    }

    render() {
        return (
            <Drawer
                className={this.props.style.drawer}
                variant="persistent"
                anchor="left"
                open={this.props.isOpen}
                classes={{
                    paper: this.props.style.drawerPaper,
                }}>
                <div className={this.props.style.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                        {this.props.theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {RouteResource.map(element => (
                        <ListItem button key={element.label} component="a" href={element.path}>
                            <ListItemIcon>{element.icon}</ListItemIcon>
                            <ListItemText primary={element.label} />
                        </ListItem>
                    ))}
                </List>
                <List>
                    <ListItem button key={'Workflows'} component="a" href={'/workflows'}>
                        <ListItemIcon><DoubleArrowIcon /></ListItemIcon>
                        <ListItemText primary={'Workflows'} />
                    </ListItem>

                    <ListItem button key={'Active Instances'} component="a" href={'/workflow-instances'}>
                        <ListItemIcon><LowPriorityIcon /></ListItemIcon>
                        <ListItemText primary={'Active Instances'} />
                    </ListItem>

                    <ListItem button key={'Monitor'} component="a" href={'/monitor'}>
                        <ListItemIcon><LowPriorityIcon /></ListItemIcon>
                        <ListItemText primary={'Events'} />
                    </ListItem>

                </List>
            </Drawer>
        );
    }
}

export const LeftDrawer = connect(
    (state: { isOpen: boolean } & any) => {
        return ({ isOpen: state.nav.isOpen });
    },
    (dispatch) => bindActionCreators(navigationHandler, dispatch)
)(DrawerComponent);