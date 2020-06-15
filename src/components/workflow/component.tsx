import * as React from "react";
import { WorkflowList } from "./components/workflows";
import { WorkflowInstanceList } from "./components/instances";

export const Workflows: React.StatelessComponent = (props) => {
    return (
        <WorkflowList />
    );
}

export const WorkflowInstances: React.StatelessComponent = (props) => {
    return (
        <WorkflowInstanceList />
    );
}