import React, { Component } from "react";
import "./Account.css";
import { Route } from "react-router-dom";
import Bookings from "./Bookings";
import AccountSideBar from "./AccountSideBar";
import ChangePassword from "./ChangePassword";
import axios from "axios";
import moment from "moment";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faLongArrowAltLeft);

class Account extends Component {
   state = {
      pastBookings: [],
      upcomingBookings: [],
   };

   async componentDidMount() {
      this.isUnMount = false;
      const accountUrl = `${window.apiHost}/users/getBookings`;
      const data = {
         token: this.props.auth.token,
      };
      const resp = await axios.post(accountUrl, data);
      console.log(resp.data);
      let pastBookings = [];
      let upcomingBookings = [];
      resp.data.forEach((booking) => {
         const today = moment(); //get today's date so we know what is past and what is future
         const checkOutDate = moment(booking.checkOut);
         const diffDays = checkOutDate.diff(today, "days");
         if (diffDays < 0) {
            pastBookings.push(booking);
         } else {
            upcomingBookings.push(booking);
         }
      });
      if (!this.isUnMount) {
         this.setState({
            pastBookings,
            upcomingBookings,
         });
      }
   }

   componentWillUnmount() {
      this.isUnMount = true;
   }

   render() {
      const { pastBookings, upcomingBookings } = this.state;
      console.log(pastBookings);
      console.log(upcomingBookings);
      return (
         <div className="account container-fluid">
            <AccountSideBar />
            <div className="row">
               <div className="col s8 offset-s3">
                  <Route
                     exact
                     path="/account"
                     render={() => (
                        <h5>
                           <FontAwesomeIcon
                              icon="long-arrow-alt-left"
                              size="1x"
                              color="#ED0000"
                           />
                           {"    "}
                           Choose an option on the left sidebar.
                        </h5>
                     )}
                  />
                  <Route
                     exact
                     path="/account/reservations/confirmed"
                     render={() => (
                        <Bookings
                           type="upcoming"
                           bookings={upcomingBookings}
                           token={this.props.auth.token}
                        />
                     )}
                  />
                  <Route exact path="/account/reservations/past">
                     <Bookings type="past" bookings={pastBookings} />
                  </Route>
                  <Route
                     exact
                     path="/account/change-pass"
                     component={ChangePassword}
                     token={this.props.auth.token}
                  />
               </div>
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

export default connect(mapStateToProps)(Account);
