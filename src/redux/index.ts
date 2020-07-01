import { combineReducers } from "redux";

import { authenticationHandler } from "./users";
import { navigationHandler } from "./navigation";
import { workflowHandler } from "./WorkflowReducer";

export const rootHandler = combineReducers({
    nav: navigationHandler,
    wfl: workflowHandler,
    auth: authenticationHandler
});