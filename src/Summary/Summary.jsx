import React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { select } from '../store';
import { header } from '../Tools/data';
import {
  lowUnitsTable,
  lowConditionTable,
  timeOfBeingUsedTable,
} from './helper';
import { PaperWrapper, OrderTypography } from '../Orders/Orders.style';

class Summary extends React.PureComponent {
  createTable = (heading, data, fn) => {
    R.tail(header);
    const tools = fn(data);
    return (
      tools.length > 0 && (
        <PaperWrapper>
          <OrderTypography variant="h6">{heading}</OrderTypography>
          <Table>
            <TableHead>
              <TableRow>
                {R.tail(header).map(title => (
                  <TableCell key={title.label}>{title.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tools.map(row => (
                <TableRow key={row.info.name}>
                  <TableCell component="th" scope="row">
                    {row.info.name}
                  </TableCell>
                  <TableCell>{row.info.application}</TableCell>
                  <TableCell>{row.info.producent}</TableCell>
                  <TableCell>{row.info.location}</TableCell>
                  <TableCell>{row.info.units}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </PaperWrapper>
      )
    );
  };

  render() {
    const { data } = this.props;
    return (
      <>
        {this.createTable('Low condition', data, lowConditionTable)}
        {this.createTable('Ending', data, lowUnitsTable)}
        {this.createTable('Most used', data, timeOfBeingUsedTable)}
      </>
    );
  }
}

const mapState = state => {
  return {
    data: select.toolsModel.getToolsState(state),
  };
};

export default connect(mapState)(Summary);
