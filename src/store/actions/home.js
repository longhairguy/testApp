
import * as actionType from '../actions/actionTypes';

export const auth_start = (name) => {
    return {
        type:actionType.AUTH_START,
        name:name
    }
}

export const auth_stop = () => {
    return {
        type:actionType.AUTH_STOP
    }
}