import Api from '../utils/authApi';

export const getTools = async () => {
  const response = await Api.get('/tools');
  return response;
};
