import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false,
  };

  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert(`Loading courses failed ${error}`);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert(`Loading authors failed ${error}`);
      });
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to='/course' />}
        <h2>Courses</h2>
        <button
          style={{ marginBottom: 20 }}
          className='btn btn-primary add-course'
          onClick={() => this.setState({ redirectToAddCoursePage: true })}>
          Add Course
        </button>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

/*mapStateToProps takes 2 arguments:- state , ownProps
 - determines what state is passed to our component via props 
 - be specific, request only data the component needs, 
 - ownProps parameter lets us acces props that are being attached to this component */

/* mapDispatchToProps :-this lets us decide what actions we want to expose on our component.
 * */
