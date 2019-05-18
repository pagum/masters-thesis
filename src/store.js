import rematch from '@rematch/core';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import selectPlugin from '@rematch/select';
import { authData } from './AuthModule/authData.model';
//import * as models from "./models";
import { history } from './history';

const models = {
  authData,
};
const selectors = selectPlugin();
export const store = rematch.init({
  models,
  plugins: [selectors],
  redux: {
    reducers: {
      router: routerReducer,
    },
    middlewares: [routerMiddleware(history)],
  },
});
export const { select } = store;
const { dispatch } = store;
export { dispatch };
