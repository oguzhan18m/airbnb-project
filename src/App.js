import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Spinner from "./utility/Spinner/Spinner";
// import Navbar from "./utility/Navbar/Navbar";
// import Home from "./pages/Home/Home";
// import BecomeAHost from "./pages/BecomeAHost/BecomeAHost";
// import SingleFullVenue from "./pages/SingleFullVenue/SingleFullVenue";
// import SingleActivity from "./pages/SingleActivity/SingleActivity";
// import Modal from "./utility/Modal/Modal";
// import CityVenues from "./pages/CityVenues/CityVenues";
// import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
// import Account from "./pages/Account/Account";
// import Search from "./pages/Search/Search";
const Navbar = lazy(() => import("./utility/Navbar/Navbar"));
const Home = lazy(() => import("./pages/Home/Home"));
const BecomeAHost = lazy(() => import("./pages/BecomeAHost/BecomeAHost"));
const SingleFullVenue = lazy(() =>
   import("./pages/SingleFullVenue/SingleFullVenue")
);
const SingleActivity = lazy(() =>
   import("./pages/SingleActivity/SingleActivity")
);
const Modal = lazy(() => import("./utility/Modal/Modal"));
const CityVenues = lazy(() => import("./pages/CityVenues/CityVenues"));
const PaymentSuccess = lazy(() =>
   import("./pages/PaymentSuccess/PaymentSuccess")
);
const Account = lazy(() => import("./pages/Account/Account"));
const Search = lazy(() => import("./pages/Search/Search"));

export default class App extends Component {
   render() {
      return (
         <Router>
            <Suspense fallback={<Spinner />}>
               <Route path="/" component={Navbar} />
               <Route exact path="/" component={Home} />
               <Route exact path="/venue/:vid" component={SingleFullVenue} />
               <Route exact path="/activity/:aid" component={SingleActivity} />
               <Route exact path="/city/:cityName" component={CityVenues} />
               <Route exact path="/become-a-host" component={BecomeAHost} />
               <Route exact path="/search/:searchTerm" component={Search} />

               <Route
                  exact
                  path="/payment-success/:stripeToken"
                  component={PaymentSuccess}
               />
               <Route path="/account" component={Account} />
               <Route path="/" component={Modal} />
            </Suspense>
         </Router>
      );
   }
}
