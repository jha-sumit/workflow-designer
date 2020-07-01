import { Workflow } from "../models";
import { api } from "../server";

const FETCHING_WORKFLOWS = 'FETCHING_WORKFLOWS'
const FETCHING_WORKFLOWS_FAILURE = 'FETCHING_WORKFLOWS_FAILURE'
const FETCHING_WORKFLOWS_SUCCESS = 'FETCHING_WORKFLOWS_SUCCESS'

export const fetchWorkflows = () => {
  return fetchAndHandleWorkflows();
}

const fetchingWorkflows = () => {
  return {
    type: FETCHING_WORKFLOWS,
  }
}

const fetchingWorkflowsFailure = (error: string) => {
  return {
    type: FETCHING_WORKFLOWS_FAILURE,
    error: 'Error fetching Workflows.',
  }
}

const fetchingWorkflowsSuccess = (workflows: Workflow[], timestamp: Date) => {
  return {
    type: FETCHING_WORKFLOWS_SUCCESS,
    workflows,
    timestamp,
  };
}

export const fetchAndHandleWorkflows = () => {
  return (dispatch: any) => {
    dispatch(fetchingWorkflows());
    api.get("/workflows").then((response: any) => {
      dispatch(fetchingWorkflowsSuccess(response.data, new Date()));
      // dispatch(authUser(user.uid));
    }).catch((error) => dispatch(fetchingWorkflowsFailure(error)));
  };
}

const initialWorkflowsState = {
  data: [],
  lastUpdatedAt: new Date(),
  isFetching: false,
  isAvailable: false,
  error: ""
}

export const workflowHandler = (state = initialWorkflowsState, action: any) => {

  switch (action.type) {
    case FETCHING_WORKFLOWS_SUCCESS:
      return {
        ...state,
        data: action.workflows,
        lastUpdatedAt: action.timestamp,
        isAvailable: true
      }
    case FETCHING_WORKFLOWS_FAILURE:
      return {
        ...state,
        isAvailable: false,
        error: action.error,
      }
    case FETCHING_WORKFLOWS:
      return {
        ...state,
        isFetching: true,
      }
    default:
      return state;
  }
}