import {Route, Routes as ReactRoutes} from "react-router-dom";
import BaseLayout from "@layouts/BaseLayout";
import type {FC} from "react";
import Dashboard from "@pages/dashboard";


const Paths = {
    BASE: "/",
    LOGIN: "/login",
    DASHBOARD: "",
    WORKFLOWS: "/workflows",
    INSTANCES: "/instances",
}
const AppRoutes: FC = () => {
    return (
        <ReactRoutes>
            <Route path={Paths.BASE} Component={BaseLayout}>
                <Route index path={Paths.DASHBOARD} Component={Dashboard}/>
            </Route>
        </ReactRoutes>

    )
};

export default AppRoutes;