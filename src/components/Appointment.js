import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { onUpdateField } from "../actions/index.js";
import About from "./About";
import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "./Loading";
import AppointmentForm from "./AppointmentForm";

class Appointment extends React.Component {
  // render
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <Header/>
        <Loading />
        <hr className="mt-100"/>
        <Banner section = "Appointment"/>
        <div className=" container text-dark pb-5 fadeIn">
             <div className="row">
               <div className="col-md-6">
                   <div className="well-block">
                       <div className="well-title">
                           <h2>Book an Appointment</h2>
                       </div>
                      <AppointmentForm/>
                   </div>
               </div>
               <div className="col-md-6">
                   <div className="well-block">
                       <div className="well-title">
                           <h2>Why Appointment with Us</h2>
                       </div>
                       <div className="feature-block">
                           <div className="feature feature-blurb-text">
                               <h4 className="feature-title">24/7 Hours Available</h4>
                               <div className="feature-content">
                                   <p>Integer nec nisi sed mi hendrerit mattis. Vestibulum mi nunc, ultricies quis vehicula et, iaculis in magnestibulum.</p>
                               </div>
                           </div>
                           <div className="feature feature-blurb-text">
                               <h4 className="feature-title">Experienced Staff Available</h4>
                               <div className="feature-content">
                                   <p>Aliquam sit amet mi eu libero fermentum bibendum pulvinar a turpis. Vestibulum quis feugiat risus. </p>
                               </div>
                           </div>
                           <div className="feature feature-blurb-text">
                               <h4 className="feature-title">Low Price & Fees</h4>
                               <div className="feature-content">
                                   <p>Praesent eu sollicitudin nunc. Cras malesuada vel nisi consequat pretium. Integer auctor elementum nulla suscipit in.</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
             </div>
           </div>
           <Footer/>
         </div>
    );
  }
}

const mapStateToProps = state => ({
  user:state.auth.user,
  loggedIn:state.auth.loggedIn
 });


export default connect(mapStateToProps,null)(Appointment);
