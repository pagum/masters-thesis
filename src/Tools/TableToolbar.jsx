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
import { TitleWrapper, ToolTitleTypography } from './Tools.style';

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
});

const EnhancedTableToolbar = props => {
  const { classes, selectedItems, createToolList } = props;
  const numSelected = selectedItems.length;
  const addToOrder = selectedItems => {
    createToolList(selectedItems);
  };
  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <TitleWrapper>
        <ToolTitleTypography variant="h6">Tools</ToolTitleTypography>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} items selected
          </Typography>
        ) : (
          <>
            <ToolForm />
          </>
        )}
      </TitleWrapper>

      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 && (
          <Tooltip title="Add to order">
            <IconButton
              aria-label="Order"
              onClick={() => addToOrder(selectedItems)}
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
