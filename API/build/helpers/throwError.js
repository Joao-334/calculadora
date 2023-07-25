"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function throwError(res, error) {
    if (error.message === 'Missing name or email or password') {
        return res.status(404).json({ message: `${error.message}` });
    }
    else if (error.message === 'User already exists') {
        return res.status(404).json({ message: `${error.message}` });
    }
    else if (error.message === 'Confirm password dont match with password') {
        return res.status(404).json({ message: `${error.message}` });
    }
    else if (error.message === 'Invalid user id') {
        return res.status(404).json({ message: `${error.message}` });
    }
    else if (error.message === 'Token not Provided') {
        return res.status(404).json({ message: `${error.message}` });
    }
}
exports.default = throwError;
