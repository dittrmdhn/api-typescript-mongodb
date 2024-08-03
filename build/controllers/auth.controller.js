"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshSession = exports.createSession = exports.registerUser = void 0;
const auth_validation_1 = require("../validations/auth.validation");
const uuid_1 = require("uuid");
const logger_1 = require("../utils/logger");
const hashing_1 = require("../utils/hashing");
const auth_service_1 = require("../services/auth.service");
const jwt_1 = require("../utils/jwt");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body.user_id = (0, uuid_1.v4)();
    const { error, value } = (0, auth_validation_1.createUserValidation)(req.body);
    if (error) {
        logger_1.logger.error("ERR = ", "auth - register", error.details[0].message);
        return res.status(422).send({
            status: false,
            statusCode: 422,
            message: error.details[0].message,
        });
    }
    try {
        value.password = `${(0, hashing_1.hashing)(value.password)}`;
        yield (0, auth_service_1.createUser)(value);
        return res.status(201).json({
            status: true,
            statusCode: 201,
            message: "Success register user",
        });
    }
    catch (error) {
        logger_1.logger.error("ERR = ", "auth - register", error);
        return res.status(422).send({
            status: false,
            statusCode: 422,
            message: error,
        });
    }
});
exports.registerUser = registerUser;
const createSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = (0, auth_validation_1.createSessionValidation)(req.body);
    if (error) {
        logger_1.logger.error("ERR = ", "auth - create session", error.details[0].message);
        return res.status(422).send({
            status: false,
            statusCode: 422,
            message: error.details[0].message,
        });
    }
    try {
        const user = yield (0, auth_service_1.findUserByEmail)(value.email);
        const isValid = (0, hashing_1.checkPassword)(value.password, user.password);
        if (!isValid)
            return res.status(401).json({
                message: "Invalid email or password",
                status: false,
                statusCode: 401,
            });
        const accessToken = (0, jwt_1.signJWT)(Object.assign({}, user), { expiresIn: "10s" });
        const refreshToken = (0, jwt_1.signJWT)(Object.assign({}, user), { expiresIn: "1y" });
        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: "login success",
            data: { accessToken, refreshToken },
        });
    }
    catch (error) {
        logger_1.logger.error("ERR = ", "auth - register", error);
        return res.status(422).send({
            status: false,
            statusCode: 422,
            message: error.message,
        });
    }
});
exports.createSession = createSession;
const refreshSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = (0, auth_validation_1.refreshSessionValidation)(req.body);
    if (error) {
        logger_1.logger.error("ERR = ", "auth - refresh session", error.details[0].message);
        return res.status(422).send({
            status: false,
            statusCode: 422,
            message: error.details[0].message,
        });
    }
    try {
        const { decoded } = (0, jwt_1.verifyJWT)(value.refreshToken);
        const user = yield (0, auth_service_1.findUserByEmail)(decoded._doc.email);
        if (!user)
            return false;
        const accessToken = (0, jwt_1.signJWT)(Object.assign({}, user), { expiresIn: "1d" });
        return res.status(200).send({
            status: true,
            statusCode: 200,
            message: "Refresh token seccess",
            data: { accessToken },
        });
    }
    catch (error) {
        logger_1.logger.error("ERR = ", "auth - refresh token", error);
        return res.status(422).send({
            status: false,
            statusCode: 422,
            message: error.message,
        });
    }
});
exports.refreshSession = refreshSession;
//# sourceMappingURL=auth.controller.js.map