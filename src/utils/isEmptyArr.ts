// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isEmptyArr(arr: string | any[]) {
  if (Array.isArray(arr) && arr.length === 0) {
    return true;
  }

  return false;
}

export default isEmptyArr;
