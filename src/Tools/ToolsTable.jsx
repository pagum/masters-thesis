import React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconWrapper, SmallerTableCell, PaperWrapper } from './Tools.style';
import { header } from './data';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';

class ToolsTable extends React.Component {
  state = { toOrder: [] };
  addToOrder = event => {
    const { toOrder } = this.state;
    const id = Number(event.target.value);
    console.log(event.target.value);
    const newToOrder = this.isSelected(id)
      ? R.without([id], toOrder)
      : R.append(id, toOrder);

    console.log(this.isSelected(id));
    console.log(newToOrder);
    this.setState({ toOrder: newToOrder });
  };
  isSelected = id => this.state.toOrder.indexOf(id) !== -1;
  getSorting(order, orderBy) {
    return order === 'desc'
      ? (a, b) => this.desc(a, b, orderBy)
      : (a, b) => this.desc(a, b, orderBy);
  }
  desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  render() {
    const { tools } = this.props;
    console.log(this.state.toOrder);
    return (
      <PaperWrapper>
        <Table>
          <TableHead>
            <TableRow>
              {header.map(title => (
                <SmallerTableCell align="right" sortDirection={false}>
                  {title}
                </SmallerTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tools &&
              tools.map(row => (
                <TableRow key={row.id}>
                  <SmallerTableCell component="th" scope="row">
                    <IconWrapper>
                      <DeleteIcon />
                      <EditIcon />
                    </IconWrapper>
                  </SmallerTableCell>
                  <SmallerTableCell component="th" scope="row">
                    {row.name}
                  </SmallerTableCell>
                  <SmallerTableCell align="right">
                    {row.application}
                  </SmallerTableCell>
                  <SmallerTableCell align="right">
                    {row.producent}
                  </SmallerTableCell>
                  <SmallerTableCell align="right">{row.code}</SmallerTableCell>
                  <SmallerTableCell align="right">
                    {row.location}
                  </SmallerTableCell>
                  <SmallerTableCell align="right">{row.units}</SmallerTableCell>
                  <SmallerTableCell align="right">{row.notes}</SmallerTableCell>
                  <SmallerTableCell padding="checkbox">
                    <Checkbox value={row.id} onClick={this.addToOrder} />
                  </SmallerTableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </PaperWrapper>
    );
  }
}
export default ToolsTable;
