import React,{Component} from 'react';
import classes from './QuestionArea.css'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import Aux from '../../hoc/Aux/Aux';
class QuestionArea extends Component {
    state = {
        closeClicked:false,
        checkBoxValue:null,
        userInAnswerState:true,
        //questionVisibility:true,
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
        if(this.props.question.answer == this.state.checkBoxValue ){
            console.log('correct')
            this.setState({
                userInAnswerState:false,
                //questionVisibility:!this.state.questionVisibility
            })
        }
        else {
            console.log('incorrect')
            this.setState({userInAnswerState:false})
        }
        
    }

    setRadio = (event)=> {
        this.setState({
            checkBoxValue:event.currentTarget.value
        })
    }
    /*componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
          this.nextQuestion(location.pathname.slice(14,location.pathname.length));
        });
      }
      */
      
    render(){
       
        let question = null;
        let options = <Spinner />;
        let question_number = null;
        let buttons = null;
        if(this.props.question){
            if(this.state.userInAnswerState){
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
                question_number = (
                    <span style={{"fontSize":"28px"}}>
                                Question {this.current_question_number+1}:
                            </span>
                            
                )

                buttons = (
                            <Aux>
                            <Button btnType="Danger" clicked={this.previousQuestion} disabled={this.current_question_number<=0?true:false}> &nbsp;Previous</Button>
                            <Button btnType="Success" clicked={this.checkAnswer}> &nbsp;Submit</Button>
                            <Button btnType="Warning" clicked={this.nextQuestion} >Skip</Button>
                            </Aux>
                )
            }
            else{
                options = (
                    <Aux>
                        <h1>Yos</h1>
                    </Aux>
                )
            }
        }
        return (
            <div className={classes.QuestionArea}>
                <div className={classes.Question}>
                    <div>
                        {question_number}
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
                        {buttons}    
                    </div> 
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nextQuestion:(url)=>dispatch(actions.questions(url))
    }
}

export default connect(null,mapDispatchToProps)(withRouter(QuestionArea));