import React, { useEffect } from "react";
import "./Create.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [userDetails, setUserdetails] = useState({Name:'', Email:''});

  const navigate = useNavigate();
  function handelSubmit(event) {
    event.preventDefault()
       axios.post('http://localhost:3030/user', userDetails)
      .then((res) => {
        alert("User added sussefully");
        navigate('/')
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-2">
      <form onSubmit={handelSubmit}>
        <h1>Create</h1>

        <div>
          <label htmlFor="name" className="userName">
            Name:
            <input
              onChange={(e) =>
                setUserdetails({ ...userDetails, Name: e.target.value })
              }
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
            />
          </label>
        </div>
        <div>
          <label htmlFor="Email" className="userEmail">
            Email:
            <input
              onChange={(e) =>
                setUserdetails({ ...userDetails, Email: e.target.value })
              }
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
            />
          </label>
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default Create;
