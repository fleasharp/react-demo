"use strict";

var React = require('react');

var Faq = React.createClass({
    render: function(){
        return (
            <div>
                <h1>FAQ</h1>
                <p>
                    <h2>Is this technology better than Angular?</h2>
                    <h4>Yes I think it is</h4>
                </p>
            </div>
        );
    }
});

module.exports = Faq;