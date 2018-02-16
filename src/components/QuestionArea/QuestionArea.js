import React,{Component} from 'react';
import classes from './QuestionArea.css'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';
class QuestionArea extends Component {
    state = {
        closeClicked:false
    }
    closeClickedHandler = () => {
        this.setState((prevState)=>{
            return {closeClicked:!prevState.closeClicked}
        })
        
    }
    render(){
        let question = null;
        let options = <Spinner />;
        if(this.props.question){
        question = this.props.question.question
        options = this.props.question.options.map(option=>{
            return (
                <label className={classes.container} key={this.props.question.options.indexOf(option)}>
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
                        <div style={{"marginLeft":"35%"}}>
                        <Button btnType="Success"> &nbsp;Submit</Button>
                        <Button btnType="Warning">Skip</Button>
                        </div>
                    </form> 
                </div>
            </div>
        )
    }
}



export default (QuestionArea);