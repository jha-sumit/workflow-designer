import * as React from "react";
import { connect } from "react-redux";
import * as handler from "../../redux/LogEventReducer";
import { bindActionCreators } from "redux";
import Skeleton from "@material-ui/lab/Skeleton";
import { LogEvent } from "../../models/Event";
import { EnhancedTable, ColumnLabel } from "../../components";
import { LogEventListRow } from "./LogEventListRow";

const columns: ColumnLabel<LogEvent> [] = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'activeInstanceCount', numeric: true, disablePadding: false, label: 'Active Instances' },
    { id: 'errorInstancesCount', numeric: true, disablePadding: false, label: 'Instances in Error' },
    { id: 'lastRunAt', numeric: true, disablePadding: false, label: 'Last Run At' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
];


interface MonitorState {

}

interface MonitorProps {
    style?: any;
    theme?: any;
    history: any;
    isFetching: boolean;
    isAvailable: boolean;
    data: LogEvent[];
    error: string;
    fetchLogEvents: () => void;
}

class MonitorComponent extends React.Component<MonitorProps, MonitorState> {

    componentDidMount() {
        this.props.fetchLogEvents();
    }

    rowRenderer = (data: LogEvent, index: number, isSelected: boolean, onSelect: (event:React.MouseEvent<unknown>, data:LogEvent) => void) => {
        return <LogEventListRow row={data} index={index} isSelected={isSelected} onSelect={onSelect} />
    }

    render() {
        const { isAvailable, data } = this.props;
        if (!isAvailable) {
            return (<Skeleton> 
                <EnhancedTable<LogEvent> rows={[]} columns={columns} allowMultipleSelection={true}
                numSelected={0} onRequestSort={console.log} onSelectAllClick={console.log} 
                order={'desc'} defaultOrderBy={'lastRunAt'} rowCount={0}
                rowRenderer={this.rowRenderer} /></Skeleton>);
        } else {
            return (<EnhancedTable<LogEvent> rows={data} columns={columns} allowMultipleSelection={true}
                numSelected={0} onRequestSort={console.log} onSelectAllClick={console.log} 
                order={'desc'} defaultOrderBy={'lastRunAt'} rowCount={data.length} 
                rowRenderer={this.rowRenderer} />);
        }
    }
}

export const Monitor = connect(
    (state: any) => (
        { isFetching: state.evt.isFetching, error: state.evt.error, isAvailable: state.evt.isAvailable, data: state.evt.data }
    ), (dispatch) => bindActionCreators(handler, dispatch)
)(MonitorComponent);