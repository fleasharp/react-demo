"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseAction = require('../../actions/courseAction');
var toastr = require('toastr');

var CourseList = React.createClass({
    
    propTypes: {
        courses: React.PropTypes.array.isRequired
    },

    deleteCourse: function(id, event) {
        event.preventDefault();
        CourseAction.deleteCourse(id);
        toastr.success('Course Deleted');
    },

    render: function(){
        
        var createCourseRow = function(course){
            return (
                <tr key={course.id}>
                    <td><a href="#" onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td>
                    <td><Link to="manageCourse" params={{id: course.id}}>{course.id}</Link></td>
                    <td>{course.title}</td>
                    <td>{course.watchHref}</td>
                </tr>
            )
        };
        
        return(
            <div>
                <table className="table">
                    <thead>
                        <th>Action</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Watch Href</th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = CourseList;