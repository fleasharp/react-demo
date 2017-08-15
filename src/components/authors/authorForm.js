"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AuthorForm = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Manage Author</h1>
                <form>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" className="form-control" placeholder="First Name" ref="firstName" value=""/>
                    <br />
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" className="form-control" placeholder="First Name" ref="lastName" value=""/>
                    <br />
                    <br />
                    <input type="submit" value="Save" className="btn btn-default" />
                </form>
            </div>
        );
    }
});

module.exports = AuthorForm;