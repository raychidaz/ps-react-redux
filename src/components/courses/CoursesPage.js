import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as courseActions from '../../redux/actions/courseActions';

class CoursesPage extends React.Component {
  render() {
    return (
      <>
        <h2>Courses</h2>
      </>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

/*mapStateToProps takes 2 arguments:- state , ownProps
 - determines what state is passed to our component via props 
 - be specific, request only data the component needs, 
 - ownProps parameter lets us acces props that are being attached to this component */

/* mapDispatchToProps :-this lets us decide what actions we want to expose on our component.
 * */
