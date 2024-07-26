import { z } from "zod";

export const itemSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  descricao: z.string().min(1, "Descrição é obrigatória"),
});

export type ItemFormValues = z.infer<typeof itemSchema>;