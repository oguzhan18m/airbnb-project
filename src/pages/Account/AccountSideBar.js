import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import avatar2 from "../../avatar2.png";

export default function AccountSideBar(props) {
   return (
      <ul className="sidenav sidenav-fixed">
         <li>
            <div className="user-view valign-wrapper center-align">
               <img className="user-view" src={avatar2} alt="user-view" />
            </div>
         </li>
         <br />
         <li>
            <Link to="/account/reservations/confirmed">
               Confirmed Reservations
            </Link>
         </li>
         <li>
            <Link to="/account/reservations/past">Past Reservations</Link>
         </li>
         <li>
            <Link to="/account/change-pass">Change Password</Link>
         </li>
      </ul>
   );
}
