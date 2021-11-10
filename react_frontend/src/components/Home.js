import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid boxcontent"> 
                <div className="row">
                    <h1>Home component </h1>
                    <p>Start with the following installations: </p>
                    <p>npx create-react-app my-app </p>
                    <p>npm install: bootstrap, bootstrap-social, reactstrap, font-awesome</p>
                    <p>copy head of index.js from this folder</p> 
                    <p>create a new folder in src called components and copy Main.js </p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="https://reactstrap.github.io/?path=/docs/components-accordion--accordion">
                                <p>link to reactstrap components</p>
                            </a>
                        </div>
                        <div className="col">
                            <a href="https://reactjs.org/docs/state-and-lifecycle.html">
                                <p>link to react main concepts</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
};

export default Home

