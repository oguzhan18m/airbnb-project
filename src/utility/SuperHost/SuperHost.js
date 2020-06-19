import React, { Component } from "react";
import "./SuperHost.css";
import { Link } from "react-router-dom";

export default class SuperHost extends Component {
   render() {
      const {
         id,
         imageUrl,
         location,
         pricePerNight,
         rating,
         title,
      } = this.props.superHost;
      return (
         <div className="superhost">
            <Link to={`/superhost/${id}`}>
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
