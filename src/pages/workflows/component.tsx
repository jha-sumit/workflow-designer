import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Workflows } from './workflows';

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

interface WorkflowsPageProps {
    history: any;
}

export const WorkflowsPage: React.StatelessComponent<WorkflowsPageProps> = (props) => {

    return (
        <Workflows style={useStyles()} history={props.history} />
    );
}