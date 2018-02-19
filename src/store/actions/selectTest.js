
import * as actionType from '../actions/actionTypes';
import axios from 'axios';
export const get_test_type = (data) => {
    return {
        type:actionType.GET_TEST_TYPE,
        data:data
    }
}

export const getTest = () =>{
    return dispatch=>{
        axios.get("https://testseries-57ff0.firebaseio.com/TestTypes.json").then(response=>{
            //console.log(response)
            dispatch(get_test_type(response.data))
        }).catch(err=>{
            console.log(err)
        })
    }
   
}

export const get_subject_description = (data) => {
    return {
        type:actionType.GET_QUESTION_DESCRIPTION,
        data:data
    }
}
export const getSubjectDescription = () => {
    return dispatch=>{
        axios.get('https://testseries-57ff0.firebaseio.com/SubjectDescription.json').then(response=>{
            dispatch(get_subject_description(response.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}