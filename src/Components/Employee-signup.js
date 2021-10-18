import React from 'react'
import { useRef } from 'react'
import './Employee-signup.css'
import logo from '../Images1/Logo.png'
import Webcam from 'react-webcam'
function EmployeeSignup() {
  const webRef = useRef(null)
  const showImage = () => {
    console.log(webRef.current)
  }
  return (
    <div className="layoutEmpSignup">
      <div className="logoEmpSignup">
        <img className="logo-picture" src={logo} alt="logo" />
      </div>
      <div className="companyNameEmpSignup">COMPANY NAME</div>

      <form className="formEmpSignup">
        <input
          className="fullname"
          type="text"
          name="FULL NAME"
          placeholder="FULL NAME"
          pattern="[a-zA-Z]{1,32}"
          required
          title="Please enter your name"
        />

        <input
          className="contactNumber"
          type="tel"
          name="contact Number"
          placeholder="CONTACT NUMBER"
          pattern="[1-9]+"
          title="Please enter the Mobile Number"
          required
          minLength="10"
          maxLength="10"
        />

        <input
          className="designation"
          type="text"
          name="designation"
          placeholder="DESIGNATION"
          required
        />
        <input
          className="emailid"
          type="email"
          name="email"
          placeholder="EMAIL ID"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Please enter a valid mail address"
          required
        />
        <button className="addEmployeeId">ADD EMPLOYEE ID</button>
        <button
          className="registerYourFace"
          onClick={() => {
            showImage()
          }}
        >
          REGISTER YOUR FACE
        </button>
        <button className="submit">SUBMIT</button>
      </form>

      <div className="webcamEmpSignup">
        <Webcam className="inlineVideoEmpSignup" ref={webRef} audio={false} />
      </div>
    </div>
  )
}

export default EmployeeSignup
