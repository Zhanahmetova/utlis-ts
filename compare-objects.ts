export function isEqualValues<T> (obj1:T, obj2: T): any {
  let isEqual = true;
  for (const key in obj2) {
    if (obj1?.[key as keyof T] !== obj2[key as keyof T]) {
      isEqual = false;
      return isEqual;
    }
  }
  return isEqual;
}
