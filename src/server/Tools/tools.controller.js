import Tool from './tools.model';
import { ObjectId } from 'mongodb';
import ApiError from '../ApiError';

export const getAllTools = async () => {
  const tools = await Tool.find({});
  return tools;
};

export const deleteTool = async toolId => {
  if (!ObjectId.isValid(toolId)) {
    throw new ApiError({
      status: 400,
      msg: 'Invalid param',
    });
  }
  const tool = await Tool.findByIdAndRemove(toolId);
  return tool;
};
export const addTool = async newTool => {
  const tool = await Tool.create(newTool);
  return tool;
};
