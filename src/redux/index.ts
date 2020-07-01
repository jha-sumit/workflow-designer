import { combineReducers } from "redux";

import { authenticationHandler } from "./users";
import { navigationHandler } from "./navigation";
import { workflowHandler } from "./WorkflowReducer";
import {logEventHandler} from './LogEventReducer';

export const rootHandler = combineReducers({
    nav: navigationHandler,
    wfl: workflowHandler,
    auth: authenticationHandler,
    evt: logEventHandler
});