import React from 'react';
import * as R from 'ramda';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormField from '../common/components/FormField';

import SelectComponent from '../common/components/Select';
import { infoFields, techFields, paramFields } from './data';

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
          <div>
            {infoFields.map(field => {
              if (field.type === 'input') {
                return (
                  <FormField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    value={this.state[field.name]}
                    required={field.required}
                    handleEdit={this.onTextFieldChange}
                  />
                );
              }
              if (field.type === 'dropdown') {
                return (
                  <SelectComponent
                    label={field.label}
                    name={field.name}
                    value={this.state[field.name]}
                    menuItems={field.menuItems}
                    handleEdit={this.onTextFieldChange}
                  />
                );
              }
              if (field.type === 'button') {
                return <Button>{field.label}</Button>;
              }
            })}
          </div>
        );
      case 1:
        return params.map(field => {
          return (
            <FormField
              key={field.name}
              name={field.name}
              label={field.label}
              value={this.state[field.name]}
              required={field.required}
              handleEdit={this.onTextFieldChange}
            />
          );
        });
      case 2:
        return techFields.map(field => {
          if (field.type === 'input') {
            return (
              <FormField
                key={field.name}
                name={field.name}
                label={field.label}
                value={this.state[field.name]}
                required={field.required}
                handleEdit={this.onTextFieldChange}
              />
            );
          }
          if (field.type === 'dropdown') {
            return (
              <SelectComponent
                label={field.label}
                name={field.name}
                value={this.state[field.name]}
                menuItems={field.menuItems}
                handleEdit={this.onTextFieldChange}
              />
            );
          }
          if (field.type === 'button') {
            return <Button>{field.label}</Button>;
          }
        });

      default:
        return 'Unknown step';
    }
  }
  onTextFieldChange = (name, value) => {
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  isStepOptional = step => false; //step === 1;

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    console.log(this.state);
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
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

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

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
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
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
                {this.isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                  disabled={!this.state.application}
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

export default withStyles(styles)(ToolStepper);
