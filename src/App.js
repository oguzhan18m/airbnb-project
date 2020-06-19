import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./utility/Navbar/Navbar";
import Home from "./pages/Home/Home";
import BecomeAHost from "./pages/BecomeAHost/BecomeAHost";
import SingleFullVenue from "./pages/SingleFullVenue/SingleFullVenue";
import SingleActivity from "./pages/SingleActivity/SingleActivity";
import SingleCity from "./pages/SingleCity/SingleCity";
import Modal from "./utility/Modal/Modal";

console.log(process.env.REACT_APP_API_KEY);

export default class App extends Component {
   render() {
      return (
         <Router>
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={Home} />
            <Route exact path="/venue/:vid" component={SingleFullVenue} />
            <Route exact path="/activity/:aid" component={SingleActivity} />
            <Route exact path="/city/:cid" component={SingleCity} />
            <Route exact path="/become-a-host" component={BecomeAHost} />

            <Route path="/" component={Modal} />
         </Router>
      );
   }
}
