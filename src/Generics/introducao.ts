type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (callbackfn(value, i, array)) {
      newArray.push(value);
    }
  }
  return newArray;
}

const arraynumber = [1, 2, 3, 4, 5, 4, 8, -1];
// const arraystring = ['a', 'b', 'c', 'd', 'e'];
// const arrayboolean = [true, false, true, false, true];
// const arrayobject = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }];

console.log(arraynumber.filter((value) => value < 5));
console.log(meuFilter(arraynumber, (value) => value < 5));
