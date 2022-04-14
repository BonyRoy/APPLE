import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import Mac from "./Mac";
import IPad from "./IPad";
import IPhone from "./IPhone";
import Watch from "./Watch";
import AirPods from "./AirPods";
import Accessories from "./Accessories";
import Support from "./Support";
import Navbar from "./Navbar";
import { Routes ,Route } from 'react-router-dom';

const App =()=>{
    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Mac" element={<Mac/>}/>
            <Route path="/IPad" element={<IPad/>}/>
            <Route path="/IPhone" element={<IPhone/>}/>
            <Route path="/Watch" element={<Watch/>}/>
            <Route path="/AirPods" element={<AirPods/>}/>
            <Route path="/Accessories" element={<Accessories/>}/>
            <Route path="/Support" element={<Support/>}/>
        </Routes>
        </>
        );
};

export default App;

