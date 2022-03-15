import express from 'express';
import mongoose from 'mongoose';
import wilderRouter from './routes/wilder';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

// autoIndex = vérifie si l'index dans la db est unique afin de ne pas duppliquer (accélération des données)
mongoose
    .connect(process.env.MONGO_URI, { autoIndex: true })
    .then(() => console.log('connecté à la db'))
    .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['sessionId', 'Content-Type'],
    exposedHeaders: ['sessionId'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
};

app.use(cors(corsOption));

app.use('/api/wilder', wilderRouter);
app.use((req, res) => {
    res.send("Route qui n'existe pas", 404);
});

app.listen(PORT, () => console.log(`Server lancé sur le port ${PORT}`));
