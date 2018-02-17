import React from 'react';
import {withRouter} from 'react-router-dom';
import classes from './MenuDrawerItems.css';
import MenuDrawerItem from './MenuDrawerItem/MenuDrawerItem';

const menuDrawerItems = (props) => {
    let url = props.location.pathname.slice(0,props.location.pathname.length-3)
    console.log(props.location.pathname.slice(0,props.location.pathname.length-3))
    let chapters = null;
    if(props.chapters!==null){
        chapters = props.chapters.map(chapter=>{
            return (<MenuDrawerItem 
                
                key={props.chapters.indexOf(chapter)}
                url={url+(parseInt(props.chapters.indexOf(chapter))+1).toString()+'/1'}>{chapter}
                
                </MenuDrawerItem>)
        })
    }
    return (<div className={classes.menuCard}>
        <div className={classes.heading}>
            <h2 style={{"textAlign":"center"}}>Quantitative</h2>
            <h4 style={{"textAlign":"center"}}>Chapter-Wise Question</h4>
        </div>
        <ul className={classes.MenuDrawerItems}>
          {chapters}
        </ul>
    </div>)
};

export default withRouter(menuDrawerItems);