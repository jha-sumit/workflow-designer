import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Monitor } from './monitor';
import { Grid, Paper } from '@material-ui/core';

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
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Monitor style={useStyles()} history={props.history} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
            </Grid>
        </div>
    );
}