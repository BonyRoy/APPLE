import React from "react";
import { NavLink } from "react-router-dom";

const Navbar =() =>{
    return(
        <>
        <div className="container-fluid nav_bg">
        <div className="row">
        <div className=" mx-auto">

        <nav className="navbar navbar-expand-lg navbar-light "
       style={ {
           backgroundColor: '#ffffff',
       }}
        >
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/" activwClassName="nav_active" 
    style={ {
            fontWeight: 'bold',
            color: '#565387',
            borderBottom: '1px solid #565387',
        }}
    > Apple</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/Mac"
              style={{
              color: '#565387',
              fontFamily:'monospace',
              }}
          >Mac</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/IPad"
              style={{
              color: '#565387',
              fontFamily:'monospace',
              }}
          >iPad</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/IPhone"
              style={{
                color: '#565387',
                fontFamily:'monospace',
                }}
          >iPhone</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Watch"
              style={{
                color: '#565387',
                fontFamily:'monospace',
                }}
          >Watch</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/AirPods"
              style={{
                color: '#565387',
                fontFamily:'monospace',
                }}
          >AirPods</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Accessories"
              style={{
                color: '#565387',
                fontFamily:'monospace',
                }}
          >Accessories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Support"
              style={{
                color: '#565387',
                fontFamily:'monospace',
                }}
          >Support</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</div>

        </>
    )
}

export default Navbar;
