import { LogEvent } from "../models";
import { api } from "../server";

const FETCHING_LOG_EVENTS = 'FETCHING_LOG_EVENTS'
const FETCHING_LOG_EVENTS_FAILURE = 'FETCHING_LOG_EVENTS_FAILURE'
const FETCHING_LOG_EVENTS_SUCCESS = 'FETCHING_LOG_EVENTS_SUCCESS'

export const fetchLogEvents = () => {
  return fetchAndHandleLogEvents();
}

const fetchingLogEvents = () => {
  return {
    type: FETCHING_LOG_EVENTS,
  }
}

const fetchingLogEventsFailure = (error: string) => {
  return {
    type: FETCHING_LOG_EVENTS_FAILURE,
    error: 'Error fetching LogEvents.',
  }
}

const fetchingLogEventsSuccess = (logEvents: LogEvent[], timestamp: Date) => {
  return {
    type: FETCHING_LOG_EVENTS_SUCCESS,
    logEvents,
    timestamp,
  };
}

export const fetchAndHandleLogEvents = () => {
  return (dispatch: any) => {
    dispatch(fetchingLogEvents());
    api.get("/workflows").then((response: any) => {
      dispatch(fetchingLogEventsSuccess(response.data, new Date()));
      // dispatch(authUser(user.uid));
    }).catch((error) => dispatch(fetchingLogEventsFailure(error)));
  };
}

const initialLogEventsState = {
  data: [],
  lastUpdatedAt: new Date(),
  isFetching: false,
  isAvailable: false,
  error: ""
}

export const logEventHandler = (state = initialLogEventsState, action: any) => {

  switch (action.type) {
    case FETCHING_LOG_EVENTS_SUCCESS:
      return {
        ...state,
        data: action.logEvents,
        lastUpdatedAt: action.timestamp,
        isAvailable: true
      }
    case FETCHING_LOG_EVENTS_FAILURE:
      return {
        ...state,
        isAvailable: false,
        error: action.error,
      }
    case FETCHING_LOG_EVENTS:
      return {
        ...state,
        isFetching: true,
      }
    default:
      return state;
  }
}