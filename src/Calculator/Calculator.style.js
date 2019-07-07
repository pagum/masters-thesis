import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

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
  width: calc(100% / 6) !important;
`;
const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CentredTypography = styled(Typography)`
  align-self: center;
`;
const DropdownList = styled(FormControl)`
  width: calc(100% / 5) !important;
`;

export {
  FormWrapper,
  InputField,
  CalculatorWrapper,
  DropdownList,
  CentredTypography,
  InputsWrapper,
};
