import React from "react";
import {Link} from "react-router-dom";
import "./font awesome/font-awesome-4.7.0/css/font-awesome.min.css";
import "./Navbar.css"

export const Navbar = () => {
  return(
    <nav>
       <Link to="/" className="title">#Vanlife</Link>
      <ul>
      <li>
        <Link to="/dashboard">   
        Dashboard</Link>
        </li>

        <li>
    
     <Link to="/income">Income</Link>
        </li>

        <li>
        <Link to="/vans">   
        Vans</Link>
        </li>

        <li>
    
     <Link to="/reviews">Reviews</Link>
        </li>

        <li>
        <Link to="/user">   
       <i className="fa fa-user-o"></i></Link>
        </li>

      
     
      </ul>
    </nav>
  )
}