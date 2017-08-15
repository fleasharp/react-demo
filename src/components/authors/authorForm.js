"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Manage Author</h1>
                <form>
                    <Input 
                        name="firstName"
                        label="First Name"
                        value={this.props.author.firstName}
                        onChange={this.props.onChange} />
                    <br />
                     <Input 
                        name="lastName"
                        label="Last Name"
                        value={this.props.author.lastName}
                        onChange={this.props.onChange} />
                    <br />
                    <br />
                    <input type="submit" value="Save" className="btn btn-default" />
                </form>
            </div>
        );
    }
});

module.exports = AuthorForm;