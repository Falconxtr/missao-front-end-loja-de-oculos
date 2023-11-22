import React from 'react';

import Oculos01 from "../../../assets/oculos01.png";
import Oculos02 from "../../../assets/oculos02.png";
import Oculos03 from "../../../assets/oculos03.png";
import Oculos04 from "../../../assets/oculos04.png";


export default function SecaoProdutos() {
    return (
        <section>
            <div>
                <h1>Nossos Produtos</h1>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </div>
            <div>
                <figure>
                    <h2>Óculos de grau</h2>
                    <img src={Oculos01} alt="Óculos de Grau" />
                    <p>R$ 500,00</p>
                </figure>
                <figure>
                    <h2>Óculos transition</h2>
                    <img src={Oculos02} alt="Óculos Transition" />
                    <p>R$ 750,00</p>
                </figure>
                <figure>
                    <h2>Óculos de sol</h2>
                    <img src={Oculos03} alt="Óculos de Sol" />
                    <p>R$ 700,00</p>
                </figure>
                <dfigure>
                    <h2>Óculos infantil</h2>
                    <img src={Oculos04} alt="Óculos Infantil" />
                    <p>R$ 500,00</p>
                </dfigure>
            </div>
           <div>
                <p>Todos os nossos produtos incluem:</p>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div> 
        </section>
    );
}