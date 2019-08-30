import Tool from './tools.model';
import { ObjectId } from 'mongodb';
import ApiError from '../ApiError';
const chalk = require('chalk');

export const getAllTools = async () => {
  const tools = await Tool.find({});
  return tools;
};

export const getToolById = async toolId => {
  const tool = await Tool.find({ _id: ObjectId(toolId) });
  return tool[0];
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
  const tool = new Tool(newTool);
  tool.save(err => {
    if (err) console.log(err);
  });
  return tool;
};

export const updateTool = async updatedTool => {
  console.log(updatedTool);
  const tool = await Tool.findByIdAndUpdate(
    updatedTool.id,
    {
      $set: updatedTool.params,
    },
    { upsert: true },
    function(err, result) {
      if (err) {
        console.log(err);
      }
      console.log('RESULT: ' + result);
    },
  );
  tool.update(err => {
    if (err) console.log(err);
  });
  return tool;
};
