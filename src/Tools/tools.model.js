import { getTools, deleteTool, addTool } from './tools.api';

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

      this.onSetAllTools(data);
    },
    async deleteTool(toolId) {
      const { data } = await deleteTool(toolId);

      await this.fetchAllTools();
    },
    async saveTool(tool) {
      const { data } = await addTool(tool);

      await this.fetchAllTools();
    },
  },
  selectors: slice => ({
    getToolsState(state) {
      return slice(state => state.tools);
    },
  }),
};