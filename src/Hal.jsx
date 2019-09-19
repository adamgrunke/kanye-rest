import React from 'react';

const Hal = props => {
    
        return(
            <>
                <h1>Does the robot agree with Kanye?</h1>
                <button onClick={props.getHalResponse} >?</button>
                <h3>{props.answer}</h3>
                <img src={props.image} alt={props.answer}></img>
            </>
        );
    }











export default Hal;