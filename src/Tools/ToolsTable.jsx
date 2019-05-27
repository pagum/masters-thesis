import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import { IconWrapper } from './Tools.style';
import { data } from './data';
import { select } from '../store';

class ToolsTable extends React.Component {
  render() {
    const { tools } = this.props;
    console.log(tools);
    return (
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
            {tools &&
              tools.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <IconWrapper>
                      {' '}
                      <DeleteIcon />
                      <EditIcon />
                    </IconWrapper>
                  </TableCell>
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
  }
}
// const mapState = state => ({
//   tools: select.toolsModel.getToolsState(state),
// });
export default ToolsTable;
