import Axios from "axios"

export const getWorkflows = () => {
    return Axios.get("/workflows");
}