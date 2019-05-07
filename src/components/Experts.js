import React from "react";
import Expert from "./Expert";
import expert1 from "../../public/media/img/person1.jpg";
import expert2 from "../../public/media/img/person2.jpg";
import expert3 from "../../public/media/img/person3.jpg";
import expert4 from "../../public/media/img/person4.jpg";

export default class Experts extends React.Component {
  // render
  render() {
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
    return (
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
    );
  }
}
