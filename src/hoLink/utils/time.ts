export const getDate = (): string => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
