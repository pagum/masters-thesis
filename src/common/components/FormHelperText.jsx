import React from 'react';
import { ErrorWrapper } from './FormHelperText.style';

const FormHelperText = ({ error }) => {
  return <ErrorWrapper>{error || ' '} </ErrorWrapper>;
};

export default FormHelperText;
