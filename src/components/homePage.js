"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function() {
        // JSX goes in here
        return(
            <div className="jumboTron">
                <h1>PluralSight Administration</h1>
                <p>
                    React, React Router, and Flux!
                </p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        )
    }
});

module.exports = Home;