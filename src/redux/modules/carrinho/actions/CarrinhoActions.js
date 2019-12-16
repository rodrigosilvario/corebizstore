export const ADICIONAR_PRODUTO = "ADICIONAR_PRODUTO";
export const REMOVER_PRODUTO = "REMOVER_PRODUTO";

export const adicionarProduto = produto => ({
  type: ADICIONAR_PRODUTO,
  produto
});

export const removerProduto = (produto,chave) => ({
  type: REMOVER_PRODUTO,
  produto,
  chave
});
