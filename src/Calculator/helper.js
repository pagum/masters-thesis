export const round = (n, k) => {
  const factor = Math.pow(10, k);
  return Math.round(n * factor) / factor;
};
