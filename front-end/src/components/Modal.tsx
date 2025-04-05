import './Modal.css';

interface ModalProps {
  mensagem: string;
  onClose: () => void;
}

export default function Modal({ mensagem, onClose }: ModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{mensagem}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
