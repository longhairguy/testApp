import * as actionType from '../actions/actionTypes';

const initialState = {
    modalState:false
}

const modalStart = (state,action) => {
    return {
        ...state,
        modalState:true,
        name:action.name
    }
}

const modalStop = (state,action) => {
    return {
        ...state,
        modalState:false
    }
}



const reducers = (state=initialState,action) => {
    switch(action.type){
        case actionType.MODAL_START:return modalStart(state,action)
        case actionType.MODAL_STOP:return modalStop(state,action)
        default:return state
    }
}

export default reducers