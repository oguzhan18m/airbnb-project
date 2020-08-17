import React from "react";
import "./Account.css";
import axios from "axios";
import swal from "sweetalert";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPrint, faTimesCircle);

function Bookings(props) {
   console.log(props);

   const cancelBooking = async (bid, location) => {
      const cancelReservation = await swal({
         text: `Are you sure to cancel your trip to ${location}`,
         icon: "warning",
         buttons: true,
      });
      if (cancelReservation) {
         console.log("User canceled this reservation with OK button.");
         const url = `${window.apiHost}/reservation/cancel`;
         const data = {
            token: props.token,
            bid,
         };
         const resp = await axios.post(url, data);
         if (resp.data.msg === "cancelled") {
            swal({
               title: "Cancelled",
               icon: "success",
            });
         } else {
            swal({
               title: "There was an error cancelling",
               icon: "error",
            });
         }
      }
   };

   const bookings = props.bookings.map((booking, i) => {
      const dates = `${moment(booking.checkIn).format("MMM Do")} - ${moment(
         booking.checkOut
      ).format("MMM Do YYYY")}`;
      return (
         <tr key={i} className="booking-row">
            <td id="status">
               {booking.status === "confirmed" && props.type === "past"
                  ? "Completed "
                  : booking.status}{" "}
            </td>
            <td>
               <div className="booking-detail">{dates}</div>
               <div className="booking-detail">{booking.venueData.title}</div>
               <div className="booking-detail">
                  {booking.venueData.location}
               </div>
            </td>
            <td>
               <div className="booking-detail">
                  Confirmation #: {booking.conf}
               </div>
               <div className="booking-detail">
                  {booking.numberOfGuests} Guests, {booking.totalNights} Nights
               </div>
               <div className="booking-detail">
                  ${booking.pricePerNight} per night
               </div>
               <div className="booking-detail">${booking.totalPrice} Total</div>
            </td>
            <td>
               <div className="booking-detail pointer">
                  <FontAwesomeIcon icon="print" size="1x" color="blue" /> Print
                  Reservation
               </div>
               <br />
               {props.type === "upcoming" && booking.status !== "cancelled" ? (
                  <div
                     onClick={() =>
                        cancelBooking(booking.id, booking.venueData.location)
                     }
                     className="booking-detail pointer"
                  >
                     {" "}
                     <FontAwesomeIcon
                        icon="times-circle"
                        size="1x"
                        color="blue"
                     />{" "}
                     Cancel Confirmation
                  </div>
               ) : (
                  <> </>
               )}
            </td>
         </tr>
      );
   });
   return (
      <table className="booking">
         <thead>
            <tr>
               <th>Status</th>
               <th>Dates and Location</th>
               <th>Details</th>
               <th>Actions</th>
            </tr>
         </thead>
         <tbody>{bookings}</tbody>
      </table>
   );
}

export default Bookings;
