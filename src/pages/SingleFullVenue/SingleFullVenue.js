import React, { Component } from "react";
import "./SingleFullVenue.css";
import axios from "axios";
import Point from "./Point";
import ActivitiesRec from "./ActivitiesRec";
import { connect } from "react-redux";
import openModal from "../../actions/openModal";
import { bindActionCreators } from "redux";
import Login from "../LogIn/Login";
import moment from "moment";
import swal from "sweetalert";
import loadScript from "../../utilityFunctions/loadScript";

class SingleFullVenue extends Component {
   state = {
      singleVenue: {},
      points: [],
      activitiesRecommended: [],
      checkIn: "",
      checkOut: "",
      numberOfGuests: 1,
   };
   async componentDidMount() {
      const vId = this.props.match.params.vid;
      const url = `${window.apiHost}/venue/${vId}`;
      const axiosResponse = await axios.get(url);
      const singleVenue = axiosResponse.data;

      const pointsUrl = `${window.apiHost}/points/get`;
      const pointsAxiosResponse = await axios.get(pointsUrl);
      console.log(pointsAxiosResponse.data);

      const points = singleVenue.points.split(",").map((point, i) => {
         return (
            <Point key={i} pointDesc={pointsAxiosResponse.data} point={point} />
         );
      });

      const activitiesRec = `${window.apiHost}/activities/today`;
      const activitiesRecResp = await axios.get(activitiesRec);
      const activities = activitiesRecResp.data;
      console.log(activities);

      this.setState({
         singleVenue,
         points,
         activitiesRecommended: activities,
      });
   }

   changeNumberOfGuests = (e) => {
      this.setState({ numberOfGuests: e.target.value });
   };
   changeCheckIn = (e) => {
      this.setState({ checkIn: e.target.value });
   };
   changeCheckOut = (e) => {
      this.setState({ checkOut: e.target.value });
   };

   reserveNow = async (e) => {
      const startDayMoment = moment(this.state.checkIn);
      console.log(startDayMoment);
      const endDayMoment = moment(this.state.checkOut);
      console.log(endDayMoment);
      const diffDays = endDayMoment.diff(startDayMoment, "days");

      if (diffDays < 1) {
         swal({
            title: "Check-out date must be after check-in date!",
            icon: "error",
         });
      } else if (isNaN(diffDays)) {
         swal({
            title: "Please make sure that your dates are valid!",
            icon: "error",
         });
      } else {
         const pricePerNight = this.state.singleVenue.pricePerNight;
         const totalPrice = pricePerNight * diffDays;
         const scriptUrl = "https://js.stripe.com/v3";
         const stripePublicKey =
            "pk_test_5198HtPL5CfCPYJ3X8TTrO06ChWxotTw6Sm2el4WkYdrfN5Rh7vEuVguXyPrTezvm3ntblRX8TpjAHeMQfHkEpTA600waD2fMrT";

         // await new Promise((resolve, reject) => {
         //    const script = document.createElement("script");
         //    script.type = "text/javascript";
         //    script.src = scriptUrl;
         //    script.onload = () => {
         //       console.log("The script has loaded!");
         //       resolve();
         //    };
         //    document.getElementsByTagName("head")[0].appendChild(script);
         //    console.log("The script has been added to the header");
         // });
         // console.log("Lets run some Stripe");
         await loadScript(scriptUrl); // we dont need a variable , we just need to wait.
         const stripe = window.Stripe(stripePublicKey);

         const stripeSessionUrl = `${window.apiHost}/payment/create-session`;
         const data = {
            venueData: this.state.singleVenue,
            totalPrice,
            diffDays,
            pricePerNight,
            checkIn: this.state.checkIn,
            checkOut: this.state.checkOut,
            token: this.props.auth.token,
            currency: "USD",
         };

         const sessionVar = await axios.post(stripeSessionUrl, data);
         console.log(sessionVar.data);

         stripe
            .redirectToCheckout({
               sessionId: sessionVar.data.id,
            })
            .then((result) => {
               console.log(result);
            });
      }
   };

   render() {
      console.log(this.props.auth);
      return (
         <div className="row single-venue">
            <div className="col s12 center">
               <img
                  src={this.state.singleVenue.imageUrl}
                  alt="imageurl"
                  className="image-url"
               />
               <div className="divider"></div>
            </div>
            <div className="col s8 location-details offset-s2">
               <div className="col s8 left-details">
                  <div className="location">
                     {this.state.singleVenue.location}
                  </div>
                  <div className="title">{this.state.singleVenue.title}</div>
                  <div className="guests">{this.state.singleVenue.guests}</div>
                  <div className="divider"></div>
                  {this.state.points}
                  <div className="details">
                     {this.state.singleVenue.details}
                  </div>
                  <div className="amenities">
                     {this.state.singleVenue.amenities}
                  </div>
               </div>
               <div className="col s4 right-details">
                  <div className="price-per-day">
                     ${this.state.singleVenue.pricePerNight}{" "}
                     <span>per night</span>
                  </div>

                  <div className="rating">
                     <i className="material-icons">star</i>
                     {this.state.singleVenue.rating} / 5.00
                  </div>
                  <div className="divider"></div>
                  <div className="col s12 reserve-date">
                     <strong>Check-In</strong>
                     <input
                        type="date"
                        onChange={this.changeCheckIn}
                        value={this.state.checkIn}
                     />
                  </div>
                  <div className="col s12 reserve-date">
                     Check-Out
                     <input
                        type="date"
                        onChange={this.changeCheckOut}
                        value={this.state.checkOut}
                     />
                  </div>
                  <div className="col s12">
                     <select
                        className="browser-default"
                        onChange={this.changeNumberOfGuests}
                        value={this.state.numberOfGuests}
                     >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guest</option>
                        <option value="3">3 Guest</option>
                        <option value="4">4 Guest</option>
                        <option value="5">5 Guest</option>
                        <option value="6">6 Guest</option>
                        <option value="7">7 Guest</option>
                        <option value="8">8 Guest</option>
                     </select>
                  </div>

                  <div className="col s12 center">
                     {this.props.auth.token ? (
                        <button
                           onClick={this.reserveNow}
                           className="btn red accent-2"
                        >
                           Reserve
                        </button>
                     ) : (
                        <div>
                           <br />
                           You must Login to reserve.
                           <br />
                           <br />
                           <span
                              className="login-signup btn red accent-2"
                              onClick={() => {
                                 this.props.openModal("open", <Login />);
                              }}
                           >
                              {" "}
                              Login
                           </span>{" "}
                        </div>
                     )}
                  </div>
               </div>
            </div>
            <br />
            <div className="col s12 center">
               <ActivitiesRec
                  activitiesRecommended={this.state.activitiesRecommended}
                  header="Recommended Activities For You Today"
               />
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

function mapDispatchToProps(dispatch) {
   return bindActionCreators(
      {
         openModal,
      },
      dispatch
   );
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFullVenue);
