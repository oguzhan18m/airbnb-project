import React, { Component } from "react";
import "./Home.css";
import SearchBox from "./SearchBox";
import axios from "axios";
import Spinner from "../../utility/Spinner/Spinner";
import Cities from "../../utility/City/Cities";
import Activities from "../../utility/Activity/Activities";
import Venues from "../../utility/Venue/Venues";
import SuperHosts from "../../utility/SuperHost/SuperHosts";

export default class Home extends Component {
   state = {
      cities: [],
      europeCities: {},
      asiaCities: {},
      exoticCities: {},
      activities: [],
      venues: {},
      superHosts: {},
   };

   async componentDidMount() {
      const citiesUrl = `${window.apiHost}/cities/recommended`;
      const europeCitiesUrl = `${window.apiHost}/cities/europe`;
      const asiaCitiesUrl = `${window.apiHost}/cities/asia`;
      const exoticCitiesUrl = `${window.apiHost}/cities/exotic`;
      const venuesUrl = `${window.apiHost}/venues/recommended`;
      const superHostUrl = `${window.apiHost}/venues/superHost`;

      const citiesPromises = [];

      citiesPromises.push(axios.get(citiesUrl));
      citiesPromises.push(axios.get(europeCitiesUrl));
      citiesPromises.push(axios.get(asiaCitiesUrl));
      citiesPromises.push(axios.get(exoticCitiesUrl));
      citiesPromises.push(axios.get(venuesUrl));
      citiesPromises.push(axios.get(superHostUrl));

      Promise.all(citiesPromises).then((data) => {
         const recommendedCities = data[0].data;
         const europeCities = data[1].data;
         const asiaCities = data[2].data;
         const exoticCities = data[3].data;
         const venues = data[4].data;
         const superHosts = data[5].data;
         console.log(exoticCities);
         this.setState({
            cities: recommendedCities,
            europeCities,
            asiaCities,
            exoticCities,
            venues,
            superHosts,
         });
      });

      const activitiesUrl = `${window.apiHost}/activities/today`;
      const activities = await axios.get(activitiesUrl);
      this.setState({
         activities: activities.data,
      });
   }
   render() {
      console.log(this.state.activities);
      if (this.state.cities.length === 0) {
         return <Spinner />;
      }

      return (
         <>
            <div className="container-fluid">
               <div className="row">
                  <div className="home col s12">
                     <div className="upper-fold">
                        <SearchBox />
                     </div>
                  </div>
               </div>
            </div>

            <div className="container-fluid lower-fold">
               <div className="row">
                  <div className="col s12">
                     <Cities
                        cities={this.state.cities}
                        header="Recomended Cities For You"
                     />
                  </div>
                  <br />

                  <div className="col s12">
                     <Activities
                        activities={this.state.activities}
                        header="Today in your area"
                     />
                  </div>
                  <br />

                  <div className="col s12">
                     <Cities
                        cities={this.state.europeCities.cities}
                        header={this.state.europeCities.header}
                     />
                  </div>
                  <br />
                  <div className="col s12">
                     <SuperHosts
                        superHosts={this.state.superHosts.venues}
                        header={this.state.superHosts.header}
                     />
                  </div>
                  <br />
                  <div className="col s12">
                     <Cities
                        cities={this.state.asiaCities.cities}
                        header={this.state.asiaCities.header}
                     />
                  </div>
                  <br />
                  <br />
                  <div className="col s12">
                     <Cities
                        cities={this.state.exoticCities.cities}
                        header={this.state.exoticCities.header}
                     />
                  </div>
                  <br />
                  <div className="col s12">
                     <Venues
                        venues={this.state.venues.venues}
                        header={this.state.venues.header}
                     />
                  </div>
               </div>
            </div>
         </>
      );
   }
}
