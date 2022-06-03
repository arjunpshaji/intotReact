import React from "react";
import {Link, useNavigate} from "react-router-dom";
function Nav(){

    // const navigate = useNavigate();
    // function handleClick() {
    //   navigate("/register");
    // }
    
    
    return(
        <div>
        <header>
            <nav className="navbar navbar-default navbar-fixed-top ">
            <div className="container navbar-container">
                <a className="navbar-brand" href=""><strong>INTOT</strong></a>
                <div class="d-flex flex-row justify-content-end bd-highlight">
                    <div className="p-2 bd-highlight">
                        <a href="" className="p2-items"><img src="images/login.png"/>&nbsp;&nbsp;&nbsp;&nbsp;Login</a>
                        <Link to="/register"><img src="images/signup.png"/>&nbsp;&nbsp;&nbsp;&nbsp;Sign up</Link>
                        {/* <a class="p2-items" href="/register.html" ><img src="images/signup.png"/>&nbsp;&nbsp;&nbsp;&nbsp;Sign up</a> */}
                        {/* <Link to="/">Home</Link> */}
                        <a href=""class="p2-items" ><img src="images/search-icon.png"/></a>
                        {/* <button onClick={handleClick}>hhh</button> */}
                        <a type="button" className="menubar" onclick="openNav()" ><img src="images/menu.png"/></a>
                    </div>
                  </div>
            </div>
        </nav>
        </header>
        </div>
    );
}

export default Nav;