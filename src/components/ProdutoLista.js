import React from 'react';
import ProdutoItem from "./ProdutoItem"


function ProdutoLista ({listaProdutos}) {
    return (
            <ul>
                <div className="row">
                    {listaProdutos.map((p,index) => (
                        <ProdutoItem key={index} produto={p} />
                    ))}
                </div>
            </ul>
    )

}
export default ProdutoLista;