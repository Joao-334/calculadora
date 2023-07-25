"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
mongoose_1.default.set('strictQuery', true);
async function databaseConnect() {
    try {
        await mongoose_1.default.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.8lcsrng.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Database connected');
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = databaseConnect;
