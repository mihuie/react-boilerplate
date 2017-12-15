export const allHaveValues = object => {
  return Object.keys(object)
    .map(key => typeof object[key] !== 'undefined' && object[key].length > 0)
    .every(item => item === true);
};
