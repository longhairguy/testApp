
import * as actionType from '../actions/actionTypes';
export const modal_start = (name) => {
    return {
        type:actionType.MODAL_START,
        name:name
    }
}

export const modal_stop = () => {
    return {
        type:actionType.MODAL_STOP
    }
}
