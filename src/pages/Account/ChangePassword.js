import React, { Component } from "react";
import swal from "sweetalert";
import axios from "axios";
import { connect } from "react-redux";

class ChangePassword extends Component {
   state = {
      newPassword: "",
      confirmPassword: "",
   };

   handleNewPassword = async (e) => {
      e.preventDefault();
      const newPassword = this.state.newPassword;
      const confirmPassword = this.state.confirmPassword;

      if (newPassword !== confirmPassword) {
         swal({
            title: "Password does not match!",
            icon: "error",
         });
      } else {
         const url = `${window.apiHost}/users/change-password`;
         const data = {
            token: this.props.auth.token,
            newPassword,
         };
         const resp = await axios.post(url, data);
         console.log(resp.data);

         if (resp.data.msg === "passUpdated") {
            swal({
               title: "Your password updated successfully!",
               icon: "success",
            });
         } else {
            swal({
               title: "Something went wrong...",
               icon: "error",
            });
         }
      }
   };

   render() {
      return (
         <div className="container-fluid">
            <h3>Change Password</h3>
            <br />
            <div className="new-password col m6">
               <form
                  onSubmit={this.handleNewPassword}
                  className="search-box-form"
               >
                  <div className="col m12">
                     <div className="form-label">New Password</div>
                     <div className="input-field" id="new-password-input">
                        <input
                           onChange={(e) =>
                              this.setState({ newPassword: e.target.value })
                           }
                           value={this.state.newPassword}
                           placeholder="Enter a new password"
                           type="password"
                           className="browser-default"
                        />
                     </div>
                  </div>
                  <div className="col m12">
                     <div className="form-label">Confirm New Password</div>
                     <div className="input-field" id="new-password-input">
                        <input
                           onChange={(e) =>
                              this.setState({ confirmPassword: e.target.value })
                           }
                           value={this.state.confirmPassword}
                           placeholder="Re-enter your new password"
                           type="password"
                           className="browser-default"
                        />
                     </div>
                  </div>

                  <div className="col s6 submit-btn">
                     <div className="input-field" id="submit-btn">
                        <input
                           type="submit"
                           value="submit"
                           className="btn waves-effect waves-light red accent-2"
                        />
                     </div>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      auth: state.auth,
   };
}

export default connect(mapStateToProps)(ChangePassword);
