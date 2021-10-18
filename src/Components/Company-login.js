import React from 'react'
// import { useHistory } from 'react-router-dom'
import logo from '../Images1/Logo.png'
import './Company-login.css'
import { Link } from 'react-router-dom'
class Login extends React.Component {
  state = {
    email: '',
    pwd: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.isLogin(true)
  // }

  render() {
    return (
      <>
        <div className="navbarLayout"></div>
        <div className="layout-company-login">
          <div className="logo-companylogin">
            <img className="logo-picture" src={logo} alt="logo" />
          </div>
          <div className="login">
            <form className="formelement" onSubmit={this.handleSubmit}>
              <input
                className="email"
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
                placeholder="EMAIL ID"
                // required
                onChange={this.handleChange}
              />

              <input
                className="password"
                type="password"
                name="pwd"
                placeholder="PASSWORD"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                // required
                onChange={this.handleChange}
              />
              <button className="login-button" onSubmit={this.handleSubmit}>
                LOGIN
              </button>
              <button className="signup-button">
                <Link to="/CompanySignup" className="signup-button">
                  SIGNUP
                </Link>
              </button>
            </form>
          </div>
          <div className="companyname">COMPANY NAME</div>
        </div>
      </>
    )
  }
}
export default Login
