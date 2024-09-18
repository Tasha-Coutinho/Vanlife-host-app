//host income.jsx
import React from "react";
import "./Income.css"

export const Income = () =>{
  return <div>
 <div className="main-host">
 <div className="sub-host">
   <div className="main-host-top-text">
     <div className="host-intro-heading">
       <h2 className="welcome-h1">Income</h2>
       <div className="income-details1">
         <p>Income last 30 days</p>
         <p><a href="" className="linkto-details linkks">Details</a></p>
       </div>
       <h1 className="welcome-h2">$2,260</h1>
     </div>
     <div className="sub-host-top-text">
           <div className="bar-graph">
           </div>
          </div>
   </div>

   <div className="vans-lists">
     <div className="income-details1 sub-text3">
       <h3>Your transactions (3)</h3>
       <p><a href="" className="linkto-details linkks">Last 30 days</a></p>
     </div>


<div className="sub-host-top-text vans">
       <h3 className="left">  
<div className="van-full-details">
<a href="./Van1.jsx">

</a>
<div className="van">
 <p className="van-name ">
 $720
 </p>
</div>
</div>
</h3>
<p className="link-p-tag"><a href="" className="linkto-details">1/12/22</a></p>
     </div>

{/* <!-- van2 --> */}

<div className="sub-host-top-text vans">
       <h3 className="left">  
<div className="van-full-details">
<div className="van">
 <p className="van-name name2">
 $560
 </p>
</div>

</div>
</h3>
<p className="link-p-tag"><a href="" className="linkto-details">10/11/22</a></p>
     </div>

{/* <!-- van3 --> */}

<div className="sub-host-top-text vans">
       <h3 className="left">  
<div className="van-full-details">

<div className="van">
 <p className="van-name name2">
    $980
 </p>
</div>
</div>
</h3>
<p className="link-p-tag"><a href="" className="linkto-details">23/11/22</a></p>
     </div>

{/* <!-- end --> */}

     </div>
   </div>
 </div> 
  </div>;
};