export default function findFakeUserObj(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]['username'] === '_fakename_') {
      return arr[i];
    }
  }
  return null;
}
