import { sendAuthData } from './authData.api';
import StorageService from '../utils/StorageService';
import { push } from 'react-router-redux';
import { dispatch } from '../store';

import { clearHistoryState } from '../history';
import Api from '../utils/authApi';

export const authData = {
  state: { isAuth: false },
  reducers: {
    onSetIsAuth(state) {
      return { ...state, isAuth: true };
    },
    onLogout(state) {
      return { ...state, isAuth: false };
    },
  },
  effects: {
    async setIsAuth() {
      this.onSetIsAuth();
    },
    async postAuthData(payload) {
      const { data } = await sendAuthData(payload);

      StorageService.set({
        key: 'auth-token',
        value: data,
        remember: payload.remember,
      }).then(await Api.init());
      this.onSetIsAuth();
      await dispatch.toolsModel.fetchAllTools();
      dispatch(push('/summary'));
    },
    logoutUser(payload) {
      sessionStorage.removeItem('auth-token');
      localStorage.removeItem('auth-token');
      clearHistoryState();
      this.onLogout();
      dispatch(push('/'));
    },
  },
  selectors: slice => ({
    getAuthState(state) {
      return slice(state => state.isAuth);
    },
  }),
};
