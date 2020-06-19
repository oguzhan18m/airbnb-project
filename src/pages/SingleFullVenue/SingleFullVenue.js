import React, { Component } from "react";
import "./SingleFullVenue.css";
import axios from "axios";
import Point from "./Point";
import ActivitiesRec from "./ActivitiesRec";

export default class SingleFullVenue extends Component {
   state = {
      singleVenue: {},
      points: [],
      activitiesRecommended: [],
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

   reserveNow = (e) => {
      console.log("user wants to reserve now!");
   };

   render() {
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
