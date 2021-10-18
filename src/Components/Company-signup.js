import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import logo from '../Images1/Logo.png'
import './Company-signup.css'
export class CompanySignup extends Component {
  state = {
    // profileImg: 'Logo.png',
  }
  imageHandler = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result })
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  imageReset = (e) => {
    this.setState({ profileImg: {} })
  }
  render() {
    const { profileImg } = this.state
    return (
      <div className="layout">
        <div className="logoCompanySignup">
          <img className="logo-picture" src={logo} alt="logo" />
        </div>

        <div className="companyName-company-signup">COMPANY NAME</div>
        <div className="signup">
          <form className="formCompanySignup">
            <input
              className="companyName1"
              type="text"
              name="COMPANY NAME"
              placeholder="COMPANY NAME"
              required
            />
            <input
              className="companyName1"
              type="tel"
              pattern="[0-9]+"
              name="CONTACT NUMBER"
              placeholder="CONTACT NUMBER"
              minLength="10"
              maxLength="10"
              title="Please Enter Mobile Number"
              required
            />
            <input
              className="companyName1"
              type="text"
              name="EMAIL ADDRESS"
              placeholder="EMAIL ADDRESS"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="Please enter a valid mail address"
              required
            />
            <input
              className="companyName1"
              type="text"
              name="TOTAL BRANCHES"
              placeholder="TOTAL BRANCHES"
              minLength="1"
              pattern="[1-9]+"
              title="Please enter the Number of Branches"
              required
            />
            <input
              className="companyName1"
              type="text"
              name="ADDRESS"
              placeholder="ADDRESS"
              required
            />
            <input
              className="companyName1"
              type="text"
              name="WEBSITE"
              placeholder="WEBSITE"
              pattern="[a-z].+[a-z0-9._-]+\.[a-z]{2,4}$"
              required
            />

            <label className="myLabel">
              <span>UPLOAD LOGO</span>
              <input
                type="file"
                required
                accept="image/*"
                onChange={this.imageHandler}
              />
            </label>

            <div className="btn-submit">
              <button className="submit1">SUBMIT</button>
            </div>
            <div className="img-holder">
              <img src={profileImg} alt="" className="profileLogo" />
            </div>
            <div className="reset" onClick={this.imageReset}>
              <i className="fas fa-times" class="fas fa-times"></i>
            </div>

            {/* <input
              type="file"
              accept="image/*"
              name="image-upload"
              id="input"
              onChange={this.imageHandler}
            /> */}
          </form>
        </div>
      </div>
    )
  }
}
export default CompanySignup
