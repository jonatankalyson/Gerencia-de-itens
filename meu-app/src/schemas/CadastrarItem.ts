import { z } from 'zod';

export const adicionarCadastroSchema = z.object({
    nome: z.string().min(1, {message: 'Nome deve conter mais de um caractere.'}).max(80),
    descricao: z.string().min(10, {message: 'Insira uma descrição, e não pode conter menos de 10 caracteres.'}).max(150, {message: 'Deve ter no máximo 150 caracteres.'}),
})

export type AdicionarCadastroRequestData = z.infer<typeof adicionarCadastroSchema>