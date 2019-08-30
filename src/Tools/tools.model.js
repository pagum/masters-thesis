import {
  getTools,
  deleteTool,
  addTool,
  getToolById,
  updateToollll,
} from './tools.api';

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
      await deleteTool(toolId);
      await this.fetchAllTools();
    },

    async updateTool({ toolId, updatedParams }) {
      await updateToollll(toolId, updatedParams);
      await this.fetchAllTools();
    },

    async saveTool(tool) {
      await addTool(tool);
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
    getToolById(state, id) {
      return slice(state => state.tools.filter(tool => tool.id === id));
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
