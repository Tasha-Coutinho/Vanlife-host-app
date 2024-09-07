

import React from "react";

import './Home.css';

import { useAuth } from '../../contexts/authContext';



export const Home = () => {

  const { userLoggedIn } = useAuth();



  return (

 <div className="home">

<h1 className="welcome-msg">WELCOME TO VANLIFE LUXURY CAR RENTAL</h1>
<h3 className="tag"></h3>

{userLoggedIn && 
<h3 className="logo"></h3>


}

</div>


  );

};

