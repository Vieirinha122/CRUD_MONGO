import { Router, Request, Response } from "express";
import Contato, {IContato} from "./../models//Contato"
import mongoose from 'mongoose';

const router = Router();

// Criando máscara para o telefone
function formatarTelefone(telefone: string): string {
  return telefone.replace(/\D/g, '');
}

// Criando um novo contato
router.post("/", async (req, res) => {
  try {
    const { nome, telefone } = req.body;

    const contato = await Contato.create({
      nome,
      telefone: formatarTelefone(telefone),
    });

    res.status(201).json(contato);
  } catch (error) {
    res.status(400).json({ erro: (error as Error).message });
  }
});

// Listando todos os contatos
router.get("/", async (_, res) => {
  const contatos = await Contato.find();
  res.json(contatos);
});

router.get('/:id', async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ erro: 'ID inválido' });
  }

  try {
    const contato: IContato | null = await Contato.findById(id);

    if (!contato) {
      return res.status(404).json({ erro: 'Contato não encontrado' });
    }

    return res.status(200).json(contato);
  } catch (error) {
    console.error('Erro ao buscar contato:', error);
    return res.status(500).json({ erro: 'Erro ao buscar contato' });
  }
});

// Atualizar um contato
router.put("/:id", async (req, res) => {
  try {
    const contato = await Contato.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(contato);
  } catch (error) {
    res.status(400).json({ erro: (error as Error).message });
  }
});

// Deletar um contato
router.delete('/:id', async (req, res) => {
    try {
        await Contato.findByIdAndDelete(req.params.id);
        res.json({ mensagem: 'Contato deletado com sucesso'});
    } catch (error) {
        res.status(400).json({ erro: (error as Error).message });
    }
}); 

export default router;