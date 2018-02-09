
import * as actionType from '../actions/actionTypes';
import axios from 'axios';
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

export const on_auth = () => {
    return {
        type:actionType.ON_AUTH,
        error:null
    }
}

export const on_auth_fail = (error) => {
    return {
        type:actionType.ON_AUTH_FAIL,
        error:error
    }
}

export const auth = (data) => {
    console.log(data)
    return dispatch => {
        dispatch(on_auth());
        let funcType = data.type
        let authData = null;
        let url = null;
        if(funcType === 'login'){
            authData = {
                'email':data.email,
                'password':data.password,
            }
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB6yJLkWKmE_gRhwgb9je7eqVsiaGFcmro'
        }
        else if (funcType === 'signup'){
                console.log('signup')
            authData = {
                'email':data.email,
                //'name':data.name,
                //'phone':data.phone,
                'password':data.password,
            }
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB6yJLkWKmE_gRhwgb9je7eqVsiaGFcmro'
  
        }

        axios.post(url,authData).then(response=>{
            console.log(response.data)
        }).catch(err=>{
            console.log(err);
            dispatch(on_auth_fail(err.response.data.error))
        })
        
    }
}