import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const [tokens, settokens] = useState([]);
  let history = useHistory();
  useEffect(() => {
    settokens(JSON.parse(localStorage.getItem("tokens")));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (localStorage.length > 0) {
      axios
        .get("https://arcane-stream-76776.herokuapp.com/dashboard", {
          headers: { Authorization: `Bearer ${tokens[0].access_token}` },
        })
        .then((res) => {
          console.log(res);
        })
        .catch(() => {
          axios
            .post(
              `https://arcane-stream-76776.herokuapp.com/freshtoken?refresh_token=${tokens[0].refresh_token}`
            )
            .then((res) => {
              let newtoken = [
                {
                  access_token: res.data.access_token,
                  refresh_token: tokens[0].access_token,
                },
              ];
              localStorage.setItem("tokens", JSON.stringify(newtoken));
              settokens(JSON.parse(localStorage.getItem("tokens")));
              axios
                .get("https://arcane-stream-76776.herokuapp.com/dashboard", {
                  headers: {
                    Authorization: `Bearer ${tokens[0].access_token}`,
                  },
                })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch(() => {
              localStorage.removeItem("tokens");
              history.push("/login");
            });
        });
    } else {
      history.push("/login");
    }
  };
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("tokens");
    history.push("/login");
  };

  return (
    <div className="dashboard">
      <div>
        <h1>This is the demo dashboard</h1>
        <button type="button" onClick={(e) => handleClick(e)}>
          Get Data
        </button>
        <button type="button" onClick={(e) => handleLogout(e)}>
          Log Out
        </button>
      </div>
    </div>
  );
}
