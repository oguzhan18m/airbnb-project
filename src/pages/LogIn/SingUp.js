import React, { Component } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";
import regAction from "../../actions/regAction";
import Login from "./Login";
import axios from "axios";
import swal from "sweetalert";

class SingUp extends Component {
   constructor() {
      super();
      this.state = {
         lowerPartOfForm: (
            <button
               type="button"
               onClick={this.showInputs}
               className="sign-up-button"
            >
               Sign Up with E-mail
            </button>
         ),
         email: "",
         password: "",
         name: "",
      };
   }

   changeEmail = (e) => {
      this.setState({
         email: e.target.value,
      });
   };
   changePassword = (e) => {
      this.setState({
         password: e.target.value,
      });
   };
   changeName = (e) => {
      this.setState({
         name: e.target.value,
      });
   };

   showInputs = () => {
      this.setState({
         lowerPartOfForm: (
            <SignUpInputFields
               changeEmail={this.changeEmail}
               changePassword={this.changePassword}
               changeName={this.changeName}
            />
         ),
      });
   };

   submitLogin = async (e) => {
      e.preventDefault();
      const url = `${window.apiHost}/users/signup`;
      const data = {
         email: this.state.email,
         password: this.state.password,
         name: this.state.name,
      };

      const resp = await axios.post(url, data);
      const token = resp.data.token;

      // const url2 = `${window.apiHost}/users/token-check`;
      // const resp2 = await axios.post(url2, { token });
      // console.log(resp2);

      if (resp.data.msg === "userExists") {
         swal({
            title: "E-mail already exists...",
            text:
               "This e-mail is already registered. Please try another e-mail address.",
            icon: "error",
         });
      } else if (resp.data.msg === "invalidData") {
         swal({
            title: "Invalid e-mail or password!",
            text: "Please provide a valid e-mail or password!",
            icon: "error",
         });
      } else if (resp.data.msg === "userAdded") {
         swal({
            title: "Success!",
            text: "You signed up successfully!",
            icon: "success",
         });

         //we call our register action to update our auth reducer!
         this.props.regAction(resp.data);
      }
   };

   render() {
      console.log(this.props.auth);
      return (
         <div className="login-form">
            <h5 className="login-header">Sign Up</h5>
            <form onSubmit={this.submitLogin}>
               <button className="facebook-login">Connect With Facebook</button>
               <button className="google-login">Connect With Google</button>
               <div className="login-or center">
                  <span>or</span>
                  <div className="or-divider"></div>
               </div>
               {this.state.lowerPartOfForm}
               <div className="divider"></div>
               <div>
                  Already have an account?{" "}
                  <span
                     className="pointer"
                     onClick={() => {
                        this.props.openModal("open", <Login />);
                     }}
                  >
                     <strong>Login</strong>
                  </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);

const SignUpInputFields = (props) => {
   return (
      <div className="login-form">
         <div className="col s6">
            <div className="input-field" id="email">
               <div className="form-label">E-mail</div>
               <input
                  className="browser-default"
                  placeholder="E-mail"
                  onChange={props.changeEmail}
                  type="email"
               />
            </div>
         </div>

         <div className="col s6">
            <div id="password" className="input-field">
               <div className="form-label">Password</div>
               <input
                  className="browser-default"
                  type="password"
                  placeholder="Password"
                  onChange={props.changePassword}
               />
            </div>
         </div>
         <div className="col s6">
            <div id="name" className="input-field">
               <div className="form-label">Name</div>
               <input
                  className="browser-default"
                  type="input"
                  placeholder="Name"
                  onChange={props.changeName}
               />
            </div>
         </div>

         <div className="col m12">
            <button type="submit" className="btn red accent-2">
               Sign Up{" "}
            </button>
         </div>
      </div>
   );
};
