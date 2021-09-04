import React from "react";

export default function Demo() {
  const link = ["link1", "link2", "link3"];

  return (
    <div>
      {link.map((item, index) => {
        return (
          <div key={index}>
            <h1>
              {item}
              {/* <a href={item}></a> */}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
