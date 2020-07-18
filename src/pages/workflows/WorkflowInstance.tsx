import React, { FunctionComponent, MouseEvent, Component, Fragment } from "react";
import { connect } from "react-redux";
import * as handler from "../../redux/WorkflowInstanceReducer"
import { bindActionCreators } from "redux";
import { WorkflowInstance } from "../../models";
import Skeleton from '@material-ui/lab/Skeleton';
import { EnhancedTable, CronTab } from "../../components";
import { ColumnLabel } from "../../components"
import { TableRow, TableCell, IconButton, TextField, InputAdornment, Popover } from "@material-ui/core";
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import SnoozeIcon from '@material-ui/icons/Snooze';
import UpdateIcon from '@material-ui/icons/Update';
import RestoreIcon from '@material-ui/icons/Restore';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

interface SchedulePopoverProps {
}

const SchedulePicker: FunctionComponent<SchedulePopoverProps> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const show = Boolean(anchorEl);

    return (
        <Fragment>
            <IconButton onClick={handleClick}>
                <AccessAlarmIcon fontSize="small" />
            </IconButton>
            <Popover
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={show}
                anchorEl={anchorEl}
                onClose={handleClose}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>
                    <CronTab options={[]}/>
            </Popover>
        </Fragment>
    );
}

interface WorkflowInstancesRowProps {
    row: WorkflowInstance;
    isSelected: boolean;
    index: number;
    onSelect: (event: MouseEvent, row: WorkflowInstance) => void;
}

const WorkflowInstancesRow: FunctionComponent<WorkflowInstancesRowProps> = (props) => {
    const { row, isSelected, index, onSelect } = props;
    const labelId = `enhanced-table-checkbox-${index}`;

    const viewInstances = (event: MouseEvent, data: any) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("View" + data);
    }

    const editWorkflow = (event: MouseEvent<unknown>, data: any) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("Edit" + data);
    }

    return (
        <TableRow
            hover
            onClick={(event) => onSelect(event, row)}
            role="checkbox"
            aria-checked={isSelected}
            tabIndex={-1}
            key={row.id}
            selected={isSelected}>
            <TableCell component="th" id={labelId} scope="row">
                {row.id}
            </TableCell>
            <TableCell align="right">
                <TextField
                    type="button"
                    value={row.schedule}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <SchedulePicker />
                        </InputAdornment>
                    }} />
            </TableCell>
            <TableCell align="right">{row.executionStatus}</TableCell>
            <TableCell align="right">{row.payload}</TableCell>
            <TableCell align="right">{row.lastRunAt}</TableCell>
            <TableCell align="right">
                <IconButton size="small" onClick={(event) => editWorkflow(event, row)}>
                    <DirectionsRunIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={(event) => viewInstances(event, row)}>
                    <AccessAlarmIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={(event) => editWorkflow(event, row)}>
                    <SnoozeIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={(event) => viewInstances(event, row)}>
                    <UpdateIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={(event) => editWorkflow(event, row)}>
                    <RestoreIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={(event) => viewInstances(event, row)}>
                    <TimerOffIcon fontSize="small" />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

const columns: ColumnLabel<WorkflowInstance>[] = [
    { id: 'id', numeric: false, disablePadding: false, label: 'Instance Id' },
    { id: 'schedule', numeric: false, disablePadding: false, label: 'Schedule' },
    { id: 'executionStatus', numeric: true, disablePadding: false, label: 'Execution Status' },
    { id: 'payload', numeric: true, disablePadding: false, label: 'Payload Schema' },
    { id: 'lastRunAt', numeric: true, disablePadding: false, label: 'Last Run At' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
];
interface WorkflowInstancesState {

}

interface WorkflowInstancesProps {
    style?: any;
    theme?: any;
    history: any;
    isFetching: boolean;
    isAvailable: boolean;
    data: WorkflowInstance[];
    error: string;
    fetchWorkflowInstances: (id: number) => void;
}

class WorkflowInstancesComponent extends Component<WorkflowInstancesProps, WorkflowInstancesState> {

    componentDidMount() {
        this.props.fetchWorkflowInstances(1);
    }

    rowRenderer = (data: WorkflowInstance, index: number, isSelected: boolean, onSelect: (event: React.MouseEvent<unknown>, data: WorkflowInstance) => void) => {
        return <WorkflowInstancesRow row={data} index={index} isSelected={isSelected} onSelect={onSelect} />
    }

    render() {
        const { isAvailable, data } = this.props;
        if (!isAvailable) {
            return (<Skeleton>
                <EnhancedTable<WorkflowInstance> rows={[]} columns={columns} allowMultipleSelection={false}
                    numSelected={0} onRequestSort={console.log} onSelectAllClick={console.log}
                    order={'desc'} defaultOrderBy={'lastRunAt'} rowCount={0}
                    rowRenderer={this.rowRenderer} /></Skeleton>);
        } else {
            return (<EnhancedTable<WorkflowInstance> rows={data} columns={columns} allowMultipleSelection={false}
                numSelected={0} onRequestSort={console.log} onSelectAllClick={console.log}
                order={'desc'} defaultOrderBy={'lastRunAt'} rowCount={data.length}
                rowRenderer={this.rowRenderer} />);
        }
    }
}

export const WorkflowInstances = connect(
    (state: any) => (
        { isFetching: state.int.isFetching, error: state.int.error, isAvailable: state.int.isAvailable, data: state.int.data }
    ), (dispatch) => bindActionCreators(handler, dispatch)
)(WorkflowInstancesComponent);
