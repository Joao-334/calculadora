"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const throwError_1 = __importDefault(require("../helpers/throwError"));
require('dotenv').config();
function authenticate(req, res, next) {
    try {
        const { authorization } = req.headers;
        if (!authorization)
            throw new Error('Token not Provided');
        const [, token] = authorization.split(' ');
        const decoded = (0, jsonwebtoken_1.verify)(token, String(process.env.SECRET));
        const { id } = decoded;
        req.headers.userId = id;
        next();
    }
    catch (error) {
        (0, throwError_1.default)(res, error);
    }
}
exports.authenticate = authenticate;
