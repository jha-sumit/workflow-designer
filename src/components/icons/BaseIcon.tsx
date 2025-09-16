import type {IconProps} from "@components/icons/withIcon";
import type {ComponentType} from "react";

export interface IconMap {
    [key: string]: ComponentType<IconProps>;
}
type NameIconProps<M extends IconMap> = IconProps & {
    icon: keyof M;
}

function BaseIcon <M extends IconMap>(map: M) {
    return ({icon, ...props}: NameIconProps<M>) => {
        const Component: ComponentType<IconProps> = map[icon];
        return <Component {...props} />
    }
}

export default BaseIcon;