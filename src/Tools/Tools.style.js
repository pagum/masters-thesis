import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

export const PaperWrapper = styled(Paper)`
  width: 98% !important;
  margin: 10px auto !important;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

export const ToolsMenuWrapper = styled.div`
  padding: 10px;
  display: flex;
`;

export const StyledButton = styled(Button)`
  border-radius: 0;
`;

export const SmallerTableCell = styled(TableCell)`
  text-align: center !important;
  padding: 4px !important;
`;

export const FormGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const GridContent = styled.div`
  justify-content: center;
  display: flex;
`;
