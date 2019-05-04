import { sendAuthData } from "./authData.api";
import StorageService from "../utils/StorageService";
import { push } from "react-router-redux";
import { dispatch } from "../store";

import Api from "../utils/authApi";

export const authData = {
  state: { isAuth: false },
  reducers: {
    onSetIsAuth(state) {
      return { ...state, isAuth: true };
    }
  },
  effects: {
    async setIsAuth() {
      this.onSetIsAuth();
    },
    async postAuthData(payload) {
      const { data } = await sendAuthData(payload);

      StorageService.set({
        key: "superchrono-auth-token",
        value: data.token,
        remember: payload.remember
      }).then(await Api.init());
      this.onSetIsAuth();
      dispatch(push("/updates"));
    }
  }
};
