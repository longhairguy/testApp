import * as actionType from '../actions/actionTypes';

const initialState = {
    selectTestData:null
}

const getTestData = (state,action) => {
    return {
        ...state,
        selectTestData:action.data
    }
}




const reducers = (state=initialState,action) => {
    switch(action.type){
        case actionType.GET_TEST_TYPE:return getTestData(state,action)
        default:return state
    }
}

export default reducers