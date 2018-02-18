import React,{Component} from 'react';
import classes from './ChaptersMenu.css';
import Aux from '../../hoc/Aux/Aux';
import Backdrop from '../UI/Backdrop/Backdrop';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MenuDrawerItems from './MenuDrawerItems/MenuDrawerItems';
import * as action from '../../store/actions/index';
import Spinner from '../UI/Spinner/Spinner';
class ChapterMenu extends Component {
    subjectName = this.props.match.params.subject
    componentDidMount(){
        this.props.getChapters(this.subjectName)
        
    }
    render(){
        let attachedClasses = [classes.ChapterssMenu,classes.Close];
        if(this.props.open){
            attachedClasses = [classes.ChaptersMenu,classes.Open];
        }

        return (
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')} onClick = {this.props.closed}>
                    {this.props.chapters?
                        <MenuDrawerItems chapters={this.props.chapters}/>:
                        <Spinner />
                        }
                    
                </div>
            </Aux>
        )

    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated:state.auth.token !== null,
        token:state.auth.token,
        chapters:state.questions.chapters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getChapters:(chapterName)=>dispatch(action.chapters(chapterName))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ChapterMenu));
