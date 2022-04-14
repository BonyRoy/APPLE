import React from "react";
import support from "../src/images/support.jpg";

const Support =()=>{
    return(
        <>
        <img src={support} alt="support img"
        style={ {
            width:'100%',
            height:'10%',
            }}
            />
            <div className="container-fluid"
            style={ {
            backgroundColor: '#c0c0c0',
            }}
            >
            <br></br>
            <p>Ways To contact: <a href='roy'> Find an apple store</a> near you</p>
            <p>Or Call: <a href="roy"> 1-800-MY-APPLE</a></p>
            <br></br>
            </div>  
        
        </>
        );
};

export default Support;