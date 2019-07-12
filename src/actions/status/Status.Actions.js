import * as Types from '../../constants/status/Status.Constants';
import * as services from '../../services/status/StatusServices';

export const viewListStatusRequest = (keyword) => {
    return (dispatch) => {
        return services.getListStatus(keyword).then(result => {
            return dispatch(viewListStatus(result));
        })
    }
}
export const viewListStatus = (status) => {
    return {
        type: Types.VIEW_LIST_STATUS,
        status
    }
}

export const selectStatusRequest = (Id) => {
    return (dispatch) => {
        return services.selectStatusById(Id).then(result => {
            return dispatch(selectStatusById(result));
        })
    }
}
export const selectStatusById = (status) => {
    return {
        type: Types.SELECT_STATUS_BY_ID,
        status
    }
}

export const refreshListStatusRequest = () => {
    return (dispatch) => {
        return services.refreshListStatus().then(result => {
            return dispatch(refreshListStatus(result));
        })
    }
}
export const refreshListStatus = (status) => {
    return {
        type: Types.SELECT_STATUS_BY_ID,
        status
    }
}