import React from 'react';

import * as R from 'ramda';
import { connect } from 'react-redux';
import { select } from '../store';
import NewOrderTable from './NewOrderTable';
import NewOrder from './NewOrder';

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    selected: [],
    orderBy: 'Name',
    page: 0,
    rowsPerPage: 5,
    isDialogOpen: false,
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
  render() {
    const { newOrderList } = this.props;
    console.log(newOrderList);
    return <NewOrder newOrderList={newOrderList} />;
  }
}

const mapState = state => ({
  newOrderList: select.orderModel.getNewOrderList(state),
});
const mapDispatch = dispatch => ({
  deleteTool: dispatch.toolsModel.deleteTool,
  fetchToolById: dispatch.toolsModel.fetchToolById,
  createToolList: dispatch.orderModel.createToolList,
});
export default connect(
  mapState,
  mapDispatch,
)(EnhancedTable);
