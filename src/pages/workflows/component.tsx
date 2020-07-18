import React, { useState, FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Workflows } from './Workflows';
import { WorkflowInstances } from './WorkflowInstance';
import { WorkflowEditor } from './WorkflowEditor';

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

export const WorkflowsPage: FunctionComponent<WorkflowsPageProps> = (props) => {
    const classes = useStyles();
    const [editorOpen, setEditorOpen] = useState(false);
    
    const onEditWorkflow = (id: null | number) => {
        console.log(id);
        setEditorOpen(true);
    }
    const onEditorClose = (isdirty: boolean) => {
        setEditorOpen(false);
    }

    return (
        <div className={classes.root} style={{ padding: 20 }}>
            <WorkflowEditor isOpen={editorOpen} value={null} onClose={onEditorClose} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Workflows style={useStyles()} history={props.history} onEditWorkflow={onEditWorkflow} />
                </Grid>
                <Grid item xs={12}>
                    <WorkflowInstances style={useStyles()} history={props.history} />
                </Grid>
            </Grid>
        </div>
    );
}