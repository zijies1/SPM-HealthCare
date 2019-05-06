import React from "react";
import style from "./style.css";
import Header from "../Header";
import About from "../About";
import Footer from "../Footer";
import Expert from "../Expert";

import backgroundImage1 from "../../../public/media/headerImage1.jpg";
import backgroundImage2 from "../../../public/media/headerImage2.jpg";
import expert1 from "../../../public/media/img/person1.jpg";
import expert2 from "../../../public/media/img/person2.jpg";
import expert3 from "../../../public/media/img/person3.jpg";
import expert4 from "../../../public/media/img/person4.jpg";
// import backgroundImage3 from "../../../public/media/headerImage3.jpg";
// Home page component
export default class Home extends React.Component {
  // render
  render() {
    // var backgroundImage1 = "../../../public/media/headerImage1.jpg";
    // var backgroundImage2 = "../../../public/media/headerImage2.jpg";
    var one = {
      name:"Susan Williams",
      positio:"doctor",
      description:" This is expert1 ",
      img:expert1
    };
    var two = {
      name:"Susan Williams",
      positio:"doctor",
      description:" This is expert2 ",
      img:expert2
    };
    var three = {
      name:"John Doe",
      positio:"doctor",
      description:" This is expert3 ",
      img:expert3
    };
    var four = {
      name:"Kevin Swanson",
      positio:"doctor",
      description:" This is expert4 ",
      img:expert4
    };
    var backgroundImage3 = "https://www.hospitalityinhealthcare.com/wp-content/uploads/2017/03/1-WELCOME-IMAGE_medical-personnel-consult.jpg";
    return (
      <div>
        <Header/>
        <header id="home-section" style = {{ "backgroundImage": `url(${backgroundImage3})`}}>
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
                            <input type="email" className="form-control form-control-lg" placeholder="Email"/>
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control form-control-lg" placeholder="Password"/>
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control form-control-lg" placeholder="Confirm Password"/>
                          </div>
                          <input type="submit" value="Submit" className="btn btn-outline-light"/>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <About/>
          <section id="authors" className="py-5 text-center bg-light">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="info-header mb-5 text-secondary">
                      <h1 className=" pb-3">
                        Meet The Experts
                      </h1>
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum numquam aperiam dolores a porro!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-20">
                  <Expert expert= {one}/>
                  <Expert expert= {two}/>
                  <Expert expert= {three}/>
                  <Expert expert= {four}/>
                </div>
              </div>
            </section>


          <Footer/>
        </div>
    );
  }
}
