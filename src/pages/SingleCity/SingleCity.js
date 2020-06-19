import React, { Component } from "react";
import axios from "axios";
import SingleCityVenues from "./SingleCityVenues";

export default class SingleCity extends Component {
   state = {
      singleCity: [],
   };

   async componentDidMount() {
      const cId = this.props.match.params.cid;
      const url = `${window.apiHost}/city/${cId}`;
      const axiosResponse = await axios.get(url);
      console.log(axiosResponse.data);
      const singleCity = axiosResponse.data;

      //   const venuesUrl = `${window.apiHost}/venues/recommended`;
      //   const venuesResp = await axios.get(venuesUrl);
      //   const venues = venuesResp.data;
      //   console.log(venues);
      this.setState({
         singleCity: singleCity.venues,
      });
   }

   render() {
      console.log(this.state.singleCity.venues);
      return (
         <div className="row single-city">
            <div className="col s12">
               <SingleCityVenues
                  singleCity={this.state.singleCity}
                  header="Places To Stay In The City"
               />
            </div>
         </div>
      );
   }
}
