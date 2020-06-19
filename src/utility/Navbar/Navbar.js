import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";
import Login from "../../pages/LogIn/Login";
import SingUp from "../../pages/LogIn/SingUp";
import logo from "../../airbnb_logo.png";

class Navbar extends Component {
   render() {
      let navColor = "transparent";
      if (this.props.location.pathname !== "/") {
         navColor = "black";
      }
      return (
         <div className="container-fluid nav">
            <div className="row">
               <nav className={navColor}>
                  <div className="nav-wrapper">
                     <Link to="/" className="left">
                        <img src={logo} alt="logo" className="airbnb-logo" />
                     </Link>
                     <ul id="nav-mobile" className="right">
                        <li>
                           <Link to="/">English(US)</Link>{" "}
                        </li>
                        <li>
                           <Link to="/">$ USD</Link>{" "}
                        </li>
                        <li>
                           <Link to="/become-a-host">Become a Host</Link>{" "}
                        </li>
                        <li>
                           <Link to="/">Help</Link>{" "}
                        </li>
                        <li
                           className="login-signup"
                           onClick={() => {
                              this.props.openModal("open", <SingUp />);
                           }}
                        >
                           Sign Up{" "}
                        </li>
                        <li
                           className="login-signup"
                           onClick={() => {
                              this.props.openModal("open", <Login />);
                           }}
                        >
                           {" "}
                           Login
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </div>
      );
   }
}

function mapDispatchToProps(dispatcher) {
   return bindActionCreators(
      {
         openModal: openModal,
      },
      dispatcher
   );
}

export default connect(null, mapDispatchToProps)(Navbar);
