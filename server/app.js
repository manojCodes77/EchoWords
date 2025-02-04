import express from 'express';
import postRoutes from './routes/postRoutes.js';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use('/postroute', postRoutes);

app.listen(8080);