import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Dashboard} from './dashboard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

interface DashboardPageProps {
    history: any;
}

export const DashboardPage: React.StatelessComponent<DashboardPageProps> = (props) => {

    return (
        <Dashboard style={useStyles()} history={props.history}/>
    );
}