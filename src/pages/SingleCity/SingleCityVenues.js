import React, { Component } from "react";
import "./SingleCityVenues.css";
import SingleCityVenuesOne from "./SingleCityVenuesOne";

export default class SingleCityVenues extends Component {
   render() {
      const SingleCityVenues = this.props.singleCity.map((venue, i) => {
         return (
            <div key={i} className="col s3">
               <SingleCityVenuesOne venue={venue} />
            </div>
         );
      });
      return (
         <div className="venues">
            <div className="divider"></div>
            <br />
            <h1 className="main-header-text">{this.props.header}</h1>
            <br />
            <br />
            {SingleCityVenues}
         </div>
      );
   }
}
