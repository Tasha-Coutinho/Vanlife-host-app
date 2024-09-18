
import React from "react";
import "./Dashboard.css"

export const Dashboard = () =>{
  return <div>
     <div className="main-host">
      <div className="sub-host">
        <div className="main-host-top-text">
          <div className="host-intro-heading">
            <h2 className="welcome-h1">Welcome!</h2>
            <div className="income-details1">
              <p>Income last 30 days</p>
              <p><a href="" className="linkto-details">Details</a></p>
            </div>
            <h1 className="welcome-h2">$2,260</h1>
          </div>
          <div className="sub-host-top-text">
            <h3 className="left">Review score  5.0/5</h3>
            <p className="right"><a href="" className="linkto-details">Details</a></p>
          </div>
        </div>

        <div className="vans-lists">
          <div className="income-details1 sub-text3">
            <h3>Your listed vans</h3>
            <p><a href="" className="linkto-details">View all</a></p>
          </div>


<div className="sub-host-top-text vans">
            <h3 className="left">  
    <div className="van-full-details">
   <a href="./Van1.jsx">
   <div className="van-img van1"></div>
   </a>
    <div className="van">
      <p className="van-name">
        Modest Explorer <br /><span>$60/day</span>
      </p>
    </div>
  </div>
  </h3>
  <p className="link-p-tag"><a href="" className="linkto-details">Edit</a></p>
          </div>

{/* <!-- van2 --> */}

<div className="sub-host-top-text vans">
            <h3 className="left">  
    <div className="van-full-details">
    <div className="van-img van2"></div>
    <div className="van">
      <p className="van-name">
        Beach Bum <br /><span>$80/day</span>
      </p>
    </div>
  
  </div>
  </h3>
  <p className="link-p-tag"><a href="" className="linkto-details">Edit</a></p>
          </div>

{/* <!-- van3 --> */}

<div className="sub-host-top-text vans">
            <h3 className="left">  
    <div className="van-full-details">
    <div className="van-img van3"></div>
    <div className="van">
      <p className="van-name">
        Green Wonder <br /><span>$70/day</span>
      </p>
    </div>
  </div>
  </h3>
  <p className="link-p-tag"><a href="" className="linkto-details">Edit</a></p>
          </div>

{/* <!-- end --> */}

          </div>
        </div>
      </div>
  </div>;
};