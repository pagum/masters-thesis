import React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { select } from '../store';
import NewOrderTable from './NewOrderTable';
import PreviousOrders from './PreviousOrders';
import { OrderWrapper } from './Orders.style';
import XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { prepareDataForExcel } from './helpers';

class EnhancedTable extends React.PureComponent {
  state = {
    orders: [],
    selected: [],
    orderBy: 'Name',
    page: 0,
    rowsPerPage: 5,
    isDialogOpen: false,
  };
  componentDidMount = async () => {
    console.log(this.props);
    const orders = await this.props.getAllOrders();
    orders && this.setState({ ...this.state, orders });
  };

  handleRequestSort = (event, property) => {
    const orderBy = event.target.textContent.toLowerCase();
    let order = 'desc';

    if (
      this.state.orderBy === event.target.textContent.toLowerCase() &&
      this.state.order === 'desc'
    ) {
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

    this.setState({ toOrder: newToOrder });
  };
  deleteSelectedTool = async toolId => {
    await this.props.deleteTool(toolId);
  };
  editSelectedTool = async toolId => {
    await this.props.fetchToolById(toolId);
  };

  toggleDialog = () => {
    const newDialogState = !this.state.isDialogOpen;
    this.setState({ isDialogOpen: newDialogState });
  };
  downloadOrder = async id => {
    const order = await this.props.getOrder(id);
    console.log(order);

    var wb = XLSX.utils.book_new();
    wb.Props = {
      Title: 'SheetJS Tutorial',
      Subject: 'Test',
      Author: 'Red Stapler',
      CreatedDate: new Date(),
    };
    const sheetName = `${order.date}`;
    wb.SheetNames.push(sheetName);
    var ws_data = prepareDataForExcel(order);
    console.log(ws_data);
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets[sheetName] = ws;
    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    function s2ab(s) {
      var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
      var view = new Uint8Array(buf); //create uint8array as viewer
      for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; //convert to octet
      return buf;
    }
    saveAs(
      new Blob([s2ab(wbout)], { type: 'application/octet-stream' }),
      `${order.date}.xlsx`,
    );
  };
  render() {
    const { newOrderList, deleteOrder, orders } = this.props;

    console.log(this.state);
    return (
      <OrderWrapper>
        <NewOrderTable newOrderList={newOrderList} />
        <PreviousOrders
          orders={orders || []}
          deleteOrder={deleteOrder}
          downloadOrder={this.downloadOrder}
        />
      </OrderWrapper>
    );
  }
}

const mapState = state => {
  console.log(select.orderModel.getPreviousOrders(state));
  return {
    newOrderList: select.orderModel.getNewOrderList(state),
    orders: select.orderModel.getPreviousOrders(state),
  };
};

const mapDispatch = dispatch => ({
  deleteTool: dispatch.toolsModel.deleteTool,
  fetchToolById: dispatch.toolsModel.fetchToolById,
  createToolList: dispatch.orderModel.createToolList,
  getAllOrders: dispatch.orderModel.getAllOrders,
  deleteOrder: dispatch.orderModel.deleteOrder,
  getOrder: dispatch.orderModel.getOrderById,
});
export default connect(
  mapState,
  mapDispatch,
)(EnhancedTable);
