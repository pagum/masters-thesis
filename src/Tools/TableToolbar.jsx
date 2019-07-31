import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';

import ToolForm from './ToolForm';

import { lighten } from '@material-ui/core/styles/colorManipulator';

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight: {
    color: theme.palette.primary.main,
    backgroundColor: lighten(theme.palette.primary.main, 0.85),
  },

  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.primary.main,
  },
  title: {
    flex: '0 0 auto',
  },
});

const EnhancedTableToolbar = props => {
  const { classes, selectedItems, createToolList } = props;
  console.log(props);
  const numSelected = selectedItems.length;
  const addToOrder = selectedItems => {
    createToolList(selectedItems);
    console.log(selectedItems);
  };
  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <>
            <Typography variant="h6" id="tableTitle">
              Tools
            </Typography>

            <ToolForm />
          </>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 && (
          <Tooltip title="Add to order">
            <IconButton
              aria-label="Order"
              onClick={() => (
                addToOrder(selectedItems), console.log('lllllllllll')
              )}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

export default withStyles(toolbarStyles)(EnhancedTableToolbar);
