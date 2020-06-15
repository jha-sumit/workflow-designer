import * as React from "react";
import { connect } from "react-redux";
import * as actionHandler from "../../../redux";
import { bindActionCreators } from "redux";

interface WorkflowListProps {

}
interface WorkflowListState {

}

class WorkflowListComponent extends React.Component<WorkflowListProps, WorkflowListState> {
    render() {
        return (
            <div />
        );
    }
}

export const WorkflowList = connect(
    (state: any) => ({

    }), (dispatch) => bindActionCreators(actionHandler, dispatch)
)(WorkflowListComponent);