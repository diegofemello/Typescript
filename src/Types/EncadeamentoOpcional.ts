type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Título',
  texto: 'Texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'Ixi, não existe data..');
console.log(undefined ?? 'Ixi, não existe data..');
console.log(null ?? 'Ixi, não existe data..');
console.log(null ?? 'Ixi, não existe data..');
