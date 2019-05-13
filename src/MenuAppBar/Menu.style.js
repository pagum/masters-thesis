import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';

export const TabWrapper = styled(Tabs)`
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: center;
`;
export const ImageButton = styled.img`
  border: none;
  padding: 0 10px;
  &:focus {
    outline: 0;
  }
`;
