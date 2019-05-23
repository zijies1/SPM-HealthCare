import React from "react";

export default class ABOUT extends React.Component {
  // render
  render() {
    return (
      <section id="about" className="py-5 text-center bg-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="info-header mb-5">
                <h1 className="text-secondary pb-3">
                  Why Choose Us?
                </h1>
                <p className="lead pb-3 text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus obcaecati alias rerum dolore fugiat debitis?
                </p>
              </div>

              <div id="accordion">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0 text-secondary">
                      <div href="#collapse1" data-toggle="collapse" data-parent="#accordion">
                        <i className="fas fa-arrow-circle-down"></i> 24/7 Hours Available
                      </div>
                    </h5>
                  </div>

                  <div id="collapse1" className="collapse show">
                    <div className="card-body text-secondary">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odit laborum qui, debitis, sequi dolores nobis mollitia
                      labore quasi earum laboriosam nihil cupiditate magnam iusto nostrum doloremque accusantium repudiandae
                      expedita autem et, repellendus suscipit consequatur! Alias, maiores amet sunt ab inventore illo, deleniti
                      facilis consequatur tenetur nam pariatur fuga nisi!
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header text-secondary">
                    <h5 className="mb-0">
                      <div href="#collapse2" data-toggle="collapse" data-parent="#accordion">
                        <i className="fas fa-arrow-circle-down"></i> Experienced Staff Available
                      </div>
                    </h5>
                  </div>

                  <div id="collapse2" className="collapse">
                    <div className="card-body text-secondary">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odit laborum qui, debitis, sequi dolores nobis mollitia
                      labore quasi earum laboriosam nihil cupiditate magnam iusto nostrum doloremque accusantium repudiandae
                      expedita autem et, repellendus suscipit consequatur! Alias, maiores amet sunt ab inventore illo, deleniti
                      facilis consequatur tenetur nam pariatur fuga nisi!
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header text-secondary">
                    <h5 className="mb-0">
                      <div href="#collapse3" data-toggle="collapse" data-parent="#accordion">
                        <i className="fas fa-arrow-circle-down"></i> Low Price & Fees
                      </div>
                    </h5>
                  </div>

                  <div id="collapse3" className="collapse">
                    <div className="card-body text-secondary">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odit laborum qui, debitis, sequi dolores nobis mollitia
                      labore quasi earum laboriosam nihil cupiditate magnam iusto nostrum doloremque accusantium repudiandae
                      expedita autem et, repellendus suscipit consequatur! Alias, maiores amet sunt ab inventore illo, deleniti
                      facilis consequatur tenetur nam pariatur fuga nisi!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
