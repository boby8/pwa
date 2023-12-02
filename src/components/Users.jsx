// Users.jsx
import React, { useEffect, useState } from "react";
import { Table, Alert } from "react-bootstrap";

const Users = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online")
  const fetchData = async () => {
    try {
      let url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      localStorage.setItem("data", JSON.stringify(result));
    } catch (error) {
      setMode("offline")
      const collection =localStorage.getItem("data")
      setData(JSON.parse(collection));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      <div>
        {mode === 'offline'?<Alert key="warning" variant="warning">
          This is a offline mode
        </Alert> : null}
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res) => (
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.name}</td>
              <td>{res.email}</td>
              <td>{res.address.street}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
