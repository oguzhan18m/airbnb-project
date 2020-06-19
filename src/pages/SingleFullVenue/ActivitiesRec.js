import React, { Component } from "react";
import "./ActivitiesRec.css";
import ActivitiesRecOne from "./ActivitiesRecOne";
import SlickSlider from "../../utility/Slider/Slider";

export default class ActivitiesRec extends Component {
   render() {
      const activities = this.props.activitiesRecommended.map((activity, i) => {
         return (
            <div key={i} className="col s2">
               <ActivitiesRecOne activity={activity} />
            </div>
         );
      });
      return (
         <div className="activities">
            <div className="divider"></div>
            <br />
            <h1 className="main-header-text">{this.props.header}</h1>
            <br />
            <SlickSlider elements={activities} />
         </div>
      );
   }
}
