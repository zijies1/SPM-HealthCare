import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// app component
export default class MainContainer extends React.Component {
  // render
  render() {
    return (
      <div>
        <Header/>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}
