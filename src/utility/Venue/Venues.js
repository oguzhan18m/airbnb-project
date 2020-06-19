import React, { Component } from "react";
import Venue from "./Venue";
import "./Venue.css";

export default class Venues extends Component {
   render() {
      console.log(this.props.venues);

      const venues = this.props.venues.map((venue, i) => {
         return (
            <div key={i} className="col s3">
               <Venue venue={venue} />
            </div>
         );
      });
      return (
         <div className="venues">
            <h1 className="main-header-text">{this.props.header}</h1>
            {venues}
         </div>
      );
   }
}
