import * as React from "react";
import { connect } from "react-redux";
import * as handler from "../../redux/LogEventReducer";
import { bindActionCreators } from "redux";
import Skeleton from "@material-ui/lab/Skeleton";
import { LogEvent } from "../../models/Event";
import { EnhancedTable } from "./LogEventListTable";

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

    render() {
        const { isAvailable, data } = this.props;
        if (!isAvailable) {
            return (<Skeleton> <EnhancedTable rows={[]}
                numSelected={0} onRequestSort={console.log} onSelectAllClick={console.log} 
                order={'desc'} orderBy={'lastRunAt'} rowCount={0}/></Skeleton>);
        } else {
            return (<EnhancedTable rows={data} 
                numSelected={0} onRequestSort={console.log} onSelectAllClick={console.log} 
                order={'desc'} orderBy={'lastRunAt'} rowCount={data.length} />);
        }
    }
}

export const Monitor = connect(
    (state: any) => (
        { isFetching: state.evt.isFetching, error: state.evt.error, isAvailable: state.evt.isAvailable, data: state.evt.data }
    ), (dispatch) => bindActionCreators(handler, dispatch)
)(MonitorComponent);