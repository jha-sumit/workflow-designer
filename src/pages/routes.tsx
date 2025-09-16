import * as React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {Main} from "../components";
import {DashboardPage, LoginPage, MonitorPage, WorkflowInstancesPage, WorkflowsPage} from ".";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Navigate to="/login"/>
                </Route>
                <Route path="/login" Component={LoginPage}></Route>
                {/* <Main path="/login" component={LoginPage} checkAuthentication={false} /> */}
                <Main path="/dashboard" component={DashboardPage} checkAuthentication={false}/>
                <Main path="/workflows" component={WorkflowsPage} checkAuthentication={false}/>
                <Main path="/workflow-instances" component={WorkflowInstancesPage} checkAuthentication={false}/>
                <Main path="/monitor" component={MonitorPage} checkAuthentication={false}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;