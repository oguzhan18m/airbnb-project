import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SingleCityVenuesOne extends Component {
   render() {
      const { id, imageUrl, location, pricePerNight, title } = this.props.venue;
      return (
         <div className="venue col s12">
            <Link to={`/venue/${id}`}>
               <div className="image">
                  <img src={imageUrl} alt="img" />
               </div>

               <div className="location-stars">
                  <span className="location">City Id :{location}</span>
               </div>

               <div className="title">{title}</div>
               <div className="price">
                  <span className="price-per-night">${pricePerNight}</span>
                  /night
               </div>
            </Link>
         </div>
      );
   }
}
