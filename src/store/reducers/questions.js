import * as actionType from '../actions/actionTypes';

const initialState = {
    chapters:null,
    questionVisibilty:null
}

const getChapters = (state,action) => {
    return {
        ...state,
        modalState:true,
        chapters:action.data
    }
}

const getQuestions = (state,action) => {
    return {
        ...state,
        questions:action.data,
        questionVisibilty:true
    }
}

const answerState = (state,action) => {
    return {
        ...state,
        questionVisibilty:false
    }
}

const reducers = (state=initialState,action) => {
    switch(action.type){
        case actionType.GET_CHAPTERS:return getChapters(state,action)
        case actionType.GET_QUESTIONS:return getQuestions(state,action)
        case actionType.ANSWER_STATE:return answerState(state,action)
        default:return state
    }
}

export default reducers