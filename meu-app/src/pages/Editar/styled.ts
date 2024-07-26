import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e9ecef;

  form {
    width: 100%;
    max-width: 600px;
    padding: 2rem;
    border: 1px solid #ced4da;
    border-radius: 12px; 
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    margin-top: 1rem; 
  }

  h1 {
    text-align: center;
    color: #343a40;
    margin-bottom: 1rem;
    font-size: 1.5rem; 
    font-weight: 600; 
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #495057; 
    font-weight: 500; 
  }

  input {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ced4da;
    border-radius: 6px; 
    font-size: 1rem;
    box-sizing: border-box;
    transition: border-color 0.3s ease; 
  }

  input:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(38, 143, 255, 0.25); 
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

  span {
    display: block;
    color: #dc3545; 
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;
