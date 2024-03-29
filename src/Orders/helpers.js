import moment from 'moment';
import * as R from 'ramda';

export const prepareData = (toolsToOrder, totalCost) => ({
  date: moment().format('DD.MM.YYYY'),
  tools: toolsToOrder.filter(tool => tool.amount),
  sum: totalCost,
});

export const prepareDataForExcel = order => {
  const headerRow = ['Name', 'Application', 'Producent', 'Amount', 'Price'];
  const arrayOfTools = order.tools.map(tool => {
    return [
      tool.name,
      tool.application,
      tool.producent,
      tool.amount.toString(),
      tool.price.toString(),
    ];
  });
  const summaryRow = ['Total', ' ', ' ', ' ', order.sum];
  return [headerRow, ...arrayOfTools, [], summaryRow];
};
