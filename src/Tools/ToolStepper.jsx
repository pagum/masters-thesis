import React from 'react';
import * as R from 'ramda';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormField from '../common/components/FormField';

import SelectComponent from '../common/components/Select';
import { infoFields, techFields, paramFields } from './data';
import { FormGridWrapper, GridContent } from './Tools.style';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class ToolStepper extends React.Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
    name: '',
    application: '',
  };
  getSteps() {
    return ['Information', 'Parameters', 'Technical condition'];
  }
  getStepContent(step) {
    const params =
      this.state.application &&
      paramFields.filter(fields => fields.type === this.state.application)[0]
        .params;
    switch (step) {
      case 0:
        return (
          <FormGridWrapper>
            {infoFields.map(field => {
              if (field.type === 'input') {
                return (
                  <GridContent>
                    <FormField
                      type={field.dataType}
                      key={field.name}
                      name={field.name}
                      label={field.label}
                      value={this.state[field.name]}
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
              if (field.type === 'button') {
                return (
                  <GridContent>
                    <Button>{field.label}</Button>
                  </GridContent>
                );
              }
            })}
          </FormGridWrapper>
        );
      case 1:
        return (
          <FormGridWrapper>
            {params.map(field => (
              <GridContent>
                <FormField
                  type={field.dataType}
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  value={this.state[field.name]}
                  required={field.required}
                  handleEdit={this.onTextFieldChange}
                />
              </GridContent>
            ))}
          </FormGridWrapper>
        );
      case 2:
        return (
          <FormGridWrapper>
            {techFields.map(field => {
              if (field.type === 'input') {
                return (
                  <GridContent>
                    <FormField
                      type={field.dataType}
                      key={field.name}
                      name={field.name}
                      label={field.label}
                      value={this.state[field.name]}
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
              if (field.type === 'button') {
                return (
                  <GridContent>
                    <Button>{field.label}</Button>
                  </GridContent>
                );
              }
            })}
          </FormGridWrapper>
        );

      default:
        return 'Unknown step';
    }
  }
  onTextFieldChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  isStepOptional = step => false; //step === 1;

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    console.log(this.state);
    console.log(infoFields);
    const step = this.getSteps();
    console.log(activeStep, step.length);
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };
  handleFinish = () => {
    console.log(this.state);
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
  handleSubmit = () => {
    console.log(this.state);
    const {
      activeAngle,
      application,
      bought,
      clearanceAngle,
      condition,
      countOfSegments,
      cuttingEdgeLife,
      holeDiameter,
      inscribedCircle,
      insertThickness,
      length,
      location,
      name,
      overhaul,
      price,
      producent,
      protectiveCounterink,
      radiusOfCuttingEdge,
      timeOfBeingUsed,
      units,
    } = this.state;
    const newTool = {
      technicalConditions: {
        condition,
        timeOfBeingUsed,
        bought,
        overhaul,
        price: Number(price),
      },
      info: {
        application,
        location,
        name,
        producent,
        units: Number(units),
      },
      type: { name: application },
      parameters: [],
    };
    console.log(this.state);
    this.props.saveTool(newTool);
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }
  isButtonDisbled = steps => {
    const {
      activeStep,
      application,
      name,
      price,
      condition,
      timeOfBeingUsed,
    } = this.state;
    if (activeStep === 0) {
      return !application || !name;
    }
    if (activeStep === steps.length - 1) {
      return !price || !condition || !timeOfBeingUsed;
    }
  };
  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;
    console.log(!this.state.application || !this.state.name);
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>

              <Button onClick={this.handleSubmit} className={classes.button}>
                Submit
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {this.getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                  disabled={this.isButtonDisbled(steps)}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  saveTool: dispatch.toolsModel.saveTool,
});

export default withStyles(styles)(
  connect(
    null,
    mapDispatch,
  )(ToolStepper),
);
