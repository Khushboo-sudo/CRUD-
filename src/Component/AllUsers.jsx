import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [column, setColumn] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3030/user").then((res) => {
      setColumn(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-end">
        {" "}
        <Link to="/Create" className="btn btn-primary">
          Add+
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            {column.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.Name}</td>
              <td>{d.Email}</td>
              <td>
              <Link to={`/Update/${d.id}`} className="btn btn-sm btn-success">Update</Link>
                <button onClick={e=>handelSubmit(d.id)} className="btn btn-sm btn-danger ms-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  function handelSubmit(id){
    const conf=window.confirm("Do you want to delete?")
    if(conf){
      axios.delete("http://localhost:3030/user/" + id)
      .then(res=>{
        alert("User deleted successfully")
        navigate('/')
      }).catch(err=>console.log(err))
    }

  }
};

export default AllUsers;
