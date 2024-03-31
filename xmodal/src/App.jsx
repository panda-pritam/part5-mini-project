import logo from "./logo.svg";
import "./App.css";
import { useRef, useState, useEffect } from "react";
function App() {
  let mainDiv = useRef();
  // let [phoneNo, setPhoneNo] = useState(0);
  // let [dob, setDob] = useState(0);
  let [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNo: "",
    dob: "",
  });

  let phone;

  let onCleckHandler = (e) => {
    mainDiv.current.style.backgroundColor = "rgba(0,0,0, 0.4)";
    mainDiv.current.style.zIndex = "0";
  };
  // let onPhoneNumberChange = (e) => {
  //   let no = e.target.value;
  //   setPhoneNo(no);
  //   if (no.toString().length <= 10) {
  //     alert("Invalid phone number. please enter 10-digit phone number.");
  //   }
  // };
  // let onDobChange = (e) => {
  //   let enterDate = e.target.value;
  //   console.log(e.target.value);
  //   const date = new Date();

  //   let day = date.getDate();
  //   let month = date.getMonth() + 1;
  //   let year = date.getFullYear();

  //   // This arrangement can be altered based on how we want the date's format to appear.
  //   let currentDate = `${day}-${month}-${year}`;
  //   console.log(currentDate); // "17-6-2022"
  // };

  //-----------------------------------------------------------

  let phoneNo = useRef();
  let uname = useRef();
  let dob = useRef();
  let email = useRef();
  let onSubmitHandler = () => {
    let no = phoneNo.current.value;
    let enterDate = dob.current.value;
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.current.value)
    ) {
      alert("Invalid email. Please check your email address.");
      return false;
    }

    if (no.toString().length < 10) {
      alert("Invalid phone number. please enter 10-digit phone number.");
      return;
    }

    if (new Date() < new Date(enterDate)) {
      alert("Invalid date of birth. Date of birth cannot be future.");
      return false;
    }
  };
  return (
    <div className="modal" ref={mainDiv}>
      <div className="modal-content">
        <h1 className="header">User Details Modal</h1>
        <button type="button" onClick={onCleckHandler} className="btn">
          Open Form
        </button>
        <div className="userForm">
          <h1 className="header">Fill Details</h1>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={uname} required />
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" ref={email} required />
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" ref={phoneNo} required />
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" ref={dob} required />
          <button
            type="button"
            className="submit-button"
            onClick={onSubmitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
