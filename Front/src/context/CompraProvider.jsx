// utilizadas para criar um contexto e um estado
import { createContext, useState, useEffect } from "react";

// criado um contexto usando a função createContext. Um objeto vazio {} é passado como valor padrão inicial do contexto.
export const CompraContext = createContext({
  itens: [],
  adicionarItemAoCarrinho: () => {},
  removerItemDoCarrinho: () => {},
  finalizarPedido: () => {},
  setItens: () => {},
});

export function CompraProvider({ children }) {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const carrinho = localStorage.getItem('carrinho');
    if (carrinho) {
      setItens(JSON.parse(carrinho));
    }
  }, []);

  const adicionarItemAoCarrinho = (produto) => {
    const itemExistente = itens.find((item) => item.id_produto === produto.id_produto);
    if (itemExistente) {
      const novosItens = itens.map((item) => {
        if (item.id_produto === produto.id_produto) {
          return { ...item, quantidade: item.quantidade + 1 };
        }
        return item;
      });
      setItens(novosItens);
    } else {
      setItens([...itens, { ...produto, quantidade: 1 }]);
    }
  };

  const removerItemDoCarrinho = (produto) => {
    const novosItens = itens.filter((item) => item.id_produto !== produto.id_produto);
    setItens(novosItens);
  };

  const finalizarPedido = () => {
    setItens([]);
    localStorage.removeItem('carrinho');
  };

  const atualizarItens = (novosItens) => {
    localStorage.setItem('carrinho', JSON.stringify(novosItens));
    setItens(novosItens); // Atualize o estado dos itens com os novos itens
  };

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(itens));
  }, [itens]);

  return (
    <CompraContext.Provider
      value={{
        itens,
        adicionarItemAoCarrinho,
        removerItemDoCarrinho,
        finalizarPedido,
        setItens: atualizarItens,
      }}
    >
      {children}
    </CompraContext.Provider>
  );
}