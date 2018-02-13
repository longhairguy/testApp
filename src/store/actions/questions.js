import * as actionTypes from './actionTypes';
import axios from 'axios';
export const getQuestions = (data) =>{
  return {
    type:actionTypes.GET_QUESTIONS,
    data:data
  }
}

export const questions = (subject) => {
  return dispatch=>{
    axios.get("https://testseries-57ff0.firebaseio.com/questions/"+subject).then(response=>{
      console.log(response);
      dispatch(getQuestions(response.data))
    }).catch(err=>{
      console.log(err);
    })
  }
}
