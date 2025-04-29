export const formatarNumero = (numero) => {
  if (!numero.startsWith('55')) {
    return `55${numero}`;
  }
  return numero;
};


