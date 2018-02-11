import React from 'react';
import classes from './Card.css';
const card = (props) => (
        <div className={classes.baseCard}>
            <div>
                <img src={props.imgUrl} />
            </div>
            <div className={classes.Info}>
                <h1>Helloo</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type 
                     specimen book.
                     It has survived not only five centuries, but also th
                </p>
                <button type="button">Select</button>
                
            </div>
        </div>
   
  


        
)

export default card;