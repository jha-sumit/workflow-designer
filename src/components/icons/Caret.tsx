import withIcon from "@components/icons/withIcon";
import BaseIcon from "@components/icons/BaseIcon";

const Badge = withIcon(() => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.5 2C6.22386 2 6 2.22386 6 2.5C6 2.77614 6.22386 3 6.5 3H9.5C9.77614 3 10 2.77614 10 2.5C10 2.22386 9.77614 2 9.5 2H6.5Z"
            fill="currentColor"/>
        <path
            d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
            fill="currentColor"/>
        <path
            d="M4.5 0C3.11929 0 2 1.11929 2 2.5V14C2 15.1046 2.89543 16 4 16H12C13.1046 16 14 15.1046 14 14V2.5C14 1.11929 12.8807 0 11.5 0H4.5ZM3 2.5C3 1.67157 3.67157 1 4.5 1H11.5C12.3284 1 13 1.67157 13 2.5V13.295C12.8152 13.1446 12.5619 12.9719 12.2236 12.8028C11.392 12.387 10.0628 12 8 12C5.9372 12 4.60796 12.387 3.77639 12.8028C3.43811 12.9719 3.18477 13.1446 3 13.295V2.5Z"
            fill="currentColor"/>
    </svg>

));

const BadgeFill = withIcon(() => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 2C2 0.895431 2.89543 0 4 0H12C13.1046 0 14 0.895431 14 2V14C14 15.1046 13.1046 16 12 16H4C2.89543 16 2 15.1046 2 14V2ZM6.5 2C6.22386 2 6 2.22386 6 2.5C6 2.77614 6.22386 3 6.5 3H9.5C9.77614 3 10 2.77614 10 2.5C10 2.22386 9.77614 2 9.5 2H6.5ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11ZM13 13.7553C12.1456 12.8258 10.6234 12 8.00005 12C5.37665 12 3.8544 12.8259 3 13.7554V14C3 14.5523 3.44772 15 4 15H12C12.5523 15 13 14.5523 13 14V13.7553Z"
            fill="currentColor"/>
    </svg>

));

const Right = withIcon(() => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6 12.7962L6 3.20377L11.4814 8L6 12.7962ZM6.6585 13.5488L12.1399 8.75258C12.5952 8.35417 12.5952 7.64584 12.1399 7.24743L6.6585 2.45119C6.01192 1.88543 5 2.34461 5 3.20377L5 12.7962C5 13.6554 6.01192 14.1146 6.6585 13.5488Z"
            fill="currentColor"/>
    </svg>
));

const Up = withIcon(() => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.20373 11L12.7962 11L7.99996 5.51859L3.20373 11ZM2.45115 10.3415L7.24738 4.86009C7.6458 4.40476 8.35413 4.40476 8.75254 4.86009L13.5488 10.3415C14.1145 10.9881 13.6554 12 12.7962 12H3.20373C2.34457 12 1.88539 10.9881 2.45115 10.3415Z"
            fill="currentColor"/>
    </svg>
));
const Down = withIcon(() => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.20373 5L12.7962 5L7.99996 10.4814L3.20373 5ZM2.45115 5.6585L7.24738 11.1399C7.6458 11.5952 8.35413 11.5952 8.75254 11.1399L13.5488 5.6585C14.1145 5.01192 13.6554 4 12.7962 4H3.20373C2.34457 4 1.88539 5.01192 2.45115 5.6585Z"
            fill="currentColor"/>
    </svg>
));

const Left = withIcon(() => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 12.7962L10 3.20377L4.51859 8L10 12.7962ZM9.3415 13.5488L3.86009 8.75258C3.40476 8.35417 3.40476 7.64584 3.86009 7.24743L9.3415 2.45119C9.98808 1.88543 11 2.34461 11 3.20377V12.7962C11 13.6554 9.98808 14.1146 9.3415 13.5488Z"
            fill="currentColor"/>
    </svg>

));

const CaretIconsMap = {
    Right,
    Up,
    Badge,
    BadgeFill,
    Down,
    Left,
}
const CommonIcon = BaseIcon(CaretIconsMap);
const Caret = Object.assign(CommonIcon, {
    ...CaretIconsMap,
});

export default Caret;