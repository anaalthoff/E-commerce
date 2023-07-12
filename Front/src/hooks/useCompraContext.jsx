// utilizada para acessar o valor de um contexto
import { useContext } from 'react';
// permite que o hook acesse esse contexto
import { CompraContext } from '../context/compraProvider';

// hook personalizado que é usado para acessar o valor do contexto CompraContext.
export function useCompraContext() {
  // o valor do contexto CompraContext é obtido. Essa função retorna o valor atual do contexto, que é armazenado na variável context.
  const context = useContext(CompraContext);
  // console.log(CompraContext)
  return context;
}