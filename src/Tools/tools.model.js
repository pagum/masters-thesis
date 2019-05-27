import { getTools } from './tools.api';

export const toolsModel = {
  state: {},
  reducers: {
    onSetAllTools(state, payload) {
      return { ...state, tools: payload };
    },
  },
  effects: {
    async fetchAllTools() {
      const { data } = await getTools();
      console.log(data);
      this.onSetAllTools(data);
    },
  },
  selectors: slice => ({
    getToolsState(state) {
      return slice(state => state.tools);
    },
  }),
};
