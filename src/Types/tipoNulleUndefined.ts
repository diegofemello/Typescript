let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: number): any {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(8);

if (typeof squareOfTwoNumber === 'number') {
  console.log(squareOfTwoNumber);
} else {
  console.log('conta inválida');
}
