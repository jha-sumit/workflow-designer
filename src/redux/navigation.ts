const OPEN_LEFT_DRAWER = "OPEN_LEFT_DRAWER";
const CLOSE_LEFT_DRAWER = "CLOSE_LEFT_DRAWER";

export const openLeftDrawer = () => {
    return {
        type: OPEN_LEFT_DRAWER,
    }
}

export const closeLeftDrawer = () => {
    return {
        type: CLOSE_LEFT_DRAWER,
    }
}

const initialState = {
    isOpen: false,
}

export const navigationHandler = (state = initialState, action: any) => {
    switch (action.type) {
        case OPEN_LEFT_DRAWER:
            return {
                ...state,
                isOpen: true
            };
        case CLOSE_LEFT_DRAWER:
            return {
                ...state,
                isOpen: false
            };
        default:
            return initialState;
    }
}