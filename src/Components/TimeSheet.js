import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../Images1/Logo.png'
import './TimeSheet.css'
function TimeSheet() {
  //   const showdate = new Date()
  //   var month = new Array(12)
  //   month[0] = 'JAN'
  //   month[1] = 'FEB'
  //   month[2] = 'MAR'
  //   month[3] = 'APR'
  //   month[4] = 'MAY'
  //   month[5] = 'JUNE'
  //   month[6] = 'JULY'
  //   month[7] = 'AUG'
  //   month[8] = 'SEPT'
  //   month[9] = 'OCT'
  //   month[10] = 'NOV'
  //   month[11] = 'DEC'
  //   const date = month[showdate.getMonth()]
  //   console.log(date)
  //   console.log(showdate.getDate())

  //   var a = new Date()
  //   const last = new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate()
  //   console.log(last)
  return (
    <div className="layoutTimeSheet">
      <div className="logoTimeSheet">
        <img className="logoTimeSheet" src={logo} alt="logo" />
      </div>
      <div className="companyNameTimeSheet">COMPANY NAME</div>

      <div className="mainTimeSheet">
        <div className="headersTimeSheet">
          <div className="description">DESCRIPTION</div>
          <div className="fullTime">FULL TIME</div>
          <div className="partTime">PART TIME</div>
          <div className="overTime">OVER TIME </div>
          <div className="total">TOTAL</div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
export default TimeSheet
