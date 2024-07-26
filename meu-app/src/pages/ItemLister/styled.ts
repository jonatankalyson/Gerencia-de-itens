import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* Adiciona esta linha */
  justify-content: space-between; /* Adiciona esta linha para separar o conteúdo e o botão */
  align-items: center;
  height: 100vh; /* Faz com que o container ocupe toda a altura da tela */
  background-color: #e9ecef; /* Cor de fundo leve para destacar o formulário */

  header {
    text-align: center;
  }

  main {
    flex: 1; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px; 
  }

  .cadastrar {
    margin-bottom: 1rem; 
    width: 100%;
    max-width: 600px; 
    display: flex;
    justify-content: center;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #343a40; 
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #23272b; 
  }

  
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 800px; 
    padding: 1rem;
    border: 1px solid #ced4da;
    border-radius: 6px;
    background-color: #ffffff;
    margin-bottom: 1rem; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .imgtitle {
    display: flex;
    align-items: center;
  }

  .imgtitle img {
    width: 50px; 
    height: 50px; 
    margin-right: 1rem;
  }

  .imgtitle p {
    margin: 0;
  }

  .btns {
    display: flex;
    gap: 1rem; 
  }
`;
