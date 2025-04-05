import './Modal.css';

interface ConfirmModalProps {
  mensagem: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({ mensagem, onConfirm, onCancel }: ConfirmModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{mensagem}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          <button className="cancel" onClick={onCancel}>Cancelar</button>
          <button className="delete" onClick={onConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
}
