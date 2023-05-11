export const changeCheckedItems = <T>(item: T, arr: Array<T>, prop = 'id'):Array<T> => {
  return arr.some(val => val[prop] === item[prop]) ? arr.filter(val => val[prop] !== item[prop]) : [...arr, item];
};
