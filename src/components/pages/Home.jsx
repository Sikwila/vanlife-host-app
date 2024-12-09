import React from "react";

import './Home.css';

import { useAuth } from '../../contexts/authContext';

export const Home = () => {

  const { userLoggedIn } = useAuth();



  return (

<div className="home"> 
  <div className="home-filter">
  <h1 className="welcome-msg">WELCOME TO VANLIFE HOSTING PORTAL</h1>
  <h3 className="tag">Manage your fleet with ease and efficiency. List your vans for 
<br />rentals, track bookings, and communicate with clients.
Make hosting <br />simple and profitable today.</h3>

 

  <button 
    className="cta-button" 
    style={{ backgroundColor: '#FF8C38', color: 'white', border: 'none', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
    Start Hosting Now
  </button>
  </div>
</div>



  );

};

