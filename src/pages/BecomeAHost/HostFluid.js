import React, { Component } from "react";
import "./HostFluid.css";
import quote from "./quote.jpg";
import covered from "./covered.jpg";
import earn from "./earn2.jpg";

export default class HostFluid extends Component {
   render() {
      return (
         <div className="host-fluid">
            <div className=" host col s6">
               <i className="material-icons center">vpn_key</i>
               <div className="main-header-text ">Why host on Airbnb?</div>
               <p>
                  No matter what kind of home or room you have to share, Airbnb
                  makes it simple and secure to host travellers. You’re in full
                  control of your availability, prices, house rules, and how you
                  interact with guests.
               </p>
            </div>

            <div className=" host col s6">
               <i className="material-icons">sentiment_very_satisfied</i>
               <div className="main-header-text ">We have your back</div>
               <p>
                  To keep you, your home, and your belongings safe, we cover
                  every booking with $1M USD in property damage protection and
                  another $1M USD in insurance against accidents.
               </p>
            </div>

            <div className="hosting col s12">
               <br />
               <br />
               <div className="divider"></div>
               <h2 className="hosting-header-text center">
                  Hosting in 3 steps
               </h2>
               <br />
               <br />
               <br />
               <div className="col s4">
                  <i className="material-icons">check_circle</i>

                  <div className="main-header-text center">
                     List your space for free
                  </div>
                  <p>
                     Share any space without sign-up charges, from a shared
                     living room to a second home and everything in-between.
                  </p>
               </div>

               <div className="col s4">
                  <i className="material-icons">check_circle</i>
                  <div className="main-header-text center">
                     Decide how you want to host
                  </div>
                  <p>
                     Choose your own schedule, prices, and requirements for
                     guests. We’re there to help along the way.
                  </p>
               </div>

               <div className="col s4">
                  <i className="material-icons">check_circle</i>
                  <div className="main-header-text center">
                     Welcome your first guest
                  </div>
                  <p>
                     Once your listing is live, qualified guests can reach out.
                     You can message them with any questions before their stay.
                  </p>
               </div>
            </div>

            <div className="quote s12">
               <div className="col s6">
                  <div className="divider"></div>
                  <i className="material-icons">format_quote</i>
                  <div className="main-header-text left">
                     The Host Guarantee helped me decide to join Airbnb because
                     I have it to fall back on if there's damage or problems.
                  </div>
                  <p>Dennis hosts in London for the flexibility it provides.</p>
               </div>

               <div className="col s6">
                  <img src={quote} alt="quote" className="quote-img" />
               </div>
            </div>

            <div className="covered s12">
               <br />
               <br />
               <div className="divider"></div>
               <h2 className="hosting-header-text center">
                  We’ve got you covered
                  <br />
                  <br />
               </h2>

               <div className="col s6">
                  <p>
                     We know it’s a priority to trust the people staying in your
                     home. Airbnb allows you to set strict requirements for who
                     can book and to get to know guests before their stay. If
                     something does come up, though, we've got you covered. With
                     our Host Guarantee covering property damage and our Host
                     Protection Insurance for liability, you’re supported as a
                     host throughout.
                  </p>
               </div>
               <div className="list col s6">
                  <ul>
                     <li>
                        <i className="material-icons">check</i>Ability to
                        require government ID before booking
                     </li>
                     <li>
                        <i className="material-icons">check</i>House Rules
                        guests must agree to
                     </li>
                     <li>
                        <i className="material-icons">check</i>Chance to read
                        reviews from past trips
                     </li>
                     <li>
                        <i className="material-icons">check</i>Free $1M
                        protection for property damage
                     </li>
                     <li>
                        <i className="material-icons">check</i>Free $1M
                        liability insurance
                     </li>
                     <li>
                        <i className="material-icons">check</i>24/7 global
                        customer support
                     </li>
                  </ul>
               </div>
               <div className="col s12 center">
                  <br />
                  <br />
                  <br />
                  <img src={covered} className="covered-img" alt="covered" />
               </div>
            </div>

            <div className="worldwide col s12">
               <br />
               <br />
               <div className="divider"></div>
               <h2 className="hosting-header-text center">
                  Hosts like you, worldwide
                  <br />
                  <br />
               </h2>
               <div className="col s4">
                  <div className="worldwide-text"> 2.9M</div>
                  <p>
                     <br />
                     Hosts on Airbnb
                  </p>
               </div>
               <div className="col s4">
                  <div className="worldwide-text">800K</div>
                  <p>
                     <br />
                     Average Airbnb stays each night
                  </p>
               </div>
               <div className="col s4">
                  <div className="worldwide-text"> 14K</div>

                  <p>
                     <br />
                     New hosts per month
                  </p>
               </div>
            </div>

            <div class="earn-container-fluid">
               <img src={earn} alt="earn" />
               <h3>Ready to earn?</h3>
               <button class="btn waves-effect waves-light white accent-2 ">
                  Get Started
               </button>
            </div>
         </div>
      );
   }
}
