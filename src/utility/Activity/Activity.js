import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Activity extends Component {
   render() {
      const {
         id,
         activityType,
         cost,
         image,
         rating,
         title,
         totalRatings,
      } = this.props.activity;
      return (
         <div className="activity">
            <Link to={`/activity/${id}`}>
               <div className="activity">
                  <img src={image} alt="img" />
               </div>
               <div className="activities-header-text">{activityType}</div>
               <div className="title">{title}</div>
               <div className="cost">From ${cost}/person</div>
               <div className="rating">
                  <span className="material-icons">star_rate</span>
                  {rating} ({totalRatings})
               </div>
            </Link>
         </div>
      );
   }
}
