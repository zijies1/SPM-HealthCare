import React from "react";
import Expert from "./Expert";
import expert1 from "../../media/img/d1.jpeg";
import expert2 from "../../media/img/d2.jpeg";
import expert3 from "../../media/img/d3.jpeg";
import expert4 from "../../media/img/d4.jpeg";

export default class Experts extends React.Component {
  // render
  render() {
    var one = {
      name:"Robert Koch",
      position:"Podiatrist",
      img:expert1
    };
    var two = {
      name:"Henry Gray",
      position:"Naturopath",
      img:expert2
    };
    var three = {
      name:"John Doe",
      position:"Chiropractor",
      img:expert3
    };
    var four = {
      name:"Theodor Billroth",
      position:"Chiropractor",
      img:expert4
    };
    return (
      <section id="authors" className="py-5 text-center bg-light">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="info-header mb-5 text-secondary">
                  <h1 className=" pb-3">
                    Meet The Professionals
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
    );
  }
}
