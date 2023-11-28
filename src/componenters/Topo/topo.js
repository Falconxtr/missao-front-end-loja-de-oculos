import React from 'react';
import "./Topo.css";

import Logo from "../../assets/logo.png"

export default function Topo() {
    return (
        <header>
            <section className='limita-secao topo'>
                <img src={Logo} alt="Logo"/>
                <nav>
                    <a href="#Produtos">PRODUTOS</a>
                    <a href="#Sobre">SOBRE</a>
                    <a href="#Contato">CONTATO</a>
                </nav>
            </section>
        </header>
    );
}
