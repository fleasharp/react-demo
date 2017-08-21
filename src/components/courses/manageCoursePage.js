"use strict";

var React = require('react');
var CourseForm = require('./courseForm');
var Router = require('react-router');
var CourseActions = require('../../actions/courseAction');
var CourseStore = require('../../stores/courseStore');
var toastr = require('toastr');

var ManageCoursePage = React.createClass({
    
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component){
            if (component.state.dirty && !confirm('Leave without saving?')){
                transition.abort();
            }
        }
    },

    getInitialState: function() {
        return {
            course: { id: '', title: '', watchHref:''},
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function(){
        var courseId = this.props.params.id;

        if (courseId) {
            this.setState({course: CourseStore.getCourseById(courseId)});
        }
    },

    setCourseState: function(event){
        this.setState({dirty: true});
        
        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;

        console.log(this.state.course);
        return this.setState({course: this.state.course});
    },

    courseFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {}; // clear previous errors

        if (this.state.course.title.length < 2) {
            this.state.errors.title = "Title must be at least 2 characters.";
            formIsValid = false;
        }

         if (this.state.course.lastName.length < 2) {
            this.state.errors.lastName = "Title must be at least 2 characters.";
            formIsValid = false;
        }

        if (this.state.course.watchHref == ""){
            this.state.errors.watchHref = "watchHref is required."
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },
    
    saveCourse: function(event) {
        event.preventDefault();

        if (!this.courseFormIsValid()){
            return;
        }

        if (this.state.course.id){
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }

        this.setState({dirty: false});
        toastr.success('Course Saved');
        this.transitionTo('courses');
    },

    render: function(){
        return(
            <div>
                <CourseForm course={this.state.course}
                onChange={this.setCourseState}
                onSave={this.saveCourse}
                errors={this.state.errors} />
            </div>
        );
    }
});

module.exports = ManageCoursePage;