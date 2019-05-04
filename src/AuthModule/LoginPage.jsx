import React from "react";
import { connect } from "react-redux";
// import { AuthConsumer } from "../utils/ProtectedRoute/AuthContext";

import { LoginPageWrapper, LoginContainer } from "./Login.style";

import Typography from "@material-ui/core/Typography";
import LoginForm from "./LoginForm";

const LoginPage = ({ postAuthData, setIsAuth }) => {
  return (
    //   <AuthConsumer>
    //     {({ login }) => (
    <LoginPageWrapper>
      <LoginContainer>
        <Typography variant="h2">Login</Typography>

        <LoginForm postAuthData={postAuthData} setIsAuth={setIsAuth} />
      </LoginContainer>
    </LoginPageWrapper>
    //   )}
    // </AuthConsumer>
  );
};
const mapState = state => ({
  authData: state.authData
});

const mapDispatch = dispatch => ({
  postAuthData: dispatch.authData.postAuthData,
  setIsAuth: dispatch.authData.setIsAuth
});

export default connect(
  mapState,
  mapDispatch
)(LoginPage);
