import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { Typography, DialogTitle } from '@material-ui/core';

export const PaperWrapper = styled(Paper)`
  width: 98% !important;
  margin: 10px auto !important;
`;
export const ToolsTypography = styled(Typography)`
  text-align: center;
  padding: 10px;
`;
export const NewToolDialogTitle = styled(DialogTitle)`
  text-align: center;
  padding: 10px;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ToolTitleTypography = styled(Typography)`
  align-self: flex-end;
  padding: 10px;
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
