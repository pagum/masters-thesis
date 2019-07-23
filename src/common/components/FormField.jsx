import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { TextField } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class FormField extends React.Component {
  state = {};
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }
  render() {
    const { label, name, required, handleEdit, type, error } = this.props;

    return (
      <div>
        <FormControl required={required}>
          <InputLabel>{label}</InputLabel>
          <Input
            type={type || 'text'}
            onKeyUp={e => (
              console.log(name, e.target), handleEdit(name, e.target.value)
            )}
          />

          <FormHelperText error={error} />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(FormField);
