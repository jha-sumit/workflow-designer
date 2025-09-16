import type {ComponentType} from "react";
import {Icon, type IconTypeMap} from "@mui/material";

export type IconProps = IconTypeMap['props']


const withIcon = (SVG: ComponentType) => {
    return (props: IconProps) => {
        return <Icon component={SVG} {...props} />
    }
};

export default withIcon;