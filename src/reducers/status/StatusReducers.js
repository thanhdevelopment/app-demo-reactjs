import * as Types from '../../constants/status/Status.Constants';

var initState = {
    status: []
};

const status = (state = initState, action) => {
    switch (action.type) {
        case Types.VIEW_LIST_STATUS:
            state.status = action.status;
            return { ...state };

        case Types.SELECT_STATUS_BY_ID:
            state.status = action.status;
            return { ...state };

        case Types.REFRES_LIST_STATUS:
            state.status = action.status;
            return { ...state };

        case Types.REFRES_LIST_ITEM:
            break;

        default: return { ...state };
    }
}
export default status;