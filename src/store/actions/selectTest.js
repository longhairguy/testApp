
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
            console.log(response)
            dispatch(get_test_type(response.data))
        }).catch(err=>{
            console.log(err)
        })
    }
   
}