import React, { Component } from "react";
import "./HostBox.css";

export default class HostBox extends Component {
   state = {
      location: "",
      place: "",
      guests: 0,
   };

   changeLocation = (e) => {
      this.setState({
         location: e.target.value,
      });
   };

   placeChange = (e) => {
      this.setState({
         place: e.target.value,
      });
   };

   guestsChange = (e) => {
      this.setState({
         guests: e.target.value,
      });
   };

   render() {
      return (
         <div className="container-fluid">
            <div className="host-search-box col m4">
               <h1>Earn money as an Airbnb host</h1>

               <form className="search-box-form">
                  <div className="col m12">
                     <div className="form-label">location</div>
                     <div className="input-field" id="where">
                        <input
                           onChange={this.changeLocation}
                           value={this.state.location}
                           placeholder="Your Location"
                           type="text"
                           className="browser-default"
                        />
                     </div>
                  </div>

                  <div className="col m6">
                     <div className="form-label">Type of Place</div>
                     <select
                        onChange={this.placeChange}
                        value={this.state.place}
                        className="browser-default"
                     >
                        <option value="1">Entire Place</option>
                        <option value="2">Private Room</option>
                        <option value="3">Shared Room</option>
                     </select>
                  </div>

                  <div className="col m6">
                     <div className="form-label">Guests</div>
                     <select
                        onChange={this.guestsChange}
                        value={this.state.guests}
                        className="browser-default"
                     >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                     </select>
                  </div>

                  <div className="col s12 submit-btn">
                     <div className="input-field" id="submit-btn">
                        <input
                           type="submit"
                           value="search"
                           className="btn waves-effect waves-light red accent-2"
                        />
                     </div>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}
