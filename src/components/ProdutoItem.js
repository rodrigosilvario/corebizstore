import React from 'react';


function ProdutoItem ({produto}) {
    return (
        <li className="col-6 col-sm-4 my-2 p-2 corebiz-produto-item">
            <img className="img-fluid " src={produto.images[0].imageUrl} title={produto.name} alt={produto.name} />
            <p className="corebiz-nome-item ">{produto.name}</p>
            <p className="pt-3"> {produto.Value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </li>
    )
}
export default ProdutoItem;