import * as React from "react";
import { connect } from "react-redux";
import * as handler from "../../redux/WorkflowReducer"
import { bindActionCreators } from "redux";
import { Workflow } from "../../models";
import Skeleton from '@material-ui/lab/Skeleton';
import { EnhancedTable } from "../../components";
import {ColumnLabel} from "../../components"
import { WorkflowListRow } from "./WorkflowListRow";

const columns: ColumnLabel<Workflow> [] = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'activeInstanceCount', numeric: true, disablePadding: false, label: 'Active Instances' },
    { id: 'errorInstancesCount', numeric: true, disablePadding: false, label: 'Instances in Error' },
    { id: 'lastRunAt', numeric: true, disablePadding: false, label: 'Last Run At' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
];

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

    rowRenderer = (data: Workflow, index: number, isSelected: boolean, onSelect: (event:React.MouseEvent<unknown>, data:Workflow) => void) => {
        return <WorkflowListRow row={data} index={index} isSelected={isSelected} onSelect={onSelect} />
    }

    render() {
        const { isAvailable, data } = this.props;
        if (!isAvailable) {
            return (<Skeleton> 
                <EnhancedTable<Workflow> rows={[]} columns={columns}
                numSelected={0} onRequestSort={console.log} onSelectAllClick={console.log} 
                order={'desc'} defaultOrderBy={'lastRunAt'} rowCount={0}
                rowRenderer={this.rowRenderer} /></Skeleton>);
        } else {
            return (<EnhancedTable<Workflow> rows={data} columns={columns}
                numSelected={0} onRequestSort={console.log} onSelectAllClick={console.log} 
                order={'desc'} defaultOrderBy={'lastRunAt'} rowCount={data.length} 
                rowRenderer={this.rowRenderer} />);
        }
    }
}

export const Workflows = connect(
    (state: any) => (
        { isFetching: state.wfl.isFetching, error: state.wfl.error, isAvailable: state.wfl.isAvailable, data: state.wfl.data }
    ), (dispatch) => bindActionCreators(handler, dispatch)
)(WorkflowsComponent);
