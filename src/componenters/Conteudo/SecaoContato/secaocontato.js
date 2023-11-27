import React from 'react';
import './secaocontato.css';

import Local from "../../../assets/local.png";
import Telefone from "../../../assets/telefone.png";
import Email from "../../../assets/email.png";
import Facebook from "../../../assets/fb.png";
import Instagram from "../../../assets/ig.png";
import Twitter from "../../../assets/tt.png";

export default function SecaoContato() {
    return (
        <section className='secaocontato'>
            <div className='limita-secao contato-conteudo'>
                <div>
                    <h2>FALE CONOSCO</h2>
                    <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                </div>
                <div className='contato-cards'>
                    <div>
                        <h3>Contato</h3>
                        <figure>
                            <img src={Local} alt="Local" />
                            <figcaption>Nova Iguaçu, RJ</figcaption>
                        </figure>
                        <figure>
                            <img src={Telefone} alt="Telefone" />
                            <figcaption>(21) 99999-9999</figcaption>
                        </figure>
                        <figure>
                            <img src={Email} alt="E-mail" />
                            <figcaption>contato@aticavida.com</figcaption>
                        </figure>
                    </div>
                    <div>
                        <h3>Nossas Redes Sociais</h3>
                        <figure>
                            <img src={Facebook} alt="Facebook" />
                            <figcaption>/OticaVida</figcaption>
                        </figure>
                        <figure>
                            <img src={Instagram} alt="Telefone" />
                            <figcaption>@oticavidarj</figcaption>
                        </figure>
                        <figure>
                            <img src={Twitter} alt="E-mail" />
                            <figcaption>@oticavidarj</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}