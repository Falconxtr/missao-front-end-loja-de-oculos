import React from 'react';
import './secaosobre.css';

import Loja from "../../../assets/loja.png";
import Atendimento from "../../../assets/atendimento.png";

export default function SecaoSobre(){
    return (
        <section className='secaosobre'>
            <div className='limita-secao sobre-conteudo'>
                <div>
                    <h2>QUEM SOMOS NÓS?</h2>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                </div>
                <div className='sobre-cards'>
                    <div>
                        <img src={Loja} alt="Loja"/>
                    </div>
                    <div className='sobre-card-texto'>
                        <h3>Nossoas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América.</p>
                    </div>
                    <div className='sobre-card-texto'>
                        <h3>Atendimento Flexivel</h3>
                        <p>A equipe que possuimos é treinada para te atender.</p>
                    </div>
                    <div>
                        <img src={Atendimento} alt="Atendimento"/>
                    </div>
                </div>
            </div>
        </section>
    );
}