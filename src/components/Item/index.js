import React from "react";
import './estilo.css';

export default function Item({imagem, nome, categoria, descricao, preco}){
    return(
        <div className="box">
            <img src={imagem} alt={nome}/>
            <div className="info">
                <p className="titulo">{nome}</p>
                <p className="categoria">{categoria}</p>
                <p className="descricao">{descricao}</p>
                <p className="preco">{new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(preco)}</p>
                
            </div>
        </div>
    );
}