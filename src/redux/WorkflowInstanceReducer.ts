import { WorkflowInstance } from "../models";
import { api } from "../server";

const FETCHING_WORKFLOW_INSTANCES = 'FETCHING_WORKFLOW_INSTANCES'
const FETCHING_WORKFLOW_INSTANCES_FAILURE = 'FETCHING_WORKFLOW_INSTANCES_FAILURE'
const FETCHING_WORKFLOW_INSTANCES_SUCCESS = 'FETCHING_WORKFLOW_INSTANCES_SUCCESS'

export const fetchWorkflowInstances = (id: number) => {
  return fetchAndHandleWorkflowInstances(id);
}

const fetchingWorkflows = () => {
  return {
    type: FETCHING_WORKFLOW_INSTANCES,
  }
}

const fetchingWorkflowsFailure = (error: string) => {
  return {
    type: FETCHING_WORKFLOW_INSTANCES_FAILURE,
    error: 'Error fetching Workflow Instances.',
  }
}

const fetchingWorkflowsSuccess = (instances: WorkflowInstance[], timestamp: Date) => {
  return {
    type: FETCHING_WORKFLOW_INSTANCES_SUCCESS,
    instances,
    timestamp,
  };
}

export const fetchAndHandleWorkflowInstances = (id: number) => {
  return (dispatch: any) => {
    dispatch(fetchingWorkflows());
    api.get("/workflows/" + id + "/instances").then((response: any) => {
      dispatch(fetchingWorkflowsSuccess(response.data, new Date()));
      // dispatch(authUser(user.uid));
    }).catch((error) => dispatch(fetchingWorkflowsFailure(error)));
  };
}

const initialWorkflowInstancesState = {
  data: [],
  lastUpdatedAt: new Date(),
  isFetching: false,
  isAvailable: false,
  error: ""
}

export const workflowInstanceHandler = (state = initialWorkflowInstancesState, action: any) => {

  switch (action.type) {
    case FETCHING_WORKFLOW_INSTANCES_SUCCESS:
      return {
        ...state,
        data: action.instances,
        lastUpdatedAt: action.timestamp,
        isAvailable: true
      }
    case FETCHING_WORKFLOW_INSTANCES_FAILURE:
      return {
        ...state,
        isAvailable: false,
        error: action.error,
      }
    case FETCHING_WORKFLOW_INSTANCES:
      return {
        ...state,
        isFetching: true,
      }
    default:
      return state;
  }
}