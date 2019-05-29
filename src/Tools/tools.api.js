import api from '../utils/api';

export const getTools = async () => {
  const response = await api.get('/tools');
  return response;
};

export const deleteTool = async toolId => {
  const response = await api.delete(`/deleteTool/${toolId}`);
  return response;
};
