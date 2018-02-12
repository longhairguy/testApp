
import * as actionType from '../actions/actionTypes';
import {modal_stop} from './home';
import {getTest} from './selectTest';
import axios from 'axios';

export const auth_start= () => {
    return {
        type:actionType.AUTH_START,
        error:null,
    }
}

export const auth_success_middleware = (idToken,userId) => {
    return dispatch => {
        dispatch(auth_success(idToken,userId))
        dispatch(getTest())
        
    }
}

export const auth_success= (idToken,userId) => {
    return {
        type:actionType.AUTH_SUCCESS,
        idToken:idToken,
        userId:userId,
    }
}


export const auth_fail = (error) => {
    return {
        type:actionType.AUTH_FAIL,
        error:error
    }
}
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionType.AUTH_LOGOUT
        
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        },expirationTime*1000);
    };
};


export const auth = (data) => {
    return dispatch => {
        dispatch(auth_start());
        let funcType = data.type
        let authData = null;
        let url = null;
        if(funcType === 'login'){
            authData = {
                'email':data.email,
                'password':data.password,
                returnSecureToken: true
            }
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB6yJLkWKmE_gRhwgb9je7eqVsiaGFcmro'
        }
        else if (funcType === 'signup'){
            authData = {
                'email':data.email,
                //'name':data.name,
                //'phone':data.phone,
                'password':data.password,
                returnSecureToken: true
            }
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB6yJLkWKmE_gRhwgb9je7eqVsiaGFcmro'
  
        }

        axios.post(url,authData).then(response=>{
            localStorage.setItem('token',response.data.idToken)
            localStorage.setItem('userId',response.data.localId)
            localStorage.setItem('expirationDate',response.data.expiresIn)
            dispatch(auth_success_middleware(response.data.idToken,response.data.localId))
            dispatch(modal_stop())
            
            
        }).catch(err=>{
            dispatch(auth_fail(err.response.data.error))
        })
        
    }
}


export const setAuthRedirectPath = (path) => {
    return {
        type: actionType.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const clear_error_message = () => {
    return {
        type:actionType.CLEAR_ERROR_MESSAGE
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(auth_success_middleware(token, userId));
                //dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};