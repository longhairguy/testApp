import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getQuestions = (data) =>{
  return {
    type:actionTypes.GET_QUESTIONS,
    data:data
  }
}

export const questions = (subject_data) => {
  const url = "https://testseries-57ff0.firebaseio.com/Questions/"+subject_data+'.json'
  console.log(url)
  return dispatch=>{
    axios.get(url).then(response=>{
      console.log('res',response)
      dispatch(getQuestions(response.data))
    }).catch(err=>{
      console.log(err);
    })
  }
}

export const getChapters = (data) => {
  return {
    type:actionTypes.GET_CHAPTERS,
    data:data
  }
}

export const chapters = (chapter) => {
  return dispatch=>{
    axios.get("https://testseries-57ff0.firebaseio.com/Chapters/"+chapter+".json").then(response=>{
      console.log(response);
      dispatch(getChapters(response.data))
    }).catch(err=>{
      console.log(err);
    })
  }
  
}