import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Register from "./Register";


function Routerr(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
            </Router>
        </div>
    )
}
export default Routerr;