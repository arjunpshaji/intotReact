import React from "react";
import {useState} from "react"
import axios from "axios";

function Register(){
  
  const [input, setInput]= useState({
    email: "",
    Fname: "",
    Lname: "",
    password: ""
  });

  function handleChange(event){
    const {name, value}= event.target;

    setInput(prevInput => {
      return{
        ...prevInput,
        [name]:value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    
    const newReg={
      email: input.email,
      Fname: input.Fname,
      Lname: input.Lname,
      password: input.password

    }
    
    axios.post("http://localhost:3001/users", newReg);
  }

    return(
      <React.Fragment>
<main className="form-signin w-100 m-auto">
  <form>
    <h1 className="h3 mb-3 fw-normal">Please Register</h1>

    <div className="form-floating">
      <input type="email" class="form-control" id="floatingInput" name="email" value={input.email} placeholder="name@example.com" onChange={handleChange}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
        <input type="text" class="form-control" id="floatingInput" name="Fname" value={input.Fname} placeholder="First Name" onChange={handleChange}/>
        <label for="floatingInput">First Name</label>
    </div>
    <div className="form-floating">
        <input type="text" class="form-control" id="floatingInput" name="Lname" value={input.Lname} placeholder="Last Name" onChange={handleChange}/>
        <label for="floatingInput">Last Name</label>
    </div>
    <div className="form-floating">
      <input type="password" class="form-control" id="floatingPassword" name="password" value={input.password} placeholder="Password" onChange={handleChange}/>
      <label for="floatingPassword">Password</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary"  type="submit" onClick={handleSubmit}>Sign Up</button>
    <p className="mt-5 mb-3 text-muted">&copy;2022</p>
  </form>
</main>
</React.Fragment>
      
    );
}
export default Register;