import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import {
  FormWrapper,
  InputField,
  DropdownList,
  CalculatorWrapper,
  CentredTypography,
  InputsWrapper,
} from './Calculator.style';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class Calculator extends React.Component {
  state = {
    mainMachiningTime: null,
    helperMachiningTime: null,
    serviceLife: null,
    machineHour: null,
    cost: null,
  };

  handleChange = name => event => {
    this.setState({
      [name]: Number(event.target.value),
    });
  };
  countTheCost = e => {
    e.preventDefault();
    const {
      mainMachiningTime,
      helperMachiningTime,
      machineHour,
      serviceLife,
      cost,
    } = this.state;
    const summaryMachiningTime = mainMachiningTime + helperMachiningTime;
    const firstPart = (summaryMachiningTime * machineHour) / 60;
    const secondPart = (mainMachiningTime * cost) / serviceLife;

    const costOfUsingTool = firstPart + secondPart;
  };
  render() {
    const { classes } = this.props;
    return (
      <CalculatorWrapper>
        <CentredTypography variant="h5" id="tableTitle">
          Cost of using a tool
        </CentredTypography>

        <FormWrapper noValidate autoComplete="off">
          <InputsWrapper>
            <DropdownList className={classes.formControl}>
              <InputLabel>Tool</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                inputProps={{
                  name: 'age',
                  id: 'age-simple',
                }}
              >
                <MenuItem value="">
                  <em>Different</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </DropdownList>
            <InputField
              type="number"
              id="standard-name"
              label="Main machining time [h]"
              className={classes.textField}
              value={this.state.mainMachiningTime}
              onChange={this.handleChange('mainMachiningTime')}
              margin="normal"
            />
            <InputField
              type="number"
              id="standard-name"
              label="Helper machining time [h]"
              className={classes.textField}
              value={this.state.helperMachiningTime}
              onChange={this.handleChange('helperMachiningTime')}
              margin="normal"
            />
            <InputField
              type="number"
              id="standard-name"
              label="Tool service life [h]"
              className={classes.textField}
              value={this.state.serviceLife}
              onChange={this.handleChange('serviceLife')}
              margin="normal"
            />
            <InputField
              type="number"
              id="standard-name"
              label="Machine hour [h/zł]"
              className={classes.textField}
              value={this.state.machineHour}
              onChange={this.handleChange('machineHour')}
              margin="normal"
            />{' '}
            <InputField
              type="number"
              id="standard-name"
              label="
Depreciation cost [zł/h]"
              className={classes.textField}
              value={this.state.cost}
              onChange={this.handleChange('cost')}
              margin="normal"
            />
          </InputsWrapper>
          <Button onClick={e => this.countTheCost(e)}>Count</Button>
        </FormWrapper>
      </CalculatorWrapper>
    );
  }
}

export default withStyles(styles)(Calculator);
