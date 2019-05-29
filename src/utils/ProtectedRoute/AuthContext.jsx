import React from 'react';
import { connect } from 'react-redux';
import { select } from '../../store';

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  render() {
    console.log(this.props.isAuth);
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.props.isAuth,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
const mapState = state => ({
  isAuth: select.authData.getAuthState(state),
});

export default connect(mapState)(AuthProvider);

const AuthConsumer = AuthContext.Consumer;

export { AuthConsumer };
