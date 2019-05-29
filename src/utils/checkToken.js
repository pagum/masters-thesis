import StorageService from '../utils/StorageService';
import { push } from 'react-router-redux';
import jwt from 'jsonwebtoken';
import moment from 'moment';

import { dispatch } from '../store';

const checkToken = async () => {
  const token = await StorageService.get('auth-token');
  console.log(token);
  token ? isTokenValid(token) : dispatch(push('/'));
};
export default checkToken;

const isTokenValid = token => {
  const { payload } = jwt.decode(token, { complete: true });

  const expireDate = moment(new Date(payload.exp * 1000)).day();
  const todayDate = moment(new Date()).day();
  const difference = expireDate - todayDate >= 1;
  console.log(difference);
  // difference
  //   ?
  dispatch.authData.setIsAuth().then(() => dispatch(push('/summary')));
  // : dispatch(push('/'));
};
