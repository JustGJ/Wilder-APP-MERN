"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const express_validator_1 = require("express-validator");
exports.create = [
    // value | msg
    (0, express_validator_1.check)('name', 'Le nom doit avoir au moins 4 caractères').isLength({ min: 4 }),
    (0, express_validator_1.check)('city', 'La ville doit avoir au moins 2 caractères').isLength({ min: 2 }),
    (req, res, next) => {
        const errorsValidation = (0, express_validator_1.validationResult)(req);
        if (!errorsValidation.isEmpty()) {
            let errors = {};
            errorsValidation.errors.map((err) => {
                [(errors = Object.assign(Object.assign({}, errors), { [err.param]: err.msg }))];
            });
            res.json({
                success: false,
                result: errors,
            });
        }
        else {
            next();
        }
    },
];
