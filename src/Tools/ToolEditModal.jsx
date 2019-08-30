import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { DialogWrapper, BlueTypography, GridContent } from './Tools.style';
import SelectComponent from '../common/components/Select';
import FormField from '../common/components/FormField';
import { fieldsToChange } from './data';
import { Button } from '@material-ui/core';

const CentredBox = styled.div`
display:flex
justify-content:center
`;
export class ToolEditModal extends React.Component {
  state = {};

  handleClose() {
    this.props.onClose();
  }
  handleSubmit = () => {
    const { tool } = this.props;
    const updatedParams = {
      'info.location': this.state.location || tool[0].info.location,
      'info.units': this.state.units || tool[0].info.units,
      'technicalConditions.condition':
        this.state.condition || tool[0].technicalConditions.condition,
      'technicalConditions.timeOfBeingUsed':
        this.state.timeOfBeingUsed ||
        tool[0].technicalConditions.timeOfBeingUsed,
      'technicalConditions.overhaul':
        this.state.overhaul || tool[0].technicalConditions.overhaul,
    };
    this.props.updateTool({
      toolId: tool[0]._id,
      updatedParams,
    });
  };

  onTextFieldChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { onClose, selectedValue, tool, ...other } = this.props;

    return (
      <Dialog
        onClose={onClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogWrapper>
          <Typography variant="h4">Tool {tool[0].info.name}</Typography>
          <BlueTypography variant="h5">Change information</BlueTypography>

          {fieldsToChange.map(field => {
            if (field.type === 'input') {
              return (
                <GridContent>
                  <FormField
                    type={field.dataType}
                    key={field.name}
                    name={field.name}
                    value={this.state[field.name]}
                    label={field.label}
                    required={field.required}
                    handleEdit={this.onTextFieldChange}
                  />
                </GridContent>
              );
            }
            if (field.type === 'dropdown') {
              return (
                <GridContent>
                  <SelectComponent
                    width="94%"
                    label={field.label}
                    name={field.name}
                    value={this.state[field.name]}
                    menuItems={field.menuItems}
                    handleEdit={this.onTextFieldChange}
                    required={field.required}
                  />
                </GridContent>
              );
            }
          })}
          <CentredBox>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </CentredBox>
        </DialogWrapper>
      </Dialog>
    );
  }
}
const mapDispatch = dispatch => ({
  updateTool: dispatch.toolsModel.updateTool,
});

export default connect(
  null,
  mapDispatch,
)(ToolEditModal);
