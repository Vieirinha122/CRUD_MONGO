import { useEffect, useState } from 'react';
import api from '../services/Api.ts';
import Modal from './Modal.tsx';

interface Contato {
  _id?: string;
  nome: string;
  telefone: string;
}

interface Props {
  contatoEditando?: Contato;
  onSave?: () => void;
  cancelarEdicao?: () => void;
}

export default function FormContato({ contatoEditando, onSave, cancelarEdicao }: Props) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagemModal, setMensagemModal] = useState<string | null>(null);

  useEffect(() => {
    if (contatoEditando) {
      setNome(contatoEditando.nome);
      setTelefone(contatoEditando.telefone);
    }
  }, [contatoEditando]);

  const formatTelefone = (valor: string) => {
    return valor
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const contato = { nome, telefone };

    try {
      if (contatoEditando && contatoEditando._id) {
        await api.put(`/${contatoEditando._id}`, contato);
        setMensagemModal('Contato atualizado com sucesso!');
      } else {
        await api.post('/', contato);
        setMensagemModal('Contato salvo com sucesso!');
      }
      setNome('');
      setTelefone('');
      onSave?.();
    } catch (error) {
      setMensagemModal('Erro ao salvar contato');
    }
  };

  return (
    <>
      {mensagemModal && (
        <Modal mensagem={mensagemModal} onClose={() => setMensagemModal(null)} />
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(formatTelefone(e.target.value))}
          required
        />

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button type="submit" className="save">
            {contatoEditando ? 'Atualizar' : 'Salvar'}
          </button>

          {contatoEditando && (
            <button type="button" className="cancel" onClick={cancelarEdicao}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </>
  );
}
