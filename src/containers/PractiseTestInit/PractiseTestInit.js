import React,{Component} from 'react';
import {withRouter,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './PractiseTestInit.css';
import Button from '../../components/UI/Button/Button';
class PractiseTestInit extends Component {
    question_url = this.props.match.params.subject
    subjectName = this.props.match.params.subject
   
    componentDidMount(){
        this.props.getQuestions(this.question_url)
        this.props.getChapters(this.subjectName)
        console.log(this.props)
    }

    render(){
        return (
            <div className={classes.PractiseTestInit}>
                <div className={classes.InfoArea}>
                    <h1>Subject Name:{this.subjectName}</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and \
                        typesetting industry. Lorem Ipsum has been the industry's \
                        standard dummy text ever since the 1500s, when an unknown printer\
                         took a galley of type and scrambled it to make a type specimen book.\
                          It has survived not only five centuries, but also the leap into\
                         electronic typesetting, remaining essentially unchanged. \
                         It was popularised in the 1960s with the release of Letraset \
                         sheets containing Lorem Ipsum passages, and more recently with desktop \
                        publishing software like Aldus PageMaker including versions of 
                        Lorem Ipsum.</p>
                    <Link to={this.props.location.pathname+'/1/1'}><Button btnType="Warning">&nbsp;Get Started</Button></Link>
                </div>

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
      getQuestions:(url)=>dispatch(actions.questions(url)),
      getChapters:(chapterName)=>dispatch(actions.chapters(chapterName))
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PractiseTestInit))