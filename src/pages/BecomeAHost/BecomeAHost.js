import React, { Component } from "react";
import "./BecomeAHost.css";
import HostBox from "./HostBox";
import HostFluid from "./HostFluid";

export default class BecomeAHost extends Component {
   render() {
      return (
         <div className="container-fluid">
            <div className="row">
               <div className="host col s12">
                  <div className="upper-fold">
                     <HostBox />
                  </div>
               </div>

               <div className="col s12">
                  <div className="lower-fold">
                     <HostFluid />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
