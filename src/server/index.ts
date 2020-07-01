import Axios from "axios";
export {authenticate, checkIfAuthenticated} from "./users/authentication";
export {getWorkflows} from './WorkflowService';

export const api = Axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});