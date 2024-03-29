import { getTools, deleteTool, addTool, getToolById } from './tools.api';

export const toolsModel = {
  state: {},
  reducers: {
    onSetAllTools(state, payload) {
      return { ...state, tools: payload };
    },
    onSetToolsList(state, payload) {
      return { ...state, toolsList: payload };
    },
  },
  effects: {
    async fetchAllTools() {
      const { data } = await getTools();

      this.onSetAllTools(data);
    },
    async fetchToolById(toolId) {
      const { data } = await getToolById(toolId);
      return data;
    },
    async deleteTool(toolId) {
      const { data } = await deleteTool(toolId);

      await this.fetchAllTools();
    },
    async saveTool(tool) {
      const { data } = await addTool(tool);

      await this.fetchAllTools();
    },
    createToolList(tools) {
      this.onSetToolsList(tools);
    },
  },
  selectors: slice => ({
    getToolsState(state) {
      return slice(state => state.tools);
    },
    getToolsNamePrice(state) {
      return slice(state =>
        state.tools.map(tool => ({
          name: tool.info.name,
          price: tool.info.price,
          price: tool.info.price,
          units: tool.info.units,
        })),
      );
    },
  }),
};
