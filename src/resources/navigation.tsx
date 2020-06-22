import DashboardIcon from "@material-ui/icons/Dashboard";
import React from "react";

class RouteProps {
    label: string = '';
    icon: null | any = null;
    path: string = '';
    children?: RouteProps[];
}
export const RouteResource: RouteProps[] = [
    {label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard'},
    {label: 'Workflows', icon: <DashboardIcon />, path: '/workflows'},
    {label: 'Events', icon: <DashboardIcon />, path: '/monitor'},
]