import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { ToolsMenuWrapper, StyledButton } from './Tools.style';

class ToolsMenu extends React.Component {
  render() {
    return (
      <ToolsMenuWrapper>
        <StyledButton variant="contained">
          <AddIcon /> Add
        </StyledButton>
      </ToolsMenuWrapper>
    );
  }
}

export default ToolsMenu;
