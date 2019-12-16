import React from 'react';
import ProdutoItem from "./ProdutoItem"


function ProdutoLista (props) {
    return (
            <ul>
                <div className="row">
                    {props.listaProdutos.map((p,index) => (
                        <ProdutoItem key={index} chave={index} produto={p} callback={props.callback}/>
                    ))}
                </div>
            </ul>
    )

}
export default ProdutoLista;