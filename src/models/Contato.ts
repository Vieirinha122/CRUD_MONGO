import { Schema, model, Document } from 'mongoose';

export interface IContato extends Document {
  nome: string;
  telefone: string;
}

const contatoSchema = new Schema<IContato>({
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
});

export default model<IContato>('Contato', contatoSchema);
