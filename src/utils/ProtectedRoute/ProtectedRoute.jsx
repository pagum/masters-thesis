import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';
import { select } from '../../store';
import { connect } from 'react-redux';

class ProtectedRoute extends Component {
  render() {
    const { component: Component, isAuthed, ...rest } = this.props;
    console.log(this.props.isAuthed);
    return (
      <Route
        render={props => {
          return props.isAuthed ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          );
        }}
        {...rest}
      />
    );
  }
}

const mapState = state => ({
  isAuthed: select.authData.getAuthState(state),
});

export default connect(mapState)(ProtectedRoute);
