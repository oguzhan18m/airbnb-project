import React, { Component } from "react";
import VenuesRecOne from "./VenuesRecOne";

export default class VenuesRec extends Component {
   render() {
      console.log(this.props.venuesRecommended);

      const venuesRecommended = this.props.venuesRecommended.map((venue, i) => {
         return (
            <div key={i} className="col s3">
               <VenuesRecOne venue={venue} />
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
            {venuesRecommended}
         </div>
      );
   }
}
