import styled from 'styled-components';
import { Paper, Button, Typography, Table, TableCell } from '@material-ui/core';

const InfoPaper = styled(Paper)`
  padding: 10px;
  text-align: center;
  height: 80px;
  border-radius: 0 0 4px 4px !important;
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

const OrderTypography = styled(Typography)`
  text-align: center;
  padding: 10px;
`;
const OrderWrapper = styled.div`
  width: 98% !important;
  margin: 10px auto !important;
`;
const NoItemMessageWrapper = styled.div`
  padding: 20px !important;
  text-align: center;
  color: gray;
`;
const PaperWrapper = styled(Paper)`
  margin: 15px;
`;

const TableWrapper = styled(Table)`
  margin: 15px auto;
  width: 70% !important;
`;

const StyledTableCell = styled(TableCell)`
  justify-content: flex-end;
  display: flex !important;
`;
export {
  InfoPaper,
  CostWrapper,
  SubmitOrderButton,
  PaperWrapper,
  OrderWrapper,
  OrderTypography,
  StyledTableCell,
  NoItemMessageWrapper,
  TableWrapper,
};
