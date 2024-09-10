import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Update() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigat = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3030/user/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  function handelSubmit(event) {
    event.preventDefault();
    axios.put("http://localhost:3030/user/" + id, data).then((res) => {
      alert("User updated successfully");
      navigat("/");
    });
  }

  return (
    <div className="container mt-2">
      <form onSubmit={handelSubmit}>
        <h1>Update</h1>

        <div>
          <label htmlFor="name">
            Id:
            <input
              type="text"
              disabled
              name="Name"
              value={data.id}
              className="form-control"
            />
          </label>
        </div>
        <div>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="Name"
              value={data.Name}
              className="form-control"
              onChange={(e) => setData({ ...data, Name: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="Email"
              value={data.Email}
              className="form-control"
              onChange={(e) => setData({ ...data, Email: e.target.value })}
            />
          </label>
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}

export default Update;
