import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import contatoRoutes from './../routes/contatoRoutes';

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Erro ao conectar:', err));

app.use('/api/contatos', contatoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
