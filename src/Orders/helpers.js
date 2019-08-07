import moment from 'moment';
export const prepareData = toolsToOrder => ({
  date: moment().format('DD/MM/YYYY'),
  tools: toolsToOrder.filter(tool => tool.amount),
});
