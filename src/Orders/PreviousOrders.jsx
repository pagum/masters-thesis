import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography, IconButton } from '@material-ui/core';
import {
  PaperWrapper,
  OrderTypography,
  TableWrapper,
  StyledTableCell,
} from './Orders.style';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

const PreviousOrders = ({ orders, downloadOrder, deleteOrder }) => {
  return (
    <PaperWrapper>
      <OrderTypography variant="h6">Previous orders</OrderTypography>
      <TableWrapper>
        <TableHead />
        <TableBody>
          {orders.map(order => (
            <TableRow key={order._id}>
              <TableCell component="th" scope="row">
                {order.date}
              </TableCell>
              <StyledTableCell component="th" scope="row">
                <IconButton
                  value={order._id}
                  onClick={e => downloadOrder(order._id)}
                >
                  <SaveIcon />
                </IconButton>
                <IconButton
                  value={order._id}
                  onClick={e => deleteOrder(order._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableWrapper>
    </PaperWrapper>
  );
};

export default PreviousOrders;
