import React,{Component} from 'react';
import classes from './QuestionArea.css'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal';
import {connect} from 'react-redux';
import {Link,Redirect,withRouter} from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
class QuestionArea extends Component {
    state = {
        closeClicked:false;
    }
    question_url = this.props.match.params.subject
    subjectName = this.props.match.params.subject
    current_question_number = parseInt(this.props.match.params.question)-1
    closeClickedHandler = () => {
        this.setState((prevState)=>{
            return {closeClicked:!prevState.closeClicked}
        })
        
    }
    nextQuestion = (url) => {
        console.log(url)
        return(<Redirect to="/" />)
    }
    componentDidMount(){
        if(this.props.question_data[this.current_question_number]==undefined){
            this.props.getQuestions(this.props.match.params.subject)
            this.props.getChapters(this.props.match.params.subject)
        }
        console.log('s',this.props.question_data[1])
     
    }
    componentWillUpdate(){
        console.log('update')    
    }
    nextQuestionHandler = () => {
        console.log('s',this.props)
        this.current_question_number += 1;
        console.log(this.current_question_number)
        this.props.history.push(this.props.nextUrl)
        
    }
    render(){
        console.log('ye')
        console.log(this.props)
        let question = null;
        let options = <Spinner />;
        const question_data = this.props.question_data.length
        if(question_data){
            for(let key in question_data ){
                console.log('sdsd',question_data[key])
            }
        }
       
        if(this.props.question_data[this.current_question_number]){
        question = this.props.question_data[this.current_question_number].question
        options = this.props.question_data[this.current_question_number].options.map(option=>{
            return (
                <label className={classes.container} key={this.props.question_data[this.current_question_number].options.indexOf(option)}>
                <span className={classes.option}>{option}</span>
                    <input type="radio" name="radio"/>
                    <span className={classes.checkmark}></span>
                </label>
               
            )
        })        }
        return (
            <div className={classes.QuestionArea}>
                <div className={classes.Question}>
                    <div>
                        <span style={{"fontSize":"28px"}}>Question 1:</span>
                        <span style={{"float":"right"}} className={classes.close} >
                            <i className="fa fa-close" onClick={this.closeClickedHandler}></i>
                        </span>
                    </div>
                    <Modal show={this.state.closeClicked} modalClosed={this.closeClickedHandler} >
                        <h3 style={{"textAlign":"center"}}>Do you want to leave practise session ?</h3>
                        <div style={{"marginLeft":"35%"}}>
                        <Link to="/select-test"><Button btnType="Danger">&nbsp;Yes</Button></Link>
                        <Button clicked={this.closeClickedHandler} btnType="Default">&nbsp;No</Button>
                        </div>
                    </Modal>

                    <h3 style={{"marginLeft":"3%"}}> {question}</h3>
                    <form>
                            {options}
                        <br/>
                       
                       
                    </form>
                    <div style={{"marginLeft":"35%"}}>
                        <Button btnType="Success"> &nbsp;Submit</Button>
                        <Button btnType="Warning" clicked={this.nextQuestionHandler}>Skip</Button>
                    </div> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        question_list:state.questions.questions
    }
}

const mapDispatchToProps = dispatch => {
    return {
      getQuestions:(url)=>dispatch(actions.questions(url)),
      getChapters:(chapterName)=>dispatch(actions.chapters(chapterName))
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(QuestionArea));