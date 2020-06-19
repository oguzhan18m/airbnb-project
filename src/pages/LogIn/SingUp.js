import React, { Component } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";
import Login from "./Login";

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

   showInputs = () => {
      this.setState({
         lowerPartOfForm: (
            <SignUpInputFields
               changeEmail={this.changeEmail}
               changePassword={this.changePassword}
            />
         ),
      });
   };

   submitLogin = (e) => {
      e.preventDefault();
      console.log(this.state.email);
      console.log(this.state.password);
   };
   render() {
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
function mapDispatchToProps(dispatcher) {
   return bindActionCreators(
      {
         openModal: openModal,
      },
      dispatcher
   );
}

export default connect(null, mapDispatchToProps)(SingUp);

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

         <div className="col m12">
            <button type="submit" className="btn red accent-2">
               Sign Up{" "}
            </button>
         </div>
      </div>
   );
};
