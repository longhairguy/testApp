import React,{Component} from 'react';
import classes from './QuestionArea.css'
import Button from '../UI/Button/Button'
class QuestionArea extends Component {
    render(){
        return (
            <div className={classes.QuestionArea}>
                <div className={classes.Question}>
                    <h3>Question 1:</h3><h3> Mrudul invested an amount of Rs. 29500 in order to start a business. Shalaka joined her 4 months later by investing an amount of Rs. 33500. If the business earned a profit of Rs. 120575 at the end of two years,
                        what was Mrudul’s share of the profit?
                    </h3>
                    <form>
                        <input type="radio" name="gender" value="male"/>Rs. 60725<br/>
                        <input type="radio" name="gender" value="female"/>Rs. 61950<br/>
                        <input type="radio" name="gender" value="other"/>Rs. 59250<br />
                        <input type="radio" name="gender" value="other"/>Rs. 58625<br /> 
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