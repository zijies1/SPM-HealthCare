import React from "react";
import style from "./style.css";
import About from "../About";
import Experts from "../Experts";
import RegisterForm from "../RegisterForm";
import { connect } from 'react-redux';
import backgroundImage1 from "../../../public/media/headerImage1.jpg";
import backgroundImage2 from "../../../public/media/headerImage2.jpg";
import { onUpdateField } from "../../actions/index.js";


// import backgroundImage3 from "../../../public/media/headerImage3.jpg";
// Home page component
class Home extends React.Component {

  // render
  render() {
    var backgroundImage3 = "https://www.hospitalityinhealthcare.com/wp-content/uploads/2017/03/1-WELCOME-IMAGE_medical-personnel-consult.jpg";
    return (
      <div>
        <header id="home-section" style = {{ "backgroundImage": `url(${backgroundImage3})`}}>
            <div className="dark-overlay">
              <div className="home-inner container">
                <div className="row">
                  <div className="col-lg-8 d-none d-lg-block">
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

                  <div className="col-lg-4">
                    <div className="card bg-primary text-center card-form">
                      <div className="card-body">
                        <h3>Sign Up Today</h3>
                        <p>Please fill out this form to register</p>
                        <RegisterForm/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Experts/>
          <About/>

        </div>
    );
  }
}
const mapStateToProps = state => ({ firebase:state.auth});


export default connect(mapStateToProps,null)(Home);
