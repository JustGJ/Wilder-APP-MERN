"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const wilder_1 = __importDefault(require("./routes/wilder"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
// autoIndex = vérifie si l'index dans la db est unique afin de ne pas duppliquer (accélération des données)
mongoose_1.default
    .connect(process.env.MONGO_URI, { autoIndex: true })
    .then(() => console.log('connecté à la db'))
    .catch((err) => console.log(err));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['sessionId', 'Content-Type'],
    exposedHeaders: ['sessionId'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
};
app.use((0, cors_1.default)(corsOption));
app.use('/api/wilder', wilder_1.default);
app.use((req, res) => {
    res.status(404).send("Route qui n'existe pas");
});
app.listen(PORT, () => console.log(`Server lancé sur le port ${PORT}`));
