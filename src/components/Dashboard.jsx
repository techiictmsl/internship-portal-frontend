import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [tokens, settokens] = useState([]);
  useEffect(() => {
    settokens(JSON.parse(localStorage.getItem("tokens")));
  }, []);
  const handleClick = (e) => {
    console.log();
    e.preventDefault();
    axios
      .get("https://arcane-stream-76776.herokuapp.com/dashboard", {
        headers: { Authorization: `Bearer ${tokens[0].access_token}` },
      })
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        alert("Error");
      });
  };
  return (
    <div className="dashboard">
      <h1>This is the demo dashboard</h1>
      <button onClick={(e) => handleClick(e)}>Get Data</button>
    </div>
  );
}
