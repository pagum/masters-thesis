import React from 'react';
import Button from '@material-ui/core/Button';
import FormtField from '../common/components/FormField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import { infoFields, techFields, paramFields } from './data';

export default class ToolForm extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          <AddIcon />
          Add
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Tool</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <Typography color="inherit" variant="subtitle1">
              Information
            </Typography>
            {infoFields.map(field => (
              <FormtField label={field.label} required={field.required} />
            ))}
            <Typography color="inherit" variant="subtitle1">
              Parameters
            </Typography>
            {paramFields.map(field => (
              <FormtField label={field.label} required={field.required} />
            ))}

            <Typography color="inherit" variant="subtitle1">
              Technical condition
            </Typography>
            {techFields.map(field => (
              <FormtField label={field.label} required={field.required} />
            ))}
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
