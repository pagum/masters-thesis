import React from "react";
import { connect } from "react-redux";

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.props.isAuth
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
const mapState = state => ({
  isAuth: state.authData.isAuth
});

export default connect(mapState)(AuthProvider);

const AuthConsumer = AuthContext.Consumer;

export { AuthConsumer };
