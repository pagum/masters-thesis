import React, { Component, Fragment } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { history } from './history';
import { store } from './store';
import './App.css';
import LoginPage from './AuthModule/LoginPage';
import MenuAppBar from './MenuAppBar/MenuAppBar';
import AuthProvider from './utils/ProtectedRoute/AuthContext';
import Table from './Tools/Table';
import About from './About/About';
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
                  <Route path="/about" component={About} />
                  <Route path="/summary" component={About} />
                  <Route path="/tools" component={Table} />
                  <Route path="/orders" component={About} />
                  <Route path="/calculator" component={About} />
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
