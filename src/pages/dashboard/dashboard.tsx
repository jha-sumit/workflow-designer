import * as React from "react";
import { connect } from "react-redux";
import * as authHandler from "../../redux"
import { bindActionCreators } from "redux";
import { Grid, Paper } from "@material-ui/core";
import WorkflowInstancePivotTable from "./instance-pivot";
import ErrorPivotTable from "./error-pivot";

interface DashboardState {

}

interface DashboardProps {
    style?: any;
    theme?: any;
    history: any;
}

class DashboardComponent extends React.Component<DashboardProps, DashboardState> {
    
    render() {
        const classes = this.props.style;
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ErrorPivotTable />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <WorkflowInstancePivotTable />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export const Dashboard = connect(
    (state: any) => (
        { isFetching: state.isFetching, error: state.error, isAuthed: state.isAuthed }
    ), (dispatch) => bindActionCreators(authHandler, dispatch)
)(DashboardComponent);