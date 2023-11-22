import React from 'react';
import "./Topo.css";

import Logo from "../../assets/logo.png"

export default function Topo() {
    return (
        <header>
            <section className='limita-secao topo'>
                <img src={Logo} alt="Logo"/>
                <nav>
                    <a href="#ID">PRODUTOS</a>
                    <a href="#ID">SOBRE</a>
                    <a href="#ID">CONTATO</a>
                </nav>
            </section>
        </header>
    );
}
