import React, { Component } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import openModal from "../../actions/openModal";
import SingUp from "./SingUp";
import swal from "sweetalert";
import regAction from "../../actions/regAction";

//import regAction
//import swal

class Login extends Component {
   state = {
      email: "",
      password: "",
   };

   changeEmail = (e) => this.setState({ email: e.target.value });
   changePassword = (e) => this.setState({ password: e.target.value });

   submitLogin = async (e) => {
      e.preventDefault();

      //Make an axios request to /users/login
      const url = `${window.apiHost}/users/login`;
      const data = {
         email: this.state.email,
         password: this.state.password,
      };

      const resp = await axios.post(url, data);
      const token = resp.data.token;

      //Handle: [--badPass] , [-noEmail] , [-loggedIn]
      if (resp.data.msg === "badPass") {
         swal({
            title: "Wrong password!",
            text: "The password you've entered is invalid! ",
            icon: "error",
         });
      } else if (resp.data.msg === "noEmail") {
         swal({
            title: "Invalid e-mail address!",
            text: "Please provide a valid e-mail address!",
            icon: "error",
         });
      } else if (resp.data.msg === "loggedIn") {
         swal({
            title: "Success!",
            text: "You logged in successfully!",
            icon: "success",
         });

         //we call our register action to update our auth reducer!
         //run regAction and pass it resp.data
         this.props.regAction(resp.data);
      }
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

function mapStateToProps(state) {
   return {
      auth: state.auth,
   };
}

function mapDispatchToProps(dispatcher) {
   return bindActionCreators(
      {
         openModal: openModal,
         regAction: regAction,
      },
      dispatcher
   );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
