import { WorkflowDetail } from "../models";
import { api } from "../server";

const FETCHING_WORKFLOW_DETAIL = 'FETCHING_WORKFLOW_DETAIL'
const FETCHING_WORKFLOW_DETAIL_FAILURE = 'FETCHING_WORKFLOW_DETAIL_FAILURE'
const FETCHING_WORKFLOW_DETAIL_SUCCESS = 'FETCHING_WORKFLOW_DETAIL_SUCCESS'

export const fetchWorkflowDetail = (id: number) => {
  return fetchAndHandleWorkflowDetail(id);
}

const fetchingWorkflowDetail = () => {
  return {
    type: FETCHING_WORKFLOW_DETAIL,
  }
}

const fetchingWorkflowDetailFailure = (error: string) => {
  return {
    type: FETCHING_WORKFLOW_DETAIL_FAILURE,
    error: 'Error fetching Workflow Instances.',
  }
}

const fetchingWorkflowDetailSuccess = (instances: WorkflowDetail[], timestamp: Date) => {
  return {
    type: FETCHING_WORKFLOW_DETAIL_SUCCESS,
    instances,
    timestamp,
  };
}

export const fetchAndHandleWorkflowDetail = (id: number) => {
  return (dispatch: any) => {
    dispatch(fetchingWorkflowDetail());
    api.get("/workflows/" + id).then((response: any) => {
      dispatch(fetchingWorkflowDetailSuccess(response.data, new Date()));
      // dispatch(authUser(user.uid));
    }).catch((error) => dispatch(fetchingWorkflowDetailFailure(error)));
  };
}

const initialWorkflowDetailState = {
  data: [],
  lastUpdatedAt: new Date(),
  isFetching: false,
  isAvailable: false,
  error: ""
}

export const workflowDetailHandler = (state = initialWorkflowDetailState, action: any) => {

  switch (action.type) {
    case FETCHING_WORKFLOW_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.instances,
        lastUpdatedAt: action.timestamp,
        isAvailable: true
      }
    case FETCHING_WORKFLOW_DETAIL_FAILURE:
      return {
        ...state,
        isAvailable: false,
        error: action.error,
      }
    case FETCHING_WORKFLOW_DETAIL:
      return {
        ...state,
        isFetching: true,
      }
    default:
      return state;
  }
}