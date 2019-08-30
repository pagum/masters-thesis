import api from '../utils/api';

export const getTools = async () => {
  const response = await api.get('/tools');
  return response;
};

export const getToolById = async toolId => {
  const response = await api.get(`/tool/${toolId}`);
  return response;
};
export const addTool = async tool => {
  const response = await api.post('/addTool', tool);
  return response;
};

export const deleteTool = async toolId => {
  const response = await api.delete(`/deleteTool/${toolId}`);
  return response;
};

export const updateToollll = async (toolId, updatedParams) => {
  const response = await api.patch(`/updateTool/${toolId}`, updatedParams);
  return response;
};
