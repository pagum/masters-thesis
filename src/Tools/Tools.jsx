import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { data } from './data';

const ToolsTable = () => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          {data.header.map(title => (
            <TableCell align="right">{title}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.content.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.application}</TableCell>
            <TableCell align="right">{row.producent}</TableCell>
            <TableCell align="right">{row.code}</TableCell>
            <TableCell align="right">{row.location}</TableCell>
            <TableCell align="right">{row.units}</TableCell>
            <TableCell align="right">{row.notes}</TableCell>
            <TableCell align="right" />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);
export default ToolsTable;
