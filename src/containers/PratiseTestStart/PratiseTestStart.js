import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';
import Toggler from '../../components/ChaptersMenu/Toggler/Toggler';
import ChaptersMenu from '../../components/ChaptersMenu/ChaptersMenu';
import QuestionArea from '../../components/QuestionArea/QuestionArea';
import classes from './PratiseTestStart.css';
import Spinner from '../../components/UI/Spinner/Spinner';
class PratiseTestStart extends Component {
  state = {
    showSideDrawer:false,
    pageChanged:false,
  }
  question_url = this.props.match.params.subject+'/'+(parseInt(this.props.match.params.chapter)-1).toString()+'/'+(parseInt(this.props.match.params.question)-1).toString()
  current_question_number = parseInt(this.props.match.params.question) - 1
  
  sideDrawerClosedHandler = () => {
    this.setState( { showSideDrawer: false } );
  }

  sideDrawerToggleHandler = () => {
      this.setState( ( prevState ) => {
          return { showSideDrawer: !prevState.showSideDrawer };
      } );

  }
  componentDidMount(){
    this.props.getQuestions(this.question_url)
    this.setState({
      pageChanged:!this.state.pageChanged
    })
    console.log('ho')
  }
  shouldComponentUpdate(nextProps,nextState) {
    const url = this.props.match.params.subject+'/'+(parseInt(this.props.match.params.chapter)-1).toString()+'/'+(parseInt(this.props.match.params.question)-1).toString()
    //this.props.getQuestions(url)
    if(nextState.pageChanged){
      console.log('trigger')
      return true;
    }
    console.log('not trigger')
    return false;
  }
    render(){
      console.log('sd')
      return(
        <div className={classes.PratiseTestStart}>
            <div>
              <Toggler clicked={this.sideDrawerToggleHandler} />
              
            </div>
            {this.props.question!==null?
              <QuestionArea 
                className={classes.QuestionArea} 
                question={this.props.question}
                questionVisibilty={this.props.questionVisibilty}
                />:
              <Spinner/>}
            {this.state.showSideDrawer?<ChaptersMenu open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>:null}

                     
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    question:state.questions.questions,
    questionVisibilty:state.questions.questionVisibilty
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getQuestions:(url)=>dispatch(actions.questions(url)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PratiseTestStart));
