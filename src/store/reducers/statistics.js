import * as actionTypes from '../actions/actionTypes';

const initialState = {
    graphData:null
}

const getGraphData = (state,action) => {
    return {
        ...state,
        graphData:action.data
    }
}


const reducers = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.GET_GRAPH_DATA:return getGraphData(state,action)
        default:return state
    }
}

export default reducers;