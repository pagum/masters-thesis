import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class SelectComponent extends React.Component {
  state = {};
  handleChange = (event, name) => {
    this.setState({ [name]: event.target.value });
  };
  componentDidMount() {
    const { value, name } = this.props;
    value && this.setState({ [name]: value });
  }
  render() {
    const { label, menuItems, handleEdit, name, value } = this.props;

    return (
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Select
          value={this.state[name]}
          label={label}
          renderValue={() => `${this.state[name]}`}
          onChange={e => (
            handleEdit(name, e.target.value), this.handleChange(e, name)
          )}
        >
          {menuItems.map(menuItem => (
            <MenuItem value={menuItem}>{menuItem}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default SelectComponent;
