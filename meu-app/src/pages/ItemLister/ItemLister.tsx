/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container,} from "./styled";
import img from '../../assets/react.svg';
import api from '../../service/service';
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

interface Item {
  id: number;
  nome: string;
  descricao: string;
}

function ItemListe() {
  const [items, setItems] = useState<Item[]>([]);
  const [contador, setContador] = useState<number>(0);
  const navigate = useNavigate();
  

  const getLista = async () => {
    try {
      const response = await api.get('/listar'); 
      setItems(response.data);
    } catch (error) {
      console.error('Erro ao buscar itens:', error);
    }
  }

  const contado = async()=>{
    try {
      const response = await api.get('/lista/contador'); 
      setContador(response.data);
    } catch (error) {
      console.error('Erro ao buscar itens:', error);
    }
  }

  const deletar = async (id: number) => {
    try {
      await api.delete(`/deletar/${id}`);
      setItems(items.filter(item => item.id !== id));
      contado();
      window.location.reload();
    } catch (error) {
      console.error('Erro ao deletar item:', error);
    }
  }
  const handleEdit = (id: number) => {
    navigate(`/editar/${id}`);
  };

  useEffect(() => {
    getLista();
    contado();
  }, []);

  return (
    <Container>
        <header>
          <h1>Itens</h1>
          <div className="bola">
          <span>{contador}</span>
          </div>
        </header>
        <main>
          {items.map((item)=>(
            <div  key={item.id} className="card">
            <div className="imgtitle">
              <div><img src={img} alt="" /></div>
              <div><p>{item.nome}</p></div>
            </div>
            <div className="btns">
              <button className="edit"  onClick={() => handleEdit(item.id)}><FaRegEdit /></button>
              <button onClick={() => deletar(item.id)}><MdDelete /></button>
            </div>
          </div>
          ))}
          <div className="cadastrar">
            <button onClick={() => navigate('/cadastro')}>Cadastrar</button>
          </div>
        </main>
    </Container>
  );
}

export default ItemListe;
