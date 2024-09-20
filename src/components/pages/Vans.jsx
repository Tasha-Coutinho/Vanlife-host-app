import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase"; 
import "./Vans.css";

export const Vans = () => {
  const vans = [
    { id: 1, name: "Modest Explorer", price: "$60/day", image: "van1" },
    { id: 2, name: "Beach Bum", price: "$80/day", image: "van2" },
    { id: 3, name: "Green Wonder", price: "$70/day", image: "van3" }
  ];

  const updateVanDetails = async (vanId, newData) => {
    const vanDoc = doc(db, "vans", vanId);
    await updateDoc(vanDoc, newData);
  };

  return (
    <div className="vans-lists">
      <div className="income-details1 sub-text3">
        <h3>Your listed vans</h3>
        <p><a href="" className="linkto-details linkks">View all</a></p>
      </div>

      {vans.map((van) => (
        <Link to="/vandetails" key={van.id}>
          <div className="sub-host-top-text vans">
            <h3 className="left">
              <div className="van-full-details">
                <div className={`van-img ${van.image}`}></div> {/* Use van.image */}
                <div className="van">
                  <p className="van-name">
                    {van.name} <br />
                    <span>{van.price}</span>
                  </p>
                </div>
              </div>
            </h3>
            <p className="link-p-tag">
              <a href="" className="linkto-details" onClick={() => updateVanDetails(van.id, { name: "New Name", price: "$100/day" })}>Edit</a>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
