"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const WilderSchema = new Schema({
    name: {
        //Forme longue
        type: String,
        unique: true,
        required: [true, 'Le nom est requis !'],
    },
    // name:  String // Forme courte
    city: { type: String, required: [true, 'La ville est requise !'] },
    skills: [
        {
            // Chaque skills pourra contenir un titre de type string et les votes de type number
            title: String,
            votes: Number,
        },
    ],
}, {
    versionKey: false,
});
exports.default = mongoose_1.default.model('wilder', WilderSchema); //ES6 type module
// module.exports = mongoose.model("Wilder", WilderSchema) //ES5
