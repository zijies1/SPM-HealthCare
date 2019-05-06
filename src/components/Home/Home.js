import React from "react";
import style from "./style.css";
// import Header from "../Header/Header";
// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <header id="home-section">
          <div className="dark-overlay">
            <div className="home-inner container">
              <div className="row">
                <div className="col-lg-8 d-none d-lg-block">
                  <h1 className="display-4">Build
                    <strong>social profiles</strong> and gain revenue
                    <strong>profits</strong>
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
                      <form>
                        <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="Username"/>
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control form-control-lg" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-lg" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-lg" placeholder="Confirm Password"/>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-outline-light btn-block"/>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
