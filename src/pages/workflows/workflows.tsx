import * as React from "react";
import { connect } from "react-redux";
import * as handler from "../../redux/WorkflowReducer"
import { bindActionCreators } from "redux";
import { Workflow } from "../../models";
import Skeleton from '@material-ui/lab/Skeleton';
import { EnhancedTable } from "./WorkflowListTable";


interface WorkflowsState {

}

interface WorkflowsProps {
    style?: any;
    theme?: any;
    history: any;
    isFetching: boolean;
    isAvailable: boolean;
    data: Workflow[];
    error: string;
    fetchWorkflows: () => void;
}

class WorkflowsComponent extends React.Component<WorkflowsProps, WorkflowsState> {

    componentDidMount() {
        this.props.fetchWorkflows();
    }

    render() {
        const { isAvailable, data } = this.props;
        if (!isAvailable) {
            return (<Skeleton> <EnhancedTable rows={[]}
                numSelected={0} onRequestSort={console.log} onSelectAllClick={console.log} 
                order={'desc'} orderBy={'lastRunAt'} rowCount={0}/></Skeleton>);
        } else {
            console.log(isAvailable);
            return (<EnhancedTable rows={data} 
                numSelected={0} onRequestSort={console.log} onSelectAllClick={console.log} 
                order={'desc'} orderBy={'lastRunAt'} rowCount={data.length} />);
        }
    }
}

export const Workflows = connect(
    (state: any) => (
        { isFetching: state.wfl.isFetching, error: state.wfl.error, isAvailable: state.wfl.isAvailable, data: state.wfl.data }
    ), (dispatch) => bindActionCreators(handler, dispatch)
)(WorkflowsComponent);
