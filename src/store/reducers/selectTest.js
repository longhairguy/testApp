import * as actionType from '../actions/actionTypes';

const initialState = {
    selectTestData:null,
    subjectDescription:null,
}

const getTestData = (state,action) => {
    return {
        ...state,
        selectTestData:action.data
    }
}

const getQuestionDescription = (state,action) => {
    return{
        ...state,
        subjectDescription:action.data
    }
}


const reducers = (state=initialState,action) => {
    switch(action.type){
        case actionType.GET_TEST_TYPE:return getTestData(state,action)
        case actionType.GET_QUESTION_DESCRIPTION:return getQuestionDescription(state,action)
        default:return state
    }
}

export default reducers