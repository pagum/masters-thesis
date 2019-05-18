import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
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
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleChange = value => {
    console.log(value);

    this.props.history.push(`/${value}`);
    console.log(this.props.history);
  };

  goTo = website => {
    window.location.assign(website, '_blank');
  };
  logout = () => {
    this.props.logoutUser();
  };

  render() {
    const { classes, isAuthed, logoutUser } = this.props;
    const authedMenu = ['summary', 'tools', 'orders', 'calculator', 'about'];
    const nonAuthedMenu = ['about'];
    const menuButtons = isAuthed ? authedMenu : nonAuthedMenu;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <ImageButton
              src={logoPgSmall}
              onClick={() => this.goTo(pgWebsite)}
            />
            <ImageButton src={wm} onClick={() => this.goTo(wmWebsite)} />
            <Fragment>
              {menuButtons.map(button => (
                <Button
                  value={button}
                  key={button}
                  onClick={() => this.handleChange(button)}
                >
                  {button.toUpperCase()}
                </Button>
              ))}
              {isAuthed ? (
                <Button
                  value={'logout'}
                  key={'logout'}
                  onClick={e => this.logout(e)}
                >
                  LOG OUT
                </Button>
              ) : (
                <Button
                  value={'login'}
                  key={'login'}
                  onClick={() => this.handleChange('')}
                >
                  LOG IN
                </Button>
              )}
            </Fragment>
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

export default withRouter(
  withStyles(styles)(
    connect(
      mapState,
      mapDispatch,
    )(MenuAppBar),
  ),
);
