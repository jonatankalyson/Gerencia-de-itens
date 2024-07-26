import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Container = styled.div`

header{
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  align-items: center;
  padding: 3rem 2rem 0;

  .bola{
    background-color:#86B681 ;
    padding: 1.5rem;
    border-radius: 60%;

    span{
      font-weight: 500;
    }
  }
}

main{
  background-color: #E9E7EA;
  height: 100vh;
  border-radius: 2.5rem 2.5rem 0 0;
  padding: 4rem 2rem;
  

  p{
    font-size: 1.8rem;
  }

}
.card{
  display: flex;
  align-items: center;
  
  justify-content: space-between;
  padding: 1rem;
  background-color: #cfc7d3;
  border-radius: 1rem;
  margin-bottom: 1rem;
}
.imgtitle{
  display: flex;
  gap: 1.5rem;
  align-items: center;

}
.btns{
  display: flex;
  flex-direction: column;
  gap: 1rem;
 
  
  button{
    border: none;
    cursor: pointer;
    background-color: transparent;
    
    svg{
      height: 2rem;
      width: 2rem;
      background-color:transparent;
    }

  }
  
}
.cadastrar{
  
  border: 1px solid red;
  width: 100%;
    button{
     background-color: #1C1E21;
     color: white;
     font-size: 2rem;
     border-radius: 2rem;
     padding: 1rem 2rem;
     display: flex;
     justify-content: center;
     align-items: center;
    
    }
  }
`;


