import React, { Component, Fragment } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { history } from './history';
import { store } from './store';
import './App.css';
import LoginPage from './AuthModule/LoginPage';
import ProtectedRoute from './utils/ProtectedRoute/ProtectedRoute';
import MenuAppBar from './MenuAppBar/MenuAppBar';
import EnhancedTable from './Summary/Summary';
import AuthProvider from './utils/ProtectedRoute/AuthContext';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5e76a3',
    },
    secondary: {
      main: '#f44336',
    },
  },
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <AuthProvider>
            <Router history={history}>
              <Fragment>
                <MenuAppBar />
                <Switch>
                  <Route exact path="/" component={LoginPage} />
                  <ProtectedRoute path="/summary" component={EnhancedTable} />
                  <ProtectedRoute path="/tools" component={EnhancedTable} />
                </Switch>
              </Fragment>
            </Router>
          </AuthProvider>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
