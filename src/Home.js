import React from "react";
import { NavLink } from "react-router-dom";
import iphone13 from "../src/images/13.png";
import ipad from "../src/images/ipad.png";
import imac from "../src/images/imac.JPG";
import tv from "../src/images/tv.png";
import './Home.css';

const Home =()=>{
  return(
      <>
      <section id='header'className="d-flex align-item-centre">
      <div className="container-fluid nav-bg">
      <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centre flex-column">
      <br></br><br></br><br></br><br></br>
      <h1 className="mx-auto">iPhone 13 Pro</h1> 
      <h4 className="my-3 mx-auto">
      Oh. So. Pro. 
      </h4>
      <div className="mt-3 mx-auto">
      <NavLink className="btn-get-started mx-auto" to="/IPhone" >Learn More</NavLink>
      <NavLink className="btn-get-started mx-auto" to="/IPhone" >Buy</NavLink>
      </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 header-img">
      <br></br><br></br><br></br>
        <img src={iphone13} className="img-fluid animated" alt="home img"
        style={ {
          width:'100%',
          }}
        />
      </div>
      </div>

      <br></br><br></br>

      <div className="row"
      style={ {
        backgroundColor: '#000000',
        }}
      >
      <div className="col-lg-0 order-1 order-lg-2 header-img">
      <br></br><br></br><br></br>
        <img src={ipad} className="" alt="home img"
        style={ {
          width:'100%',
          }}
        />
      </div>
      <div className=" order-4 order-lg-1 d-flex justify-content-centre flex-column">
      <h1 className="mx-auto"
      style={ {
        color: '#ffffff',
       }}
      >iPad air</h1> 
      <h4 className="my-3 mx-auto"
      style={ {
        color: '#ffffff',
      }}
      >
      Light. Bright. Full Of Might. 
      </h4>
      <div className="mt-10 d-flex justify-content-centre mx-auto">
      <NavLink className="btn-get-started mx-auto" to="/IPad" >Learn More</NavLink>
      <br></br><br></br>
      <NavLink className="btn-get-started mx-auto" to="/IPad" >Buy</NavLink>
      <br></br><br></br>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centre flex-column">
      <br></br><br></br><br></br><br></br>
      <h1 className="mx-auto"><a href="roy" style={{color: "red"}}>Say</a> <a href="roy" style={{color: "green"}}>hello</a>  <a href="roy" style={{color: "blue"}}>to</a> <a href="roy" style={{color: "purple"}}>the</a> <a href="roy" style={{color: "orange"}}>new</a> <a href="roy" style={{color: "red"}}>iMac</a>.</h1> 
      <h4 className="my-3 mx-auto">
      Transformed by the M1 chip. Stands out in any space. Fits perfectly into your life.
      </h4>
      <div className="mt-3 mx-auto">
      <NavLink className="btn-get-started mx-auto" to="/Mac" >Learn More</NavLink>
      <NavLink className="btn-get-started mx-auto" to="/Mac" >Buy</NavLink>
      </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 header-img">
      <br></br><br></br><br></br>
        <img src={imac} alt="home img"
        style={ {
          width:'100%',
          }}
        />
      </div>
      </div>
      <br></br><br></br>
      <div>
      <div className=" order-4 order-lg-1 d-flex justify-content-centre flex-column">
      <div className="mt-10 d-flex justify-content-centre mx-auto">
      <img src={tv} className="" alt="home img"
        style={ {
          width:'100%',
          }}
        />
      </div>
      </div>
      </div>
      
      </div>
      </div>
      </div>


      



      </section>
      </>
      );
};

export default Home;
