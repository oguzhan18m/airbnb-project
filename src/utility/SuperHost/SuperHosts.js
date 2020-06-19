import React, { Component } from "react";
import SuperHost from "./SuperHost";
import "./SuperHost.css";

export default class SuperHosts extends Component {
   render() {
      console.log(this.props.superHosts);
      const superHosts = this.props.superHosts.map((superHost, i) => {
         return (
            <div key={i} className="col s3">
               <SuperHost superHost={superHost} />
            </div>
         );
      });
      return (
         <div className="superhosts">
            <h1 className="main-header-text">{this.props.header}</h1>
            {superHosts}
         </div>
      );
   }
}
