import React, { useEffect, useState, useMemo } from "react";
import "../App.css";
const Signup = () => {
  const [captcha, setCaptcha] = useState();

  return (
    <div className="signup_component">
      <h1>Signup</h1>
      <div className="signup_flex">
        

        <div>
          <form className="signup_form">
            <label className="label">First Name</label>
            <input type="text" placeholder="First Name" />
            <label className="label">Last Name</label>
            <input type="text" placeholder="Last Name" />
            <label className="label">Email : </label>
            <input type="email" placeholder="example@gmail.com" />
            <label className="label">Password: </label>
            <input type="password" placeholder="Password" />
            <label className="label">Confirm Password</label>
            <input type="password" placeholder="Confirm Password" />
            <h3>
              Captcha : {captcha} <button>Change Captcha</button>{" "}
            </h3>
            <input placeholder="Captcha"></input>
            <br></br>
            <input className="submitForm" type="submit" />
          </form>
        </div>
        <div> 
        <img src="https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg" width={600} height={800} />

        </div>
      </div>
    </div>
  );
};

export default Signup;
