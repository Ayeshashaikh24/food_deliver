import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  let navigate=useNavigate()
  const handelsubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
        location: credential.geolocation,
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
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credential.name}
              onChange={onchange}
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="geolocation"
              value={credential.geolocation}
              onChange={onchange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Alredy User
          </Link>
        </form>
      </div>
    </>
  );
}
