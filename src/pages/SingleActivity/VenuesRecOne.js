import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class VenuesRecOne extends Component {
   render() {
      const {
         id,
         imageUrl,
         location,
         pricePerNight,
         rating,
         title,
      } = this.props.venue;
      return (
         <div className="venue col s12">
            <Link to={`/venue/${id}`}>
               <div className="image">
                  <img src={imageUrl} alt="img" />
               </div>

               <div className="location-stars">
                  <span className="location">{location}</span>
                  <span className="rating right">
                     <i className="material-icons">star</i>
                     {rating}
                  </span>
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
