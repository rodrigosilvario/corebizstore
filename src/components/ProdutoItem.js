import React from 'react';


function ProdutoItem (props) {
    return (
        <li onClick={()=> props.callback(props.produto, props.chave)} className="col-6 col-sm-4 my-2 p-2 corebiz-produto-item">
            <img className="img-fluid " src={props.produto.images[0].imageUrl} title={props.produto.name} alt={props.produto.name} />
            <p className="corebiz-nome-item ">{props.produto.name}</p>
            <p className="pt-3"> {props.produto.Value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </li>
    )
}


export default ProdutoItem;

