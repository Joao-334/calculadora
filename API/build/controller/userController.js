"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const bcryptjs_1 = require("bcryptjs");
const User_1 = require("../model/User");
const objectId_1 = require("../helpers/objectId");
const jsonwebtoken_1 = require("jsonwebtoken");
const throwError_1 = __importDefault(require("../helpers/throwError"));
const calcJuros_1 = require("../helpers/calcJuros");
require('dotenv').config();
class userController {
    static async create(req, res) {
        try {
            const { name, email, password, confirmPassword } = req.body;
            if (name === undefined || email === undefined || password === undefined) {
                throw new Error('Missing name or email or password');
            }
            if (confirmPassword !== password) {
                throw new Error('Confirm password dont match with password');
            }
            const userExists = await User_1.User.findOne({ email: email });
            if (userExists)
                throw new Error('User already exists');
            const hashedPass = await (0, bcryptjs_1.hash)(password, 16);
            const user = {
                _id: (0, objectId_1.mongoObjectId)(),
                name,
                email,
                password: hashedPass
            };
            await User_1.User.create(user);
            const token = (0, jsonwebtoken_1.sign)({ id: user._id }, String(process.env.SECRET), { expiresIn: "1d" });
            return res.status(200).json({ id: user._id, name, token });
        }
        catch (error) {
            (0, throwError_1.default)(res, error);
        }
    }
    static async login(req, res) {
        const { email, password } = req.body;
        const user = await User_1.User.findOne({ email: email });
        if (!user)
            throw new Error('User not found');
        const isValuePassword = await (0, bcryptjs_1.compare)(password, user.password);
        if (!isValuePassword)
            throw new Error('Incorrect password');
        const token = (0, jsonwebtoken_1.sign)({ id: user._id }, String(process.env.SECRET), { expiresIn: "1d" });
        return res.status(200).json({
            user: { id: user._id, name: user.name },
            token
        });
    }
    static async calc(req, res) {
        try {
            const { type, capital, juros } = req.body;
            const indice = req.body.indice;
            const tempo = req.body.tempo;
            const value = (0, calcJuros_1.calcJuros)(type, capital, juros, indice, tempo);
            return res.status(200).json({ value });
        }
        catch (error) {
            (0, throwError_1.default)(res, error);
        }
    }
}
exports.userController = userController;
