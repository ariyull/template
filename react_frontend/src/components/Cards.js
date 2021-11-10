import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid boxcontent">
                <div className = "row justify-content-center">
                        <h1> Cards </h1>
                        <div className="card card-standard-size">
                            <img className="card-img-top image-standard-size" src="/assets/images/carrot.png"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card card-standard-size">
                            <img className="card-img-top image-standard-size" src="/assets/images/carrot.png"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card card-standard-size">
                            <img className="card-img-top image-standard-size" src="/assets/images/carrot.png"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                </div>
            </div>
        )
        }
};

export default Cards

