import { getTools, deleteTool } from './tools.api';

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
    async deleteTool(toolId) {
      console.log(toolId);
      const { data } = await deleteTool(toolId);
      console.log(data);
      await this.fetchAllTools();
    },
  },
  selectors: slice => ({
    getToolsState(state) {
      return slice(state => state.tools);
    },
  }),
};
