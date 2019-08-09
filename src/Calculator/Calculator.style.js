import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { Paper, Button } from '@material-ui/core';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 98%;
  justify-content: space-evenly;
  align-items: baseline;
`;
const InputField = styled(TextField)`
  width: calc(80% / 6) !important;
`;
const CalculatorWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  margin: 10px 15px;
  padding: 40px 20px;
  display: flex;
`;
const CentredTypography = styled(Typography)`
  align-self: center;
`;
const DropdownList = styled(FormControl)`
  width: calc(80% / 6) !important;
`;
const CountButton = styled(Button)`
  min-width: 48px;
  width: 20%;
  margin: 20px auto !important;
`;
export {
  FormWrapper,
  InputField,
  CountButton,
  CalculatorWrapper,
  DropdownList,
  CentredTypography,
  InputsWrapper,
};
