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
   
  sideDrawerClosedHandler = () => {
    this.setState( { showSideDrawer: false } );
  }

  sideDrawerToggleHandler = () => {
      this.setState( ( prevState ) => {
          return { showSideDrawer: !prevState.showSideDrawer };
      } );

  }
  questions_data = null;
  questions_array = [];
  current_question_element = parseInt(this.props.match.params.question) - 1
  current_question_number = parseInt(this.props.match.params.question)
    render(){
      for(let key in this.props.questions){
        for(let data in this.props.questions[key]){
          console.log(this.props.questions[key][data])
          this.questions_data = this.props.questions[key][data]
          this.questions_array.push(this.props.questions[key][data])
        }
      }
      /*if(this.props.questions){
        console.log('dad',this.props.questions)
        this.props.questions.map(question=>{
          this.questions_Array.push(question)
        })
      }*/
      console.log('res',this.questions_array)
      let final_array =[];
      if(this.questions_array){
        final_array = this.questions_array
      }
      return(
        
        <div>
            <div>
              <Toggler clicked={this.sideDrawerToggleHandler} />
              
            </div>
            
            {this.questions_array!==null?
              <QuestionArea 
                className={classes.QuestionArea} 
                question_data={final_array}
                nextUrl={this.props.location.pathname.slice(0,this.props.location.pathname.length-1)+(parseInt(this.current_question_number)+1).toString()}
                />:
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


export default connect(mapStateToProps)(withRouter(PratiseTestStart));
