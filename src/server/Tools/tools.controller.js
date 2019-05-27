import Tool from './tools.model';

const getAllTools = async () => {
  const tools = await Tool.find({});

  return tools;
};

export default getAllTools;
