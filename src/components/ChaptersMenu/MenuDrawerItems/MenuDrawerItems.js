import React from 'react';

import classes from './MenuDrawerItems.css';
import MenuDrawerItem from './MenuDrawerItem/MenuDrawerItem';

const menuDrawerItems = (props) => (
    <div className={classes.menuCard}>
        <div className={classes.heading}>
            <h2 style={{"textAlign":"center"}}>Quantitative</h2>
            <h4 style={{"textAlign":"center"}}>Chapter-Wise Question</h4>
        </div>
        <ul className={classes.MenuDrawerItems}>
            <MenuDrawerItem>Simplification</MenuDrawerItem>
            <MenuDrawerItem>Interest</MenuDrawerItem>
            <MenuDrawerItem>Percentage</MenuDrawerItem>
            <MenuDrawerItem>Ratio and Proportion</MenuDrawerItem>
            <MenuDrawerItem>Problems on Ages</MenuDrawerItem>
            <MenuDrawerItem>Speed Time And Distance</MenuDrawerItem>
            <MenuDrawerItem>Profit and Loss</MenuDrawerItem>
            <MenuDrawerItem>Number Series</MenuDrawerItem>
            <MenuDrawerItem>Mensuration</MenuDrawerItem>
            <MenuDrawerItem>Data Interpretation</MenuDrawerItem>
            <MenuDrawerItem>Time and Work</MenuDrawerItem>
            <MenuDrawerItem>Mixture problems</MenuDrawerItem>
            <MenuDrawerItem>Algebra</MenuDrawerItem>
            <MenuDrawerItem>Number Series</MenuDrawerItem>
            <MenuDrawerItem>Mensuration</MenuDrawerItem>
            <MenuDrawerItem>Data Interpretation</MenuDrawerItem>
            <MenuDrawerItem>Time and Work</MenuDrawerItem>
            <MenuDrawerItem>Mixture problems</MenuDrawerItem>
        
        </ul>
    </div>
);

export default menuDrawerItems;