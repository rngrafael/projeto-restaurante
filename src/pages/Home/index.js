import React, { useState } from "react";


import Entrada from '../../assets/entrada.png';
import Massas from '../../assets/massa.png';
import Carnes from '../../assets/carne.png';
import Bebidas from '../../assets/bebidas.png';
import Saladas from '../../assets/salada.png';
import Sobremesas from '../../assets/sobremesa.png';
import Lupa from '../../assets/lupa.png';


import './estilos.css';
import { produtos } from "../../data/data-produtos";
import Item from "../../components/Item";




export default function Home(){

    const[listaDados, setListaDados] = useState(produtos);
    const[textoBusca, setTextoBusca] = useState("");


    const [botaoClicado, setBotaoClicado] = useState(produtos);


    const handleFiltar = (categoria) => {
        setTextoBusca("")
        setListaDados(
            produtos.filter((item)=>item.categoria===categoria)
        );
        setBotaoClicado(categoria);    
    }


    const handleBusca = (textoDigitado) => {
        
        textoDigitado.length >= 3 && setListaDados(
           produtos.filter((item)=>
            item.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
            item.categoria.toLowerCase().includes(textoDigitado.toLowerCase())
           ));
           
           setTextoBusca(textoDigitado); 
           
    }

    return(
        <div className="container-banner">
             
            <div className="banner">
               
                    <h1>RESTAURANT</h1>
                    <p>
                        De pratos clássicos a criações surpreendentes, 
                        nosso cardápio é um requinte de sabores refinados
                    </p>
            
            </div>

            <div className="btn">

                <button className={botaoClicado==="Entradas"?"cor-2":"cor-1"}
                onClick={()=>(handleFiltar("Entradas"))}
                >
                    <img src={Entrada} alt="entradas"/>
                    Entradas
                </button>

                <button className={botaoClicado==="Massas"?"cor-2":"cor-1"}
                onClick={()=>(handleFiltar("Massas"))}
                >
                    <img src={Massas} alt="massas"/>
                    Massas
                </button>

                <button className={botaoClicado==="Carnes"?"cor-2":"cor-1"}
                onClick={()=>(handleFiltar("Carnes"))}
                >
                    <img src={Carnes} alt="carnes"/>
                    Carnes
                </button>

                <button className={botaoClicado==="Bebidas"?"cor-2":"cor-1"}
                onClick={()=>(handleFiltar("Bebidas"))}
                >
                    <img src={Bebidas} alt="bebidas"/>
                    Bebidas
                </button>

                <button className={botaoClicado==="Saladas"?"cor-2":"cor-1"}
                onClick={()=>(handleFiltar("Saladas"))}
                >
                    <img src={Saladas} alt="saladas"/>
                    Saladas
                </button>

                <button className={botaoClicado==="Sobremesas"?"cor-2":"cor-1"}
                onClick={()=>(handleFiltar("Sobremesas"))}
                >
                    <img src={Sobremesas} alt="sobremesas"/>
                    Sobremesas
                </button>
            </div>

            <div className="pesquisa">
                <img src={Lupa} alt="Lupa"/>
                <input type="text" placeholder="Pesquise aqui alguns dos pratos do nosso cardápio"
                
                value={textoBusca}
                onChange={(event)=>handleBusca(event.target.value)}
                
                />
            </div>

            <h2 className="cardapio">Cardapio</h2>
            <div className="container-produto">
                {listaDados.map((produto)=>(
                    <Item
                    key={produto.id}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    categoria={produto.categoria}
                    descricao={produto.descricao}
                    preco={produto.preco}
                    />
                ))}
            </div>
        </div>
    );
}