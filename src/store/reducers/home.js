import * as actionType from '../actions/actionTypes';

const initialState = {
    modalState:false
}

const authStart = (state,action) => {
    return {
        ...state,
        modalState:true,
        name:action.name
    }
}

const authStop = (state,action) => {
    return {
        ...state,
        modalState:false
    }
}

const reducers = (state=initialState,action) => {
    switch(action.type){
        case actionType.AUTH_START:return authStart(state,action)
        case actionType.AUTH_STOP:return authStop(state,action)
        default:return state
    }
}

export default reducers