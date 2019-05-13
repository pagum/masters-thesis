import rematch from "@rematch/core";
import { routerMiddleware, routerReducer } from "react-router-redux";
import selectPlugin from "@rematch/select";

import * as models from "./models";
import { history } from "./history";

const selectors = selectPlugin();
export const store = rematch.init({
  models,
  plugins: [selectors],
  redux: {
    reducers: {
      router: routerReducer
    },
    middlewares: [routerMiddleware(history)]
  }
});
export const { select } = store;
const { dispatch } = store;
export { dispatch };
