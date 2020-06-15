import * as React from "react";
import { connect } from "react-redux";
import * as actionHandler from "../../../redux";
import { bindActionCreators } from "redux";
interface InstanceListProps {

}
interface InstanceListState {

}

class WorkflowInstanceListComponent extends React.Component<InstanceListProps, InstanceListState> {
    render() {return (
        <div />
    );}
}

export const WorkflowInstanceList = connect(
    (state: any) => ({

    }), (dispatch) => bindActionCreators(actionHandler, dispatch)
)(WorkflowInstanceListComponent);