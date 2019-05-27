import React from 'react';

import * as R from 'ramda';
import { connect } from 'react-redux';
import { select } from '../store';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import EnhancedTableHead from './TableHeader';
import EnhancedTableToolbar from './TableToolbar';
import { header } from './data';
import { IconWrapper, SmallerTableCell, PaperWrapper } from './Tools.style';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: '',
    selected: [],

    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;
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
  render() {
    const { data } = this.props;
    const { order, orderBy, selected, rowsPerPage, page } = this.state;
    console.log(data);
    return (
      <PaperWrapper>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead
              header={header}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  const isSelected = this.isSelected(row.id);
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isSelected}
                    >
                      <SmallerTableCell>
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
                      <SmallerTableCell align="right">
                        {row.code}
                      </SmallerTableCell>
                      <SmallerTableCell align="right">
                        {row.location}
                      </SmallerTableCell>
                      <SmallerTableCell align="right">
                        {row.units}
                      </SmallerTableCell>
                      <SmallerTableCell align="right">
                        {row.notes}
                      </SmallerTableCell>
                      <SmallerTableCell padding="checkbox">
                        <Checkbox
                          value={row.id}
                          onClick={event => (
                            this.handleClick(event, row.id), this.addToOrder
                          )}
                        />
                      </SmallerTableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </PaperWrapper>
    );
  }
}

const mapState = state => ({
  data: select.toolsModel.getToolsState(state),
});
export default connect(mapState)(EnhancedTable);
