function unirObjetos<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { a: 'valor1', b: 'valor2' };
const obj2 = { c: 'valor3', d: 'valor4' };

const uniao = unirObjetos(obj1, obj2);
console.log(uniao);
