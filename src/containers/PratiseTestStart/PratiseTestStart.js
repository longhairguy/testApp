import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import * as actions from '../../store/actions';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Toggler from '../../components/ChaptersMenu/Toggler/Toggler';
import ChaptersMenu from '../../components/ChaptersMenu/ChaptersMenu';
import QuestionArea from '../../components/QuestionArea/QuestionArea';
import classes from './PratiseTestStart.css';
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

    render(){
    console.log(this.props.match.params.subject)
    
    return(
      <div>
          <div>
            <Toggler clicked={this.sideDrawerToggleHandler} />
            
          </div>
          <QuestionArea className={classes.QuestionArea}/>
          <ChaptersMenu open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuestions:()=>dispatch(actions.questions())
  }
}

export default withRouter(PratiseTestStart);
