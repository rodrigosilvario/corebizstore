import ProdutoJSON from "./produtos.json";

export class ProdutoService {
  
    static getProdutos() {
    return new Promise((resolve, reject) => {
      if (ProdutoJSON) {
        resolve(ProdutoJSON);
      } else {
        reject();
      }
    });
  }
}
