import React from 'react';
import classes from './ImageArea.css';
import card_1  from '../../../assets/card_1.png';
import card_2  from '../../../assets/card_2.png';
import card_3  from '../../../assets/card_3.png';
import Background from '../../../assets/landing.png';
const imageArea = (props) => {
  const setStyle = {
    backgroundImage: "url(" + Background + ")",
    backgroundSize:"cover",
    "boxSizing":" border-box",
    padding:"0%",
    margin:"0%",

  }
  return (<div>
  <div className={classes.box1}>
    <div className={classes.left_box}>
      <h2>Heyo ! <span style={{color:'orange'}}>Friends</span></h2>
      <p>
        We are here for you to enhance your prepration process for SSC exams.
        What we can provide is quite diverse and yeah its Totally FREE !
        We provide you various things raning from test series,sample questions
        chapter wise as well in depth analysis.
        <i className="far fa-heart fa-2x"></i>
      </p>
    </div>
    <div className={classes.right_box} style={setStyle}></div>
  </div>

    <h1 style={{'textAlign':'center'}}>Key Features</h1>
    <hr />
    <div className={classes.ImageArea}>
        <div className={classes.box2}>
             <h3>Box 1</h3>
             <img src={card_1} />
             <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has beindustrys standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a
                 type specimen booken the industry /standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a
                 type specimen book.
             </p>

        </div>
        <div className={classes.box3}>

            <h3>Box 2</h3>
            <img src={card_2} />
            <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a
                 type specimen bookindustrys standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a
                 type specimen book.
            </p>
        </div>
        <div className={classes.box4}>

            <h3>Box 3</h3>
            <img src={card_3} />
            <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                 when an unknown prindustrys standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a
                 type specimen bookinter took a galley of type and scrambled it to make a
                 type specimen book.
            </p>
        </div>
    </div>
    </div>)
};

export default imageArea;
