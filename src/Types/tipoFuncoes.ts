type mapStringsCallback = (value: string) => string;

export function mapStrings(
  array: string[],
  callbackfn: mapStringsCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item: string) => item.toUpperCase());

console.log(abc);
console.log(abcMapped);
