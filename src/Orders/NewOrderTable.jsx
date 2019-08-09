import React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SelectComponent from '../common/components/Select';
import DeleteIcon from '@material-ui/icons/Delete';

import IconButton from '@material-ui/core/IconButton';
import NewOrderSummary from './NewOrderSummary';
import { Typography } from '@material-ui/core';
import {
  PaperWrapper,
  OrderTypography,
  NoItemMessageWrapper,
} from './Orders.style';

const menuItems = ['1', '2', '3', '4', ' 5', '6', '7', '8', '9', '10'];

class NewOrderTable extends React.Component {
  state = { newOrderList: [] };
  componentDidMount = async () => {
    if (sessionStorage.getItem('newOrder')) {
      const newOrderList = JSON.parse(sessionStorage.getItem('newOrder')).map(
        async tool => await this.props.fetchToolById(tool),
      );
      Promise.all(newOrderList).then(values =>
        this.setState({ newOrderList: values.map(value => value.info) }),
      );
    } else {
      this.setState({ newOrderList: [] });
    }
  };
  onTextFieldChange = (name, value) => {
    // this.state.newOrderList.map(tool =>
    //   tool.name === name ? { ...tool, amount: value } : tool,
    // );
    this.setState({
      [name]: value,
      newOrderList: this.state.newOrderList.map(tool =>
        tool.name === name ? { ...tool, amount: value } : tool,
      ),
    });
  };
  deleteSelectedTool = name => {
    const newList = this.state.newOrderList.filter(tool => tool.name !== name);
    sessionStorage.setItem('newOrder', newList);
    this.setState({
      newOrderList: newList,
    });
  };
  render() {
    const { newOrderList } = this.state;
    const { createOrder } = this.props;
    return (
      <PaperWrapper>
        <OrderTypography variant="h6">New order</OrderTypography>
        {newOrderList.length === 0 ? (
          <NoItemMessageWrapper>No items added</NoItemMessageWrapper>
        ) : (
          <>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell />

                  <TableCell>Tool</TableCell>
                  <TableCell align="right">Application</TableCell>
                  <TableCell align="right">Producent</TableCell>
                  <TableCell align="right">Price per item</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {newOrderList.map(tool => (
                  <TableRow key={tool.name}>
                    <TableCell align="right">
                      {' '}
                      <IconButton
                        value={tool.name}
                        onClick={e => this.deleteSelectedTool(tool.name)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>

                    <TableCell align="right">{tool.name}</TableCell>
                    <TableCell component="th" scope="row">
                      {tool.application}
                    </TableCell>
                    <TableCell align="right">{tool.producent}</TableCell>
                    <TableCell align="right">{tool.price}</TableCell>
                    <TableCell align="right">
                      <SelectComponent
                        label={''}
                        value={this.state[tool.name]}
                        name={tool.name}
                        menuItems={menuItems}
                        handleEdit={this.onTextFieldChange}
                        required={false}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>{' '}
            <NewOrderSummary
              newOrderList={newOrderList}
              createOrder={createOrder}
            />
          </>
        )}
      </PaperWrapper>
    );
  }
}
const mapDispatch = dispatch => ({
  fetchToolById: dispatch.toolsModel.fetchToolById,
  createOrder: dispatch.orderModel.createOrder,
});
export default connect(
  null,
  mapDispatch,
)(NewOrderTable);
