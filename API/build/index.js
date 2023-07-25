"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./database/db"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
(0, db_1.default)().then(() => {
    const app = (0, express_1.default)();
    const port = process.env.PORT;
    const corsOptions = {
        origin: '*',
        credentials: true,
        optionSuccessStatus: 200,
    };
    app.use((0, cors_1.default)(corsOptions));
    app.use(express_1.default.json());
    app.use('/', routes_1.default);
    app.listen(port, () => {
        console.log('listening on http://localhost:8080');
    });
}).catch(error => console.log(error));
