import * as actionType from '../actions/actionTypes';

const initialState = {
    modalState:false
}

const authStart = (state,action) => {
    return {
        ...state,
        modalState:true
    }
}

const reducers = (state=initialState,action) => {
  switch (action.type){
    case actionType.AUTH_START:return authStart(state,action)
    default:return state
  }
}

export default reducers;
