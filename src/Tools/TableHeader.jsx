import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { SmallerTableCell } from './Tools.style';

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy, header } = this.props;
    console.log(orderBy);
    return (
      <TableHead>
        <TableRow>
          {header.map(
            row => (
              <SmallerTableCell
                key={row.id}
                sortDirection={orderBy === row.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={this.createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </SmallerTableCell>
            ),
            this,
          )}
          <SmallerTableCell>To order</SmallerTableCell>
        </TableRow>
      </TableHead>
    );
  }
}

export default EnhancedTableHead;
