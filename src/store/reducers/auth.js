import * as actionType from '../actions/actionTypes';

const initialState = {
    error:false,
    token:null
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

const onAuth = (state,action) => {
    return {
        ...state,
        error:action.error
    }
}

const onAuthSuccess = (state,action) => {
    return {
        ...state,
        token:true
    }
}
const onAuthFail = (state,action) => {

    return {
        ...state,
        error:action.error
    }
}

const reducers = (state=initialState,action) => {
    switch(action.type){
        case actionType.AUTH_START:return authStart(state,action)
        case actionType.AUTH_STOP:return authStop(state,action)
        case actionType.ON_AUTH:return onAuth(state,action)
        case actionType.ON_AUTH_SUCCESS:return onAuthSuccess(state,action)
        case actionType.ON_AUTH_FAIL:return onAuthFail(state,action)
        default:return state
    }
}

export default reducers