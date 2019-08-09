import React from 'react';
import { InfoPaper, CostWrapper, SubmitOrderButton } from './Orders.style';
import { prepareData } from './helpers';

const countSum = arrayOfTools => {
  const toolsWithAmount = arrayOfTools.filter(tool => tool.amount);

  var totalCost =
    toolsWithAmount.length > 0 &&
    (toolsWithAmount.length > 1
      ? toolsWithAmount.reduce(
          (a, b) => a.price * Number(a.amount) + b.price * Number(b.amount),
        )
      : Number(toolsWithAmount[0].amount) * toolsWithAmount[0].price);

  return totalCost;
};

const NewOrderSummary = props => {
  const { newOrderList, createOrder } = props;
  const totalCost = newOrderList.length > 0 ? countSum(newOrderList) : null;
  const makeOrder = () => {
    const preparedData = prepareData(newOrderList, totalCost);
    createOrder(preparedData);
  };
  return (
    <InfoPaper>
      {totalCost ? (
        <>
          <CostWrapper>
            <div>
              Cost of your order <strong>{totalCost} zł</strong>
            </div>
            <SubmitOrderButton
              variant="outlined"
              color="primary"
              onClick={makeOrder}
            >
              Submit order
            </SubmitOrderButton>{' '}
          </CostWrapper>
        </>
      ) : (
        'Select the amount of tool that you want to order'
      )}
    </InfoPaper>
  );
};
export default NewOrderSummary;
