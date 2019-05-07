import React from "react";
import "../stylesheets/main.scss";
import Header from "./Header";
import Footer from "./Footer";
// app component
export default class App extends React.Component {
  // render
  render() {
    if(this.props.children.props.route.path == "/login"){
      return(
        <div>
            {this.props.children}
        </div>
      )
    }
    return (
      <div>
        <Header/>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}
