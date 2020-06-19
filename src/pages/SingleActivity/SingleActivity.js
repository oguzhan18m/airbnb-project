import React, { Component } from "react";
import axios from "axios";
import "./SingleActivity.css";
import VenuesRec from "./VenuesRec";

export default class SingleActivity extends Component {
   state = {
      singleActivity: {},
      venuesRecommended: [],
   };
   async componentDidMount() {
      const aId = this.props.match.params.aid;
      const url = `${window.apiHost}/activity/${aId}`;
      const axiosResponse = await axios.get(url);
      const singleActivity = axiosResponse.data;

      const venuesUrl = `${window.apiHost}/venues/recommended`;
      const venuesResp = await axios.get(venuesUrl);
      const venues = venuesResp.data;
      console.log(venues);
      this.setState({
         singleActivity,
         venuesRecommended: venues.venues,
      });
   }

   reserveNow = (e) => {
      console.log("user wants to reserve now!");
   };
   render() {
      return (
         <div className="row single-activity">
            <div className="col s12 center">
               <img
                  src={this.state.singleActivity.image}
                  alt="imageurl"
                  className="image-url"
               />
               <div className="divider"></div>
            </div>
            <div className="col s8 offset-s2">
               <div className="col s8 left-details">
                  <div className="title">{this.state.singleActivity.title}</div>
                  <div className="divider"></div>
                  <div className="details">
                     <span>Details :</span>
                     <br />
                     {this.state.singleActivity.description}
                  </div>

                  <div className="group-size">
                     <br />
                     Group Size : {this.state.singleActivity.groupSize}
                  </div>
                  <br />
                  <br />
               </div>

               <div className="col s4 right-details">
                  <div className="price-per-person">
                     ${this.state.singleActivity.cost} <span>/per person</span>
                  </div>

                  <div className="rating">
                     <i className="material-icons">star</i>
                     {this.state.singleActivity.rating}(
                     <span>{this.state.singleActivity.totalRatings}</span>)
                  </div>
                  <div className="divider"></div>
                  <div className="col s12 reserve-date">
                     <strong>Check-In</strong>
                     <input type="date" />
                  </div>
                  <div className="col s12 reserve-date">
                     Check-Out
                     <input type="date" />
                  </div>
                  <div className="col s12">
                     <select className="browser-default">
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
                     <p> </p>
                     <button
                        onClick={this.reserveNow}
                        className="btn red accent-2"
                     >
                        Reserve
                     </button>
                  </div>
               </div>
            </div>
            <br />
            <br />

            <div className="col s12">
               <VenuesRec
                  venuesRecommended={this.state.venuesRecommended}
                  header="Some Recommended Places To Stay For You"
               />
            </div>
         </div>
      );
   }
}
