export default (min, max) => {
  if (max) {
    return Math.floor(Math.random() * (max + 1)) + min;
  }
  return Math.floor(Math.random() * (min + 1));
};
