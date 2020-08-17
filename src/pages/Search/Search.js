import React, { Component } from "react";
import "./Search.css";
import axios from "axios";
import Spinner from "../../utility/Spinner/Spinner";
import Cities from "../../utility/City/Cities";
import Activities from "../../utility/Activity/Activities";
import Venues from "../../utility/Venue/Venues";

export default class Search extends Component {
   state = {
      activities: [],
      cities: [],
      venues: [],
      apiResponse: false,
   };

   async componentDidMount() {
      console.log(this.props.match.params);
      const searchTerm = this.props.match.params.searchTerm;
      //   console.log(searchTerm);
      const url = `${window.apiHost}/search/${searchTerm}`;
      const resp = await axios.get(url);
      console.log(resp.data);

      this.setState({
         activities: resp.data.activities,
         cities: resp.data.cities,
         venues: resp.data.venues,
         apiResponse: true,
      });
   }

   render() {
      if (!this.state.apiResponse) {
         return <Spinner />;
      } else if (
         this.state.venues === 0 &&
         this.state.venues === 0 &&
         this.state.venues === 0
      ) {
         return <h5>Nothing matched with your search!</h5>;
      } else {
         return (
            <div className="container-fluid lower-fold">
               <h3 className="search-results-header-text">Search Results</h3>
               <div className="divider"></div>
               <div className="row">
                  {this.state.cities.length === 0 ? (
                     <h5 className="nothing-mathced">
                        Nothing matched with Cities!
                     </h5>
                  ) : (
                     <div className="col s12 search-matched">
                        <Cities
                           cities={this.state.cities}
                           header="Cities Matching Your Search"
                        />
                     </div>
                  )}

                  {this.state.activities.length === 0 ? (
                     <h5 className="nothing-mathced">
                        Nothing matched with Activities!
                     </h5>
                  ) : (
                     <div className="col s12 search-matched">
                        <Activities
                           activities={this.state.activities}
                           header="Activities Matching Your Search"
                        />
                     </div>
                  )}

                  {this.state.venues.length === 0 ? (
                     <h5 className="nothing-mathced">
                        Nothing matched with Venues!
                     </h5>
                  ) : (
                     <div className="col s12 search-matched">
                        <Venues
                           venues={this.state.venues}
                           header="Venues Matching Your Search"
                        />
                     </div>
                  )}
               </div>
            </div>
         );
      }
   }
}
