import * as R from 'ramda';

export const lowUnitsTable = data => {
  const diff = function(a, b) {
    return a.info.units - b.info.units;
  };

  return R.take(10, R.sort(diff, data));
};
export const lowConditionTable = data => {
  const badConditionTools = data.filter(
    tool => tool.technicalConditions.condition === 'bad',
  );
  const toControlConditionTools = data.filter(
    tool => tool.technicalConditions.condition === 'to control',
  );
  return R.take(10, [...badConditionTools, ...toControlConditionTools]);
};

export const timeOfBeingUsedTable = data => {
  const diff = function(a, b) {
    return (
      Number(a.technicalConditions.timeOfBeingUsed) -
      Number(b.technicalConditions.timeOfBeingUsed)
    );
  };
  return R.take(10, R.sort(diff, data));
};
