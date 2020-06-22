import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {Main} from "../components";
import {LoginPage, DashboardPage, WorkflowsPage, WorkflowInstancesPage, MonitorPage} from ".";


export class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route path="/login" component={LoginPage}></Route>
                    {/* <Main path="/login" component={LoginPage} checkAuthentication={false} /> */}
                    <Main path="/dashboard" component={DashboardPage} checkAuthentication={false} />
                    <Main path="/workflows" component={WorkflowsPage} checkAuthentication={false} />
                    <Main path="/workflow-instances" component={WorkflowInstancesPage} checkAuthentication={false} />
                    <Main path="/monitor" component={MonitorPage} checkAuthentication={false} />
                </Switch>
            </Router>
        );
    }
}