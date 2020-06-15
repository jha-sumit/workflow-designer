import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Monitor } from './monitor';

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

interface MonitorPageProps {
    history: any;
}

export const MonitorPage: React.StatelessComponent<MonitorPageProps> = (props) => {

    return (
        <Monitor style={useStyles()} history={props.history} />
    );
}