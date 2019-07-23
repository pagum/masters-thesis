import { getTools, deleteTool, addTool, getToolById } from './tools.api';

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
    async fetchToolById(toolId) {
      const { data } = await getToolById(toolId);
      console.log(data);
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
