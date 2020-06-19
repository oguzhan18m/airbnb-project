import React, { Component } from "react";
import "./Modal.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";

class Modal extends Component {
   closeModal = () => {
      this.props.openModal("closed", "");
   };

   render() {
      let modalInStyle;
      if (this.props.siteModal.openClose === "open") {
         modalInStyle = { display: "block" };
      } else {
         modalInStyle = { display: "none" };
      }

      return (
         <div className="site-modal" style={modalInStyle}>
            <div className="modal-content">
               <div className="col right">
                  <span className="close" onClick={this.closeModal}>
                     &times;
                  </span>
               </div>

               <div className="">{this.props.siteModal.content}</div>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      siteModal: state.siteModal,
   };
}

function mapDispatchToProps(dispatcher) {
   return bindActionCreators(
      {
         openModal: openModal,
      },
      dispatcher
   );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
