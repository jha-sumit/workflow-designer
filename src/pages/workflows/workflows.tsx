import React, { FunctionComponent, MouseEvent } from "react";
import { connect } from "react-redux";
import * as handler from "../../redux/WorkflowReducer"
import { bindActionCreators } from "redux";
import { Workflow } from "../../models";
import Skeleton from '@material-ui/lab/Skeleton';
import { EnhancedTable } from "../../components";
import { ColumnLabel } from "../../components"
import { TableRow, TableCell, IconButton } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';

interface WorkflowListRowProps {
    row: Workflow;
    isSelected: boolean;
    index: number;
    onSelect: (event: MouseEvent, row: Workflow) => void;
    onEdit: (row: Workflow) => void;
}
const WorkflowListRow: FunctionComponent<WorkflowListRowProps> = (props) => {
    const { row, isSelected, index, onSelect } = props;
    const labelId = `enhanced-table-checkbox-${index}`;

    const viewInstances = (event: MouseEvent, data: any) => {
        event.preventDefault();
        event.stopPropagation();
        props.onSelect(event, data);
    }

    const editWorkflow = (event: MouseEvent<unknown>, data: any) => {
        event.preventDefault();
        event.stopPropagation();
        props.onEdit(data);
    }

    return (
        <TableRow
            hover
            onClick={(event) => onSelect(event, row)}
            role="checkbox"
            aria-checked={isSelected}
            tabIndex={-1}
            key={row.name}
            selected={isSelected}>
            <TableCell component="th" id={labelId} scope="row">
                {row.name}
            </TableCell>
            <TableCell align="right">{row.activeInstanceCount}</TableCell>
            <TableCell align="right">{row.errorInstancesCount}</TableCell>
            <TableCell align="right">{row.lastRunAt}</TableCell>
            <TableCell align="right">
                <IconButton size="small" onClick={(event) => editWorkflow(event, row)}>
                    <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={(event) => viewInstances(event, row)}>
                    <VisibilityIcon fontSize="small" />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

const columns: ColumnLabel<Workflow>[] = [
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
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
    selectWorkflow: (id: number) => void;
    onEditWorkflow: (id: null | number) => void;
}

class WorkflowsComponent extends React.Component<WorkflowsProps, WorkflowsState> {

    componentDidMount() {
        this.props.fetchWorkflows();
    }

    rowRenderer = (data: Workflow, index: number, isSelected: boolean, onSelect: (event: React.MouseEvent<unknown>, data: Workflow) => void) => {
        return <WorkflowListRow row={data} index={index} isSelected={isSelected} onSelect={onSelect} onEdit={this.onWorkflowEdit} />
    }

    onSelectionChange = (items: Workflow[]) => {
        if (items !== undefined && items.length > 0)
            this.props.selectWorkflow(items[0].id);
    }
    onWorkflowEdit = (item: Workflow) => {
        this.props.onEditWorkflow(item.id);
    }

    render() {
        const { isAvailable, data } = this.props;
        if (!isAvailable) {
            return (<Skeleton>
                <EnhancedTable<Workflow> rows={[]} columns={columns} allowMultipleSelection={false}
                    numSelected={0} onRequestSort={console.log} onSelectAllClick={console.log}
                    order={'desc'} defaultOrderBy={'lastRunAt'} rowCount={0}
                    rowRenderer={this.rowRenderer} /></Skeleton>);
        } else {
            return (<EnhancedTable<Workflow> rows={data} columns={columns} allowMultipleSelection={false}
                numSelected={0} onRequestSort={console.log} onSelectAllClick={console.log}
                onSelectionChange={this.onSelectionChange}
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
