import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {
  const [credential, setCredential] = useState({
  
    email: "",
    password: "",
  });

  let navigate=useNavigate()

  const handelsubmit = async (e) => {
    e.preventDefault();
    console.log( JSON.stringify({
      
        email: credential.email,
        password: credential.password,
    
      }),)
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        email: credential.email,
        password: credential.password,
     
      }),
    });

    const json = await response.json();
    console.log(json);


    if (!json.success) {
      alert("enter valid credential");
    }

    if (json.success) {

      localStorage.setItem("userEmail",credential.email) 
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/")
    }
  };

  const onchange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handelsubmit}>
         
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credential.email}
              onChange={onchange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
           
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credential.password}
              className="form-control"
              onChange={onchange}
              id="exampleInputPassword1"
            />
          </div>
         
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/createuser" className="m-3 btn btn-danger">
            Iam a new User
          </Link>
        </form>
      </div>
    </>
  )
}
