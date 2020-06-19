import React, { Component } from "react";
import "./SearchBox.css";

export default class SearchBox extends Component {
   state = {
      where: "",
      checkIn: "",
      checkOut: "",
      guests: 0,
   };
   changeWhere = (e) => {
      this.setState({
         where: e.target.value,
      });
   };
   changeCheckIn = (e) => {
      this.setState({
         checkIn: e.target.value,
      });
   };
   changeCheckOut = (e) => {
      this.setState({
         checkOut: e.target.value,
      });
   };
   changeGuests = (e) => {
      this.setState({
         guests: e.target.value,
      });
   };
   render() {
      return (
         <div className="home-search-box col m4">
            <h1>Book unique places to stay and things to do.</h1>

            <form className="search-box-form">
               <div className="col m12">
                  <div className="form-label">where</div>
                  <div className="input-field" id="where">
                     <input
                        onChange={this.changeWhere}
                        value={this.state.where}
                        placeholder="Anywhere"
                        type="text"
                        className="browser-default"
                     />
                  </div>
               </div>

               <div className="col m6">
                  <div className="form-label">check in</div>
                  <div className="input-field" id="check-in">
                     <input
                        onChange={this.changeCheckIn}
                        value={this.state.checkIn}
                        placeholder="CHECK-IN"
                        type="date"
                        className="browser-default"
                     />
                  </div>
               </div>

               <div className="col m6">
                  <div className="form-label">check out</div>
                  <div className="input-field" id="check-out">
                     <input
                        onChange={this.changeCheckOut}
                        value={this.state.checkOut}
                        placeholder="CHECK-OUT"
                        type="date"
                        className="browser-default"
                     />
                  </div>
               </div>

               <div className="col m12">
                  <div className="form-label">guests</div>
                  <div className="input-field" id="guests">
                     <input
                        onChange={this.changeGuests}
                        value={this.state.guests}
                        placeholder="Anywhere"
                        type="number"
                        className="browser-default"
                     />
                  </div>
               </div>

               <div className="col m12 submit-btn">
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
      );
   }
}
