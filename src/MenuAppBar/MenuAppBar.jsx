import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Redirect } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import { select } from '../store';
import Tab from '@material-ui/core/Tab';
import { TabWrapper, ImageButton } from './Menu.style';
import { wm, logoPgSmall } from '../assets/index';
import { wmWebsite, pgWebsite } from '../utils/data';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
  };
  componentDidUpdate = prevProps => {
    console.log(prevProps);
    console.log(this.props);
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  redirectTo = website => {
    window.location.assign(website, '_blank');
  };

  render() {
    const { classes, isAuthed, logoutUser } = this.props;
    console.log(isAuthed);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <ImageButton
              src={logoPgSmall}
              onClick={() => this.redirectTo(pgWebsite)}
            />
            <ImageButton src={wm} onClick={() => this.redirectTo(wmWebsite)} />

            <TabWrapper
              value={this.state.value}
              onChange={this.handleChange}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="secondary"
            >
              {isAuthed ? (
                <Fragment>
                  <Tab label="SUMMARY" />
                  <Tab label="TOOLS" />
                  <Tab label="ORDERS" />
                  <Tab label="CALCULATOR" />
                  <Tab label="ABOUT" />
                  <Tab label="LOG OUT" onClick={logoutUser} />
                </Fragment>
              ) : (
                <Fragment>
                  <Tab label="ABOUT" />
                  <Tab label="LOG IN" />
                </Fragment>
              )}
            </TabWrapper>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapState = state => ({
  isAuthed: select.authData.getAuthState(state),
});
const mapDispatch = dispatch => ({
  logoutUser: dispatch.authData.logoutUser,
});

export default withStyles(styles)(
  connect(
    mapState,
    mapDispatch,
  )(MenuAppBar),
);
