import * as actionTypes from './actionTypes';
import axios from 'axios';

export const get_graph_data = (data) => {
    return {
        type:actionTypes.GET_GRAPH_DATA,
        data:data
    }
}

export const statistic_data = (subject_name) => {
    console.log(subject_name)
    let url = 'https://testseries-57ff0.firebaseio.com/User/Subject/'+subject_name+".json"
    console.log(url)
    return dispatch => {
        axios.get(url).then(response=>{
            console.log(response)
            dispatch(get_graph_data(response.data))
        }).catch(err=>{
            console.log(err)
        })
    }
    
}