import React from "react";
import "./Vans.css"
import { Link } from "react-router-dom";

export const Vans = () =>{
  return <div>
    <div className="vans-lists">
    <div className="income-details1 sub-text3">
      <h3>Your listed vans</h3>
      <p><a href="" className="linkto-details linkks">View all</a></p>
    </div>

    <Link to="/vandetails">
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
    </Link>
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
  </div>;
};