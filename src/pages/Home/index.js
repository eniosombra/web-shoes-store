import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-cumulus-20-masculino/50/D18-2796-450/D18-2796-450_detalhe2.jpg?ims=326x"
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-cumulus-20-masculino/50/D18-2796-450/D18-2796-450_detalhe2.jpg?ims=326x"
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-cumulus-20-masculino/50/D18-2796-450/D18-2796-450_detalhe2.jpg?ims=326x"
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-cumulus-20-masculino/50/D18-2796-450/D18-2796-450_detalhe2.jpg?ims=326x"
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-cumulus-20-masculino/50/D18-2796-450/D18-2796-450_detalhe2.jpg?ims=326x"
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-cumulus-20-masculino/50/D18-2796-450/D18-2796-450_detalhe2.jpg?ims=326x"
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
