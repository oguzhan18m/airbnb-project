import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../../utility/Spinner/Spinner";
import axios from "axios";
import moment from "moment";
import "./PaymentSuccess.css";
import { Link } from "react-router-dom";

class PaymentSuccess extends Component {
   state = {
      reservationDetails: {},
      userData: {},
      waiting: true,
   };

   async componentDidMount() {
      const stripeToken = this.props.match.params.stripeToken;
      const token = this.props.auth.token;
      const data = {
         stripeToken,
         token,
      };
      const successUrl = `${window.apiHost}/payment/success`;
      const resp = await axios.post(successUrl, data);
      console.log(resp.data);
      this.setState({
         reservationDetails: resp.data.reservationDetails,
         userData: resp.data.userData,
         waiting: false,
      });
   }

   render() {
      if (this.state.waiting) {
         return <Spinner />;
      }

      const rd = this.state.reservationDetails;
      console.log(rd);

      const vd = rd.venueData;
      console.log(vd);

      const checkInDate = moment(vd.checkIn).format("MMM Do YY");
      const checkOutDate = moment(vd.checkOut).format("MMM Do YY");

      //moment().format('MMMM Do YYYY, h:mm:ss a');

      return (
         <div className="reservation-success row">
            <h1 className="col m12 center start-packing">Start Packing!</h1>
            <div className="divider"></div>
            <div className="resv-details col s8 offset-s2">
               <div className="confirmed col m12 row">
                  <i className="material-icons check">check_circle</i>
                  <span className="green-confirmed">Confirmed : </span>
                  {rd.diffDays} nights in {vd.location}
                  <div className="header-text">
                     <div>
                        {" "}
                        <span className="span-booked">Booked by</span> :
                        {this.state.userData.email}
                     </div>
                     <div>
                        {" "}
                        <span className="span-booked">Date</span> :
                        {moment().format("MMM Do YY")}
                     </div>
                  </div>
               </div>
               <div className="confirmed-detail row">
                  <div className="col m5">
                     <div className="bordered col">
                        <div className="col m12 upper">
                           <div className="left">CHECK-IN</div>
                           <div className="right">CHECK-OUT</div>
                        </div>
                        <div className="col m12 lower">
                           <div className="left">{checkInDate}</div>
                           <div className="right">{checkOutDate}</div>
                        </div>
                        <div className="col m12 title-text">{vd.title}</div>
                        <br />
                        <div className="col m12 details">{vd.details}</div>
                     </div>
                  </div>

                  <div className="col m7">
                     <div className="bordered col">
                        <div className="col m12 upper charges">
                           <div className="charges-text col m12">
                              {vd.amenities}
                           </div>
                           <div className="row col m12">
                              <div className="left">
                                 <span className="span-bolder">
                                    ${vd.pricePerNight}{" "}
                                 </span>{" "}
                                 /per night x{" "}
                                 <span className="span-bolder">
                                    {rd.diffDays}{" "}
                                 </span>{" "}
                                 nights
                              </div>
                              <div className="right">${rd.totalPrice}</div>
                           </div>
                           <div className="row col m12">
                              <div className="left">Discount</div>
                              <div className="right">$0</div>
                           </div>
                           <div className="row col m12 total">
                              <div className="left">TOTAL</div>
                              <div className="right">${rd.totalPrice}</div>
                           </div>
                        </div>
                        <div className="col m12 row">
                           To review or make changes to your reservation in the
                           future, visit your{" "}
                           <Link to="/account">Account Page</Link>.
                        </div>
                        <div className="col m12 resv-image">
                           <img src={vd.imageUrl} alt="venue" />
                        </div>
                     </div>
                  </div>
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

export default connect(mapStateToProps)(PaymentSuccess);
