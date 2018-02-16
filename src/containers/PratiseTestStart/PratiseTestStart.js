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
    showSideDrawer:false
  }
  question_url = this.props.match.params.subject+'/'+this.props.match.params.chapter
   
  sideDrawerClosedHandler = () => {
    this.setState( { showSideDrawer: false } );
  }

  sideDrawerToggleHandler = () => {
      this.setState( ( prevState ) => {
          return { showSideDrawer: !prevState.showSideDrawer };
      } );

  }
  componentDidMount(){
    console.log(this.question_url)

    this.props.getQuestions(this.question_url)
  }
  questions_Array = [];
  current_question_number = parseInt(this.props.match.params.question) - 1
    render(){
  
      if(this.props.questions){
        console.log('dad',this.props.questions)
        this.props.questions.map(question=>{
          this.questions_Array.push(question)
        })
      }
      return(
        <div>
            <div>
              <Toggler clicked={this.sideDrawerToggleHandler} />
              
            </div>
            
            {this.props.question!==null?
              <QuestionArea className={classes.QuestionArea} question={this.questions_Array[this.current_question_number]}/>:
              <Spinner/>}
            <ChaptersMenu open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
          
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    questions:state.questions.questions
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getQuestions:(url)=>dispatch(actions.questions(url))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PratiseTestStart));
