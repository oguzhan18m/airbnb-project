import React, { Component } from "react";
import "./City.css";
import { Link } from "react-router-dom";

export default class City extends Component {
   render() {
      const { cityName, price, image, id } = this.props.city;
      return (
         <div className="city col s12">
            <Link to={`/city/${id}`}>
               <div className="image">
                  <img src={image} alt="img" />
               </div>
               <div className="city-name">{cityName}</div>
               <div className="price">${price}/night avarage</div>
            </Link>
         </div>
      );
   }
}
