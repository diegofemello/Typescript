const arraynumbers: Array<number> = [1, 2, 3, 4, 5];
console.log(arraynumbers);

async function promiseAsync() {
  return 8;
}

function minhaPromise(): Promise<number> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado + 1));

export default 1;
