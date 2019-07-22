export default (minor, major) => {
  while (minor < major) {
    minor += minor;
  }
  return minor;
};
