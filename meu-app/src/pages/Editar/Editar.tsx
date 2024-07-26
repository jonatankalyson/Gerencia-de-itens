import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import api from '../../service/service';
import { Container } from './styled';
import { useNavigate, useParams } from 'react-router-dom';
import { itemSchema, ItemFormValues } from '../../schemas/EditarSchema';

function Editar() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ItemFormValues>({
    resolver: zodResolver(itemSchema),
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [item, setItem] = useState<ItemFormValues | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

 
  const fetchItem = async () => {
    try {
      const response = await api.get(`/listar/${id}`);
      setItem(response.data);
      reset(response.data); 
    } catch (error) {
      console.error('Erro ao buscar item:', error);
    }
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  
  const onSubmit: SubmitHandler<ItemFormValues> = async (data) => {
    try {
    
      const payload = { ...data, id };
      await api.put(`/editar`, payload);
      navigate('/'); 
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Editar Item</h1>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            {...register('nome')}
          />
          {errors.nome && <span>{errors.nome.message}</span>}
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <input
            type="text"
            id="descricao"
            {...register('descricao')}
          />
          {errors.descricao && <span>{errors.descricao.message}</span>}
        </div>
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
}

export default Editar;
