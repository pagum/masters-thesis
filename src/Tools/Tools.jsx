import React from 'react';
import { connect } from 'react-redux';
import ToolsTable from './ToolsTable';
import ToolsMenu from './ToolsMenu';
import { select } from '../store';

class Tools extends React.Component {
  render() {
    const { tools } = this.props;
    return (
      <div>
        <div />
        <ToolsMenu />
        <ToolsTable tools={tools} />
      </div>
    );
  }
}
const mapState = state => ({
  tools: select.toolsModel.getToolsState(state),
});
export default connect(mapState)(Tools);
