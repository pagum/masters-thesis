import Tool from './tools.model';
import { ObjectId } from 'mongodb';
import ApiError from '../ApiError';

export const getAllTools = async () => {
  const tools = await Tool.find({});
  return tools;
};

export const deleteTool = async toolId => {
  console.log(toolId);
  console.log(!ObjectId.isValid(toolId));
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
  console.log(newTool);

  const tool = await Tool.create(newTool);
  console.log(tool);
  return tool;
};
