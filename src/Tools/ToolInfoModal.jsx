import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import * as R from 'ramda';
import { DialogWrapper, BlueTypography } from './Tools.style';

function ToolInfoModal(props) {
  const { onClose, selectedValue, tool, ...other } = props;

  function handleClose() {
    onClose(selectedValue);
  }
  function prepareData(object) {
    const keyArray = R.keys(object);
    const valueArray = R.values(object);
    return R.zip(keyArray, valueArray);
  }
  function prepareParamsData(array) {
    return array.map(arr => [
      R.join(' ', arr.name.split(/(?=[A-Z])/)).toLowerCase(),
      R.isNil(arr.value) ? 'not set' : arr.value,
    ]);
  }
  const preparedInfoData = prepareData(tool[0].info);
  const preparedParamsData = prepareParamsData(tool[0].parameters);
  const preparedContidionData = prepareData(tool[0].technicalConditions);

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      {...other}
    >
      <DialogWrapper>
        <Typography variant="h4">Tool {tool[0].info.name}</Typography>
        <BlueTypography variant="h5">Main information</BlueTypography>
        {preparedInfoData.map(info => (
          <div>{`${info[0]}: ${info[1]} `}</div>
        ))}
        <BlueTypography variant="h5">Prameters</BlueTypography>
        {preparedParamsData.map(info => (
          <div>{`${info[0]}: ${info[1]} `}</div>
        ))}
        <BlueTypography variant="h5">Technical condition</BlueTypography>
        {preparedContidionData.map(info => (
          <div>{`${R.join(' ', info[0].split(/(?=[A-Z])/)).toLowerCase()}: ${
            info[1]
          } `}</div>
        ))}
      </DialogWrapper>
    </Dialog>
  );
}

export default ToolInfoModal;
