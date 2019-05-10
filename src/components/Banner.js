import React from "react";

export default class Expert extends React.Component {
  // render
  render() {
    var backgroundImage3 = "https://www.hospitalityinhealthcare.com/wp-content/uploads/2017/03/1-WELCOME-IMAGE_medical-personnel-consult.jpg";
    return (
      <header id="banner-section" style = {{ "backgroundImage": `url(${backgroundImage3})`}}>
          <div className="dark-overlay">
              <div className="jumbotron text-dark text-center mb-50" id="banner-jum">
                <h1 className="display-6">
                  Home / Account / {this.props.section}
                </h1>
                <hr className="my-2"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
          </div>
        </header>

    );
  }
}
