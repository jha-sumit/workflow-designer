import * as React from "react";
import { connect } from "react-redux";
import * as authHandler from "../../redux"
import { bindActionCreators } from "redux";
import { Grid, Paper } from "@material-ui/core";

interface WorkflowInstancesState {

}

interface WorkflowInstancesProps {
    style?: any;
    theme?: any;
    history: any;
}

class WorkflowInstancesComponent extends React.Component<WorkflowInstancesProps, WorkflowInstancesState> {

    render() {
        const classes = this.props.style;
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
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
}

export const WorkflowInstances = connect(
    (state: any) => (
        { isFetching: state.isFetching, error: state.error, isAuthed: state.isAuthed }
    ), (dispatch) => bindActionCreators(authHandler, dispatch)
)(WorkflowInstancesComponent);