import React, { Component } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";
import SingUp from "./SingUp";

class Login extends Component {
   state = {
      email: "",
      password: "",
   };

   changeEmail = (e) => this.setState({ email: e.target.value });
   changePassword = (e) => this.setState({ password: e.target.value });

   submitLogin = (e) => {
      e.preventDefault();
      console.log(this.state.email);
      console.log(this.state.password);
   };

   render() {
      return (
         <div className="login-form">
            <h5 className="login-header">Login</h5>
            <form onSubmit={this.submitLogin}>
               <button className="facebook-login">Connect with Facebook</button>
               <button className="google-login">Connect with Google</button>
               <div className="login-or center">
                  <span>or</span>
                  <div className="or-divider"></div>
               </div>
               <input
                  onChange={this.changeEmail}
                  value={this.state.email}
                  type="text"
                  placeholder="E-mail"
                  className="browser-default"
               />
               <input
                  onChange={this.changePassword}
                  value={this.state.password}
                  type="password"
                  className="browser-default"
                  placeholder="Password"
               />
               <button className="sign-up-button">Login</button>
               <div className="divider"></div>
               <div>
                  Don't you have an account?{" "}
                  <span
                     className="pointer"
                     onClick={() => {
                        this.props.openModal("open", <SingUp />);
                     }}
                  >
                     <strong>Sign Up!</strong>
                  </span>{" "}
               </div>
            </form>
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

export default connect(null, mapDispatchToProps)(Login);
