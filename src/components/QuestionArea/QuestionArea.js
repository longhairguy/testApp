import React,{Component} from 'react';
import classes from './QuestionArea.css'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal';
import {Link} from 'react-router-dom';
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

                    <h3> Mrudul invested an amount of Rs. 29500 in order to start a business. Shalaka joined her 4 months later by investing an amount of Rs. 33500. If the business earned a profit of Rs. 120575 at the end of two years,
                        what was Mrudul’s share of the profit?
                    </h3>
                    <form>
                        <label className={classes.container}>
                        <span className={classes.option}>Rs. 60725</span>
                            <input type="radio" name="radio"/>
                            <span className={classes.checkmark}></span>
                        </label>
                        <label className={classes.container}>
                        <span className={classes.option}>Rs. 60725</span>
                            <input type="radio" name="radio"/>
                            <span className={classes.checkmark}></span>
                        </label>
                        <label className={classes.container}>
                        <span className={classes.option}>Rs. 60725</span>
                            <input type="radio" name="radio"/>
                            <span className={classes.checkmark}></span>
                        </label>
                        <label className={classes.container}>
                        <span className={classes.option}>Rs. 60725</span>
                            <input type="radio" name="radio"/>
                            <span className={classes.checkmark}></span>
                        </label>
                            
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

export default QuestionArea;