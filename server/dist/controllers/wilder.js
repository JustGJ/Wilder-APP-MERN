"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Create, Read, Update, Delete
const tools_1 = require("../utils/tools");
const WilderModel_1 = __importDefault(require("./../models/WilderModel"));
exports.default = {
    create: (req, res) => {
        const { name, city, skills } = req.body;
        WilderModel_1.default.init().then(() => {
            const wilder = new WilderModel_1.default({
                name,
                city,
                skills,
            });
            wilder
                .save()
                .then((result) => {
                res.json({ success: true, result });
            })
                .catch((err) => {
                res.status(400).json({
                    success: false,
                    result: (0, tools_1.listErrors)(err),
                });
            });
        });
    },
    all: (req, res) => {
        WilderModel_1.default.find()
            .then((result) => {
            res.json({ success: true, result });
        })
            .catch((err) => {
            res.json({ success: false, result: (0, tools_1.listErrors)(err) });
        });
    },
    delete: (req, res) => {
        const { _id } = req.params;
        WilderModel_1.default.deleteOne({ _id })
            .then((result) => {
            if (result.deletedCount === 0) {
                return res.json({
                    success: false,
                    result: "Cet identifiant n'existe pas",
                });
            }
            res.json({
                success: true,
                result,
            });
        })
            .catch((err) => {
            res.json({ success: false, result: (0, tools_1.listErrors)(err) });
        });
    },
    update: (req, res) => {
        const { _id, name, city, skills } = req.body;
        WilderModel_1.default.updateOne({ _id }, { name, city, skills }).then((result) => {
            if (result.matchedCount === 0) {
                return res.json({
                    success: false,
                    result: "Cet identifiant n'existe pas",
                });
            }
            res.json({ success: true, result }).catch((err) => {
                res.json({ success: false, result: (0, tools_1.listErrors)(err) });
            });
        });
    },
    find: (req, res) => {
        const { _id } = req.params;
        WilderModel_1.default.findOne({ _id })
            .then((result) => {
            if (!result) {
                return res.json({ success: false, result: "cet id n'existe pas" });
            }
            res.json({ success: true, result });
        })
            .catch((err) => {
            console.log(err);
        });
    },
};
