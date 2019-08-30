import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Paper } from '@material-ui/core';

export const AboutContainer = styled(Paper)`
  padding: 10px 20px;

  width: 40%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  align-content: stretch;
  flex-direction: column;
  z-index: 2;
  background-color: white;
`;
