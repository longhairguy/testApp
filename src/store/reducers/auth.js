import * as actionType from '../actions/actionTypes';

const initialState = {
    error:false,
    token:null,
    loading:false,
    loggedIn:false,
    authRedirect:'/',
    token:null,
    userId:null,
}


const onAuthStart = (state,action) => {
    return {
        ...state,
        error:action.error,
        loading:true
    }
}

const onAuthSuccess = (state,action) => {
    return {
        ...state,
        token:action.idToken,
        userId:action.localId,
        loading:false,
        loggedIn:true,

    }
}
const onAuthFail = (state,action) => {

    return {
        ...state,
        error:action.error,
        loading:false
    }
}

const onLogout = (state,action) => {
    return {
        ...state,
        token:null,
        userId:null,
        loggedIn:false,
    }
}
const setAuthRedirectPath = (state, action) => {
    return {
        ...state,
        authRedirectPath: action.path
     }
}


const reducers = (state=initialState,action) => {
    switch(action.type){
        case actionType.AUTH_START:return onAuthStart(state,action)
        case actionType.AUTH_SUCCESS:return onAuthSuccess(state,action)
        case actionType.AUTH_FAIL:return onAuthFail(state,action)
        case actionType.AUTH_LOGOUT:return onLogout(state,action)
        case actionType.SET_AUTH_REDIRECT_PATH:return setAuthRedirectPath(state,action)
        default:return state
    }
}

export default reducers