import styled from 'styled-components';
import { Paper, Button } from '@material-ui/core';

const InfoPaper = styled(Paper)`
  padding: 10px;
  text-align: center;
`;

const CostWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SubmitOrderButton = styled(Button)`
  align-self: center;
  width: 20%;
  min-width: 50px;
  margin: 10px !important;
`;
export { InfoPaper, CostWrapper, SubmitOrderButton };
