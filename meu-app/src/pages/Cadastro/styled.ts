import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Faz com que o container ocupe toda a altura da tela */
  background-color: #e9ecef; /* Cor de fundo leve para destacar o formulário */

  form {
    width: 100%;
    max-width: 600px;
    padding: 2rem;
    border: 1px solid #ced4da;
    border-radius: 12px; /* Bordas mais arredondadas */
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para destacar o formulário */
    margin-top: 1rem; /* Adiciona espaço acima do formulário */
  }

  h1 {
    text-align: center;
    color: #343a40; /* Cor mais escura para o título */
    margin-bottom: 1rem; /* Espaço abaixo do título */
    font-size: 1.5rem; /* Tamanho da fonte ajustado para melhor visualização */
    font-weight: 600; /* Peso da fonte ajustado para maior destaque */
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #495057; /* Cor cinza escuro para o texto dos rótulos */
    font-weight: 500; /* Texto dos rótulos em negrito */
  }

  input {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ced4da;
    border-radius: 6px; /* Bordas arredondadas para inputs */
    font-size: 1rem;
    box-sizing: border-box;
    transition: border-color 0.3s ease; /* Transição suave para a cor da borda */
  }

  input:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(38, 143, 255, 0.25); /* Sombra de foco */
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #343a40; /* Botão preto */
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease; /* Transição suave para a cor do fundo */
  }

  button:hover {
    background-color: #23272b; /* Preto um pouco mais escuro no hover */
  }

  span {
    display: block;
    color: #dc3545; /* Cor vermelha para mensagens de erro */
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;
