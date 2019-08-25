import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import checkToken from './utils/checkToken';
import Api from './utils/authApi';
import * as serviceWorker from './serviceWorker';
import { dispatch } from './store';

const prepareApp = async () => {
  await dispatch.toolsModel.fetchAllTools();
};
async function runApp() {
  await checkToken();
  await Api.init();
  await prepareApp();
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}
runApp();
