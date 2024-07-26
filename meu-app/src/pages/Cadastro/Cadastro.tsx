// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { adicionarCadastroSchema, AdicionarCadastroRequestData } from '../../schemas/CadastrarItem';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import api from '../../service/service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Container} from './styled'

function Cadastro() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdicionarCadastroRequestData>({
    resolver: zodResolver(adicionarCadastroSchema),
  });

  const onSubmit = async (data: AdicionarCadastroRequestData) => {
    try {
      const response = await api.post('/cadastrar', data);
      console.log('Item cadastrado com sucesso:', response.data);
      reset(); 
    } catch (error) {
      console.error('Erro ao cadastrar item:', error);
    }
  };

  return (
    <Container>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastro de Item</h1>
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
        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
}

export default Cadastro;
