import React,{Component} from 'react';
import classes from './QuestionArea.css'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import tick from '../../assets/tick.png';
import cross from '../../assets/cross.png';

class QuestionArea extends Component {
    startTime = 0;
    endTime = 0;
    total_time_taken = 0;
    state = {
        closeClicked:false,
        checkBoxValue:null,
        userAnswerState:false,
        attempts:1, //this will help to see how many time a user attempt to a question
       
    }

    current_question_number = parseInt(this.props.match.params.question) - 1
    
    url_with_question_number = this.props.match.params.subject+'/'+(parseInt(this.props.match.params.chapter)-1).toString()+'/'  
    closeClickedHandler = () => {
        this.setState((prevState)=>{
            return {closeClicked:!prevState.closeClicked}
        })
        
    }
    nextQuestion = () => {
        this.current_question_number += 1
        const final_url = this.url_with_question_number + (this.current_question_number).toString()
        const next_url = this.props.location.pathname.slice(0,this.props.location.pathname.length-1)+(this.current_question_number+1).toString()
       // console.log(this.current_question_number)

        this.props.nextQuestion(final_url)
        window.location = next_url
    }
    previousQuestion = () => {
        this.current_question_number -= 1
        const final_url = this.url_with_question_number + (this.current_question_number).toString()
        const prev_url = this.props.location.pathname.slice(0,this.props.location.pathname.length-1)+(this.current_question_number+1).toString()
       // console.log(this.current_question_number)
        this.props.nextQuestion(final_url)
        window.location = prev_url
        //this.props.history.push(next_url)
    }

    checkAnswer = () => {
        this.endTime = Date.now()
        this.total_time_taken = this.endTime - this.startTime;
        this.total_time_taken /= 1000;
        console.log(this.total_time_taken)
        if(this.props.question.answer == this.state.checkBoxValue ){
            console.log('correct')
            

            this.setState({
                userAnswerState:true,
                checkBoxValue:null
            })
            this.props.answerState()
        }
        else {
            console.log('incorrect')
            this.setState({
                userAnswerState:false,
                checkBoxValue:null
            })
            this.props.answerState()
        }
        
    }

    setRadio = (event)=> {
        this.setState({
            checkBoxValue:event.currentTarget.value,
            attempts:this.state.attempts+1
        })
    }
    /*componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
          this.nextQuestion(location.pathname.slice(14,location.pathname.length));
        });
      }
      */
    componentWillMount(){
        this.startTime = Date.now()
    }
    render(){
        console.log('win::',window)
        let question = null;
        let options = null;
        let question_number = null;
        let question_area = <Spinner />;
        
        if(this.props.question){
            
            if(this.props.questionVisibilty){
                question = this.props.question.question
            
                options = this.props.question.options.map(option=>{
                    return (
                        <label className={classes.container} key={this.props.question.options.indexOf(option)}>
                        <span className={classes.option}>{option}</span>
                            <input type="radio" name="radio" value={option} onChange={this.setRadio}/>
                            <span className={classes.checkmark}></span>
                        </label>
                    
                    )
                })

                /*  ---------------------- */
                question_area = (
                    <div className={classes.Question}>
                    <div>
                    <span style={{"fontSize":"28px"}}>
                                Question {this.current_question_number+1}:
                            </span>

                        <span style={{"float":"right"}} className={classes.close} >
                            <i className="fa fa-close" onClick={this.closeClickedHandler}></i>
                        </span>
                    </div>
                    <Modal show={this.state.closeClicked || this.current_question_number<0} modalClosed={this.closeClickedHandler} >
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
                    <div style={{"marginLeft":"20%"}}>
                            <Button btnType="Danger" clicked={this.previousQuestion} disabled={this.current_question_number<=0?true:false}> &nbsp;Previous</Button>
                            <Button btnType="Success" clicked={this.checkAnswer} disabled = {!this.state.checkBoxValue}> &nbsp;Submit</Button>
                            <Button btnType="Warning" clicked={this.nextQuestion} >Skip</Button>
                    </div> 
                </div>
                )


                /* ----------------------- */
                

            }

            else{
                if(this.state.userAnswerState){
                     console.log('correct')
                     question_area = (
                         <div className = {classes.Solution}>
                             <div className={classes.SolutionArea}>
                                <img className={classes.tick} src={tick} />
                             
                                <h2>Our Solution</h2>
                                <img className={classes.answer} src="http://www.physics-assignment.com/wp-content/uploads/2013/06/1.png" />
                                <Button btnType="Warning" clicked={this.nextQuestion}>&nbsp;&nbsp;Next ></Button>
                             </div>
                             
                         </div>
                     )
                }
                else{
                    console.log('incorrect')
                    question_area = (
                        <div className = {classes.Solution}>
                             <div className={classes.SolutionArea}>
                                <img className={classes.tick} src={cross} />
                             
                                <h2>Our Solution</h2>
                                <img className={classes.answer} src="http://www.physics-assignment.com/wp-content/uploads/2013/06/1.png" />
                                <Button btnType="Warning" clicked={this.nextQuestion}>&nbsp;&nbsp;Next ></Button>
                             </div>
                             
                         </div>
                    )
                }
            }
        }
        return (
            <div className={classes.QuestionArea}>
                {question_area}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nextQuestion:(url)=>dispatch(actions.questions(url)),
        answerState:()=>dispatch(actions.answerState())
    }
}

export default connect(null,mapDispatchToProps)(withRouter(QuestionArea));