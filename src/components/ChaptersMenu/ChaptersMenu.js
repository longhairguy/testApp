import React,{Component} from 'react';
import classes from './ChaptersMenu.css';
import Aux from '../../hoc/Aux/Aux';
import Backdrop from '../UI/Backdrop/Backdrop';
import {connect} from 'react-redux';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import DropdownItems from '../Navigation/DropdownItems/DropdownItems';
import MenuDrawerItems from './MenuDrawerItems/MenuDrawerItems';
class ChapterMenu extends Component {
    render(){
        console.log(this.props.isAuthenticated)
        let attachedClasses = [classes.ChapterssMenu,classes.Close];
        if(this.props.open){
            attachedClasses = [classes.ChaptersMenu,classes.Open];
        }

        return (
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')} onClick = {this.props.closed}>
                    <MenuDrawerItems/>
                    
                </div>
            </Aux>
        )

    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated:state.auth.token !== null,
        token:state.auth.token
    }
}

export default connect(mapStateToProps)(ChapterMenu);
