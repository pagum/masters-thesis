import React, { Component, Fragment } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { history } from './history';
import { store, dispatch } from './store';
import './App.css';
import LoginPage from './AuthModule/LoginPage';
import MenuAppBar from './MenuAppBar/MenuAppBar';
import AuthProvider from './utils/ProtectedRoute/AuthContext';
import Table from './Tools/Table';
import About from './About/About';
import Calculator from './Calculator/Calculator';
import Order from './Orders/Order';
import Summary from './Summary/Summary';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5e76a3',
    },
    secondary: {
      main: '#808080',
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
                  <Route path="/summary" component={Summary} />
                  <Route path="/tools" component={Table} />
                  <Route path="/orders" component={Order} />
                  <Route path="/calculator" component={Calculator} />
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
