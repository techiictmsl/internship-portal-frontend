import React from "react";
import "../styles/CompanyDashboard.css";
export default function FindingInterships() {
  const InternshipByPlace = [
    "internship in pune",
    "internship in Noida",
    "internship in Hyderabad",
    "internship in Delhi",
    "internship in Faridabad",
    "internship in Kolkata",
    "internship in Bengaluru",
  ];
  const InternshipByStream = [
    "internship in Gurgaon",
    "internship in Bombay",
    "internship in Delhi",
    "internship in Faridabad",
    "internship in Kolkata",
    "internship in Bengaluru",
    "internship in Gurgaon",
    "internship in Bombay",
    "internship in Bombay",
  ];
  return (
    <div className="company-right">
      <div className="company-links">
        <h4>Internship by places</h4>
        {InternshipByPlace.map((internship, index) => {
          return (
            <div key={index}>
              <p>{internship}</p>
            </div>
          );
        })}
        <br />
        <h4>Intership by streams</h4>
        {InternshipByStream.map((internship, index) => {
          return (
            <div key={index}>
              <p>{internship}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
