import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import * as actions from '../../store/actions';
class PratiseTestStart extends Component {
  render(){
    console.log(this.props.match.params.subject)
    return(
      <h1>Yo</h1>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuestions:()=>dispatch(actions.questions())
  }
}

export default withRouter(PratiseTestStart);
