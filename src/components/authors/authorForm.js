"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    
    render: function(){
        return (
            <div>
                <h1>Manage Author</h1>
                <form>
                    <Input 
                        name="firstName"
                        label="First Name"
                        value={this.props.author.firstName}
                        onChange={this.props.onChange}
                        error={this.props.errors.firstName} />
                    <br />
                     <Input 
                        name="lastName"
                        label="Last Name"
                        value={this.props.author.lastName}
                        onChange={this.props.onChange}
                        error={this.props.errors.lastName} />
                    <br />
                    <Input 
                        name="company"
                        label="Company"
                        value={this.props.author.company}
                        onChange={this.props.onChange}
                        error={this.props.errors.company} />
                    <br />
                    <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
                </form>
            </div>
        );
    }
});

module.exports = AuthorForm;