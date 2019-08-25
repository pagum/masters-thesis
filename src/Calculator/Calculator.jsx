import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { select } from '../store';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import wzor from '../assets/wzor.png';

import {
  FormWrapper,
  InputField,
  DropdownList,
  CalculatorWrapper,
  CentredTypography,
  InputsWrapper,
  CountButton,
  FormulaImg,
  FormulaWrapper,
} from './Calculator.style';
import { round } from './helper';

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
    selectedTool: null,
  };
  handleChange = name => event => {
    console.log(name, event);
    this.setState({
      [name]: event.target.value,
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
    const summaryMachiningTime =
      Number(mainMachiningTime) + Number(helperMachiningTime);

    const firstPart = (summaryMachiningTime * machineHour) / 60;

    const secondPart = (mainMachiningTime * cost) / serviceLife;

    const costOfUsingTool = firstPart + secondPart;
    const roundedValue = round(costOfUsingTool, 2);
    this.setState({ costOfUsingTool: roundedValue });
  };
  render() {
    const { tools } = this.props;
    const { costOfUsingTool, selectedTool } = this.state;
    const {
      mainMachiningTime,
      helperMachiningTime,
      machineHour,
      serviceLife,
      cost,
    } = this.state;
    const isButtonDisabled = !(
      mainMachiningTime &&
      helperMachiningTime &&
      machineHour &&
      serviceLife &&
      cost
    );
    return (
      <>
        <CalculatorWrapper>
          <CentredTypography variant="h5" id="tableTitle">
            Cost of using a tool
          </CentredTypography>

          <FormWrapper noValidate autoComplete="off">
            <InputsWrapper>
              <DropdownList>
                {!this.state.selectedTool && <InputLabel>Tool</InputLabel>}
                <Select
                  value={this.state.selectedTool}
                  onChange={this.handleChange('selectedTool')}
                >
                  {tools.map(tool => (
                    <MenuItem value={tool} key={tool}>
                      {tool.name}
                    </MenuItem>
                  ))}
                </Select>
              </DropdownList>
              <InputField
                type="number"
                label="tM"
                value={this.state.mainMachiningTime}
                onChange={this.handleChange('mainMachiningTime')}
                margin="normal"
              />
              <InputField
                type="number"
                label="tpM"
                value={this.state.helperMachiningTime}
                onChange={this.handleChange('helperMachiningTime')}
                margin="normal"
              />
              <InputField
                type="number"
                label="T"
                value={this.state.serviceLife}
                onChange={this.handleChange('serviceLife')}
                margin="normal"
              />
              <InputField
                type="number"
                label="ko"
                value={this.state.machineHour}
                onChange={this.handleChange('machineHour')}
                margin="normal"
              />
              <InputField
                type="number"
                label="kn"
                value={this.state.cost}
                onChange={this.handleChange('cost')}
                margin="normal"
              />
            </InputsWrapper>
            <CountButton
              disabled={isButtonDisabled}
              variant="outlined"
              color="primary"
              onClick={e => this.countTheCost(e)}
            >
              Count
            </CountButton>
          </FormWrapper>
          {costOfUsingTool && (
            <div>
              <p>Cost of using this tool is {costOfUsingTool} zł</p>
              {selectedTool && (
                <>
                  <p>{selectedTool.units} of this tool are in stock</p>
                  <p>The price of the tool is {selectedTool.price} zł</p>
                </>
              )}
            </div>
          )}
        </CalculatorWrapper>

        <CalculatorWrapper>
          <div>
            The cost of using the tool is calculated on the basis of the formula
            from the publication "Designing strategies for milling complex
            pockets in mechanical components" (T. Bocheński, M. Deja, M.
            Siemiątkowski, Mechanik, 2016).
            <br />
            <FormulaWrapper>
              <FormulaImg src={wzor} alt="Cost of using tool formula" />
              <div>
                t<sub>M</sub> [min]-main machine time
                <br />t<sub>pM</sub> [min]-machine auxiliary time
                <br />T [min]- tool life
                <br />k<sub>o</sub> [zł/h]-hourly cost of using the machine
                <br />k<sub>n</sub> [zł]-sum of depreciation cost and tool
                change
              </div>
            </FormulaWrapper>
          </div>
        </CalculatorWrapper>
      </>
    );
  }
}
const mapState = state => ({
  tools: select.toolsModel.getToolsNamePrice(state),
});

export default connect(mapState)(Calculator);
