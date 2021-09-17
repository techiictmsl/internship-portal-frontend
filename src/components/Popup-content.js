import Popup from "./Popup";
import { useState } from "react";
export default function PopupContent() {
  const [buttonPopup, setbuttonPopup] = useState(false);
  const handlecopy = () => {
    navigator.clipboard.writeText(cin);
  };
  const [cin, setCin] = useState("");
  return (
    <div className="App">
      <main>
        <p className="links" onClick={() => setbuttonPopup(true)}>
          Teach for India
        </p>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}>
        <div className="popup-header">
          <h4>Teach for India</h4>
        </div>
        <br></br>
        <hr></hr>
        <div className="popup-content">
          <h4>About Us</h4>
          <p className="Company-info">
            Teach for India is a nationwide movement that aims to eliminate
            inequity in education in India. Teach for India believes that one
            day all children will attain an excellent education.{" "}
          </p>
          <form className="CIN-form">
            <label>
              <b>CIN Number: </b>
            </label>
            <input
              type="text"
              size="30"
              value={cin}
              onChange={(e) => setCin(e.target.value)}
            ></input>
          </form>
          <button className="copy-button" onClick={() => handlecopy()}>
            copy{" "}
          </button>
        </div>
        <button className="verify_button">Verify</button>
      </Popup>
    </div>
  );
}
