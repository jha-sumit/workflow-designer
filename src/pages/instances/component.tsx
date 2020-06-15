import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { WorkflowInstances } from './instances';

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

interface WorkflowInstancesPageProps {
    history: any;
}

export const WorkflowInstancesPage: React.StatelessComponent<WorkflowInstancesPageProps> = (props) => {

    return (
        <WorkflowInstances style={useStyles()} history={props.history} />
    );
}