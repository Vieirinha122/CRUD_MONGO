import { useEffect, useState } from 'react';
import api from '../services/Api';
import FormContato from '../components/FormContatos';
import ConfirmModal from '../components/ConfirmModal';
import Modal from '../components/Modal';

interface Contato {
  _id: string;
  nome: string;
  telefone: string;
}

export default function Contatos() {
  const [contatos, setContatos] = useState<Contato[]>([]);
  const [contatoEditando, setContatoEditando] = useState<Contato | undefined>();
  const [idParaExcluir, setIdParaExcluir] = useState<string | null>(null);
  const [mensagemModal, setMensagemModal] = useState<string | null>(null);

  const buscarContatos = async () => {
    const response = await api.get('/');
    setContatos(response.data);
  };

  useEffect(() => {
    buscarContatos();
  }, []);

  const handleEditar = (contato: Contato) => {
    setContatoEditando(contato);
  };

  const handleExcluir = (id: string) => {
    setIdParaExcluir(id); // abrir modal de confirmação
  };

  const confirmarExclusao = async () => {
    if (!idParaExcluir) return;
    try {
      await api.delete(`/${idParaExcluir}`);
      setMensagemModal('Contato excluído com sucesso!');
      setIdParaExcluir(null);
      buscarContatos();
    } catch {
      setMensagemModal('Erro ao excluir o contato');
    }
  };

  return (
    <div className="container">
      {mensagemModal && (
        <Modal mensagem={mensagemModal} onClose={() => setMensagemModal(null)} />
      )}

      {idParaExcluir && (
        <ConfirmModal
          mensagem="Tem certeza que deseja excluir este contato?"
          onConfirm={confirmarExclusao}
          onCancel={() => setIdParaExcluir(null)}
        />
      )}

      <h1>Lista de Contatos</h1>

      <FormContato
        contatoEditando={contatoEditando}
        onSave={buscarContatos}
        cancelarEdicao={() => setContatoEditando(undefined)}
      />

      <ul className="contato-list">
        {contatos.map((contato) => (
          <li key={contato._id}>
            <strong>{contato.nome}</strong> — {contato.telefone}
            <div>
              <button className="edit" onClick={() => handleEditar(contato)}>
                Editar
              </button>
              <button className="delete" onClick={() => handleExcluir(contato._id)}>
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
