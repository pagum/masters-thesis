import rematch from "@rematch/core";
import { routerMiddleware, routerReducer } from "react-router-redux";

import * as models from "./models";
import { history } from "./history";

export const store = rematch.init({
  models,
  redux: {
    reducers: {
      router: routerReducer
    },
    middlewares: [routerMiddleware(history)]
  }
});

const { dispatch } = store;
export { dispatch };
