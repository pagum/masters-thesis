import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const menuItems = ['1', '2', '3', '4', ' 5', '6', '7', '8', '9', '10'];
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
class NewOrderTable extends React.Component {
  state = { newOrderList: [] };
  componentDidMount = async () => {
    console.log(typeof sessionStorage.getItem('newOrder'));
    const newOrderList = JSON.parse(sessionStorage.getItem('newOrder')).map(
      async tool => await this.props.fetchToolById(tool),
    );
    Promise.all(newOrderList).then(values =>
      this.setState({ newOrderList: values }),
    );
  };
  onTextFieldChange = (name, value) => {
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };
  deleteSelectedTool = name => {
    const newList = this.state.newOrderList.filter(
      tool => tool.info.name !== name,
    );
    sessionStorage.setItem('newOrder', newList);
    this.setState({ newOrderList: newList });
  };
  render() {
    const { newOrderList } = this.state;
    console.log(this.state);
    return (
      <Paper>
        {newOrderList.length === 0 ? (
          <div>no items</div>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tool</TableCell>

                <TableCell>Tool</TableCell>
                <TableCell align="right">Application</TableCell>
                <TableCell align="right">Producent</TableCell>
                <TableCell align="right">Price per item</TableCell>
                <TableCell align="right">Units</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newOrderList.map(tool => (
                <TableRow key={tool.info.name}>
                  <TableCell align="right">
                    {' '}
                    <IconButton
                      value={tool.info.name}
                      onClick={e => this.deleteSelectedTool(tool.info.name)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell align="right">{tool.info.name}</TableCell>
                  <TableCell component="th" scope="row">
                    {tool.info.application}
                  </TableCell>
                  <TableCell align="right">{tool.info.producent}</TableCell>
                  <TableCell align="right">{tool.info.price}</TableCell>
                  <TableCell align="right">
                    <SelectComponent
                      label={''}
                      value={this.state[tool.info.name]}
                      name={tool.info.name}
                      menuItems={menuItems}
                      handleEdit={this.onTextFieldChange}
                      required={false}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Paper>
    );
  }
}
const mapDispatch = dispatch => ({
  fetchToolById: dispatch.toolsModel.fetchToolById,
});
export default connect(
  null,
  mapDispatch,
)(NewOrderTable);
