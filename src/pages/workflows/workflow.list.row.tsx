import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import * as authHandler from "../../redux/WorkflowReducer"
import { bindActionCreators } from "redux";
import { TableRow, TableCell } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Workflow } from "../../models";

interface WorkflowListRowProps {
    row: Workflow;
}

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

const WorkflowListRowComponent: FunctionComponent<WorkflowListRowProps> = (props) => {
    const { row } = props;
    const classes = useRowStyles();
    return (
        <React.Fragment>
            <TableRow className={classes.root}>
            <TableCell></TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell>{row.activeInstanceCount}</TableCell>
                <TableCell>{row.errorInstancesCount}</TableCell>
                <TableCell>{row.lastRunAt}</TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export const WorkflowListRow = connect(
    (state: any) => (
        { isFetching: state.isFetching, error: state.error, isAuthed: state.isAuthed }
    ), (dispatch) => bindActionCreators(authHandler, dispatch)
)(WorkflowListRowComponent);

