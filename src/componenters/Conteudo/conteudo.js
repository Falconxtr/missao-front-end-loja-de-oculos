import React from 'react';

import SecaoCapa from './SecaoCapa/secaocapa.js';
import SecaoProdutos from './SecaoProdutos/secaoprodutos.js';
import SecaoSobre from './SecaoSobre/secaosobre.js';
import SecaoContato from './SecaoContato/secaocontato.js';

export default function Conteudo() {
    return (
        <main>
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />
        </main>
    );
}