import React from "react";
import {connect} from "react-redux";
import { Redirect,Link } from 'react-router-dom';
import style from "./style.css";
import About from "./commons/About";
import Experts from "./commons/Experts";
import RegisterForm from "./forms/RegisterForm";
import Header from "./commons/Header";
import Footer from "./commons/Footer";

// import backgroundImage3 from "../../../public/media/headerImage3.jpg";
// Home page component
class Home extends React.Component {

  renderBanner(){
    if(this.props.auth.loggedIn){
      return(
        <div className="container fadeInDown">
        <div className="jumbotron text-dark">
          <h1 className="display-4">Get Started</h1>
          <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!</p>
          <hr className="my-4"/>
          <div className="lead">
            <Link to="/appointment"><div className="btn btn-primary btn-lg">Make an appointment</div></Link>
          </div>
          </div>
        </div>
      )
    }else{
      return(
        <div className="row">
          <div className="col-lg-8 d-none d-lg-block fadeInDown">
            <h1 className="display-4">Better
              <strong> Health</strong> Better
              <strong> Life</strong>
            </h1>
            <div className="d-flex">
              <div className="p-4 align-self-start">
                <i className="fas fa-check fa-2x"></i>
              </div>
              <div className="p-4 align-self-end">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!
              </div>
            </div>

            <div className="d-flex">
              <div className="p-4 align-self-start">
                <i className="fas fa-check fa-2x"></i>
              </div>
              <div className="p-4 align-self-end">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!
              </div>
            </div>

            <div className="d-flex">
              <div className="p-4 align-self-start">
                <i className="fas fa-check fa-2x"></i>
              </div>
              <div className="p-4 align-self-end">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!
              </div>
            </div>
          </div>

          <div className="col-lg-4 fadeIn">
            <div className="card bg-primary text-center card-form">
              <div className="card-body">
                <h3>Sign Up Today</h3>
                <p>Please fill out this form to register</p>
                <RegisterForm/>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  // render
  render() {
    if(this.props.auth.user.role){
      return <Redirect to='/admin' />
    }
    var backgroundImage3 = "https://www.hospitalityinhealthcare.com/wp-content/uploads/2017/03/1-WELCOME-IMAGE_medical-personnel-consult.jpg";
    return (
      <div>
        <Header history={this.props.history}/>
        <header id="home-section" style = {{ "backgroundImage": `url(${backgroundImage3})`}}>
            <div className="dark-overlay">
              <div className="home-inner container">
                {this.renderBanner()}
              </div>
            </div>
          </header>
          <Experts/>
          <About/>
          <Footer/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  auth:state.auth
 });

export default connect(mapStateToProps,null)(Home);
